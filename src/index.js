import React from "react";
import ReactDOM from "react-dom";

import { MemoryRouter as Router, Switch, Route } from "react-router-dom";

import useWindowContext, { WindowContext } from "./context/useWindowSize";

import useGlobalGameContext, {
  GlobalGameContext,
} from "./global/globalGameData";

import "semantic-ui-css/semantic.min.css";
import "./css/index.css";

import LandingScreen from "./screens/LandingScreen";
import PlayerCreationScreen from "./screens/PlayerCreationScreen";
import RoundStartingScreen from "./screens/RoundStartingScreen";
import RoundScreen from "./screens/RoundScreen";
import DeclareWinnerScreen from "./screens/DeclareWinnerScreen";
import PlayerScoringScreen from "./screens/PlayerScoringScreen";
import DeclarePlayerPlacementScreen from "./screens/DeclarePlayerPlacementScreen";
import EndWinnerScreen from "./screens/EndWinnerScreen";

const Main = () => {
  const [WindowContextValues] = useWindowContext();
  const [GlobalGameValues] = useGlobalGameContext();

  return (
    <GlobalGameContext.Provider value={GlobalGameValues}>
      <WindowContext.Provider value={WindowContextValues}>
        <Router>
          <Switch>
            <Route path="/end">
              <EndWinnerScreen/>
            </Route>
            <Route path="/scoring">
              <PlayerScoringScreen />
            </Route>
            <Route path="/placement">
              <DeclarePlayerPlacementScreen />
            </Route>
            <Route path="/winner">
              <DeclareWinnerScreen />
            </Route>
            <Route path="/round">
              <RoundScreen />
            </Route>
            <Route path="/next">
              <RoundStartingScreen />
            </Route>
            <Route path="/players">
              <PlayerCreationScreen />
            </Route>
            <Route path="/">
              <LandingScreen />
            </Route>
          </Switch>
        </Router>
      </WindowContext.Provider>
    </GlobalGameContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
