import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextAreaWrapper, CustomTextArea } from './customtext.styled';
import { ChangeCustomText } from '../../../../redux/psoneoptionsreducer';
import { PsOneItem } from '../styled.psone';

export const CustomText: React.FC = () => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const {
    psOneOptions: {
      currentElement: { sequences },
    },
  } = state;

  const changeHandler = (event: any): void => {
    const currenttext = event.target.value;
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
