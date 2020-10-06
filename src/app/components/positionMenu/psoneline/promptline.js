import React from "react";
import "./promptline.scss";
import { useDrag, useDrop } from "react-dnd";
import { PromptLineNumber } from "./styledcom";
import PsOneItem from "./peomptlineelem";
import PsOneItemMlt from "./multylineElm";

const LineDndContainer = (state) => {
  // STATE
  const {
    result: { resPsOneLine, twoline },
    changeLineTest,
  } = state;

  function moveCard(id, atIndex, atLine) {
    const { card, index } = findCard(id);
    //   changeElemPosition({ index, card, atIndex });
  }

  function findCard(id, lineindex) {
    const card = twoline[lineindex].filter((c) => `${c.id}` === id)[0];
    return {
      card,
      index: twoline[lineindex].indexOf(card),
      lineindex,
    };
  }

  const [, drop] = useDrop({ accept: "TEST_TWO" });

  const displaycard = (cards, lineindex) => {
    return cards.map((card) => {
      return (
        <PsOneItemMlt
          key={card.id}
          id={`${card.id}`}
          text={card.text}
          findCard={findCard}
          moveCard={moveCard}
          state={state}
          curline={cards}
          lineindex={lineindex}
        />
      );
    });
  };

  const mltline = twoline.map((line, index) => {
    const cardline = displaycard(line, index);
    return (
      <div key={`line${index}`} id={index} ref={drop}>
        {index}
        <div>{cardline}</div>
      </div>
    );
  });

  return (
    <div className="psone-line-dnd">
      {mltline}
      {/* <PromptLineNumber>{"Line 1"}</PromptLineNumber>
      <div ref={drop} className="psone-line-container">
        {currentLine}
      </div> */}
    </div>
  );
};

export default LineDndContainer;

// const currentLine = resPsOneLine.map((cards) => {
//   const elementDecor = (elm) => {
//     if (elm.length <= 9) {
//       return `== ${elm} ==`;
//     } else return elm;
//   };
//   return (
//     <PsOneItem
//       key={cards.id}
//       id={`${cards.id}`}
//       text={elementDecor(cards.sequences)}
//       findCard={findCard}
//       moveCard={moveCard}
//       state={state}
//     />
//   );
// });
