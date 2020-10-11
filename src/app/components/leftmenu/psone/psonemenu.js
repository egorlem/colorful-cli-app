import React, { useEffect } from "react";
import { SelectSequences } from "./psoneoptions/sequences";
import { ForegroundColors } from "./psoneoptions/fgcolor";
import { BackgroundColors } from "./psoneoptions/bgcolor";
import { TextDecorationOption } from "./psoneoptions/textdecor";
import { SymbolOptions } from "./psoneoptions/symbols";
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

  const update = status === "UDATE_CURRENT";

  return (
    <div className="psone-container">
      {/* SEQUENCES */}
      <SelectSequences {...state} />
      {true && <SymbolOptions {...state} />}
      {update && <ForegroundColors {...state} />}
      {update && <BackgroundColors {...state} />}
      {update && <TextDecorationOption {...state} />}
      <div className="ps-btn--container">
        {update && <BaseButton onClick={deleteHandler}>Delete</BaseButton>}
        {update && <BaseButton onClick={applyHandler}>Apply</BaseButton>}
      </div>
    </div>
  );
};
