import React, { useEffect } from 'react';
import Result from '../components/result/result';
import LeftNavMenu from '../components/leftmenu/leftmenu';
export const ResultPage = () => {
  useEffect(() => {
    document.title = 'Colorful CLI / Result';
  }, []);

  return (
    <div className="shell-editor">
      <div className="left-area">
        <LeftNavMenu />
      </div>
      <div className="right-area">
        <Result />
      </div>
    </div>
  );
};
