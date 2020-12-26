import React from 'react';
import { connect } from 'react-redux';
import {
  changeElemPosition,
  moveElementBack,
  moveElementForward,
  addNewLine,
  deleteCurrentLine,
} from '../../redux/resultreducer';
import {
  changeModeStatus,
  updateElement,
  selectPsOneLine,
} from '../../redux/psoneoptionsreducer';
import PromptPsOneLine from './psoneline/promptpsoneline.tsx';

const ElementsLocationMenu = (state) => {
  return <PromptPsOneLine {...state} />;
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
  selectPsOneLine,
  addNewLine,
  deleteCurrentLine,
})(ElementsLocationMenu);
