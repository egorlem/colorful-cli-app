import React from 'react';
import TopNavigationMenu from '../components/header/topmenu/topnavmenu';

export const HeaderArea: React.FC = () => {
  return (
    <>
      <div className="header-submenu--background-container">
        <div className="content--limiter">
          <TopNavigationMenu />
        </div>
      </div>
    </>
  );
};
