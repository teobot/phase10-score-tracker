import { useContext, useState } from "react";

import ColorLuminance from "../../functions/ColorLuminance";

import { GlobalGameContext } from "../../global/globalGameData";

import { Icon, Input } from "semantic-ui-react";

export default function PlayerContainer({ player }) {
  const { id, name, score, round, position, color } = player;

  const { removePlayer, changePlayerName } = useContext(GlobalGameContext);

  const [editing, setEditing] = useState(false);

  return (
    <div
      style={{
        height: 80,
        width: "100%",
        backgroundColor: color,
        borderRadius: 15,
        marginBottom: 25,
        display: "flex",
        boxShadow: "0px 4px 7px -1px #000000",
        WebkitBoxShadow: "0px 4px 7px -1px #000000",
      }}
      onMouseLeave={() => {
        setEditing(false);
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 2,
          alignItems: "center",
          padding: 10,
          margin: 10,
          borderLeft: `2px solid ${ColorLuminance(color, 0.1)}`,
        }}
        onClick={() => {
          setEditing(true);
        }}
      >
        {editing ? (
          <input
            autoFocus
            onChange={(e) => {
              changePlayerName(id, e.target.value);
            }}
            style={{
              minHeight: 50,
              fontSize: 32,
              fontWeight: 500,
              color: "white",
              width: "100%",
              backgroundColor: ColorLuminance(color, 0.1),
              border: "0px",
            }}
            fluid
            value={name}
          />
        ) : (
          <span style={{ fontSize: 32, fontWeight: 800, color: "white"}}>
            {name}
          </span>
        )}
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
            backgroundColor: ColorLuminance(color, 0.1),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            removePlayer(id);
          }}
        >
          <Icon name="trash alternate" fitted inverted size="big" />
        </div>
      </div>
    </div>
  );
}
