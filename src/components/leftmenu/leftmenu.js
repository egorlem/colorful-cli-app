import React, { useState } from "react";
import { PsOneOptions } from "./psoneeloptions";
import { connect } from "react-redux";
import { getFgColor, getBgColor } from "../../redux/psoneoptionsReducer";
import { addNewPromptElem, setCurrentElement } from "../../redux/promptReducer";
import "./_psoneoptions.scss";
import "./leftmenu.scss";

const LeftNavMenu = ({
  state,
  getFgColor,
  getBgColor,
  addNewPromptElem,
  setCurrentElement,
}) => {
  const [leftMenu, isLeftMenuOpen] = useState(true);
  return (
    <div className="left-menu--relative">
      <div className="left-menu-container">
        <span
          onClick={() => {
            leftMenu ? isLeftMenuOpen(false) : isLeftMenuOpen(true);
          }}
          className="left-menu-psone-btn"
        >
          [PS1]
        </span>
        {leftMenu && (
          <PsOneOptions
            state={state}
            getFgColor={getFgColor}
            getBgColor={getBgColor}
            addNewPromptElem={addNewPromptElem}
            setCurrentElement={setCurrentElement}
          />
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { state: { init: state.init, promptline: state.promptline } };
}

export default connect(mapStateToProps, {
  getFgColor,
  getBgColor,
  addNewPromptElem,
  setCurrentElement,
})(LeftNavMenu);
