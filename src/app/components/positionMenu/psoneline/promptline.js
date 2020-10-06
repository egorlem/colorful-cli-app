import React from "react";
import "./promptline.scss";
import { useDrag, useDrop } from "react-dnd";
import { PromptLineNumber } from "./styledcom";
import PsOneItem from "./peomptlineelem";

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

  const currentLine = resPsOneLine.map((cards) => {
    const elementDecor = (elm) => {
      if (elm.length <= 9) {
        return `== ${elm} ==`;
      } else return elm;
    };
    return (
      <PsOneItem
        key={cards.id}
        id={`${cards.id}`}
        text={elementDecor(cards.sequences)}
        findCard={findCard}
        moveCard={moveCard}
        state={state}
      />
    );
  });

  return (
    <div classaName="psone-line-dnd">
      <PromptLineNumber>{"Line 1"}</PromptLineNumber>
      <div ref={drop} className="psone-line-container">
        {currentLine}
      </div>
    </div>
  );
};

export default LineDndContainer;
