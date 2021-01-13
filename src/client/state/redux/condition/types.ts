import types from './action.types'

export interface ILeftMenuControls {
  name: string
  flag: boolean
}
export interface IGlobalAppCondition {
  status: string | null
  activeControls: ILeftMenuControls[]
  currentshell: string
}

// app condition actions
interface IEditModStatus {
  type: typeof types.CHANGEMODSTATUS
  payload: string | null
}
interface ICloseCtrl {
  type: typeof types.CLOSECONTROL
  payload: string
}
interface IOpenCtrl {
  type: typeof types.OPENCONTROL
  payload: string
}
interface ICloseAllCtrls {
  type: typeof types.CLOSEALLCONTROLS
  payload?: any
}

export type IAddCondition = IEditModStatus | ICloseCtrl | IOpenCtrl | ICloseAllCtrls