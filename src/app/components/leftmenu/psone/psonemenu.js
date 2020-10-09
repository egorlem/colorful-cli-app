import React, { useEffect } from "react";
import { SelectSequences } from "./psoneoptions/sequences";
import { ForegroundColors } from "./psoneoptions/fgcolor";
import { BackgroundColors } from "./psoneoptions/bgcolor";
import { TextDecorationOption } from "./psoneoptions/textdecor";
import { BaseButton } from "../../global/buttons/basebnt";

export const PsOneMenu = (state) => {
  const {
    psOneOptions: { status, currentElement, orignIndex, selectedLine },
    result: { resPsOneLine },
    updateSelectedElement,
    deleteSelectedElement,
    changeModeStatus,
    closeAllControls,
    addNewPromptElem,
    resetOptions,
  } = state;

  const setupNewPromptElemnt = (arr, currentElement, lineindex) => {
    let index = arr[lineindex].length;
    return { ...currentElement, id: ++index };
  };
  // если и нажать по томуже элементу стейт не меняется
  useEffect(() => {
    if (status === "UDATE_CURRENT") {
      updateSelectedElement({
        index: orignIndex,
        element: currentElement,
        lineIndex: selectedLine,
      });
    } else if (status === "ADD_NEW") {
      let newElement = setupNewPromptElemnt(
        resPsOneLine,
        currentElement,
        selectedLine
      );
      addNewPromptElem({ lineIndex: selectedLine, element: newElement });
    }
  }, [currentElement, status]);

  const applyHandler = () => {
    changeModeStatus(null);
    closeAllControls();
    resetOptions();
  };

  const deleteHandler = () => {
    deleteSelectedElement({
      index: orignIndex,
      lineIndex: selectedLine,
    });
    changeModeStatus(null);
    resetOptions();
  };

  return (
    <div className="psone-container">
      {/* SEQUENCES */}
      <SelectSequences {...state} />
      {<ForegroundColors {...state} />}
      {<BackgroundColors {...state} />}
      {<TextDecorationOption {...state} />}
      <div className="ps-btn--container">
        {status === "UDATE_CURRENT" && (
          <BaseButton onClick={deleteHandler}>Delete</BaseButton>
        )}
        {status === "UDATE_CURRENT" && (
          <BaseButton onClick={applyHandler}>Apply</BaseButton>
        )}
      </div>
    </div>
  );
};
