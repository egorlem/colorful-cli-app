import types from "./action.types"

/**@description*/
const getResultCodeLine = () => {
  return { type: 'GET_RESULT_CODE_LINE' };
};

/**@description*/
const setResultCodeLine = (payload: string) => {
  return { type: types.SETCODE, payload };
};

export default { getResultCodeLine, setResultCodeLine }