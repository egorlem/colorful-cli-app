import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appConditionActions } from '../../../state/redux/condition';

import SequencesList from './psoneoptions/sequenceslist';
import DropDownMenu from '../../global/select/dropdown';

import { PsOneItem } from '../leftmenu.styled';
import { IPromptElem } from '../../../types/global';
import { TAppState } from '../../../state/store';

interface IThisStatePart {
  status: null | string;
  activeControls: any[];
  currentElement: IPromptElem;
  psOneSequences: any[];
  selectedLine: number;
  psonemodel: IPromptElem[][];
}

const Sequences: React.FC = () => {
  const dispatch = useDispatch();
  const {
    status,
    activeControls,
    currentElement,
    psOneSequences,
    selectedLine,
    psonemodel,
  }: IThisStatePart = useSelector((state: TAppState) => {
    return {
      status: state.condition.appcondition.status,
      activeControls: state.condition.appcondition.activeControls,
      currentElement: state.style.psoneelement.currentElement,
      psOneSequences: state.style.psoneelement.psOneSequences,
      selectedLine: state.style.psoneelement.selectedLine,
      psonemodel: state.crud.psonecrud.psonemodel,
    };
  });

  const [elementSubMenu] = activeControls;
  const menuHandler = (accessory: string) => {
    return elementSubMenu.flag
      ? dispatch(appConditionActions.openControl(accessory))
      : dispatch(appConditionActions.closeControl(accessory));
  };

  return (
    <PsOneItem flag={true}>
      <div className="option-item-controlls">
        <DropDownMenu
          flag={elementSubMenu.flag}
          selectedItem={
            currentElement.text && currentElement.type === 'SEQUENCES'
              ? currentElement.text
              : 'Select escape sequences'
          }
          accessory={'elementMenu'}
          handler={menuHandler}
        >
          <SequencesList
            status={status}
            psOneSequences={psOneSequences}
            selectedLine={selectedLine}
            psonemodel={psonemodel}
          />
        </DropDownMenu>
      </div>
    </PsOneItem>
  );
};
export default React.memo(Sequences);
