import { IAppCondition } from './../condition/types';
import { Dispatch } from 'react';
import { IEColor } from './../../../types/global';
import { IPsOneCondition } from './types'
import actions from './actions'
import { appConditionActions } from '../condition'
import { fetchColors } from '../../../api/coreapi';


const initializeBasicOptions = () => {
  return async (dispatch: Dispatch<IAppCondition | IPsOneCondition>): Promise<void> => {
    try {
      dispatch(appConditionActions.changeLoadStatus(true))
      const colorlist: IEColor[] = await fetchColors();
      if (colorlist) {
        dispatch(actions.setColorsList(colorlist))
      }
    } catch (e) {
      console.log('из санки', e.message)
    } finally {
      dispatch(appConditionActions.changeLoadStatus(false))
    }
  }
}

export default { initializeBasicOptions }