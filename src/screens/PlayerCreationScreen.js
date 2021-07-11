import { useContext } from "react";

import {
  Button,
  Image,
  List,
  Transition,
  Icon,
  Divider,
} from "semantic-ui-react";

import { GlobalGameContext } from "../global/globalGameData";

import { WindowContext } from "../context/useWindowSize";

import { useHistory } from "react-router";

import BottomContainer from "../components/BottomContainer";

import CreatedPlayerContainer from "../components/playerCreationScreen/CreatedPlayerContainer";

export default function PlayerCreationScreen() {
  const { gameData, createPlayer, checkPlayerLength } =
    useContext(GlobalGameContext);

  const { windowWidth, windowHeight } = useContext(WindowContext);

  let history = useHistory();

  const confirmPlayers = async () => {
    // This function checks if the user has the correct number of players
    const res = checkPlayerLength();
    if (res) {
      // Correct number of players
      history.push("/next");
    } else {
      // Need more players
    }
  };

  return (
    <div
      style={{
        padding: 5,
        minHeight: windowHeight,
        maxHeight: windowHeight,
        height: windowHeight,
        width: windowWidth,
        minWidth: windowWidth,
        maxWidth: windowWidth,
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <div
        style={{
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: windowHeight * 0.25,
          height: "100%",
          overflowY: "auto",
        }}
      >
        <Transition.Group
          as={List}
          duration={200}
          animation="fade left"
          verticalAlign="middle"
        >
          {gameData.map((player) => {
            return (
              <List.Item key={player.id}>
                <CreatedPlayerContainer player={player} />
              </List.Item>
            );
          })}
        </Transition.Group>
      </div>
      <BottomContainer size="default" alignCenter={true}>
        <Button
          fluid
          primary
          icon
          size="big"
          labelPosition="left"
          onClick={() => {
            createPlayer();
          }}
        >
          Add New Player
          <Icon name="group" />
        </Button>
        <Button
          fluid
          positive
          icon
          size="big"
          labelPosition="left"
          onClick={confirmPlayers}
        >
          Start Game
          <Icon name="play" />
        </Button>
      </BottomContainer>
    </div>
  );
}
