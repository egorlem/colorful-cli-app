import types from './action.types'

const editModOn = <T extends object>(payload: T) => {
  debugger;
  return { type: types.MODEON, payload };
};
const editModOff = () => {
  return { type: types.MODEOFF };
};

export default { editModOff, editModOn }