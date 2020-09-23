import React from "react";
import "./colorinfo.scss";
const ColorInfo = ({ color }) => {
  return (
    <div className="psone-options-info">
      <div className="psone-options-info__title">
        <span>init</span>
        <span className="nav-handler">{"[x]"}</span>
      </div>
      <div className="psone-options-info__text">
        <div className="info-cont">
          <span className="c-name">Term:</span>
          <span className="c-res">{color.colorId}</span>
        </div>
        <div className="info-cont">
          <span className="c-name">Hex::</span>
          <span className="c-res">{color.hexString}</span>
        </div>
        <div className="info-cont">
          <span className="c-name">RGB::</span>
          <span className="c-res">
            rgb({color.rgb.r}, {color.rgb.g}, {color.rgb.b})
          </span>
        </div>
        <div className="info-cont">
          <span className="c-name">Name:</span>
          <span className="c-res">{color.name}</span>
        </div>
        <div className="info-cont">
          <span className="c-name">HSL::</span>
          <span className="c-res">hsl(init)</span>
        </div>
      </div>
    </div>
  );
};

export default ColorInfo;
