import React from "react";
import styled from "styled-components";
import update from "immutability-helper";

const SelectWrapper = styled.ul`
  width: 100%;
  max-height: 100px;
  background: white;
  overflow-y: auto;
  display: ${(props) => (props.open ? "none" : "block")};
  visibility: ${(props) => (props.open ? "hidden" : "visible")};
`;
const SelectItem = styled.li`
  border-bottom: 1px solid #e1e4e8;
  padding: 5px 0;
  background: ${(props) => (props.selected ? "#f2f2f2" : "#ffffff")};
  &:first-child {
    border-top: 1px solid #e1e4e8;
    margin-top: 5px;
  }
  &:hover {
    background: #f2f2f2;
  }
`;

const SelectElement = ({ elements, setCurrentElement, bgcolor, fgcolor }) => {
  const optionsList = elements.map((e) => {
    return (
      <SelectItem
        selected={e.selected}
        data-name={e.text}
        key={e.id}
        onClick={() => {
          setCurrentElement(
            update(e, {
              bg: { $set: bgcolor },
              fg: { $set: fgcolor },
              id: {
                $apply: function (x) {
                  return ++elements.length;
                },
              },
            })
          );
        }}
      >
        {e.text}
      </SelectItem>
    );
  });
  return <SelectWrapper>{optionsList}</SelectWrapper>;
};

export default SelectElement;
