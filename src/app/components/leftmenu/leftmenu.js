import React from "react";
import { PsOneMenu } from "./psone/psonemenu";
import { connect } from "react-redux";
import {
  getFgColor,
  getBgColor,
  changeSelection,
  setCurrentElement,
  resetOptions,
  openControl,
  closeControl,
  setElementStyle,
  removeElemtStyle,
  changeModeStatus,
  closeAllControls,
} from "../../redux/psOneOptionsReducer";
import {
  updateSelectedElement,
  deleteSelectedElement,
  addNewPromptElem,
} from "../../redux/resultReducer";
import "./_psoneoptions.scss";
import "./leftmenu.scss";

const LeftNavMenu = (state) => {
  return (
    <div className="left-menu">
      <PsOneMenu {...state} />
    </div>
  );
};

function mapStateToProps(state) {
  return state;
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
  setElementStyle,
  removeElemtStyle,
  changeModeStatus,
  updateSelectedElement,
  deleteSelectedElement,
  closeAllControls,
})(LeftNavMenu);
