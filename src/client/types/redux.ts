import { IEColor, IPromptElem } from './global';
import {
  SETFGCOLOR, SETBGCOLOR, SETTEXTDECOR, REMOVETEXTDECOR, SETCURELEM, UPDATECURELEM,
  CHANGETEXT, CHANGEMODSTATUS, SETELEMTOINIT, SETLINE, CLOSEALLCONTROLS, CLOSECONTROL,
  OPENCONTROL, ADDNEWELEM, ADDNEWLINE, REMOVELINE, DELETESELECTRD, UPDATESELECTEDELEM,
  MOVEFORWARD, MOVEBACK

} from './../redux/actiontypes';

interface IAppControls {
  name: string
  flag: boolean
}
export interface ISequences {
  code: string
  sequences: string
  text: string
  type: string
}

export interface IresultState {
  currentshell: String
  resPsOneLine: IPromptElem[][]
}


// PSONE actions Stylize element
interface IAddFgColor {
  type: typeof SETFGCOLOR
  payload: IEColor
}
interface IAddBgColor {
  type: typeof SETBGCOLOR
  payload: IEColor
}
interface IAddTextDecor {
  type: typeof SETTEXTDECOR
  payload: { code: string, style: string }
}
interface IRemoveTextDecor {
  type: typeof REMOVETEXTDECOR
  payload: number
}
interface IChangeText {
  type: typeof CHANGETEXT
  payload: string
}
// PSONE actions Modify line
interface IAddCurElem {
  type: typeof SETCURELEM
  payload: ISequences
}
interface IUpdateCurElem {
  type: typeof UPDATECURELEM
  payload: {
    curCard: IPromptElem
    oringIndex: number
  }
}
interface ISetLine {
  type: typeof SETLINE
  payload: number
}
// PSONE actions App status
interface IEditModStatus {
  type: typeof CHANGEMODSTATUS
  payload: string | null
}
interface IResetCurElem {
  type: typeof SETELEMTOINIT
}
interface ICloseCtrl {
  type: typeof CLOSECONTROL
  payload: string
}
interface IOpenCtrl {
  type: typeof OPENCONTROL
  payload: string
}
interface ICloseAllCtrls {
  type: typeof CLOSEALLCONTROLS
}

//RESULT actions  
export interface IResultElement {
  lineIndex: number
  index: number
  element: IPromptElem
}
interface IaddNewElem {
  type: typeof ADDNEWELEM
  payload: IResultElement
}
interface IupdateSelectedElem {
  type: typeof UPDATESELECTEDELEM
  payload: IResultElement
}
interface IdeleteElem {
  type: typeof DELETESELECTRD
  payload: {
    index: number
    lineIndex: number
  }
}
export interface IElementPosition extends IResultElement {
  atIndex: number
  card: IPromptElem
}
interface ImoveElemForward {
  type: typeof MOVEFORWARD
  payload: IElementPosition
}
interface ImoveElemBack {
  type: typeof MOVEBACK
  payload: IElementPosition
}
interface IaddNewLine {
  type: typeof ADDNEWLINE
}
interface IdeleteCurrLine {
  type: typeof REMOVELINE
  payload: any
}
// STATE
export interface IpsOneOptionsState {
  selectedLine: number
  status: string | null
  activeControls: IAppControls[]
  initialElement: IPromptElem
  globalcolors: IEColor[]
  textdecoration: any
  symbols: any
  fgcolor: IEColor
  bgcolor: IEColor
  psOneSequences: ISequences[]
  orignIndex: number | null
  currentElement: IPromptElem
}


export type IPsOneElmStyleActions = IAddFgColor | IAddBgColor | IAddTextDecor
  | IRemoveTextDecor | IChangeText

export type IPsOneLineActions = IAddCurElem | IUpdateCurElem | ISetLine

export type IAppStatus = IEditModStatus | IResetCurElem | ICloseAllCtrls | ICloseCtrl
  | IOpenCtrl

// result 
export type IResultActions = IaddNewElem | IupdateSelectedElem | IdeleteElem
  | ImoveElemForward | ImoveElemBack | IaddNewLine | IdeleteCurrLine


