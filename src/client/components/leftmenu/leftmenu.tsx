// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import PsOneStyleMenu from './psone/psonestylemenu';
// import { ResultMenu } from './result/resultmenu';
// import { connect } from 'react-redux';
// import {
//   getFgColor,
//   getBgColor,
//   setCurrentElement,
//   resetOptions,
//   openControl,
//   closeControl,
//   setElementStyle,
//   removeElemtStyle,
//   changeModeStatus,
//   closeAllControls,
// } from '../../redux/psoneoptionsreducer';
// import {
//   updateSelectedElement,
//   deleteSelectedElement,
//   addNewPromptElem,
// } from '../../redux/resultreducer';
// import './leftmenu.scss';

// const LeftMenu = (state: any) => {
//   const { pathname } = useLocation();
//   return (
//     <div className="left-menu">
//       {pathname === '/psone' && <PsOneStyleMenu {...state} />}
//       {pathname === '/result' && <ResultMenu />}
//     </div>
//   );
// };

// function mapStateToProps(state: any) {
//   return state;
// }

// export default connect(mapStateToProps, {
//   getFgColor,
//   getBgColor,
//   addNewPromptElem,
//   setCurrentElement,
//   resetOptions,
//   openControl,
//   closeControl,
//   setElementStyle,
//   removeElemtStyle,
//   changeModeStatus,
//   updateSelectedElement,
//   deleteSelectedElement,
//   closeAllControls,
// })(LeftMenu);
