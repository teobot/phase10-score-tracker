import React, { useContext } from "react";

import { Icon, Button } from "semantic-ui-react";

import { WindowContext } from "../context/useWindowSize";
import { GlobalGameContext } from "../global/globalGameData";

import BottomContainer from "../components/BottomContainer";
import RoundScreenPlayerSegment from "../components/roundScreen/RoundScreenPlayerSegment";

import { useHistory } from "react-router-dom";

export default function RoundScreen() {
  const { windowWidth, windowHeight } = useContext(WindowContext);
  const { gameData } = useContext(GlobalGameContext);

  let history = useHistory();

  return (
    <div
      style={{
        padding: 5,
        maxHeight: windowHeight,
        height: windowHeight,
        width: windowWidth,
        maxWidth: windowWidth,
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <div
        style={{
          marginBottom: 100,
          height: "100% !important",
          overflowY: "auto",
          padding: 5,
        }}
      >
        {gameData.map((player, index) => {
          return (
            <RoundScreenPlayerSegment position={index + 1} player={player} />
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
          onClick={() => {
            history.push("/winner");
          }}
        >
          Round End
          <Icon name="play" />
        </Button>
      </BottomContainer>
    </div>
  );
}
