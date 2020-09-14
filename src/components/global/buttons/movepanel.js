import React from "react";

const MovePanel = ({ name, prev, reset, next }) => {
  return (
    <div className="color-contrellers__control-buttons">
      <span id={name} onClick={prev} className="color-mode-nandler">
        {`[ <|| ]`}
      </span>
      <span id={name} onClick={reset} className="color-mode-nandler">
        {`[ reset ]`}
      </span>
      <span id={name} onClick={next} className="color-mode-nandler">
        {`[ ||> ]`}
      </span>
    </div>
  );
};

export default MovePanel;
