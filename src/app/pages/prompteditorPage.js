import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
//
import LeftNavMenu from "../components/leftmenu/leftmenu";
import TerminalWindow from "../components/terminal/termwindow";
import PromptPsOneLine from "../components/lines/promptline";
import ForkBanner from "../components/global/githubbanner";

const PsOnePromptCustomizstion = () => {
  return (
    <>
      <div className="term-aria--primary-background-container">
        <div className="content--limiter">
          <ForkBanner />
          <div className="term-aria">
            <div className="term-aria__options">
              <LeftNavMenu />
            </div>
            <div className="term-aria__window">
              <TerminalWindow />
            </div>
          </div>
        </div>
      </div>
      <div className="term-aria--secondary-background-container">
        <div className="content--limiter">
          <div className="term-aria">
            <div className="term-aria__options"></div>
            <div className="term-aria__window">
              <DndProvider backend={HTML5Backend}>
                <PromptPsOneLine />
              </DndProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const PromptEditorPage = () => {
  return (
    <>
      <PsOnePromptCustomizstion />
    </>
  );
};
