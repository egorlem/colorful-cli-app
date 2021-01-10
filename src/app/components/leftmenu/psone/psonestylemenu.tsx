import React from 'react';
import SelectSequences from './psoneoptions/sequences';
import { CustomText } from './psoneoptions/customtext';
import ForegroundColors from './psoneoptions/fgcolor';
import BackgroundColors from './psoneoptions/bgcolor';
import { TextDecorationOption } from './psoneoptions/textdecor';
import { SymbolOptions } from './psoneoptions/symbols';
import { PsOneControllsWrapper } from './styled.psone';

const PsOneStyleMenu = (state: any) => {
  const {
    psOneOptions: { status, currentElement, orignIndex, selectedLine },
  } = state;

  const update: boolean = true; //status === "UDATE_CURRENT";
  const nodecortype: boolean =
    currentElement.type !== 'SPACE' && currentElement.type !== 'FUNCTION';
  return (
    <PsOneControllsWrapper>
      {/* SEQUENCES */}
      <SelectSequences {...state} />
      <SymbolOptions {...state} />
      {currentElement.type === 'CUSTOM_TEXT' && update && <CustomText />}
      {update && nodecortype && <ForegroundColors {...state} />}
      {update && nodecortype && <BackgroundColors {...state} />}
      {update && nodecortype && <TextDecorationOption {...state} />}
    </PsOneControllsWrapper>
  );
};
export default PsOneStyleMenu;
