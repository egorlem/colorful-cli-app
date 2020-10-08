import React from "react";
import {
  InLinePromptElement,
  ElementContainer,
  MoveControll,
  MoveBackControll,
  MoveForwardControll,
} from "./styledcom";

const PsOneItemMlt = ({ id, text, state, lineindex, findCard }) => {
  // STATE
  const {
    psOneOptions: { status },
    result: { resPsOneLine },
    updateElement,
    changeModeStatus,
  } = state;

  const opacity = status ? 0.3 : 1;
  const { card, index, lineindex: selectedLineIndex } = findCard(id, lineindex);
  const selectElement = () => {
    const { card, index, lineindex: selectedLineIndex } = findCard(
      id,
      lineindex
    );
    console.log(card, index, selectedLineIndex);
  };
  return (
    <ElementContainer>
      <MoveBackControll>{"<=="}</MoveBackControll>
      <InLinePromptElement
        flag={status}
        style={{ opacity }}
        onClick={() => {
          if (!status) {
            updateElement({ curCard: card, oringIndex: index });
            changeModeStatus("UDATE_CURRENT");
          }
        }}
      >
        <span>{text}</span>
      </InLinePromptElement>
      <MoveForwardControll>{"==>"}</MoveForwardControll>
    </ElementContainer>
  );
};

export default PsOneItemMlt;
