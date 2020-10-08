import React from "react";
import "./promptline.scss";
import { PromptLineNumber } from "./styledcom";
import PsOneItemMlt from "./multylineElm";
import { BaseButton } from "../../global/buttons/basebnt";

const LineDndContainer = (state) => {
  // STATE
  const {
    result: { resPsOneLine },
    selectPsOneLine,
    addNewLine,
    deleteCurrentLine,
  } = state;

  function moveCard(id, atIndex, atLine) {
    const { card, index } = findCard(id);
    //   changeElemPosition({ index, card, atIndex });
  }

  function findCard(id, lineindex) {
    const card = resPsOneLine[lineindex].filter((c) => `${c.id}` === id)[0];
    return {
      card,
      index: resPsOneLine[lineindex].indexOf(card),
      lineindex,
    };
  }

  const displaycard = (cards, lineindex) => {
    return cards.map((card) => {
      return (
        <PsOneItemMlt
          key={card.id}
          id={`${card.id}`}
          text={card.sequences}
          findCard={findCard}
          moveCard={moveCard}
          state={state}
          curline={cards}
          lineindex={lineindex}
        />
      );
    });
  };
  const mltline = resPsOneLine.map((line, index) => {
    const cardline = displaycard(line, index);
    return (
      <div
        key={`line${index}`}
        id={index}
        onClick={() => {
          selectPsOneLine(index);
        }}
        className="curr-line"
      >
        <div className="curr-line__title">
          {"Line"}
          {index}
          {index !== 0 && (
            <BaseButton
              onClick={() => {
                deleteCurrentLine({ index: index });
              }}
            >
              Remove line
            </BaseButton>
          )}
        </div>
        <div className="curr-line__items">{cardline}</div>
      </div>
    );
  });
  return (
    <div className="psone-line-dnd">
      <div className="pspne-line-navmenu">
        <div className="pspne-line-navmenu__title">Line nav menu:</div>
        <BaseButton onClick={addNewLine}>Add new line</BaseButton>
      </div>
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
