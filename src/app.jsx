import React from "react";
import LeftNavMenu from "./components/leftmenu/leftmenu";
import TerminalWindow from "./components/terminal/termwindow";
import PromptPsOneLine from "./components/lines/promptline";
import Result from "./components/result/result";
import styled from "styled-components";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopNavigationMenu from "./components/topmenu/topnavmenu";

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

const Home = () => {
  return <div>home</div>;
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
        <Route path="*">
          <Home />
        </Route>
      </div>
    </div>
  );
}
export default App;
