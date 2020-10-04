import React from "react";
import "./promptline.scss";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";

const PromptLineNumber = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  padding: 4px 0 4px 4px;
  margin-top: 2px;
  margin-left: 24px;
  border-top: 1px solid black;
`;

const InLinePromptElement = styled.div`
  cursor: move;
  font-weight: regular;
  font-size: 1.3rem;
  word-spacing: -0.2rem;
  line-height: 0.97;
  margin: 4px;
  padding: 4px 4px;
  background-color: transparent;
  border: 1px solid black;
`;
const ElementContainer = styled.div`
  display: flex;
  align-items: center;
  background: gray;
  padding: 5px;
  margin: 5px;
`;
const MoveControll = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  color: #e1e4e8;
  &:hover {
    color: black;
  }
`;
const MoveBackControll = styled(MoveControll)`
  ::before {
    content: ">";
    padding-right: 4px;
  }
`;
const MoveForwardControll = styled(MoveControll)`
  ::after {
    content: "<";
    padding-left: 4px;
  }
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
  const opacity = isDragging || status ? 0.3 : 1;
  return (
    <ElementContainer>
      {oringIndex !== 0 && (
        <MoveBackControll
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
          {"❮"}
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
              let toIndex = oringIndex + 1;
              moveElementForward({
                index: oringIndex,
                card: curCard,
                atIndex: toIndex,
              });
            }
          }}
        >
          {"❯"}
        </MoveForwardControll>
      )}
    </ElementContainer>
  );
};

const LineDndContainer = (state) => {
  // STATE
  const {
    result: { resPsOneLine },
    changeElemPosition,
  } = state;

  if (!resPsOneLine.length) return <>Опаньки</>;

  // const [cards, setCards] = useState(items);
  function moveCard(id, atIndex) {
    const { card, index } = findCard(id);
    changeElemPosition({ index, card, atIndex });
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
      <PromptLineNumber>{"Line 1"}</PromptLineNumber>
      <div ref={drop} className="psone-line-container">
        {currentLine}
      </div>
    </div>
  );
};

export default LineDndContainer;
