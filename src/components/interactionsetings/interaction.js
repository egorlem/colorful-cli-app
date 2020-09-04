import React, { useState } from "react";
import { PsOneOptions } from "./setpsone";
import { connect } from "react-redux";
import { getFgColor, getBgColor } from "../../redux/initReducer";
import "./_psoneoptions.scss";
import "./leftmenu.scss";

const InteractionLayOut = (props) => {
  const [leftMenu, isLeftMenuOpen] = useState(false);
  return (
    <>
      <div className="left-menu-container">
        <span
          onClick={() => {
            leftMenu ? isLeftMenuOpen(false) : isLeftMenuOpen(true);
          }}
          class="left-menu-psone-btn"
        >
          [PS1]
        </span>
        {leftMenu && <PsOneOptions state={props} />}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { state: state.init };
}

export default connect(mapStateToProps, { getFgColor, getBgColor })(
  InteractionLayOut
);
