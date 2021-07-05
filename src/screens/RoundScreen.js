import React, { useContext } from "react";

import { Icon, Button } from "semantic-ui-react";

import { WindowContext } from "../context/useWindowSize";
import { GlobalGameContext } from "../global/globalGameData";

import BottomContainer from "../components/BottomContainer";

import ColorLuminance from "../functions/ColorLuminance";

import { ROUND_RULES } from "../global/gameInfo";
import { useHistory } from "react-router-dom";

export default function RoundScreen() {
  const { windowWidth, windowHeight } = useContext(WindowContext);
  const { gameData } = useContext(GlobalGameContext);

  let history = useHistory();

  const ScoreContainer = ({ width, color, value, valueText }) => {
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
  };

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
        {gameData.map((player) => {
          console.log(player);
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
                  <span style={{ fontSize: 24, padding: 5 }}>
                    {player.name}
                  </span>
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
                  value={player.round}
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
        })}
      </div>
      <BottomContainer size="small" alignCenter={true}>
        <Button
          fluid
          positive
          icon
          size="big"
          labelPosition="left"
          onClick={() => {
            history.push("/winner");
          }}
        >
          Round End
          <Icon name="play" />
        </Button>
      </BottomContainer>
    </div>
  );
}
