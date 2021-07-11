import React, { useContext, useEffect, useState } from "react";

import { WindowContext } from "../context/useWindowSize";
import { GlobalGameContext } from "../global/globalGameData";

import PlayerPointsSegment from "../components/playerScoringScreen/PlayerPointsSegment";
import BottomContainer from "../components/BottomContainer";

import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import { MIN_POINTS, MAX_POINTS } from "../global/gameInfo";

export default function PlayerScoringScreen() {
  const { windowHeight, windowWidth } = useContext(WindowContext);
  const { gameData, lastRoundWinner, confirmPlayerPoints } =
    useContext(GlobalGameContext);

  let history = useHistory();

  const [playerPoints, setPlayerPoints] = useState(
    gameData.map((a) => {
      return { id: a.id, points: MIN_POINTS };
    })
  );

  const setPlayerScore = (id, points) => {
    let newArray = [...playerPoints];
    newArray[
      playerPoints
        .map(function (item) {
          return item.id;
        })
        .indexOf(id)
    ].points = parseInt(points);
    setPlayerPoints(newArray);
  };

  const confirmPlayerPointsClick = async () => {
    const res = await confirmPlayerPoints(playerPoints);
    if (res) {
      // go to next page
      history.push("/next");
    }
  };

  return (
    <div
      style={{
        minHeight: windowHeight,
        maxHeight: windowHeight,
        height: windowHeight,
        minWidth: windowWidth,
        maxWidth: windowWidth,
        width: windowWidth,
      }}
    >
      <div>
        <div
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 42,
            padding: "50px 0px 25px 0px",
            fontWeight: 700,
          }}
        >
          Add Player Points
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              textAlign: "center",
              width: "60%",
              fontSize: 16,
              fontWeight: 600,
              color: "white",
            }}
          >
            Click on the inputs and enter each players points for the round
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margin: "25px 0px",
          padding: "20px 25px",
          maxHeight: `calc(100% - 250px)`,
          overflowY: "auto",
        }}
      >
        {gameData.map((player) => {
          if (player.id === lastRoundWinner) {
            return null;
          }
          return (
            <PlayerPointsSegment
              playerPoints={playerPoints}
              player={player}
              setPlayerScore={setPlayerScore}
            />
          );
        })}
      </div>
      <BottomContainer size="small" alignCenter={true}>
        <Button
          fluid
          positive
          icon
          size="big"
          labelPosition="left"
          onClick={confirmPlayerPointsClick}
        >
          Confirm Points
          <Icon name="check" />
        </Button>
      </BottomContainer>
    </div>
  );
}
