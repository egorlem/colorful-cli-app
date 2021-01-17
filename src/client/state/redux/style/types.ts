import { IEColor, IPromptElem } from '../../../types/global';
import types from './action.types'

export interface ISequences {
  code: string
  sequences: string
  text: string
  type: string
}

export interface IPsOneStyleAndCondition {
  selectedLine: number
  status: string | null
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
// eLement style crud
interface IAddFgColor {
  type: typeof types.SETFGCOLOR
  payload: IEColor
}
interface IAddBgColor {
  type: typeof types.SETBGCOLOR
  payload: IEColor
}
interface IAddTextDecor {
  type: typeof types.SETTEXTDECOR
  payload: any
}
interface IRemoveTextDecor {
  type: typeof types.REMOVETEXTDECOR
  payload: number
}
interface IChangeText {
  type: typeof types.CHANGETEXT
  payload: string
}

export type IPsOneStyle = IAddFgColor | IAddBgColor | IAddTextDecor
  | IRemoveTextDecor | IChangeText

// psone condition 
interface IAddCurElem {
  type: typeof types.SETCURELEM
  payload: ISequences
}
interface IUpdateCurElem {
  type: typeof types.UPDATECURELEM
  payload: {
    curCard: IPromptElem
    oringIndex: number
  }
}
interface IUpdateElementPosition {
  type: typeof types.UPDATEPOSITION
  payload: {
    arPosition: number
  }
}
interface ISetCurElemToInit {
  type: typeof types.SETELEMTOINIT
  payload?: any
}
interface ISetLine {
  type: typeof types.SETLINE
  payload: number
}
export type IPsOneCondition = IAddCurElem | IUpdateCurElem | ISetCurElemToInit
  | ISetLine | IUpdateElementPosition


