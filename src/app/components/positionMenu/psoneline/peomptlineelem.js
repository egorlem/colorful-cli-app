import React from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  InLinePromptElement,
  ElementContainer,
  MoveControll,
  MoveBackControll,
  MoveForwardControll,
} from "./styledcom";

const PsOneItem = ({ id, text, findCard, moveCard, state }) => {
  // STATE
  const {
    psOneOptions: { status },
    result: { resPsOneLine },
    updateElement,
    changeModeStatus,
    moveElementForward,
    moveElementBack,
  } = state;

  const curCard = resPsOneLine.find((e) => +e.id === +id);
  const oringIndex = findCard(id).index;

  const [{ isDragging }, drag] = useDrag({
    item: { type: "TEST_TWO", id, oringIndex },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    begin: () => {},
    end: (dropResult, monitor) => {
      const { id: droppedID, oringIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveCard(droppedID, oringIndex);
      }
    },
  });

  const [, drop] = useDrop({
    accept: "TEST_TWO",
    canDrop: () => false,
    hover({ id: draggedID }) {
      if (draggedID !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedID, overIndex);
      }
    },
  });

  const blockWhenEditMode = (node) => {
    if (!status) return drag(drop(node));
  };
  const opacity = isDragging || status ? 0.3 : 1;

  return (
    <ElementContainer>
      {oringIndex !== 0 && (
        <MoveBackControll
          flag={status}
          onClick={() => {
            if (!status) {
              let forvIndex = oringIndex - 1;
              moveElementBack({
                index: oringIndex,
                card: curCard,
                atIndex: forvIndex,
              });
            }
          }}
        >
          {"<=="}
        </MoveBackControll>
      )}

      <InLinePromptElement
        flag={status}
        onClick={() => {
          if (!status) {
            updateElement({ curCard, oringIndex });
            changeModeStatus("UDATE_CURRENT");
          }
        }}
        style={{ opacity }}
        ref={(node) => {
          blockWhenEditMode(node);
        }}
      >
        <span>{text}</span>
      </InLinePromptElement>

      {oringIndex !== resPsOneLine.length - 1 && (
        <MoveForwardControll
          flag={status}
          onClick={() => {
            if (!status) {
              let toIndex = oringIndex + 1;
              moveElementForward({
                index: oringIndex,
                card: curCard,
                atIndex: toIndex,
              });
            }
          }}
        >
          {"==>"}
        </MoveForwardControll>
      )}
    </ElementContainer>
  );
};

export default PsOneItem;
