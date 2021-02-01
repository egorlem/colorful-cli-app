import { createSelector } from "reselect"
import { TAppState } from './../../store';


const getVariableList = (state: TAppState) => state.code.code.variableList
const getPsOneString = (state: TAppState) => state.code.code.psonestring
const getEmetyLines = (state: TAppState) => state.code.code.emptyLines

const getCombinedResult = createSelector(
  getVariableList, getPsOneString,
  (a, b) => {
    return [...a, ...b]
  }
)

type TCombinedResult = typeof getCombinedResult

const getEmptyLines = createSelector(
  getCombinedResult, getEmetyLines,
  (a, b) => b - a.length
)

const getCombinedResultWithId = createSelector(
  getCombinedResult,
  (resultWithId: ReturnType<TCombinedResult>) => resultWithId.map((e, i) => {
    return { section: e, id: `line${i}`, linenum: ++i }
  })
)

const getResultForCopying = createSelector(
  getCombinedResult,
  (ResultToString: ReturnType<TCombinedResult>) => {
    return ResultToString.join('\n')
  }
)
export default { getCombinedResultWithId, getResultForCopying, getEmptyLines }
