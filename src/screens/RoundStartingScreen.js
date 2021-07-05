import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { GlobalGameContext } from "../global/globalGameData";

import Countdown from "react-countdown";

export default function RoundStartingScreen() {
  const { roundNumber } = useContext(GlobalGameContext);

  let history = useHistory();

  const SCREEN_WAIT_TIME = 2; // 3 === 3s

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
              history.push("/round");
            }}
            date={Date.now() + SCREEN_WAIT_TIME * 1000}
            renderer={({ seconds }) => {
              return (
                <span>
                  {seconds}s
                </span>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
