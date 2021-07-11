/* eslint-disable import/no-anonymous-default-export */
import { createContext, useReducer, useState } from "react";

import {
  ROUND_STARTING,
  MAX_NAME_LENGTH,
  PLAYER_COLORS,
  STARTING_POINTS,
  MIN_PLAYERS,
} from "./gameInfo";

export const GlobalGameContext = createContext();

const gameDataReducer = (state, action) => {
  let newArray = [...state];
  switch (action.type) {
    case "add_player":
      return [...state.concat([action.payload])];
    case "remove_player":
      let removeIndex = newArray
        .map(function (item) {
          return item.id;
        })
        .indexOf(action.payload);
      newArray.splice(removeIndex, 1);
      return newArray;
    case "change_player_name":
      let changeObjectIndex = newArray
        .map(function (item) {
          return item.id;
        })
        .indexOf(action.payload.id);
      newArray[changeObjectIndex].name = action.payload.name.substring(
        0,
        MAX_NAME_LENGTH
      );
      return newArray;
    case "increaseRounds":
      const playersForRoundIncrease = action.payload.arrayOfPlayers;
      // Foreach of theses players increase there round
      for (let i = 0; i < playersForRoundIncrease.length; i++) {
        const playerId = playersForRoundIncrease[i];
        let playerIndex = newArray
          .map(function (item) {
            return item.id;
          })
          .indexOf(playerId);
        newArray[playerIndex].round = newArray[playerIndex].round + 1;
      }
      return newArray;
    case "increasePoints":
      const playersForPointsIncrease = action.payload.arrayOfPoints;
      // Foreach of theses players increase there round
      for (let i = 0; i < playersForPointsIncrease.length; i++) {
        const player = playersForPointsIncrease[i];
        let playerIndex = newArray
          .map(function (item) {
            return item.id;
          })
          .indexOf(player.id);
        newArray[playerIndex].points =
          newArray[playerIndex].points + player.points;
      }
      return newArray;
    default:
      return state;
  }
};

export default () => {
  // State instances
  const [gameData, gameDataDispatch] = useReducer(gameDataReducer, []);
  const [player_key, setPlayer_key] = useState(1);
  const [colorKey, setColorKey] = useState(0);
  const [roundNumber, setRound] = useState(ROUND_STARTING);
  const [lastRoundWinner, setLastRoundWinner] = useState(null);
  const [winnersArray, setWinnersArray] = useState([]);
  const [roundSnapshots, setRoundSnapshots] = useState([]);

  const createPlayer = () => {
    // This method creates a player with a given name
    gameDataDispatch({ type: "add_player", payload: playerRequiredJSON() });
  };

  const removePlayer = (id) => {
    // This method removes a player from the game data
    gameDataDispatch({ type: "remove_player", payload: id });
  };

  const changePlayerName = (id, name) => {
    // This method changes the name of the given player
    gameDataDispatch({ type: "change_player_name", payload: { id, name } });
  };

  const confirmRoundWinner = async (id) => {
    if (id !== null) {
      // Set the round winner
      setLastRoundWinner(id);

      // Add the winner to the winners array for statistics
      setWinnersArray([...winnersArray, ...[id]]);

      return true;
    } else {
      return false;
    }
  };

  const confirmPlayersPutdown = async (arrayOfPlayers) => {
    // This method increases the round for each player that putdown
    // Increase the rounds for each of the players
    gameDataDispatch({ type: "increaseRounds", payload: { arrayOfPlayers } });
    return true;
  };

  const confirmPlayerPoints = async (arrayOfPoints) => {
    // this method increase the players points

    // Increase player scores
    gameDataDispatch({ type: "increasePoints", payload: { arrayOfPoints } });

    // Update the next round
    setRound(roundNumber + 1);

    // remove last player winner
    setLastRoundWinner(null);

    return true;
  };

  const shouldGameEnd = () => {
    // : function needs to return true or false depending on if the round should start

    // Check if a player is on round 11
    let winner = false;
    for (let i = 0; i < gameData.length; i++) {
      const player = gameData[i];
      if (player.round === 11) {
        console.log(player);
        winner = true;
      }
    }

    // Save the last round information
    setRoundSnapshots([
      ...roundSnapshots,
      ...[
        {
          round: roundNumber,
          data: gameData,
        },
      ],
    ]);

    // Check if the round should end
    if (winner) {
      // Game needs to end as there is a winner
      console.log(roundSnapshots);
      return true;
    } else {
      // Game can continue
      return false;
    }
  };

  const checkPlayerLength = () => {
    // This method checks the number of players
    if (gameData.length >= MIN_PLAYERS) {
      // Less players than what is allowed
      return true;
    } else {
      return false;
    }
  };

  const playerRequiredJSON = () => {
    setPlayer_key(player_key + 1);

    if (colorKey + 1 === PLAYER_COLORS.length) {
      setColorKey(0);
    } else {
      setColorKey(colorKey + 1);
    }

    return {
      id: player_key,
      name: `Player${player_key}`,
      color: PLAYER_COLORS[colorKey],
      points: STARTING_POINTS,
      round: ROUND_STARTING,
    };
  };

  const sortedGameData = () => {
    // This method sorts the gameData,
    // The gameData is sorted by the round then by points
    return gameData.sort(function (a, b) {
      if (a.round !== b.round) {
        // The rounds are not equal so sort by rounds
        if (a.round > b.round) {
          return -1;
        }
        if (a.round < b.round) {
          return 1;
        }
        // a must be equal to b
        return 0;
      } else {
        // Rounds are equal so sort by points
        if (a.points > b.points) {
          return 1;
        }
        if (a.points < b.points) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }
    });
  };

  return [
    {
      gameData,
      createPlayer,
      removePlayer,
      changePlayerName,
      roundNumber,
      confirmRoundWinner,
      lastRoundWinner,
      confirmPlayersPutdown,
      confirmPlayerPoints,
      shouldGameEnd,
      checkPlayerLength,
      sortedGameData,
    },
  ];
};
