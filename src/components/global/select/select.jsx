import React, { useState } from "react";
import styled from "styled-components";
import { ControllWrapper, Icon, LeftDivider, RightDivider } from "./controls";
import update from "immutability-helper";

/// SELECT STYLE
const SelectMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  border: 1px solid black;
  position: relative;
  transition: all 10s;
`;
const SelectWrapper = styled.ul`
  transition: all 10s;
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  z-index: 1;
  background: white;
  top: 30px;
  left: 0;
  display: ${(props) => (props.open ? "none" : "block")};
  visibility: ${(props) => (props.open ? "hidden" : "visible")};
`;
const SelectItem = styled.li`
  border-bottom: 1px solid black;
  padding: 5px;
  background: ${(props) => (props.selected ? "#f2f2f2" : "#ffffff")};
  &:hover {
    background: #f2f2f2;
  }
`;

const Select = ({ elements, setCurrentElement, fgcolor, bgcolor }) => {
  const [open, OpenClose] = useState(true);
  const [currentSelect, setSelected] = useState("init");
  const [items, setItems] = useState(elements);

  const selectItems = items.map((e) => {
    return (
      <SelectItem
        selected={e.selected}
        data-name={e.text}
        key={e.id}
        onClick={(event) => {
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
  return (
    <SelectMain
      onClick={() => {
        open ? OpenClose(false) : OpenClose(true);
      }}
    >
      {currentSelect}
      <ControllWrapper>
        <LeftDivider open={open}>{"["}</LeftDivider>
        <Icon open={open}>{"|>"}</Icon>
        <RightDivider open={open}>{"]"}</RightDivider>
      </ControllWrapper>
      <SelectWrapper open={open}>{selectItems}</SelectWrapper>
    </SelectMain>
  );
};

export default Select;
