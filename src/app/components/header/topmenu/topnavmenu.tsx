import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  TopMenuContainer,
  TonMenuItem,
  TopMenuLink,
} from './topnavmenu.styled';

const TopNavigationMenu: React.FC = () => {
  const currentshell = useSelector((state: any) => state.result.currentshell);
  const { pathname } = useLocation();
  return (
    <TopMenuContainer>
      <div className="test">{'text'}</div>
      <TonMenuItem flag={pathname === '/psone'}>
        <TopMenuLink
          className="TopMenuLink"
          to={`/psone?shell=${currentshell}`}
        >
          {'${.} Prompt'}
        </TopMenuLink>
      </TonMenuItem>
      <TonMenuItem flag={pathname === '/result'}>
        <TopMenuLink
          className="TopMenuLink"
          to={`/result?shell=${currentshell}`}
        >
          {'<.> Result'}
        </TopMenuLink>
      </TonMenuItem>
    </TopMenuContainer>
  );
};

export default TopNavigationMenu;
