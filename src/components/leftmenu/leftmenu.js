import React, { useState } from "react";
import { PsOneOptions } from "./psoneeloptions";
import { connect } from "react-redux";
import { getFgColor, getBgColor } from "../../redux/psoneoptionsReducer";
import { addNewPromptElem } from "../../redux/promptReducer";
import "./_psoneoptions.scss";
import "./leftmenu.scss";

const LeftNavMenu = (props) => {
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
        {leftMenu && <PsOneOptions state={props} />}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { state: state.init, linelength: state.promptline.items.length };
}

export default connect(mapStateToProps, {
  getFgColor,
  getBgColor,
  addNewPromptElem,
})(LeftNavMenu);
