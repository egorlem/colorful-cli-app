import React, { useState } from "react";
import { PsOneOptions } from "./psoneeloptions";
import { connect } from "react-redux";
import {
  getFgColor,
  getBgColor,
  changeSelection,
  setCurrentElement,
  resetOptions,
  openControl,
  closeControl,
} from "../../redux/psOneOptionsReducer";
import { addNewPromptElem } from "../../redux/resultReducer";
import "./_psoneoptions.scss";
import "./leftmenu.scss";

const LeftNavMenu = ({
  state,
  getFgColor,
  getBgColor,
  addNewPromptElem,
  setCurrentElement,
  changeSelection,
  setCurrentElementColor,
  resetOptions,
  openControl,
  closeControl,
}) => {
  return (
    <div className="left-menu">
      <PsOneOptions
        state={state}
        getFgColor={getFgColor}
        getBgColor={getBgColor}
        addNewPromptElem={addNewPromptElem}
        setCurrentElement={setCurrentElement}
        changeSelection={changeSelection}
        setCurrentElementColor={setCurrentElementColor}
        resetOptions={resetOptions}
        openControl={openControl}
        closeControl={closeControl}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    state: {
      sequences: state.psOneOptions.psOneSequences,
      currentElement: state.psOneOptions.currentElement,
      fgcolor: state.psOneOptions.fgcolor,
      bgcolor: state.psOneOptions.bgcolor,
      globalcolors: state.psOneOptions.globalcolors,
      isElSelected: state.psOneOptions.isElementSelected,
      id: state.result.resPsOneLine.length,
      controls: state.psOneOptions.activeControls,
    },
  };
}

export default connect(mapStateToProps, {
  getFgColor,
  getBgColor,
  addNewPromptElem,
  setCurrentElement,
  changeSelection,
  resetOptions,
  openControl,
  closeControl,
})(LeftNavMenu);
