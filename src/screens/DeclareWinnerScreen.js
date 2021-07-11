import React, { useContext, useState } from "react";

import { WindowContext } from "../context/useWindowSize";
import { GlobalGameContext } from "../global/globalGameData";

import DeclareWinnerSegment from "../components/declareWinnerScreen/DeclareWinnerSegment";
import BottomContainer from "../components/BottomContainer";

import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export default function DeclareWinnerScreen() {
  const { windowHeight, windowWidth } = useContext(WindowContext);
  const { sortedGameData, confirmRoundWinner } = useContext(GlobalGameContext);
  const [winnerSelected, setWinnerSelected] = useState(null);

  let history = useHistory();

  const changeWinnerSelected = (playerId) => {
    // This function changes the confirmed winner of the game
    setWinnerSelected(playerId);
  };

  const confirmWinner = async () => {
    const confirmed = await confirmRoundWinner(winnerSelected);
    if (confirmed) {
      history.push("/placement");
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
            fontSize: 50,
            padding: "50px 0px 25px 0px",
            fontWeight: 700,
          }}
        >
          Who won?
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
            declare a winner by clicking the star by the winners name
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margin: "25px 0px 100px",
          padding: "20px 25px",
          maxHeight: `calc(100% - 150px)`,
          overflowY: "auto",
        }}
      >
        {sortedGameData().map((player) => {
          return (
            <DeclareWinnerSegment
              changeWinnerSelected={changeWinnerSelected}
              winner={winnerSelected}
              player={player}
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
          onClick={confirmWinner}
        >
          Confirm Winner
          <Icon name="check" />
        </Button>
      </BottomContainer>
    </div>
  );
}
