import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { crudActions } from '../state/redux/crud';
import { appConditionActions } from '../state/redux/condition';
import PsOneLeftMenu from './leftmenu/psonemenu';
import PsOneBottomMenu from './bottommenu/psonemenu';
import TerminalWindow from './terminal/termwindow';
import { TAppState } from '../state/store';
import { IPromptElem } from '../types/global';

interface IThisStatePart {
  status: null | string;
  element: IPromptElem;
  lineIndex: number;
  resultArr: IPromptElem[][];
}

const PsOneEditor: React.FC = () => {
  const dispatch = useDispatch();
  const state: IThisStatePart = useSelector((state: TAppState) => {
    return {
      status: state.condition.appcondition.status,
      element: state.style.psoneelement.currentElement,
      lineIndex: state.style.psoneelement.selectedLine,
      resultArr: state.crud.psonecrud.psonemodel,
    };
  });

  const findCard = (id: any, elements: any) => {
    const [currentElement] = elements.filter(
      (element: any) => element.id === id
    );
    return {
      currentElement,
      index: elements.indexOf(currentElement),
    };
  };

  useEffect(() => {
    if (state.status === 'ADD') {
      dispatch(
        crudActions.addNewPromptElem({
          lineIndex: state.lineIndex,
          element: state.element,
        })
      );
      dispatch(appConditionActions.changeModeStatus('UPDATE'));
    }
  }, [state.status]);

  useEffect(() => {
    if (state.status === 'UPDATE') {
      const currentLine = state.resultArr[state.lineIndex];
      const { currentElement, index } = findCard(state.element.id, currentLine);
      dispatch(
        crudActions.updateSelectedElement({
          lineIndex: state.lineIndex,
          index: index,
          element: state.element,
        })
      );
    }
  }, [state.element]);

  return (
    <div className="shell-editor">
      <div className="left-area">
        <PsOneLeftMenu />
      </div>
      <div className="right-area">
        <TerminalWindow />
        <PsOneBottomMenu />
      </div>
    </div>
  );
};
export default PsOneEditor;
