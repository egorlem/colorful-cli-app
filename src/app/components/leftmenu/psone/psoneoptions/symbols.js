import React from "react";
import DropDownMenu from "../../../global/select/dropdown.jsx";
import { SymbolList } from "../psonecontrolls/symbollist";

export const SymbolOptions = (state) => {
  const {
    psOneOptions: { activeControls },
    closeControl,
    openControl,
  } = state;
  const [, , , symbolSubMenu] = activeControls;
  return (
    <DropDownMenu
      flag={symbolSubMenu.flag}
      handler={symbolSubMenu.flag ? openControl : closeControl}
      accessory={"symbolMenu"}
      selectedItem={"sybmbolMenu"}
    >
      <SymbolList {...state} />
    </DropDownMenu>
  );
};
