import React, { useState } from "react";
import styled from "styled-components";
/// BUTTON STYLE

const Btn_wrapper = styled.div`
  width: 35px;
  font-size: 12px;
  text-align: center;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;
const Btn_icon = styled.div`
  line-height: 100%;
  display: inline-block;
  font-family: "JB";
  transform: ${(props) => (props.open ? "rotate(270deg)" : "rotate(90deg);")};
  transform-origin: 50% 50%;
  transition: transform 0.2s, color 0.2s;
  transition-delay: 0.1s;
`;
const Btn_divider_left = styled.div`
  display: inline-block;
  transition: padding 0.1s;
  padding-right: ${(props) => (props.open ? "0" : "4px")};
`;
const Btn_divider_right = styled.div`
  display: inline-block;
  transition: padding 0.1s;
  padding-left: ${(props) => (props.open ? "0" : "4px")};
`;

/// SELECT STYLE
const SelectMain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 120px;
  border: 1px solid black;
  position: relative;
`;
const SelectWrapper = styled.ul`
  width: 120px;
  padding: 10px;
  border: 1px solid black;
  position: absolute;
  z-index: 1;
  background: white;
  top: 30px;
  left: 0;
  display: ${(props) => (props.open ? "none" : "block")};
`;
const SelectItem = styled.li`
  border-bottom: 1px solid black;
  padding: 5px;
  background: ${(props) => (props.selected ? "#f2f2f2" : "#ffffff")};
  &:hover {
    background: #f2f2f2;
  }
`;

export const Select = () => {
  const [open, OpenClose] = useState(true);
  const [currentSelect, setSelected] = useState("init");
  const [items, setItems] = useState([
    { id: 1, name: "item1", selected: false },
    { id: 2, name: "item2", selected: false },
    { id: 3, name: "item3", selected: false },
    { id: 4, name: "item4", selected: false },
    { id: 5, name: "item5", selected: false },
  ]);

  const selectItems = items.map((e) => {
    return (
      <SelectItem
        selected={e.selected}
        data-name={e.name}
        key={e.name}
        onClick={(event) => {
          const newState = items.map((el) => {
            if (el.id === e.id) {
              el.selected = true;
              return el;
            } else {
              el.selected = false;
              return el;
            }
          });
          setSelected(event.target.dataset.name);
          setItems(newState);
        }}
      >
        {e.name}
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
      <Btn_wrapper>
        <Btn_divider_left open={open}>{"["}</Btn_divider_left>
        <Btn_icon open={open}>{"|>"}</Btn_icon>
        <Btn_divider_right open={open}>{"]"}</Btn_divider_right>
      </Btn_wrapper>
      <SelectWrapper open={open}>{selectItems}</SelectWrapper>
    </SelectMain>
  );
};
