import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { GlobalGameContext } from "../global/globalGameData";

import Countdown from "react-countdown";

import { SCREEN_WAIT_TIME } from "../global/gameInfo";

export default function RoundStartingScreen() {
  const { roundNumber, shouldGameEnd } = useContext(GlobalGameContext);

  let history = useHistory();

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: 72,
          textAlign: "center",
          fontWeight: 800,
          color: "white",
        }}
      >
        <div>{roundNumber}</div>
        <div style={{ padding: 30 }} />
        <div>Round</div>
        <div style={{ fontSize: 12, paddingTop: 30 }}>
          starting in{" "}
          <Countdown
            onComplete={() => {
              if (shouldGameEnd()) {
                // Game should end as someone has won
                history.push("/end");
              } else {
                // Round should start as normal
                history.push("/round");
              }
            }}
            date={Date.now() + SCREEN_WAIT_TIME * 1000}
            renderer={({ seconds }) => {
              return <span>{seconds}s</span>;
            }}
          />
        </div>
      </div>
    </div>
  );
}
