import { createSelector } from "reselect"
import { TAppState } from './../../store';

const getCombinedResult = (state: TAppState) => {
  return [...state.code.code.variableList, ...state.code.code.psonestring]
}
type TCombinedResult = typeof getCombinedResult

const getCombinedResultWithId = createSelector(
  getCombinedResult,
  (resultWithId: ReturnType<TCombinedResult>) => resultWithId.map((e, i) => {
    return { section: e, id: `line${i}`, linenum: ++i }
  })
)
const getResultForCopying = createSelector(
  getCombinedResult,
  (ResultToString: ReturnType<TCombinedResult>) => ResultToString.join('\n')
)
export default { getCombinedResultWithId, getResultForCopying }