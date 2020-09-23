import React, { useEffect } from "react";
import { SelectSequences } from "./psoneoptions/sequences";
import { ForegroundColors } from "./psoneoptions/fgcolor";
import { BackgroundColors } from "./psoneoptions/bgcolor";
import { TextDecorationOption } from "./psoneoptions/textdecor";

export const PsOneMenu = (state) => {
  const {
    psOneOptions: { status, currentElement, orignIndex },
    updateSelectedElement,
    deleteSelectedElement,
    changeModeStatus,
  } = state;
  useEffect(() => {
    if (status === "UDATE_CURRENT") {
      updateSelectedElement({ index: orignIndex, element: currentElement });
    }
  }, [currentElement]);
  return (
    <div className="psone-container">
      {/* SEQUENCES */}
      <SelectSequences {...state} />
      {status && <ForegroundColors {...state} />}
      {status && <BackgroundColors {...state} />}
      {status && <TextDecorationOption {...state} />}
      {status === "UDATE_CURRENT" && (
        <div
          onClick={() => {
            deleteSelectedElement({ index: orignIndex });
            changeModeStatus(null);
          }}
        >
          del
        </div>
      )}
      {status === "UDATE_CURRENT" && (
        <div
          onClick={() => {
            changeModeStatus(null);
          }}
        >
          update
        </div>
      )}
      {status === "ADD_NEW" && (
        <div
          onClick={() => {
            changeModeStatus(null);
          }}
        >
          add
        </div>
      )}
    </div>
  );
};
