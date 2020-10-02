import React from "react";
import { connect } from "react-redux";
import { changeElemPosition } from "../../redux/resultReducer";
import {
  changeModeStatus,
  updateElement,
} from "../../redux/psoneoptionsReducer";

import PromptPsOneLine from "./psoneline/promptpsoneline";

const ElementsLocationMenu = (state) => {
  return (
    <>
      <PromptPsOneLine {...state} />
    </>
  );
};

const mstp = (state) => {
  return state;
};

export default connect(mstp, {
  changeElemPosition,
  updateElement,
  changeModeStatus,
})(ElementsLocationMenu);
