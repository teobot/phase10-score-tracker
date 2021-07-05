import { useContext } from "react";

import { WindowContext } from "../context/useWindowSize";

import { Button, Divider, Header, Icon, Image } from "semantic-ui-react";

import phase10Image from "../img/phase10-square.png";

// Import custom components
import SimpleTextContainer from "../components/landingScreen/SimpleTextContainer";

import { useHistory } from "react-router";

function App() {
  const { windowWidth, windowHeight } = useContext(WindowContext);

  let history = useHistory()

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
          display: "flex",
          flex: 1,
          padding: 5,
        }}
      >
        <Image src={phase10Image} fluid />
      </div>
      <div
        className="App"
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header size="medium" inverted style={{ padding: 0, margin: 0 }}>
            <Icon name="question circle outline" />
            <Header.Content>How it works?</Header.Content>
          </Header>
        </div>
        <div
          style={{
            display: "flex",
            flex: 4,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0px 35px",
          }}
        >
          <SimpleTextContainer
            position={1}
            color="#0970CB"
            text="Add players."
          />
          <SimpleTextContainer
            position={2}
            color="#F0C323"
            text="Play rounds."
          />
          <SimpleTextContainer
            position={3}
            color="#EA2328"
            text="Add scores."
          />
        </div>
        <div
          style={{
            padding: 20,
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Divider />
          <Button fluid positive icon size="big" labelPosition="left" onClick={() => {
            history.push("/players")
          }}>
            Lets Go
            <Icon name="play" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
