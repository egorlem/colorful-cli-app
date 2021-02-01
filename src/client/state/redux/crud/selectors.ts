import { TAppState } from './../../store';
import { createSelector } from "reselect"

const getLineLength = (state: TAppState) => state.crud.psonecrud.psonemodel.length
const getSelectedLine = (state: TAppState) => state.style.psoneelement.selectedLine

const getLastLineIndex = createSelector(
  getLineLength,
  (getLineLength) => getLineLength - 1
)
const getPrevLineIndex = createSelector(
  getSelectedLine,
  (getSelectedLine) => getSelectedLine - 1
)


export default { getLineLength, getLastLineIndex, getPrevLineIndex }