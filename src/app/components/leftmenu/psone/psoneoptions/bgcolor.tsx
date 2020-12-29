import React from 'react';
import DropDownMenu from '../../../global/select/dropdown';
import Palette from '../psonecontrolls/palette';
import { PsOneItem } from '../styled.psone';

export const BackgroundColors: React.FC = (state: any) => {
  // STATE
  const {
    psOneOptions: {
      activeControls,
      currentElement: { bg },
    },
    closeControl,
    openControl,
    getBgColor,
  } = state as any;
  // OPEN && CLOSED FLAG
  const [, bgSubMenu] = activeControls;

  return (
    <PsOneItem flag={bgSubMenu.flag}>
      {/* <ControllWrapper
          open={open}
          onClick={() => {
            open ? OpenClose(false) : OpenClose(true);
          }}
        >
          <LeftDivider open={open}>{"["}</LeftDivider>
          <StaticIcon>{"i"}</StaticIcon>
          <RightDivider open={open}>{"]"}</RightDivider>
        </ControllWrapper> */}
      <div className="option-item-controlls">
        <DropDownMenu
          flag={bgSubMenu.flag}
          handler={bgSubMenu.flag ? openControl : closeControl}
          accessory={'bgColorMenu'}
          selectedItem={'Background colors'}
          // preview={<Preview style={{ color: bg.hexString }}>{"░░░"}</Preview>}
        >
          <Palette state={state} colorHandler={getBgColor} />
        </DropDownMenu>
      </div>
    </PsOneItem>
  );
};
