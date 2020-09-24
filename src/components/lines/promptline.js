import React, { useEffect } from "react";
import "./promptline.scss";
import { useDrag, useDrop } from "react-dnd";
import { connect } from "react-redux";
//import { editModOn, editModOff } from "../../redux/termWinReducer";
import { changeElemPosition } from "../../redux/resultReducer";
import {
  changeModeStatus,
  updateElement,
} from "../../redux/psOneOptionsReducer";

const PsOneItem = ({ id, text, findCard, moveCard, state }) => {
  const curCard = state.result.resPsOneLine.find((e) => +e.id === +id);
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
  const opacity = isDragging ? 0.3 : 1;
  return (
    <div
      onClick={() => {
        state.updateElement({ curCard, oringIndex });
        state.changeModeStatus("UDATE_CURRENT");
      }}
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

const LineContainer = (state) => {
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
  );
};

const PromptPsOneLine = (state) => {
  //STATE
  const {
    psOneOptions: { status },
    result: { resPsOneLine },
    changeModeStatus,
    updateElement,
  } = state;
  //console.log(state);

  function findCard(id, elements) {
    const [currentElement] = elements.filter((element) => element.id === id);
    return {
      currentElement,
      index: elements.indexOf(currentElement),
    };
  }

  useEffect(() => {
    if (status === "ADD_NEW") {
      let { currentElement, index } = findCard(
        resPsOneLine.length,
        resPsOneLine
      );
      //  console.log(currentElement, index);
      updateElement({ curCard: currentElement, oringIndex: index });
      changeModeStatus("UDATE_CURRENT");
    }
  }, [resPsOneLine]);
  return (
    <>
      <LineContainer {...state} />
    </>
  );
};

const mstp = (state) => {
  return state;
};

export default connect(mstp, {
  changeElemPosition,
  updateElement,
  changeModeStatus,
})(PromptPsOneLine);
