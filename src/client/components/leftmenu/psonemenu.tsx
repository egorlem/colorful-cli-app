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
  const colors = useSelector(
    (state: TAppState) => state.style.psoneelement.colors
  );
  console.log('render menu');

  const dispatch = useDispatch();
  const currentElement = useSelector(
    (state: TAppState) => state.style.psoneelement.currentElement
  );

  const update: boolean = true; //status === "UDATE_CURRENT";
  const nodecortype: boolean =
    currentElement.type !== 'SPACE' && currentElement.type !== 'FUNCTION';

  const fetchColors = () => {
    colors.length === 0 && dispatch(styleOperations.initializeBasicOptions());
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <div className="left-menu">
      <LeftMenuControllsWrapper>
        <Sequences />
        {currentElement.type === 'CUSTOM_TEXT' && update && <CustomText />}
        {nodecortype && (
          <>
            <ForegroundColors />
            <BackgroundColors />
            <TextDecorationOption />
          </>
        )}
        {/*<SymbolOptions {...state} />*/}
      </LeftMenuControllsWrapper>
    </div>
  );
};
export default PsOneLeftMenu;
