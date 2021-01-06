import React, { useEffect } from 'react';
import SelectSequences from './psoneoptions/sequences';
import { CustomText } from './psoneoptions/customtext';
import ForegroundColors from './psoneoptions/fgcolor';
import BackgroundColors from './psoneoptions/bgcolor';
import { TextDecorationOption } from './psoneoptions/textdecor';
import { SymbolOptions } from './psoneoptions/symbols';
import { PsOneDeleteBtn, PsOneApplyBtn } from '../../global/buttons/basebnt';
import { PsOneControllsWrapper, PsOneButtonWrapper } from './styled.psone';
import { IPromptElem } from '../../../types/global';

export const PsOneMenu = (state: any) => {
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

  const setupNewPromptElemnt = <
    T extends Array<Array<IPromptElem>>,
    R extends IPromptElem,
    A extends number
  >(
    arr: T,
    currentElement: R,
    lineindex: A
  ) => {
    let index: number = arr[lineindex].length;
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

  const update: boolean = true; //status === "UDATE_CURRENT";
  return (
    <PsOneControllsWrapper>
      {/* SEQUENCES */}
      <SelectSequences {...state} />
      <SymbolOptions {...state} />
      {currentElement.type === 'CUSTOM_TEXT' && update && <CustomText />}
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
