import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextAreaWrapper, CustomTextArea } from './customtext.styled';
import { styleActions } from '../../../state/redux/style';
import { PsOneItem } from '../leftmenu.styled';
import { TAppState } from '../../../state/store';

export const CustomText: React.FC = () => {
  const dispatch = useDispatch();
  const sequences = useSelector(
    (state: TAppState) => state.style.psoneelement.currentElement.sequences
  );

  const changeHandler = (event: any): void => {
    let regexp = /[^a-zа-яё,._\-\/=\!\?0-9\s]/gi;
    let currenttext = event.target.value;
    currenttext = currenttext.replace(/^\s/, '');
    currenttext = currenttext.replace(/  /, ' ');
    currenttext = currenttext.replace(regexp, '');
    currenttext = currenttext.substr(0, 60);
    dispatch(styleActions.ChangeCustomText(currenttext));
  };
  return (
    <TextAreaWrapper>
      <PsOneItem flag={true}>
        <div>Custom text {sequences.length}/60</div>
        <CustomTextArea
          className="custom__text"
          value={sequences}
          onChange={changeHandler}
          placeholder="Start typing"
        ></CustomTextArea>
      </PsOneItem>
    </TextAreaWrapper>
  );
};
