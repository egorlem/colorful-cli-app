import React from "react";
import Styled from "styled-components";
import "./palate.scss";
const PalateWrapper = Styled.div`
  width: 100%;
  background: white;
  visibility: ${(props) => (props.flag ? "hidden" : "visible")};
  border-left: 5px solid #f1f1f1;
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
      <div
        onClick={paletteHantler}
        className="palette__item"
        id={e.colorId}
        key={e.colorId}
        style={{ background: e.hexString }}
      ></div>
    );
  });

  const BaseColor = globalcolors.map((e) => {
    if (e.colorId > 16) {
      return;
    }
    return (
      <div
        onClick={paletteHantler}
        className="palette__item"
        id={e.colorId}
        key={e.colorId}
        style={{ background: e.hexString }}
      ></div>
    );
  });

  return (
    <PalateWrapper>
      <div className="palette">
        {GradientColor}
        {BaseColor}
      </div>{" "}
    </PalateWrapper>
  );
};
export default Palate;
