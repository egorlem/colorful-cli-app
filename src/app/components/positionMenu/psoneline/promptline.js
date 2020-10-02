import React, { useEffect } from "react";
import "./promptline.scss";
import { useDrag, useDrop } from "react-dnd";
import { connect } from "react-redux";
//import { editModOn, editModOff } from "../../redux/termWinReducer";
import styled from "styled-components";

const InLinePromptElement = styled.div`
  margin: 4px;
  padding: 4px 4px;
  background-color: white;
  border: 1px solid black;
  font-size: 1.5rem;
`;
const PsOneItem = ({ id, text, findCard, moveCard, state }) => {
  // STATE
  const {
    psOneOptions: { status },
    result: { resPsOneLine },
    updateElement,
    changeModeStatus,
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
    <InLinePromptElement
      onClick={() => {
        if (!status) {
          updateElement({ curCard, oringIndex });
          changeModeStatus("UDATE_CURRENT");
        }
      }}
      style={{ opacity }}
      className="psone-line__item"
      ref={(node) => {
        blockWhenEditMode(node);
      }}
    >
      <span>{"<"}</span>
      <span>{text}</span>
      <span>{"<"}</span>
    </InLinePromptElement>
  );
};

const LineDndContainer = (state) => {
  const cards = state.result.resPsOneLine;
  // const [cards, setCards] = useState(items);
  function moveCard(id, atIndex) {
    const { card, index } = findCard(id);
    state.changeElemPosition({ index, card, atIndex });
  }
  function findCard(id) {
    const card = cards.filter((c) => `${c.id}` === id)[0];
    return {
      card,
      index: cards.indexOf(card),
    };
  }
  const [, drop] = useDrop({ accept: "TEST_TWO" });

  return (
    <div>
      <div ref={drop} className="psone-line-container">
        {cards.map((cards) => (
          <PsOneItem
            key={cards.id}
            id={`${cards.id}`}
            text={cards.text}
            findCard={findCard}
            moveCard={moveCard}
            state={state}
          />
        ))}
      </div>
    </div>
  );
};

export default LineDndContainer;
