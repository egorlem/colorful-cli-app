import React from "react";
import { useLocation } from "react-router-dom";
import { PsOneMenu } from "./psone/psonemenu";
import { SettingsMenu } from "./settings/settingsmenu";
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
  const { pathname } = useLocation();
  return (
    <div className="left-menu">
      {pathname === "/psone" && <PsOneMenu {...state} />}
      {pathname === "/settings" && <SettingsMenu />}
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
