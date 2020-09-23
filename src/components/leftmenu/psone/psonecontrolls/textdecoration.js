import React from "react";
import styled from "styled-components";

const DecorButton = styled.div`
  border: ${(props) => (props.active ? "1px solid black" : "none")};
  margin: 5px;
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

    return (
      <DecorButton
        active={active}
        onClick={() => {
          active ? removeElemtStyle(index) : setElementStyle(e.style);
        }}
        key={e.style}
      >
        {e.style}
      </DecorButton>
    );
  });

  return <div>{DecorationProperty}</div>;
};

export default TextDecoration;
