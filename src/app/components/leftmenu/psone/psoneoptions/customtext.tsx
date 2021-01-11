import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextAreaWrapper, CustomTextArea } from './customtext.styled';
import { ChangeCustomText } from '../../../../redux/psoneoptionsreducer';
import { PsOneItem } from '../styled.psone';

export const CustomText: React.FC = () => {
  const sequences = useSelector(
    (state: any) => state.psOneOptions.currentElement.sequences
  );
  const dispatch = useDispatch();
  // const {
  //   psOneOptions: {
  //     currentElement: { sequences },
  //   },
  // } = state;

  const changeHandler = (event: any): void => {
    let regexp = /[^a-zа-яё,._\-\/=\!\?0-9\s]/gi;
    let currenttext = event.target.value;
    currenttext = currenttext.replace(/^\s/, '');
    currenttext = currenttext.replace(/  /, ' ');
    currenttext = currenttext.replace(regexp, '');
    currenttext = currenttext.substr(0, 60);
    dispatch(ChangeCustomText(currenttext));
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
