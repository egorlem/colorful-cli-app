import React from "react";
import styled from "styled-components";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
//
import LeftNavMenu from "../components/leftmenu/leftmenu";
import TerminalWindow from "../components/terminal/termwindow";
import PromptPsOneLine from "../components/lines/promptline";

const PsOnePromptCustomizstion = () => {
  return (
    <div className="term-aria--background-container">
      <div className="content--limiter">
        <div className="term-aria">
          <div className="term-aria__options">
            <LeftNavMenu />
          </div>
          <div className="term-aria__window">
            <TerminalWindow />
            <DndProvider backend={HTML5Backend}>
              <PromptPsOneLine />
            </DndProvider>
          </div>
        </div>
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
