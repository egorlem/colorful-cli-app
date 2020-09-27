import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./topmenu.scss";
const TopNavigationMenu = () => {
  //   let location = useLocation();
  //console.log(location.pathname === "/");
  return (
    <div className="top-menu">
      <div>
        <NavLink className="top-menu__item" to="/">
          PS1
        </NavLink>
      </div>
      <NavLink
        className="top-menu__item"
        activeClassName="is-active"
        to="/result"
      >
        Result
      </NavLink>
      <NavLink
        className="top-menu__item"
        activeClassName="is-active"
        to="/setings"
      >
        Setings
      </NavLink>
    </div>
  );
};

export default TopNavigationMenu;
