import React from "react";
import styled from "styled-components";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TopNavigationMenu from "./components/topmenu/topnavmenu";
import LeftNavMenu from "./components/leftmenu/leftmenu";
import TerminalWindow from "./components/terminal/termwindow";
import PromptPsOneLine from "./components/lines/promptline";
import Result from "./components/result/result";

const ContentContainer = styled.div`
  width: 100%;
`;

const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PsOnePromptCustomizstion = () => {
  return (
    <>
      <LeftNavMenu />
      <ContentContainer>
        <TerminalWindow />
        <DndProvider backend={HTML5Backend}>
          <PromptPsOneLine />
        </DndProvider>
      </ContentContainer>
    </>
  );
};
const ShowResult = () => {
  return (
    <>
      <Result />
    </>
  );
};

function App() {
  return (
    <div className="global-style">
      <TopNavigationMenu />
      <div className="shell-container">
        <Switch>
          <Route exact path="/">
            <PsOnePromptCustomizstion />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/result">
            <ShowResult />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default App;
