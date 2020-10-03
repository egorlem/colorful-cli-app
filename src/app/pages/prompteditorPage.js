import React, { useEffect } from "react";
//
import LeftNavMenu from "../components/leftmenu/leftmenu";
import TerminalWindow from "../components/terminal/termwindow";
import PromptPsOneLine from "../components/positionmenu/psoneline/promptline";
import ForkBanner from "../components/global/githubbanner";
import ElementsLocationMenu from "../components/positionmenu/elementsmenu";

const PsOnePromptCustomizstion = () => {
  useEffect(() => {
    document.title = "Colorful CLI / PS1";
  }, []);

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
              <ElementsLocationMenu />
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
