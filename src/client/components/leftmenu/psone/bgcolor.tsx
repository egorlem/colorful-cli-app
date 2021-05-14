import React from 'react';
import DropDownMenu from '../../global/select/dropdown';
import { appConditionActions } from '../../../state/redux/condition';
import Palette from './psoneoptions/palette';
import { PsOneItem } from '../leftmenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { TAppState } from '../../../state/store';
import { styleActions } from '../../../state/redux/style/';

const BackgroundColors: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { status, activeControls, globalcolors, currentElement } = useSelector(
    (state: TAppState) => {
      return {
        status: state.condition.appcondition.status,
        activeControls: state.condition.appcondition.activeControls,
        globalcolors: state.style.psoneelement.colors,
        currentElement: state.style.psoneelement.currentElement,
      };
    }
  );
  
  const [, bgSubMenu] = activeControls;
  const BgColorHandler = (color: any) => {
    dispatch(styleActions.getBgColor(color));
  };

  const menuHandler = (accessory: string) => {
    return bgSubMenu.flag
      ? dispatch(appConditionActions.openControl(accessory))
      : dispatch(appConditionActions.closeControl(accessory));
  };
  return (
    <PsOneItem flag={bgSubMenu.flag}>
      <div className="option-item-controlls">
        <DropDownMenu
          flag={bgSubMenu.flag}
          handler={status && menuHandler}
          accessory={'bgColorMenu'}
          selectedItem={'Background colors'}
          status={!!status}
        >
          <Palette
            globalcolors={globalcolors}
            colorHandler={BgColorHandler}
            flag={bgSubMenu.flag}
          />
        </DropDownMenu>
      </div>
    </PsOneItem>
  );
};
export default React.memo(BackgroundColors);
