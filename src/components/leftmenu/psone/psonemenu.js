import React, { useEffect } from "react";
import { SelectSequences } from "./psoneoptions/sequences";
import { ForegroundColors } from "./psoneoptions/fgcolor";
import { BackgroundColors } from "./psoneoptions/bgcolor";
import { TextDecorationOption } from "./psoneoptions/textdecor";

export const PsOneMenu = (state) => {
  const {
    psOneOptions: { status, currentElement, orignIndex },
    result: { resPsOneLine },
    updateSelectedElement,
    deleteSelectedElement,
    changeModeStatus,
    closeAllControls,
    addNewPromptElem,
  } = state;

  const setupNewPromptElemnt = (arr, currentElement) => {
    let index = arr.length;
    return { ...currentElement, id: ++index };
  };

  useEffect(() => {
    if (status === "UDATE_CURRENT") {
      updateSelectedElement({ index: orignIndex, element: currentElement });
    } else if (status === "ADD_NEW") {
      let newElement = setupNewPromptElemnt(resPsOneLine, currentElement);
      addNewPromptElem(newElement);
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
            closeAllControls();
          }}
        >
          add
        </div>
      )}
    </div>
  );
};
