import React from "react";

import ColorLuminance from "../../functions/ColorLuminance";

import { ROUND_RULES } from "../../global/gameInfo";

import ScoreContainer from "./ScoreContainer";

export default function RoundScreenPlayerSegment({ position, player }) {
  const DetailContainer = ({ text, value }) => {
    return (
      <div
        style={{
          textAlign: "center",
          lineHeight: 1,
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: "bolder" }}>{value}</div>
        <div style={{ fontSize: 16, fontWeight: 600 }}>{text}</div>
      </div>
    );
  };

  return (
    <div
      style={{
        height: 200,
        width: "100%",
        backgroundColor: player.color,
        margin: "20px 0px 25px 0px",
        borderRadius: 15,
        boxShadow: "0px 0px 20px -3px rgba(0,0,0,0.7)",
        WebkitBoxShadow: "0px 0px 20px -3px rgba(0,0,0,0.7)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flex: 5, flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flex: 5,
            borderRadius: "15px 0px 15px 0px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: ColorLuminance(player.color, 0.1),
          }}
        >
          <div style={{ fontSize: 64, color: "white", fontWeight: "bold" }}>
            {position}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 7,
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <div style={{ lineHeight: 1 }}>
            <div
              style={{
                fontSize: 48,
                fontWeight: "bold",
              }}
            >
              {player.name}
            </div>
            <div
              style={{
                fontSize: 18,
                padding: "5px 10px 5px 10px",
                backgroundColor: ColorLuminance(player.color, 0.1),
                borderRadius: 5,
              }}
            >
              {ROUND_RULES[player.round]}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 6,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <DetailContainer value={player.round} text="round" />
        <DetailContainer value={player.points} text="points" />
      </div>
    </div>
  );
}
