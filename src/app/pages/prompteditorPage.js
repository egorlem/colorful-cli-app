import React from "react";
import styled from "styled-components";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
//
import LeftNavMenu from "../components/leftmenu/leftmenu";
import TerminalWindow from "../components/terminal/termwindow";
import PromptPsOneLine from "../components/lines/promptline";

const ContentContainer = styled.div`
  width: 100%;
`;
const PsOnePromptCustomizstion = () => {
  return (
    <div className="term-aria--background-container">
      <div className="content--limiter">
        <LeftNavMenu />
        <TerminalWindow />
        <DndProvider backend={HTML5Backend}>
          <PromptPsOneLine />
        </DndProvider>
      </div>
    </div>
  );
};

export const PromptEditorPage = () => {
  return (
    <>
      <PsOnePromptCustomizstion />
    </>
  );
};
