import React from "react";
import TextDecoration from "../psonecontrolls/textdecoration";

export const TextDecorationOption = (state) => {
  return (
    <div className="option-item">
      <div className="option-item-header">
        <div className="option-item__title">Text decorations</div>
      </div>
      <div className="option-item-controlls">
        <TextDecoration {...state} />
      </div>
    </div>
  );
};
