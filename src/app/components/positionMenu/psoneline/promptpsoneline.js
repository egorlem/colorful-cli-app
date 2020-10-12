import React, { useEffect } from "react";
import LineDndContainer from "./promptline";
import styled from "styled-components";

const PromptLineStyleWrapper = styled.div`
  font-family: "JetBrains", "monospace";
  margin-left: 24px;
  background: #252526;
  color: #e9e9e9;
  margin-bottom: 96px;
`;

const PromptPsOneLine = (state) => {
  const {
    psOneOptions: { status, selectedLine },
    result: { resPsOneLine },
    changeModeStatus,
    updateElement,
    selectPsOneLine,
  } = state;

  const findCard = (id, elements) => {
    const [currentElement] = elements.filter((element) => element.id === id);
    return {
      currentElement,
      index: elements.indexOf(currentElement),
    };
  };
  useEffect(() => {
    if (status === "ADD_NEW") {
      console.log("from line");
      let { currentElement, index } = findCard(
        resPsOneLine[selectedLine].length,
        resPsOneLine[selectedLine]
      );
      updateElement({
        curCard: currentElement,
        oringIndex: index,
      });
      changeModeStatus("UDATE_CURRENT");
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
