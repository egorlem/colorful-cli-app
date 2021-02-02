import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeftMenuControllsWrapper } from './leftmenu.styled';
import Sequences from './psone/sequences';
import BackgroundColors from './psone/bgcolor';
import ForegroundColors from './psone/fgcolor';
import { TextDecorationOption } from './psone/textdecoration';
import { CustomText } from './psone/customtext';
import { TAppState } from '../../state/store';
import { styleOperations } from '../../state/redux/style';

const PsOneLeftMenu = () => {
  console.log('render menu')
  const dispatch = useDispatch();
  const currentElement = useSelector(
    (state: TAppState) => state.style.psoneelement.currentElement
  );

  const update: boolean = true; //status === "UDATE_CURRENT";
  const nodecortype: boolean =
    currentElement.type !== 'SPACE' && currentElement.type !== 'FUNCTION';

  useEffect(() => {
    dispatch(styleOperations.initializeBasicOptions());
  },[]);

  return (
    <div className="left-menu">
      <LeftMenuControllsWrapper>
        <Sequences />
        {currentElement.type === 'CUSTOM_TEXT' && update && <CustomText />}
        {nodecortype && <ForegroundColors />}
        {nodecortype && <BackgroundColors />}
        {nodecortype && <TextDecorationOption />}
        {/*<SymbolOptions {...state} />*/}
      </LeftMenuControllsWrapper>
    </div>
  );
};
export default PsOneLeftMenu;
