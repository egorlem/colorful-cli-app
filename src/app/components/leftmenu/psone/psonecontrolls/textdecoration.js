import React from "react";
import styled from "styled-components";

const DecorBtnsWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

const DecorButton = styled.div`
  display: flex;
  font-size: 1.3rem;
  font-weight: ${(props) => (props.active ? "500" : "300")};
  &:hover {
    font-weight: 500;
    .cb-divider {
      color: black;
    }
  }
`;

const CheckBox = styled.div`
  display: flex;
`;
const CbDivider = styled.div`
  color: ${(props) => (props.active ? "black" : "#e1e4e8")};
`;
const CbSymbol = styled.div`
  color: ${(props) => (props.active ? "black" : "transparent")};
`;

const TextDecoration = (state) => {
  // STATE
  const {
    psOneOptions: { textdecoration, currentElement },
    removeElemtStyle,
    setElementStyle,
  } = state;

  const DecorationProperty = textdecoration.map((e) => {
    const active = currentElement.style.includes(e.style);
    const curStyleIndex = (arr) => {
      let styleIndex = arr.style.indexOf(e.style);
      return styleIndex;
    };
    let index = curStyleIndex(currentElement);
    const decorationHandeler = () => {
      active ? removeElemtStyle(index) : setElementStyle(e.style);
    };
    return (
      <DecorButton
        active={active}
        onClick={decorationHandeler}
        key={e.style}
        id={e.style}
      >
        <CheckBox className="cb-divider" active={active}>
          <CbDivider className="cb-divider" active={active}>
            {"["}
          </CbDivider>
          <CbSymbol active={active}>{"⋁"}</CbSymbol>
          <CbDivider className="cb-divider" active={active}>
            {"]"}
          </CbDivider>
        </CheckBox>
        {e.style}
      </DecorButton>
    );
  });

  return <DecorBtnsWrapper>{DecorationProperty}</DecorBtnsWrapper>;
};

export default TextDecoration;
