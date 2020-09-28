import React from "react";
import SelectElement from "../psonecontrolls/selectpromptel";
import DropDownMenu from "../../../global/select/dropdown.jsx";

export const SelectSequences = (state) => {
  // STATE
  const {
    psOneOptions: { activeControls, currentElement, status },
    closeControl,
    openControl,
  } = state;
  // OPEN && CLOSED FLAG
  const [elementSubMenu] = activeControls;
  return (
    <div className="option-item">
      <div className="option-item-controlls">
        <DropDownMenu
          flag={elementSubMenu.flag}
          selectedItem={
            currentElement.text
              ? currentElement.text
              : "Select escape sequences"
          }
          accessory={"elementMenu"}
          handler={elementSubMenu.flag ? openControl : closeControl}
        >
          <SelectElement {...state} />
        </DropDownMenu>
      </div>
    </div>
  );
};
