import React from "react";
import DropDownMenu from "../../../global/select/dropdown.jsx";
import { SymbolList } from "../psonecontrolls/symbollist";
import { PsOneItem } from "../styled.psone";

export const SymbolOptions = (state) => {
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
          accessory={"symbolMenu"}
          selectedItem={
            currentElement.text && currentElement.type === "SYMBOL"
              ? currentElement.text
              : "Select character"
          }
        >
          <SymbolList {...state} />
        </DropDownMenu>
      </div>
    </PsOneItem>
  );
};
