import React from "react";
import "./palate.scss";
const Palate = ({ color, handler }) => {
  const paletteHantler = (e) => {
    handler(e.target.id);
  };
  let res = color.map((e) => {
    const style = {
      background: e.hexString,
    };
    return (
      <div
        onClick={paletteHantler}
        className="palette__item"
        id={e.colorId}
        key={e.colorId}
        style={style}
      ></div>
    );
  });
  return <div className="palette">{res}</div>;
};
export default Palate;
