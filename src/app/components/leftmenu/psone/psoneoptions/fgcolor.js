import React from "react";
import DropDownMenu from "../../../global/select/dropdown.jsx";
import Palate from "../psonecontrolls/palate";
import { PsOneItem } from "../styled.psone";

export const ForegroundColors = (state) => {
  // STATE
  const {
    psOneOptions: {
      activeControls,
      currentElement: { fg },
    },
    closeControl,
    openControl,
    getFgColor,
  } = state;
  // OPEN && CLOSED FLAG
  const [, , fgSubMenu] = activeControls;

  return (
    <PsOneItem flag={fgSubMenu.flag}>
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
          flag={fgSubMenu.flag}
          handler={fgSubMenu.flag ? openControl : closeControl}
          accessory={"fgColorMenu"}
          selectedItem={"Foreground color"}
          // preview={<Preview style={{ color: fg.hexString }}>{"░░░"}</Preview>}
        >
          <Palate state={state} colorHandler={getFgColor} />
        </DropDownMenu>
      </div>
    </PsOneItem>
  );
};
