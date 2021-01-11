import types from './action.types'

export interface ICodeStete {
  init: any,
  basePsOneVar: string
  esc: string
  codeline: any[],
  bgVar: any[],
  fgVar: any[],
  variableList: any[],
  psonestring: any[],
}

interface IsetResultCodeLine {
  type: typeof types.SETCODE
  payload: any
}

export type ICodeLine = IsetResultCodeLine