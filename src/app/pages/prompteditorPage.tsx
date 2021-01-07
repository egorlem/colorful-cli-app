import React, { useEffect } from 'react';
import LeftMenu from '../components/leftmenu/leftmenu';
import BottomMenu from '../components/bottommenu/bottommenu';
import TerminalWindow from '../components/terminal/termwindow';

const PsOnePromptCustomizstion = () => {
  useEffect(() => {
    document.title = 'Colorful CLI / PS1';
  }, []);

  return (
    <div className="shell-editor">
      <div className="left-area">
        <LeftMenu />
      </div>
      <div className="right-area">
        <TerminalWindow />
        <BottomMenu />
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
