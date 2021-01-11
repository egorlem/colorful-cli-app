import types from './action.types'
import {
  IPsOneEelement, IPsOnePositon, IElementPosition, IElementCrud
} from './types'

/**@description Add new new element to result PS1 line*/
const addNewPromptElem = (payload: IElementCrud): IPsOneEelement => {
  return { type: types.ADDNEWELEM, payload };
};
/**@description Update selected element. Selected === Current*/
const updateSelectedElement = (payload: IElementCrud): IPsOneEelement => {
  return { type: types.UPDATESELECTEDELEM, payload };
};
/**@description */
const deleteSelectedElement = (payload: IElementCrud): IPsOneEelement => {
  return { type: types.DELETESELECTRD, payload };
};

/**@description */
export const moveElementForward = (payload: IElementPosition): IPsOnePositon => {
  return { type: types.MOVEFORWARD, payload };
};
/**@description*/
export const moveElementBack = (payload: IElementPosition): IPsOnePositon => {
  return { type: types.MOVEBACK, payload };
};
/**@description*/
export const addNewLine = (): IPsOnePositon => {
  return { type: types.ADDNEWLINE };
};
/**@description*/
export const deleteCurrentLine = (payload: any): IPsOnePositon => {
  return { type: types.REMOVELINE, payload } as any
};
export default {
  addNewPromptElem, updateSelectedElement, deleteSelectedElement,
  moveElementForward, moveElementBack, addNewLine, deleteCurrentLine
}