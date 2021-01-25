import React from 'react';
import TextDecoration from '../psone/psoneoptions/textdecoration';
import { PsOneItem } from '../leftmenu.styled';

export const TextDecorationOption: React.FC = () => {
  return (
    <PsOneItem flag={true}>
      <div className="option-item-controlls">
        <TextDecoration />
      </div>
    </PsOneItem>
  );
};
