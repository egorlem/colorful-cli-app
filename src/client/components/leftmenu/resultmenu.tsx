import React, { useState } from 'react';
import DropDownMenu from '../global/select/dropdown';
import styled from 'styled-components';
import { LeftMenuControllsWrapper, PsOneItem } from './leftmenu.styled';

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

const ResultLeftMenu: React.FC = () => {
  const [menuFlag, changeMenuFlag] = useState(true);
  const openClose = () => {
    if (status) {
      return menuFlag ? changeMenuFlag(false) : changeMenuFlag(true);
    }
  };
  return (
    <div>
      <LeftMenuControllsWrapper>
        <PsOneItem flag={menuFlag}>
          <div className="option-item-controlls">
            <DropDownMenu
              flag={menuFlag}
              selectedItem={`bash`}
              handler={openClose}
              status={false}
            >
              <ShellList />
            </DropDownMenu>
          </div>
        </PsOneItem>
      </LeftMenuControllsWrapper>
    </div>
  );
};
export default ResultLeftMenu;
