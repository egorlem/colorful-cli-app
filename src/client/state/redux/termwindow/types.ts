import types from './action.types'


interface ImodOn {
  type: typeof types.MODEON
  payload?: any
}

interface ImodOff {
  type: typeof types.MODEOFF
  payload?: any
}


export type ITerm = ImodOn | ImodOff