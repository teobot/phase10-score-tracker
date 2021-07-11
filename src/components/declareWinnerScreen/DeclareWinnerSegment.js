import React from "react";

import ColorLuminance from "../../functions/ColorLuminance";

import { Icon } from "semantic-ui-react";

export default function DeclareWinnerSegment({
  player,
  changeWinnerSelected,
  winner,
}) {
  return (
    <div
      style={{
        height: 80,
        width: "100%",
        backgroundColor: "#66BB6A",
        borderRadius: 15,
        marginBottom: 25,
        display: "flex",
        boxShadow: "0px 4px 7px -1px #000000",
        WebkitBoxShadow: "0px 4px 7px -1px #000000",
      }}
      onClick={() => {
        changeWinnerSelected(player.id);
      }}
    >
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
        <span style={{ fontSize: 32, fontWeight: 800, color: "white" }}>
          {player.name}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
        }}
      >
        <div
          style={{
            height: 60,
            width: 60,
            borderRadius: 15,
            backgroundColor: ColorLuminance("#66BB6A", 0.1),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name="star"
            fitted
            inverted
            size="big"
            color={winner === player.id ? "yellow" : "white"}
          />
        </div>
      </div>
    </div>
  );
}
