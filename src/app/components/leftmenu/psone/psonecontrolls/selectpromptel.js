import React from "react";
import Styled from "styled-components";

const SelectWrapper = Styled.ul`
  width: 100%;
  background: #252526;
  visibility: ${(props) => (props.flag ? "hidden" : "visible")};
`;
const SelectItem = Styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #474747;
  padding: 6px 0 6px 2px;
  border-left: 5px solid ${(props) => props.color || "#6ebb70"};
  &:first-child {
    border-top: 1px solid #474747;
  }
  &:last-child {
    margin-bottom: 10px;
  }
  &:hover {
    background: #55555d;
    color: #fafafa;
  }
`;
const ItemTitele = Styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`;
const ItemPreview = Styled.div`
  font-size: 1.2rem;
  padding-right: 10px;
  &:before {
    content: '|'
  }
`;
const SelectElement = (state) => {
  //STATE
  const {
    psOneOptions: { psOneSequences, status },
    setCurrentElement,
    changeModeStatus,
  } = state;

  const statusHandler = (e) => {
    setCurrentElement({ ...e, type: "SEQUENCES" });
    if (status === null && status !== "UDATE_CURRENT") {
      changeModeStatus("ADD_NEW");
    }
  };

  const PromptSequence = psOneSequences.map((e) => {
    let color = e.text === "Space" ? "#0d74db" : "#2d5f5d";
    return (
      <SelectItem
        color={color}
        selected={e.selected}
        data-name={e.text}
        key={e.text}
        onClick={() => {
          statusHandler(e);
        }}
      >
        <ItemTitele>{e.text}</ItemTitele>
        <ItemPreview>{e.sequences}</ItemPreview>
      </SelectItem>
    );
  });
  return <SelectWrapper>{PromptSequence}</SelectWrapper>;
};

export default SelectElement;
