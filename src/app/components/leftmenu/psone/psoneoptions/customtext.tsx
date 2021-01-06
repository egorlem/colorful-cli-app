import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeCustomText } from '../../../../redux/psoneoptionsreducer';

export const CustomText: React.FC = () => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const {
    psOneOptions: {
      currentElement: { sequences },
    },
  } = state;

  const changeHandler = (event: any): void => {
    if (sequences.length) {
      const currenttext = event.target.value;
      dispatch(ChangeCustomText(currenttext));
    }
  };
  return (
    <div>
      <div>{sequences.length}/60</div>
      <textarea value={sequences} onChange={changeHandler}></textarea>
    </div>
  );
};
