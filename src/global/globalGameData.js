/* eslint-disable import/no-anonymous-default-export */
import { createContext, useEffect, useReducer, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalGameContext = createContext();

// Global Settings
const MAX_NAME_LENGTH = 12;
const MIN_PLAYERS = 2;
const MAX_PLAYERS = 12;
const PLAYER_COLORS = ["#EA2329", "#0970CB", "#F0C526", "#2A9941"];
const ROUND_STARTING = 1;
const STARTING_POINTS = 0;

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

  const confirmRoundWinner = (playerId) => {
    // This function confirms the winner of the round
  }

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

  const returnRoundData = (points, round) => {
    return {
      points,
      round,
    };
  };

  return [
    {
      gameData,
      createPlayer,
      removePlayer,
      changePlayerName,
      roundNumber,
      confirmRoundWinner
    },
  ];
};
