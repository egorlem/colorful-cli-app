import React, { useEffect } from 'react';
import LeftNavMenu from '../components/leftmenu/leftmenu';
import TerminalWindow from '../components/terminal/termwindow';
import ElementsLocationMenu from '../components/positionmenu/elementsmenu';

const PsOnePromptCustomizstion = () => {
  useEffect(() => {
    document.title = 'Colorful CLI / PS1';
  }, []);

  return (
    <div className="shell-editor">
      <div className="left-area">
        <LeftNavMenu />
      </div>
      <div className="right-area">
        <TerminalWindow />
        <ElementsLocationMenu />
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
