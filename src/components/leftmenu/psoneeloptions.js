import React, { useState } from "react";
import MovePanel from "../global/buttons/movepanel";
import update from "immutability-helper";
import DropDownMenu from "../global/select/dropdown.jsx";
import Palate from "./psonecontrolls/palate";
import ColorInfo from "./psonecontrolls/colorinfo";
import SelectElement from "./psonecontrolls/selectpromptel";
import {
  StaticIcon,
  LeftDivider,
  RightDivider,
  ControllWrapper,
  Preview,
} from "../global/select/controls";

export const PsOneOptions = ({
  state,
  getFgColor,
  getBgColor,
  addNewPromptElem,
  setCurrentElement,
  changeSelection,
}) => {
  const isElSelected = state.init.elementSelected;

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
  const [open, OpenClose] = useState(true);
  return (
    <div className="psone-container">
      <div className="option-item">
        <div className="option-item-controlls">
          <DropDownMenu selectedItem={state.promptline.currentElement.text}>
            <SelectElement
              elements={state.promptline.cliOptions}
              setCurrentElement={setCurrentElement}
              changeSelection={changeSelection}
            />
          </DropDownMenu>
        </div>
      </div>
      <div>
        <div className="option-item">
          <div className="option-item-header">
            <div className="option-item__title">
              <Preview style={{ color: state.init.fgcolor.hexString }}>
                {"***"}
              </Preview>
              Foreground colors
            </div>
            <ControllWrapper
              open={open}
              onClick={() => {
                getCurrentColor();
                open ? OpenClose(false) : OpenClose(true);
              }}
            >
              <LeftDivider open={open}>{"["}</LeftDivider>
              <StaticIcon>{"i"}</StaticIcon>
              <RightDivider open={open}>{"]"}</RightDivider>
            </ControllWrapper>
          </div>
          {isElSelected && (
            <div className="option-item-controlls">
              <DropDownMenu selectedItem={state.init.fgcolor.name}>
                <Palate color={state.init.globalcolors} handler={getFgColor} />
              </DropDownMenu>
              {false && (
                <MovePanel
                  name={"FG"}
                  prev={dicrColorHandler}
                  reset={resetColor}
                  next={incrColorHandler}
                />
              )}
            </div>
          )}
        </div>
        <div className="option-item">
          <div className="option-item-header">
            <div className="option-item__title">
              <Preview style={{ color: state.init.bgcolor.hexString }}>
                {"***"}
              </Preview>
              Background colors
            </div>
            <ControllWrapper onClick={getCurrentColor} open={true}>
              <LeftDivider open={true}>{"["}</LeftDivider>
              <StaticIcon>{"i"}</StaticIcon>
              <RightDivider open={true}>{"]"}</RightDivider>
            </ControllWrapper>
          </div>
          {isElSelected && (
            <div className="option-item-controlls">
              <DropDownMenu selectedItem={state.init.bgcolor.name}>
                <Palate color={state.init.globalcolors} handler={getBgColor} />
              </DropDownMenu>
              {false && (
                <MovePanel
                  name={"BG"}
                  prev={dicrColorHandler}
                  reset={resetColor}
                  next={incrColorHandler}
                />
              )}
            </div>
          )}
        </div>
        {isElSelected && (
          <div
            onClick={() => {
              addNewPromptElem(state.promptline.currentElement);
            }}
          >
            кнопка
          </div>
        )}
      </div>
      {false && <ColorInfo color={state.init.fgcolor} />}
    </div>
  );
};
