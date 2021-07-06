import React from "react";

import ColorLuminance from "../../functions/ColorLuminance";

import { MIN_POINTS, MAX_POINTS } from "../../global/gameInfo";

export default function PlayerPointsSegment({ player, playerPoints, setPlayerScore }) {
  const points =
    playerPoints[
      playerPoints
        .map(function (item) {
          return item.id;
        })
        .indexOf(player.id)
    ].points;

  return (
    <div
      style={{
        height: 120,
        width: "100%",
        backgroundColor: "#66BB6A",
        borderRadius: 15,
        marginBottom: 25,
        display: "flex",
        boxShadow: "0px 4px 7px -1px #000000",
        WebkitBoxShadow: "0px 4px 7px -1px #000000",
      }}
    >
      -
      <div
        style={{
          display: "flex",
          flex: 2,
          alignItems: "center",
          padding: 10,
          margin: 10,
          borderLeft: `2px solid ${ColorLuminance("#66BB6A", 0.1)}`,
        }}
      >
        <span style={{ fontSize: 36, fontWeight: 800, color: "white" }}>
          {player.name}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 15,
            backgroundColor: ColorLuminance("#66BB6A", 0.1),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="number"
            style={{
              height: "100%",
              width: "100%",
              fontSize: 52,
              textAlign: "center",
              fontWeight: 700,
              color: "white",
              backgroundColor: "transparent",
              border: "none",
            }}
            min={MIN_POINTS}
            max={MAX_POINTS}
            value={points}
            onChange={(e) => {
              setPlayerScore(player.id, e.target.value)
            }}
          />
        </div>
      </div>
    </div>
  );
}
