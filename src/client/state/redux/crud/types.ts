import { IPromptElem } from '../../../types/global';
import types from "./action.types"

export interface IElementCrud {
  lineIndex: number,
  index?: number | null
  element?: IPromptElem
}
export interface IElementPosition extends IElementCrud {
  atIndex?: number
  card: IPromptElem
}
// Initial state.
export interface IPsOneLineModel {
  psonemodel: Array<Array<IPromptElem>>
}

// Element crud actions 
interface IaddNewElem {
  type: typeof types.ADDNEWELEM
  payload: IElementCrud
}
interface IupdateSelectedElem {
  type: typeof types.UPDATESELECTEDELEM
  payload: IElementCrud
}
interface IdeleteElem {
  type: typeof types.DELETESELECTRD
  payload: IElementCrud
}
// Element position and line crud actions
interface ImoveElemForward {
  type: typeof types.MOVEFORWARD
  payload: IElementPosition
}
interface ImoveElemBack {
  type: typeof types.MOVEBACK
  payload: IElementPosition
}
interface IaddNewLine {
  type: typeof types.ADDNEWLINE
  payload?: any
}
interface IdeleteCurrLine {
  type: typeof types.REMOVELINE
  payload: { index: number }
}

export type IPsOneEelement = IaddNewElem | IupdateSelectedElem | IdeleteElem
export type IPsOnePositon = ImoveElemForward | ImoveElemBack | IaddNewLine | IdeleteCurrLine

