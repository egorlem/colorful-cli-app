import React from "react";
import "./promptline.scss";
import { PromptLineNumber } from "./styledcom";
import PsOneItemMlt from "./multylineElm";
import { LineButton, BaseButton } from "../../global/buttons/basebnt";
import styled from "styled-components";
import { ElementStatus } from "./options/elemstatus";

const SelectedLine = styled.div`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: ${(props) => (props.flag ? "500" : "300")};
  color: ${(props) => (props.flag ? "black" : "#e1e4e8")};
`;

const LineDndContainer = (state) => {
  // STATE
  const {
    psOneOptions: { selectedLine, status },
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
      <SelectedLine
        flag={selectedLine === index}
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
            <LineButton
              flag={status}
              onClick={() => {
                if (!status) {
                  deleteCurrentLine({ index: index });
                }
              }}
            >
              Remove line
            </LineButton>
          )}
        </div>
        <div className="curr-line__items">{cardline}</div>
      </SelectedLine>
    );
  });
  return (
    <div className="psone-line-dnd">
      <div className="pspne-line-navmenu">
        <div className="pspne-line-navmenu__title">Line nav menu:</div>
        {status && <ElementStatus {...state} />}
        <LineButton
          flag={status}
          onClick={() => {
            if (!status) {
              addNewLine();
            }
          }}
        >
          Add new line
        </LineButton>
      </div>
      {mltline}
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
