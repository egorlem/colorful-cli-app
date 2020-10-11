import React from "react";
import styled from "styled-components";
import "./palate.scss";
const PalateWrapper = styled.div`
  width: 100%;
  background: white;
  visibility: ${(props) => (props.flag ? "hidden" : "visible")};
  border-left: 5px solid #f1f1f1;
  display: flex;
  flex-wrap: wrap;
`;
const ColorElement = styled.div`
  width: 40px;
  min-height: 25px;
  font-size: 20px;
  background-color: ${(props) => props.color || "black"};
  border: 1px solid transparent;
  padding: 2px;
  &:hover {
    border: 1px solid #f1f1f1;
  }
`;

const Palate = ({ state, colorHandler }) => {
  // STATE
  const {
    psOneOptions: { globalcolors },
  } = state;

  const paletteHantler = (event) => {
    const curColor = globalcolors.find(
      (elm) => +event.target.id === +elm.colorId
    );
    colorHandler(curColor);
  };

  const GradientColor = globalcolors.map((e) => {
    if (e.colorId < 16) {
      return;
    }
    return (
      <ColorElement
        onClick={paletteHantler}
        // className="palette__item"
        id={e.colorId}
        key={e.colorId}
        color={e.hexString}
      ></ColorElement>
    );
  });

  const BaseColor = globalcolors.map((e) => {
    if (e.colorId > 16) {
      return;
    }
    return (
      <ColorElement
        onClick={paletteHantler}
        id={e.colorId}
        key={e.colorId}
        color={e.hexString}
      ></ColorElement>
    );
  });

  return (
    <PalateWrapper>
      {GradientColor}
      {BaseColor}
    </PalateWrapper>
  );
};
export default Palate;
