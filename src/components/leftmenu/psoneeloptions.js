import React from "react";
import MovePanel from "../global/buttons/movepanel";
import update from "immutability-helper";
import DropDownMenu from "../global/select/dropdown.jsx";
import Palate from "./psonecontrolls/palate";
import ColorInfo from "./psonecontrolls/colorinfo";
import SelectElement from "./psonecontrolls/selectpromptel";

export const PsOneOptions = ({
  state,
  getFgColor,
  getBgColor,
  addNewPromptElem,
  setCurrentElement,
}) => {
  const incrColorHandler = (e) => {
    if (e.target.id === "FG") {
      let incrColorNum = state.init.fgcolor.colorId;
      if (state.init.fgcolor.colorId === 255) {
        return;
      }
      getFgColor(++incrColorNum);
    } else if (e.target.id === "BG") {
      let incrColorNum = state.init.bgcolor.colorId;
      if (state.init.bgcolor.colorId === 255) {
        return;
      }
      getBgColor(++incrColorNum);
    }
  };
  const dicrColorHandler = (e) => {
    if (e.target.id === "FG") {
      let dicrColorNum = state.init.fgcolor.colorId;
      if (state.init.fgcolor.colorId === 0) {
        return;
      }
      getFgColor(--dicrColorNum);
    } else if (e.target.id === "BG") {
      let dicrColorNum = state.init.bgcolor.colorId;
      if (state.init.bgcolor.colorId === 0) {
        return;
      }
      getBgColor(--dicrColorNum);
    }
  };
  const resetColor = (e) => {
    if (e.target.id === "FG") {
      getFgColor(255);
    } else if (e.target.id === "BG") {
      getBgColor(0);
    }
  };
  const getCurrentColor = (e) => {
    console.log(e);
  };

  return (
    <div className="psone-container">
      <div
        className="psone-title"
        onClick={() => {
          addNewPromptElem(state.promptline.currentElement);
        }}
      >
        add
      </div>
      <div className="psone-elemet-select">
        <DropDownMenu selectedItem={state.promptline.currentElement.text}>
          <SelectElement
            bgcolor={state.init.bgcolor.hexString}
            fgcolor={state.init.fgcolor.hexString}
            elements={state.promptline.cliOptions}
            setCurrentElement={setCurrentElement}
          />
        </DropDownMenu>
      </div>
      <div className="psone-colors-options">
        <div className="color-contrellers psone-foreground">
          <div className="color-contrellers__text">
            <span style={{ background: state.init.fgcolor.hexString }}>
              Foreground colors
            </span>
            <span onClick={getCurrentColor} className="nav-handler">
              {"[i]"}
            </span>
          </div>
          <DropDownMenu selectedItem={state.promptline.currentElement.text}>
            <Palate color={state.init.globalcolors} handler={getFgColor} />
            <MovePanel
              name={"FG"}
              prev={dicrColorHandler}
              reset={resetColor}
              next={incrColorHandler}
            />
          </DropDownMenu>
        </div>
        <div className="color-contrellers psone-background">
          <div className="color-contrellers__text">
            <span style={{ background: state.init.bgcolor.hexString }}>
              Background colors
            </span>
            <span onClick={getCurrentColor} className="nav-handler">
              {"[i]"}
            </span>
          </div>
          <DropDownMenu selectedItem={state.promptline.currentElement.text}>
            <Palate color={state.init.globalcolors} handler={getBgColor} />
            <MovePanel
              name={"BG"}
              prev={dicrColorHandler}
              reset={resetColor}
              next={incrColorHandler}
            />
          </DropDownMenu>
        </div>
      </div>
      {false && <ColorInfo color={state.init.fgcolor} />}
    </div>
  );
};
