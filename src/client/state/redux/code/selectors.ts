import { createSelector } from "reselect"
import { TAppState } from './../../store';

const getCombinedResult = (state: TAppState) => {
  return [...state.code.code.variableList, ...state.code.code.psonestring]
}

const getCombinedResultWithId = createSelector(
  getCombinedResult,
  ResultWithId => ResultWithId.map((e, i) => {
    return { section: e, id: `line${i}`, linenum: ++i }
  })
)
export default { getCombinedResultWithId }