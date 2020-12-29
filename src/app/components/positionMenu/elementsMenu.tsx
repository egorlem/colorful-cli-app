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
import PromptPsOneLine from './psoneline/promptpsoneline';

const ElementsLocationMenu = (state: any) => {
  return <PromptPsOneLine {...state} />;
};

const mstp = (state: any) => {
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
