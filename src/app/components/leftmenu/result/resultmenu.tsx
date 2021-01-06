import React, { useState } from 'react';
import DropDownMenu from '../../global/select/dropdown';
import styled from 'styled-components';
import { ISFlag } from '../../../types/global';

export const PsOneControllsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'JetBrains', monospace;
  font-weight: 400;
  background-color: #252526;
  top: 0;
  left: 45px;
  color: #e9e9e9;
  padding-left: 4px;
  padding-right: 4px;
  //width: 365px;
`;

export const PsOneItem = styled.div`
  transition: padding-bottom 0.1s;
  font-size: 1.5rem;
  padding-top: 6px;
  padding-bottom: ${(props: ISFlag) => (props?.flag ? '6px' : '12px')};
  border-bottom: 1px solid #474747;
`;

const SelectWrapper = styled.ul`
  width: 100%;
  background: #252526;
  visibility: ${(props: any) => (props.flag ? 'hidden' : 'visible')};
`;
const SelectItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #474747;
  padding: 6px 0 6px 2px;
  border-left: 5px solid ${(props: any) => props.color || '#6ebb70'};
  &:first-child {
    border-top: 1px solid #474747;
  }
  &:last-child {
    margin-bottom: 10px;
  }
  &:hover {
    background: #55555d;
    color: #fafafa;
  }
`;
const ItemTitele = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`;
const ItemPreview = styled.div`
  font-size: 1.2rem;
  padding-right: 10px;
  &:before {
    content: '|';
  }
`;

export { SelectWrapper, SelectItem, ItemTitele, ItemPreview };

const ShellList: React.FC = () => {
  const shells = ['bash', 'zsh', 'ksh', 'csh', 'tcsh'];
  const list = shells.map((e, i) => {
    return (
      <SelectItem key={i}>
        <ItemTitele>{e}</ItemTitele>
      </SelectItem>
    );
  });
  return <SelectWrapper>{list}</SelectWrapper>;
};

export const ResultMenu: React.FC = () => {
  const [menuFlag, changeMenuFlag] = useState(true);
  const openClose = () => {
    menuFlag ? changeMenuFlag(false) : changeMenuFlag(true);
  };
  return (
    <PsOneControllsWrapper>
      <PsOneItem flag={menuFlag}>
        <div className="option-item-controlls">
          <DropDownMenu
            flag={menuFlag}
            selectedItem={`Current shell: bash`}
            handler={openClose}
          >
            <ShellList />
          </DropDownMenu>
        </div>
      </PsOneItem>
    </PsOneControllsWrapper>
  );
};
