import React, { useContext, useEffect, useState } from "react";

import { WindowContext } from "../context/useWindowSize";
import { GlobalGameContext } from "../global/globalGameData";

import DeclarePlayerPutdown from "../components/declarePlayerScreen/DeclarePlayerPutdown";
import BottomContainer from "../components/BottomContainer";

import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export default function DeclarePlayerPlacementScreen() {
  const { windowHeight, windowWidth } = useContext(WindowContext);
  const { gameData, lastRoundWinner, confirmPlayersPutdown } =
    useContext(GlobalGameContext);

  // This contains and and all players that have put down in the round
  const [selectedPlayers, setSelectedPlayers] = useState([lastRoundWinner]);

  let history = useHistory()

  const TOP_TEXT = "Who put down?";
  const BOTTOM_TEXT =
    "Tick the name of each player that placed cards on the table";
  const BUTTON_TEXT = "Confirm";

  const addPlayerSelected = (id) => {
    // This function adds a id to the selected player id array
    setSelectedPlayers([...selectedPlayers, ...[id]]);
  };

  const removePlayerSelected = (id) => {
    // This function removes a player id from the selection array
    if (selectedPlayers.includes(id)) {
      let array = [...selectedPlayers];
      const index = array.indexOf(id);
      if (index > -1) {
        array.splice(index, 1);
      }
      setSelectedPlayers(array);
    }
  };

  const confirmPlayerSelected = async () => {
    // This is the button method that saves which uses have been selected
    const response = await confirmPlayersPutdown(selectedPlayers);
    if(response) {
      history.push("/scoring")
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
          {TOP_TEXT}
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
            {BOTTOM_TEXT}
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
        {gameData.map((player) => {
          if (player.id === lastRoundWinner) {
            return null;
          }
          return (
            <DeclarePlayerPutdown
              player={player}
              addPlayerSelected={addPlayerSelected}
              removePlayerSelected={removePlayerSelected}
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
          onClick={confirmPlayerSelected}
        >
          {BUTTON_TEXT}
          <Icon name="check" />
        </Button>
      </BottomContainer>
    </div>
  );
}
