import React from "react";
import Styled from "styled-components";
import update from "immutability-helper";

const SelectWrapper = Styled.ul`
  width: 100%;
  background: white;
  visibility: ${(props) => (props.open ? "hidden" : "visible")};
  border-left: 5px solid #f1f1f1;
`;
const SelectItem = Styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e1e4e8;
  padding: 5px 0 5px 2px;
  &:first-child {
    border-top: 1px solid #e1e4e8;
  }
  &:hover {
    background: #f2f2f2;
  }
`;
const ItemTitele = Styled.div``;
const ItemPreview = Styled.div`
  font-size: 1.1rem;
  padding-right: 10px;
  &:before {
    content: '|'
  }
`;

const SelectElement = ({
  changeSelection,
  elements,
  setCurrentElement,
  id,
}) => {
  const optionsList = elements.map((e) => {
    return (
      <SelectItem
        selected={e.selected}
        data-name={e.text}
        key={e.id}
        onClick={() => {
          changeSelection(true);
          setCurrentElement({ ...e, id: ++id });
        }}
      >
        <ItemTitele>{e.text}</ItemTitele>
        <ItemPreview>{e.sequences}</ItemPreview>
      </SelectItem>
    );
  });
  return <SelectWrapper>{optionsList}</SelectWrapper>;
};

export default SelectElement;
