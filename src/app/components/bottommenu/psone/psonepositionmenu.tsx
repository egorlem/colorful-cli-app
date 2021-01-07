import React, { useEffect } from 'react';
import PsOneLines from './psoneontions/psonelines';
import styled from 'styled-components';

const PromptLineStyleWrapper = styled.div`
  background: #252526;
  color: #e9e9e9;
`;

const PsOnePositionMenu = (state: any) => {
  const {
    psOneOptions: { status, selectedLine },
    result: { resPsOneLine },
    changeModeStatus,
    updateElement,
    selectPsOneLine,
  } = state;

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
    if (status === 'ADD_NEW') {
      console.log('попал юз ефект 3', status);
      let { currentElement, index } = findCard(
        resPsOneLine[selectedLine].length,
        resPsOneLine[selectedLine]
      );
      updateElement({
        curCard: currentElement,
        oringIndex: index,
      });
      changeModeStatus('UDATE_CURRENT');
    }
  }, [resPsOneLine]);

  useEffect(() => {
    selectPsOneLine(0);
  }, [resPsOneLine.length]);

  return (
    <PromptLineStyleWrapper>
      <PsOneLines {...state} />
      МЕНЮ
      {/* <BottomMenu {...state} /> */}
    </PromptLineStyleWrapper>
  );
};

export default PsOnePositionMenu;
