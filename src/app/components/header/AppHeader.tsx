import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader: React.FC = () => {
  return (
    <div className="app-header--container">
      <div className="logo">
        <div className="logo__img"></div>
      </div>
      <NavLink to="about">about</NavLink>
    </div>
  );
};

export default AppHeader;
