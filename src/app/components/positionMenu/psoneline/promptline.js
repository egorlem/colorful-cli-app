import React from "react";
import styled from "styled-components";
import "./promptline.scss";

import PsOneItemMlt from "./multylineElm";
import { LineStatusHeader } from "./options/linestatusheader";
import { LineButton } from "../../global/buttons/basebnt";

const SelectedLineWrapper = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: ${(props) => (props.flag ? "500" : "400")};
  color: ${(props) => (props.flag ? "#e9e9e9" : "#474747")};
`;
const SingleLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  border-left: 5px solid ${(props) => (props.flag ? "#1e5751" : "#474747")};
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const SingleLineTitle = styled.div`
  min-height: 32px;
  border-bottom: 1px solid #474747;
  border-top: 1px solid #474747;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AllLines = styled.div`
  border-left: 1px solid #474747;
  padding-left: 4px;
`;

const LineDndContainer = (state) => {
  // STATE
  const {
    psOneOptions: { selectedLine, status },
    result: { resPsOneLine },
    selectPsOneLine,
    deleteCurrentLine,
  } = state;

  function findCard(id, lineindex) {
    const card = resPsOneLine[lineindex].filter((c) => `${c.id}` === id)[0];
    return {
      card,
      index: resPsOneLine[lineindex].indexOf(card),
      lineindex,
    };
  }

  const displayCard = (cards, lineindex) => {
    return cards.map((card) => {
      return (
        <PsOneItemMlt
          key={card.id}
          id={`${card.id}`}
          text={card.sequences}
          findCard={findCard}
          state={state}
          curline={cards}
          lineindex={lineindex}
        />
      );
    });
  };

  const displayLines = resPsOneLine.map((line, index) => {
    const cardline = displayCard(line, index);
    return (
      <SelectedLineWrapper
        flag={selectedLine === index}
        key={`line${index}`}
        id={index}
        onClick={() => {
          selectPsOneLine(index);
        }}
      >
        <SingleLineTitle>
          {"Line "}
          {index + 1}
          {index !== 0 && (
            <LineButton
              flag={status}
              onClick={() => {
                if (!status) deleteCurrentLine({ index: index });
              }}
            >
              {"Remove line"}
            </LineButton>
          )}
        </SingleLineTitle>
        <SingleLine flag={selectedLine === index}>{cardline}</SingleLine>
      </SelectedLineWrapper>
    );
  });
  return (
    <div>
      <div>
        <LineStatusHeader {...state} />
      </div>
      <AllLines>{displayLines}</AllLines>
    </div>
  );
};

export default LineDndContainer;
