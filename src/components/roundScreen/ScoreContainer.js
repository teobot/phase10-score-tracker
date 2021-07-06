import React, { useContext } from "react";

import ColorLuminance from "../../functions/ColorLuminance";

export default function ScoreContainer({ color, value, valueText, width }) {

  return (
    <div
      style={{
        backgroundColor: ColorLuminance(color, 0.1),
        height: 75,
        display: "flex",
        flex: width,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 2,
        margin: 2,
        borderRadius: 15,
        color: "white",
        textShadow: "1px 1px black",
      }}
    >
      <span style={{ fontSize: 52, fontWeight: 800, padding: 10 }}>
        {value}
      </span>
      <span style={{ fontSize: 14 }}>{valueText}</span>
    </div>
  );
}
