import React, { useEffect } from 'react';
import { SelectSequences } from './psoneoptions/sequences';
import { ForegroundColors } from './psoneoptions/fgcolor';
import { BackgroundColors } from './psoneoptions/bgcolor';
import { TextDecorationOption } from './psoneoptions/textdecor';
import { SymbolOptions } from './psoneoptions/symbols';
import { PsOneDeleteBtn, PsOneApplyBtn } from '../../global/buttons/basebnt';
import { PsOneControllsWrapper, PsOneButtonWrapper } from './styled.psone';

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
    if (status === 'UDATE_CURRENT') {
      updateSelectedElement({
        index: orignIndex,
        element: currentElement,
        lineIndex: selectedLine,
      });
    }
  }, [currentElement, status]);

  useEffect(() => {
    if (status === 'ADD_NEW') {
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

  const update = true; //status === "UDATE_CURRENT";
  return (
    <PsOneControllsWrapper>
      {/* SEQUENCES */}
      <SelectSequences {...state} />
      <SymbolOptions {...state} />
      {update && <ForegroundColors {...state} />}
      {update && <BackgroundColors {...state} />}
      {update && <TextDecorationOption {...state} />}
      <PsOneButtonWrapper>
        {update && (
          <PsOneDeleteBtn onClick={deleteHandler}>Delete</PsOneDeleteBtn>
        )}
        {update && <PsOneApplyBtn onClick={applyHandler}>Apply</PsOneApplyBtn>}
      </PsOneButtonWrapper>
    </PsOneControllsWrapper>
  );
};
