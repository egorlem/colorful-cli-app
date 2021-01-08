import { IEColor, IPromptElem } from './global';
import {
  SETFGCOLOR, SETBGCOLOR, SETTEXTDECOR, REMOVETEXTDECOR, SETCURELEM, UPDATECURELEM,
  CHANGETEXT, CHANGEMODSTATUS, SETELEMTOINIT, SETLINE, CLOSEALLCONTROLS, CLOSECONTROL,
  OPENCONTROL
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
// ACTIONS 
// Stylize element
interface IAddFgColor {
  type: typeof SETFGCOLOR
  payload: IEColor
}
interface IAddBgColor {
  type: typeof SETBGCOLOR
  payload: IEColor
}
interface IAddTextDecor {
  type: typeof SETTEXTDECOR | typeof REMOVETEXTDECOR
  payload: string
}
interface IRemoveTextDecor {
  type: typeof REMOVETEXTDECOR
  payload: number | strgin
}
interface IChangeText {
  type: typeof CHANGETEXT
  payload: string
}
// Modify line
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
// App status
interface IEditModStatus {
  type: typeof CHANGEMODSTATUS
  payload: string
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

