import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeftMenu from '../components/leftmenu/leftmenu';
import BottomMenu from '../components/bottommenu/bottommenu';
import TerminalWindow from '../components/terminal/termwindow';
import { changeModeStatus, updateElement } from '../redux/psoneoptionsreducer';
import {
  addNewPromptElem,
  updateSelectedElement,
} from '../redux/resultreducer';

const PsOneEditor = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Colorful CLI / PS1';
  }, []);

  const state: any = useSelector<any>((state) => {
    return {
      status: state.psOneOptions.status,
      element: state.psOneOptions.currentElement,
      lineIndex: state.psOneOptions.selectedLine,
      resultArr: state.result.resPsOneLine,
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
        addNewPromptElem({ lineIndex: state.lineIndex, element: state.element })
      );
      dispatch(changeModeStatus('UPDATE'));
    }
  }, [state.status]);

  useEffect(() => {
    if (state.status === 'UPDATE') {
      console.log('Я ТУТЮ');
      const currentLine = state.resultArr[state.lineIndex];
      const { currentElement, index } = findCard(state.element.id, currentLine);
      dispatch(
        updateSelectedElement({
          lineIndex: state.lineIndex,
          index: index,
          element: state.element,
        })
        // updateElement({
        //   curCard: state.element,
        //   oringIndex: index,
        // })
      );
    }
  }, [state.element]);

  return (
    <div className="shell-editor">
      {/* <div className="left-area">
        <LeftMenu />
      </div>
      <div className="right-area">
        <TerminalWindow />
        <BottomMenu />
      </div> */}
    </div>
  );
};
export default PsOneEditor;
