import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Palette from './psoneoptions/palette';
import { PsOneItem } from '../leftmenu.styled';
import DropDownMenu from '../../global/select/dropdown';
import { TAppState } from '../../../state/store';
import { styleActions } from '../../../state/redux/style';
import { appConditionActions } from '../../../state/redux/condition';

const ForegroundColors: React.FC = () => {
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
  const [, , fgSubMenu] = activeControls;
  const FgColorHandler = (color: any) => {
    dispatch(styleActions.getFgColor(color));
  };

  const menuHandler = (accessory: string) => {
    return fgSubMenu.flag
      ? dispatch(appConditionActions.openControl(accessory))
      : dispatch(appConditionActions.closeControl(accessory));
  };

  return (
    <PsOneItem flag={fgSubMenu.flag}>
      <div className="option-item-controlls">
        <DropDownMenu
          flag={fgSubMenu.flag}
          handler={status && menuHandler}
          accessory={'fgColorMenu'}
          selectedItem={'Foreground color'}
          status={!!status}
        >
          <Palette
            globalcolors={globalcolors}
            colorHandler={FgColorHandler}
            flag={fgSubMenu.flag}
          />
        </DropDownMenu>
      </div>
    </PsOneItem>
  );
};
export default React.memo(ForegroundColors);
