import React from "react";
import LeftNavMenu from "../components/leftmenu/leftmenu";
import TerminalWindow from "../components/terminal/termwindow";
import ForkBanner from "../components/global/githubbanner";

export const GolobalSettingsPage = () => {
  return (
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
  );
};
