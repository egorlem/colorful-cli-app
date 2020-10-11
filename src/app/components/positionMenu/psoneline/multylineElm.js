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
    moveElementBack,
    moveElementForward,
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
      <MoveBackControll
        flag={status}
        onClick={() => {
          if (!status) {
            let forvIndex = index - 1;
            moveElementBack({
              index: index,
              card: card,
              atIndex: forvIndex,
              lineIndex: selectedLineIndex,
            });
          }
        }}
      >
        {"<=="}
      </MoveBackControll>
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
      <MoveForwardControll
        flag={status}
        onClick={() => {
          if (!status) {
            let toIndex = index + 1;
            moveElementForward({
              index: index,
              card: card,
              atIndex: toIndex,
              lineIndex: selectedLineIndex,
            });
          }
        }}
      >
        {"==>"}
      </MoveForwardControll>
    </ElementContainer>
  );
};

export default PsOneItemMlt;
