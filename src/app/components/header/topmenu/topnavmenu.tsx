import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  TopMenuContainer,
  TonMenuItem,
  TopMenuLink,
} from './topnavmenu.styled';

const TopNavigationMenu: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <TopMenuContainer>
      <div className="test">{'text'}</div>
      <TonMenuItem flag={pathname === '/psone'}>
        <TopMenuLink className="TopMenuLink" to="/psone">
          {'${...} Prompt'}
        </TopMenuLink>
      </TonMenuItem>
      <TonMenuItem flag={pathname === '/result'}>
        <TopMenuLink className="TopMenuLink" to="/result">
          {'<...> Result'}
        </TopMenuLink>
      </TonMenuItem>
    </TopMenuContainer>
  );
};

export default TopNavigationMenu;
