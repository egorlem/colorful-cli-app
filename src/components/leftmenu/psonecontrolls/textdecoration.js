import React from "react";
import styled from "styled-components";

const DecorButton = styled.div`
  border: ${(props) => (props.active ? "1px solid black" : "none")};
  margin: 5px;
`;

const TextDecoration = ({
  textdecoration,
  setElementStyle,
  currentElement,
  removeElemtStyle,
}) => {
  const decorOptions = textdecoration.map((e) => {
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

  return <div>{decorOptions}</div>;
};

export default TextDecoration;
