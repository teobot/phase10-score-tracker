import React, { useContext } from "react";

import { WindowContext } from "../context/useWindowSize";
import { GlobalGameContext } from "../global/globalGameData";

import RoundScreenPlayerSegment from "../components/roundScreen/RoundScreenPlayerSegment";
import BottomContainer from "../components/BottomContainer";

import { Button, Icon } from "semantic-ui-react";

export default function EndWinnerScreen() {
  const { windowWidth, windowHeight } = useContext(WindowContext);
  const { gameData } = useContext(GlobalGameContext);
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
            <RoundScreenPlayerSegment player={player} position={index + 1} />
          );
        })}
      </div>
      <BottomContainer size="small" alignCenter={true}>
        <Button fluid positive icon size="big" labelPosition="left">
          Round End
          <Icon name="play" />
        </Button>
      </BottomContainer>
    </div>
  );
}
