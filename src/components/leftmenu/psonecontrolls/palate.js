import React from "react";
import "./palate.scss";

const Palate = ({ color, handler }) => {
  const paletteHantler = (e) => {
    handler(e.target.id);
  };
  const GradientColor = color.map((e) => {
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
  const BaseColor = color.map((e) => {
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
    <div className="palette">
      {GradientColor}
      {BaseColor}
    </div>
  );
};
export default Palate;
