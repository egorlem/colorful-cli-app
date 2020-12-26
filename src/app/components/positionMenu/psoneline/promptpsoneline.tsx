import React, { useEffect } from 'react';
import LineDndContainer from './promptline';
import styled from 'styled-components';

const PromptLineStyleWrapper = styled.div`
  background: #252526;
  color: #e9e9e9;
`;

const PromptPsOneLine = (state: any) => {
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
      <LineDndContainer {...state} />
    </PromptLineStyleWrapper>
  );
};

export default PromptPsOneLine;
