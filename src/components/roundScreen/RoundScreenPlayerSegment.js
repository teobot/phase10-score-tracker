import React from "react";

import ColorLuminance from "../../functions/ColorLuminance";

import { ROUND_RULES } from "../../global/gameInfo";

import ScoreContainer from "./ScoreContainer";

export default function RoundScreenPlayerSegment({ player }) {
  return (
    <div
      style={{
        height: 225,
        width: "100%",
        backgroundColor: player.color,
        margin: "20px 0px 50px 0px",
        borderRadius: 15,
        boxShadow: "0px 0px 20px -3px rgba(0,0,0,0.7)",
        WebkitBoxShadow: "0px 0px 20px -3px rgba(0,0,0,0.7)",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          padding: 5,
        }}
      >
        <div
          style={{
            height: 75,
            display: "flex",
            flex: 2,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            padding: 2,
            margin: 2,
            borderRadius: 15,
            color: "white",
          }}
        >
          <span style={{ fontSize: 24, padding: 5 }}>{player.name}</span>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: ColorLuminance(player.color, 0.1),
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textShadow: "1px 1px black",
            }}
          >
            {ROUND_RULES[player.round - 1]}
          </div>
        </div>
        <ScoreContainer
          width={1}
          color={player.color}
          value={0}
          valueText="position"
        />
        <ScoreContainer
          width={1}
          color={player.color}
          value={player.round}
          valueText="round"
        />
        <ScoreContainer
          width={1}
          color={player.color}
          value={player.points}
          valueText="points"
        />
      </div>
    </div>
  );
}
