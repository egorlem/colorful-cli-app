import React from "react";
import { Input } from "../global/select/inputrange";

const ColorInfo = ({ color }) => {
  console.log(color);
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

export const PsOneOptions = ({ state }) => {
  const incrColorHandler = (e) => {
    if (e.target.id === "FG") {
      let incrColorNum = state.state.fgcolor.colorId;
      if (state.state.fgcolor.colorId === 255) {
        return;
      }
      state.getFgColor(++incrColorNum);
    } else if (e.target.id === "BG") {
      let incrColorNum = state.state.bgcolor.colorId;
      if (state.state.bgcolor.colorId === 255) {
        return;
      }
      state.getBgColor(++incrColorNum);
    }
  };
  const dicrColorHandler = (e) => {
    if (e.target.id === "FG") {
      let dicrColorNum = state.state.fgcolor.colorId;
      if (state.state.fgcolor.colorId === 0) {
        return;
      }
      state.getFgColor(--dicrColorNum);
    } else if (e.target.id === "BG") {
      let dicrColorNum = state.state.bgcolor.colorId;
      if (state.state.bgcolor.colorId === 0) {
        return;
      }
      state.getBgColor(--dicrColorNum);
    }
  };
  const resetColor = (e) => {
    if (e.target.id === "FG") {
      state.getFgColor(255);
    } else if (e.target.id === "BG") {
      state.getBgColor(0);
    }
  };
  const getCurrentColor = (e) => {
    console.log(e);
  };

  return (
    <div className="psone-container">
      <div className="psone-title">PS1 prompt options</div>
      <div className="psone-elemet-select">init cur element</div>
      <div className="psone-color-mode">
        <span>Color mode:</span>
        <span> 8 bit</span>
      </div>
      <div className="psone-colors-options">
        <div className="color-contrellers psone-foreground">
          <div className="color-contrellers__text">
            <span>Foreground colors</span>
            <span onClick={getCurrentColor} className="nav-handler">
              {"[i]"}
            </span>
          </div>
          <div className="color-contrellers__control-range">
            <Input
              color={state.state.fgcolor.hexString}
              handler={state.getFgColor}
              value={state.state.fgcolor.colorId}
            />
          </div>
          <div className="color-contrellers__control-buttons">
            <span
              id="FG"
              onClick={dicrColorHandler}
              className="color-mode-nandler"
            >
              {`[ <|| ]`}
            </span>
            <span id="FG" onClick={resetColor} className="color-mode-nandler">
              {`[ reset ]`}
            </span>
            <span
              id="FG"
              onClick={incrColorHandler}
              className="color-mode-nandler"
            >
              {`[ ||> ]`}
            </span>
          </div>
        </div>

        <div className="color-contrellers psone-background">
          <div className="color-contrellers__text">
            <span>Background colors</span>
            <span onClick={getCurrentColor} className="nav-handler">
              {"[i]"}
            </span>
          </div>
          <div className="color-contrellers__control-range">
            <Input
              color={state.state.bgcolor.hexString}
              handler={state.getBgColor}
              value={state.state.bgcolor.colorId}
            />
          </div>

          <div className="color-contrellers__control-buttons">
            <span
              id="BG"
              onClick={dicrColorHandler}
              className="color-mode-nandler"
            >
              {`[ <|| ]`}
            </span>
            <span id="BG" onClick={resetColor} className="color-mode-nandler">
              {`[ reset ]`}
            </span>
            <span
              onMouseDown={incrColorHandler}
              id="BG"
              className="color-mode-nandler"
            >
              {`[ ||> ]`}
            </span>
          </div>
        </div>
      </div>
      <ColorInfo color={state.state.fgcolor} />
    </div>
  );
};
