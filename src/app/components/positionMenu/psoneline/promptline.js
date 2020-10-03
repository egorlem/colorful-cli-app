import React from "react";
import "./promptline.scss";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";

const InLinePromptElement = styled.div`
  margin: 4px;
  padding: 4px 4px;
  background-color: white;
  border: 1px solid black;
  font-size: 1.5rem;
`;
const ElementContainer = styled.div`
  display: flex;
  background: blue;
  padding: 5px;
  margin: 5px;
`;
const MoveForwardControll = styled.div`
  font-size: 2rem;
  color: white;
`;
const MoveBackControll = styled.div`
  font-size: 2rem;
  color: white;
`;

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

  const findStartAndEndIndex = (arr) => {
    // find first and last index
    return arr;
  };
  // console.log(findStartAndEndIndex(resPsOneLine));

  const opacity = isDragging || status ? 0.3 : 1;
  return (
    <ElementContainer>
      {oringIndex !== 0 && (
        <MoveBackControll
          onClick={() => {
            if (!status) {
              moveElementBack("НАЗАД");
            }
          }}
        >
          {" < "}
        </MoveBackControll>
      )}
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
        <span>{text}</span>
      </InLinePromptElement>
      {oringIndex !== resPsOneLine.length - 1 && (
        <MoveForwardControll
          onClick={() => {
            if (!status) {
              moveElementForward("ВПЕРЕД");
            }
          }}
        >
          {" > "}
        </MoveForwardControll>
      )}
    </ElementContainer>
  );
};

const LineDndContainer = (state) => {
  // STATE
  const {
    result: { resPsOneLine },
  } = state;

  if (!resPsOneLine.length) return <>Опаньки</>;

  // const [cards, setCards] = useState(items);
  function moveCard(id, atIndex) {
    const { card, index } = findCard(id);
    state.changeElemPosition({ index, card, atIndex });
  }
  function findCard(id) {
    const card = resPsOneLine.filter((c) => `${c.id}` === id)[0];
    return {
      card,
      index: resPsOneLine.indexOf(card),
    };
  }
  const [, drop] = useDrop({ accept: "TEST_TWO" });

  const currentLine = resPsOneLine.map((cards) => (
    <PsOneItem
      key={cards.id}
      id={`${cards.id}`}
      text={cards.text}
      findCard={findCard}
      moveCard={moveCard}
      state={state}
    />
  ));

  return (
    <div>
      <div ref={drop} className="psone-line-container">
        {currentLine}
      </div>
    </div>
  );
};

export default LineDndContainer;
