import React from "react";
import styled from "styled-components";
const PalateWrapper = styled.div`
  width: 100%;
  visibility: ${(props) => (props.flag ? "hidden" : "visible")};
`;
const ColorElement = styled.div`
  cursor: pointer;
  width: 38px;
  min-height: 25px;
  background-color: ${(props) => props.color || "black"};
  border: 1px solid transparent;
  padding: 2px;
  margin: 1px;
  &:hover {
    border: 1px solid #f1f1f1;
  }
`;
const RangeWrapper = styled.div`
  margin-bottom: 6px;
  border-left: 5px solid ${(props) => props.color || "#f1f1f1"};
  display: flex;
  flex-wrap: wrap;
  background: transparent;
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

  const BaseColor = [];
  const FullColor = [];
  const Grayscale = [];

  const paleteArr = globalcolors.forEach((e) => {
    if (e.colorId < 16) {
      BaseColor.push(
        <ColorElement
          onClick={paletteHantler}
          id={e.colorId}
          key={e.colorId}
          color={e.hexString}
        ></ColorElement>
      );
    } else if (e.colorId > 16 && e.colorId < 233) {
      FullColor.push(
        <ColorElement
          onClick={paletteHantler}
          id={e.colorId}
          key={e.colorId}
          color={e.hexString}
        ></ColorElement>
      );
    } else {
      Grayscale.push(
        <ColorElement
          onClick={paletteHantler}
          id={e.colorId}
          key={e.colorId}
          color={e.hexString}
        ></ColorElement>
      );
    }
  });

  // (e) => {
  //   return (
  //     <ColorElement
  //       onClick={paletteHantler}
  //       id={e.colorId}
  //       key={e.colorId}
  //       color={e.hexString}
  //     ></ColorElement>
  //   );
  // };

  return (
    <PalateWrapper>
      <RangeWrapper color={"#878ac0"}>{FullColor}</RangeWrapper>
      <RangeWrapper>{Grayscale}</RangeWrapper>
      <RangeWrapper color={"#0d74db"}>{BaseColor}</RangeWrapper>
    </PalateWrapper>
  );
};
export default Palate;
