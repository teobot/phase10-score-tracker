import React, { useState } from "react";

import ColorLuminance from "../../functions/ColorLuminance";

import { Icon } from "semantic-ui-react";

import { useSpring, animated } from "react-spring";

export default function DeclarePlayerPutdown({ player, addPlayerSelected, removePlayerSelected }) {
  const [selected, setSelected] = useState(false);

  const SELECTED_COLOR = "#66BB6A";
  const DEFAULT_COLOR = "#EA2329";

  const SELECTED_ICON = "check";
  const DEFAULT_ICON = "close";

  const playerPutdown = () => {
    if (!selected) {
      addPlayerSelected(player.id);
    } else {
      removePlayerSelected(player.id)
    }
    setSelected(!selected);
  };

  return (
    <animated.div
      style={{
        height: 80,
        width: "100%",
        backgroundColor: selected ? SELECTED_COLOR : DEFAULT_COLOR,
        borderRadius: 15,
        marginBottom: 25,
        display: "flex",
        boxShadow: "0px 4px 7px -1px #000000",
        WebkitBoxShadow: "0px 4px 7px -1px #000000",
        transition: "0.5s",
      }}
      onClick={playerPutdown}
    >
      <div
        style={{
          display: "flex",
          flex: 2,
          alignItems: "center",
          padding: 10,
          margin: 10,
          borderLeft: `2px solid ${ColorLuminance(
            selected ? SELECTED_COLOR : DEFAULT_COLOR,
            0.1
          )}`,
          transition: "0.5s",
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
            backgroundColor: ColorLuminance(
              selected ? SELECTED_COLOR : DEFAULT_COLOR,
              0.1
            ),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "0.5s",
          }}
        >
          <Icon
            name={selected ? SELECTED_ICON : DEFAULT_ICON}
            fitted
            inverted
            size="big"
          />
        </div>
      </div>
    </animated.div>
  );
}
