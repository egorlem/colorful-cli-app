import React, { useState } from "react";
import "./promptline.scss";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";
const items = [
  { id: 1, text: "The hostname" },
  { id: 2, text: "The name of the sh" },
  { id: 3, text: "The username" },
  { id: 4, text: "The version of sh" },
  { id: 5, text: "The date" },
];

const PsOneItem = ({ id, text, findCard, moveCard }) => {
  const oringIndex = findCard(id).index;

  const [{ isDragging }, drag] = useDrag({
    item: { type: "TEST_TWO", id, oringIndex },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),

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
  const opacity = isDragging ? 0.3 : 1;
  return (
    <div
      style={{ opacity }}
      className="psone-line__item"
      ref={(node) => {
        drag(drop(node));
      }}
    >
      <span>{text}</span>
    </div>
  );
};

const LineContainer = () => {
  const [cards, setCards] = useState(items);

  function moveCard(id, atIndex) {
    const { card, index } = findCard(id);

    setCards(
      update(cards, {
        $splice: [
          [index, 1],
          [atIndex, 0, card],
        ],
      })
    );
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
    <div ref={drop} className="psone-line-container">
      {cards.map((cards) => (
        <PsOneItem
          key={cards.id}
          id={`${cards.id}`}
          text={cards.text}
          findCard={findCard}
          moveCard={moveCard}
        />
      ))}
    </div>
  );
};

const PromptPsOneLine = () => {
  return (
    <>
      <LineContainer />
    </>
  );
};

export default PromptPsOneLine;
