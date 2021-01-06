import React from 'react';
import SelectElement from '../psonecontrolls/selectpromptel';
import DropDownMenu from '../../../global/select/dropdown';
import { PsOneItem } from '../styled.psone';

// const {
//   psOneOptions: { psOneSequences, status },
//   setCurrentElement,
//   changeModeStatus,
// } = state as any;

interface ISequncesProps {
  psOneOptions: {
    activeControls: any;
    currentElement: any;
    status?: string;
    psOneSequences: any;
  };
  closeControl: any;
  openControl: any;
  setCurrentElement: any;
  changeModeStatus: any;
}

const SelectSequences: React.FC = (state: any) => {
  // STATE
  const {
    psOneOptions: { activeControls, currentElement, status, psOneSequences },
    closeControl,
    openControl,
    setCurrentElement,
    changeModeStatus,
  } = state as ISequncesProps;
  // OPEN && CLOSED FLAG
  const [elementSubMenu] = activeControls;
  return (
    <PsOneItem flag={elementSubMenu.flag}>
      <div className="option-item-controlls">
        <DropDownMenu
          flag={elementSubMenu.flag}
          selectedItem={
            currentElement.text && currentElement.type === 'SEQUENCES'
              ? currentElement.text
              : 'Select escape sequences'
          }
          accessory={'elementMenu'}
          handler={elementSubMenu.flag ? openControl : closeControl}
        >
          <SelectElement
            status={status}
            psOneSequences={psOneSequences}
            setCurrentElement={setCurrentElement}
            changeModeStatus={changeModeStatus}
          />
        </DropDownMenu>
      </div>
    </PsOneItem>
  );
};
export default React.memo(SelectSequences);
