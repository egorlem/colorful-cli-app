import React from "react";
import LeftNavMenu from "./components/leftmenu/leftmenu";
import RightNavMenu from "./components/rightmenu/rightmenu";
import TerminalWindow from "./components/terminal/termwindow";
import PromptPsOneLine from "./components/lines/promptline";
import { Result } from "./components/result/result";
import styled from "styled-components";

const PromtLine = () => {
  return <div>host name</div>;
};

const ContentContainer = styled.div`
  width: 100%;
`;

function App() {
  return (
    <div className="global-style">
      <div className="shell-container">
        <LeftNavMenu />
        <ContentContainer>
          <TerminalWindow />
          <PromptPsOneLine />
          <Result />
        </ContentContainer>
        <RightNavMenu />
      </div>
    </div>
  );
}
export default App;
