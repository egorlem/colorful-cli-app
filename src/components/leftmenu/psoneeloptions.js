import React, { useState } from "react";
import MovePanel from "../global/buttons/movepanel";
import DropDownMenu from "../global/select/dropdown.jsx";
import Palate from "./psonecontrolls/palate";
import ColorInfo from "./psonecontrolls/colorinfo";
import SelectElement from "./psonecontrolls/selectpromptel";
import TextDecoration from "./psonecontrolls/textdecoration";
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
  setCurrentElementColor,
  resetOptions,
  openControl,
  closeControl,
  setElementStyle,
  removeElemtStyle,
}) => {
  const {
    sequences,
    currentElement,
    bgcolor,
    fgcolor,
    globalcolors,
    isElSelected,
    id,
    controls,
    textdecoration,
  } = state;
  const [elMenu, bgcMenu, fgcMenu] = controls;
  const setNewElement = () => {
    let newElement = {
      ...currentElement,
      bg: bgcolor,
      fg: fgcolor,
    };
    addNewPromptElem(newElement);
    resetOptions();
  };
  const incrColorHandler = (e) => {
    if (e.target.id === "FG") {
      let incrColorNum = fgcolor.colorId;
      if (fgcolor.colorId === 255) {
        return;
      }
      getFgColor(++incrColorNum);
    } else if (e.target.id === "BG") {
      let incrColorNum = bgcolor.colorId;
      if (bgcolor.colorId === 255) {
        return;
      }
      getBgColor(++incrColorNum);
    }
  };
  const dicrColorHandler = (e) => {
    if (e.target.id === "FG") {
      let dicrColorNum = fgcolor.colorId;
      if (fgcolor.colorId === 0) {
        return;
      }
      getFgColor(--dicrColorNum);
    } else if (e.target.id === "BG") {
      let dicrColorNum = bgcolor.colorId;
      if (bgcolor.colorId === 0) {
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
  const [open, OpenClose] = useState(true);
  return (
    <div className="psone-container">
      <div className="option-item">
        <div className="option-item-controlls">
          <DropDownMenu
            isOpen={elMenu.isOpen}
            selectedItem={
              currentElement.text
                ? currentElement.text
                : "Select escape sequences"
            }
            id={"elementMenu"}
            handler={elMenu.isOpen ? closeControl : openControl}
          >
            <SelectElement
              id={id}
              elements={sequences}
              setCurrentElement={setCurrentElement}
              changeSelection={changeSelection}
              setCurrentElementColor={setCurrentElementColor}
              bgcolor={bgcolor}
              fgcolor={fgcolor}
            />
          </DropDownMenu>
        </div>
      </div>
      <div>
        <div className="option-item">
          <div className="option-item-header">
            <div className="option-item__title">Foreground colors</div>
            <ControllWrapper
              open={open}
              onClick={() => {
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
              <DropDownMenu
                isOpen={fgcMenu.isOpen}
                handler={fgcMenu.isOpen ? closeControl : openControl}
                id={"fgColorMenu"}
                selectedItem={fgcolor.name ? fgcolor.name : ""}
                preview={
                  <Preview style={{ color: fgcolor.hexString }}>
                    {"░░░"}
                  </Preview>
                }
              >
                <Palate color={globalcolors} handler={getFgColor} />
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
            <div className="option-item__title">Background colors</div>
            <ControllWrapper open={true}>
              <LeftDivider open={true}>{"["}</LeftDivider>
              <StaticIcon>{"i"}</StaticIcon>
              <RightDivider open={true}>{"]"}</RightDivider>
            </ControllWrapper>
          </div>
          {isElSelected && (
            <div className="option-item-controlls">
              <DropDownMenu
                isOpen={bgcMenu.isOpen}
                handler={bgcMenu.isOpen ? closeControl : openControl}
                id={"bgColorMenu"}
                selectedItem={bgcolor.name ? bgcolor.name : ""}
                preview={
                  <Preview style={{ color: bgcolor.hexString }}>
                    {"░░░"}
                  </Preview>
                }
              >
                <Palate color={globalcolors} handler={getBgColor} />
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
          <div className="option-item">
            <div className="option-item-header">text docr</div>
            <div className="option-item-controlls">
              <TextDecoration
                textdecoration={textdecoration}
                setElementStyle={setElementStyle}
                currentElement={currentElement}
                removeElemtStyle={removeElemtStyle}
              />
            </div>
          </div>
        )}
        {isElSelected && <div onClick={setNewElement}>кнопка</div>}
      </div>
      {false && <ColorInfo color={fgcolor} />}
    </div>
  );
};
