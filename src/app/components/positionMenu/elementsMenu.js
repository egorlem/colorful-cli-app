import React from "react";
import { connect } from "react-redux";
import {
  changeElemPosition,
  moveElementBack,
  moveElementForward,
} from "../../redux/resultreducer";
import {
  changeModeStatus,
  updateElement,
} from "../../redux/psoneoptionsreducer";

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
  moveElementBack,
  moveElementForward,
})(ElementsLocationMenu);
