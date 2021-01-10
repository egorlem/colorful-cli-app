import React from 'react';
import { connect } from 'react-redux';
import {
  //changeElemPosition,
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
import PsOnePositionMenu from './psone/psonepositionmenu';

const BottomMenu = (state: any) => {
  return <PsOnePositionMenu {...state} />;
};

const mstp = (state: any) => {
  return state;
};

export default connect(mstp, {
  //  changeElemPosition,
  updateElement,
  changeModeStatus,
  moveElementBack,
  moveElementForward,
  selectPsOneLine,
  addNewLine,
  deleteCurrentLine,
})(BottomMenu);
