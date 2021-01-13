import React from 'react';
import DropDownMenu from '../../../global/select/dropdown';
import { SymbolList } from '../psoneoptions/symbollist';
import { PsOneItem } from '../../styled.psone';

export const SymbolOptions: React.FC = (state: any) => {
  const {
    psOneOptions: { activeControls, currentElement },
    closeControl,
    openControl,
  } = state;
  const [, , , symbolSubMenu] = activeControls;
  return (
    <PsOneItem flag={symbolSubMenu.flag}>
      <div>
        <DropDownMenu
          flag={symbolSubMenu.flag}
          handler={symbolSubMenu.flag ? openControl : closeControl}
          accessory={'symbolMenu'}
          selectedItem={
            currentElement.text && currentElement.type === 'SYMBOL'
              ? currentElement.text
              : 'Select character'
          }
        >
          <SymbolList {...state} />
        </DropDownMenu>
      </div>
    </PsOneItem>
  );
};
