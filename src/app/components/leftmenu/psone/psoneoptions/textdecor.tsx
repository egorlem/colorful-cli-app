import React from "react";
import TextDecoration from "../psonecontrolls/textdecoration";
import { PsOneItem } from "../styled.psone";

export const TextDecorationOption: React.FC = (state: any) => {
  return (
    <PsOneItem>
      <div className="option-item-controlls">
        <TextDecoration {...state} />
      </div>
    </PsOneItem>
  );
};
