import React from 'react';
import DropDownMenu from '../../../global/select/dropdown';
import Palette from '../psonecontrolls/palette';
import { PsOneItem } from '../styled.psone';

const ForegroundColors: React.FC = (state: any) => {
  // STATE
  const {
    psOneOptions: {
      activeControls,
      currentElement: { fg },
      globalcolors,
      status,
    },
    closeControl,
    openControl,
    getFgColor,
  } = state;
  // OPEN && CLOSED FLAG
  const [, , fgSubMenu] = activeControls;

  return (
    <PsOneItem flag={fgSubMenu.flag}>
      <div className="option-item-controlls">
        <DropDownMenu
          flag={fgSubMenu.flag}
          handler={fgSubMenu.flag && status ? openControl : closeControl}
          accessory={'fgColorMenu'}
          selectedItem={'Foreground color'}
          status={!!status}
          // preview={<Preview style={{ color: fg.hexString }}>{"░░░"}</Preview>}
        >
          <Palette
            globalcolors={globalcolors}
            colorHandler={getFgColor}
            flag={fgSubMenu.flag}
          />
        </DropDownMenu>
      </div>
    </PsOneItem>
  );
};
export default React.memo(ForegroundColors);