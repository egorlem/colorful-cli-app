import React from "react";
import SelectElement from "../psonecontrolls/selectpromptel";
import DropDownMenu from "../../../global/select/dropdown.jsx";
import { PsOneItem } from "../styled.psone";

export const SelectSequences = (state) => {
  // STATE
  const {
    psOneOptions: { activeControls, currentElement },
    closeControl,
    openControl,
  } = state;
  // OPEN && CLOSED FLAG
  const [elementSubMenu] = activeControls;
  return (
    <PsOneItem flag={elementSubMenu.flag}>
      <div className="option-item-controlls">
        <DropDownMenu
          flag={elementSubMenu.flag}
          selectedItem={
            currentElement.text && currentElement.type === "SEQUENCES"
              ? currentElement.text
              : "Select escape sequences"
          }
          accessory={"elementMenu"}
          handler={elementSubMenu.flag ? openControl : closeControl}
        >
          <SelectElement {...state} />
        </DropDownMenu>
      </div>
    </PsOneItem>
  );
};
