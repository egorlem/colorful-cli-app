import React from 'react';
import TextDecoration from '../psonecontrolls/textdecoration';
import { PsOneItem } from '../styled.psone';

export const TextDecorationOption: React.FC = (state: any) => {
  return (
    <PsOneItem flag={true}>
      <div className="option-item-controlls">
        <TextDecoration {...state} />
      </div>
    </PsOneItem>
  );
};
