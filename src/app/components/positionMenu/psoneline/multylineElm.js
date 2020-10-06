import React from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  InLinePromptElement,
  ElementContainer,
  MoveControll,
  MoveBackControll,
  MoveForwardControll,
} from "./styledcom";

const PsOneItemMlt = ({
  id,
  text,
  findCard,
  moveCard,
  state,
  curline,
  lineindex,
}) => {
  // STATE
  const {
    psOneOptions: { status },
    result: { resPsOneLine },
    changeLineTest,
  } = state;

  const curCard = resPsOneLine.find((e) => +e.id === +id);
  const { card, index: oringIndex, lineindex: origLineIndex } = findCard(
    id,
    lineindex
  );

  const [{ isDragging }, drag] = useDrag({
    item: { type: "TEST_TWO", id, oringIndex, lineindex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    begin: () => {
      console.log("подняли");
    },

    end: (dropResult, monitor) => {
      const { id: droppedID, oringIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        //  moveCard(droppedID, oringIndex);
        console.log("упал");
      }
    },
  });

  const [, drop] = useDrop({
    accept: "TEST_TWO",
    canDrop: () => false,
    hover({ id: draggedID, lineindex: draggedIndex }) {
      // if (draggedID !== id) {
      // const { index: overIndex } = findCard(id);
      if (draggedIndex !== lineindex) {
        const curcard2 = findCard(draggedID, draggedIndex);
        const hovercard = findCard(id, lineindex);
        console.log(curcard2);

        changeLineTest({
          fromLineIndex: curcard2.lineindex,
          toLineIndex: hovercard.lineindex,
          card: curcard2.card,
        });
        //   }
        // const { index: overIndex } = findCard(id);
        // moveCard(draggedID, overIndex);
      }
    },
  });

  const blockWhenEditMode = (node) => {
    if (!status) return drag(drop(node));
  };
  const opacity = isDragging || status ? 0.3 : 1;

  return (
    <ElementContainer>
      {oringIndex !== 0 && <MoveBackControll>{"<=="}</MoveBackControll>}

      <InLinePromptElement
        flag={status}
        style={{ opacity }}
        ref={(node) => {
          blockWhenEditMode(node);
        }}
      >
        <span>{text}</span>
      </InLinePromptElement>

      {oringIndex !== resPsOneLine.length - 1 && (
        <MoveForwardControll>{"==>"}</MoveForwardControll>
      )}
    </ElementContainer>
  );
};

export default PsOneItemMlt;
