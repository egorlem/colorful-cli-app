import React from "react";
import TopNavigationMenu from "../components/header/topmenu/topnavmenu";
import AppHeader from "../components/header/AppHeader";

export const HeaderArea = () => {
  return (
    <>
      {/* <div>
        <div className="content--limiter">
          <AppHeader />
        </div>
      </div> */}
      <div className="header-submenu--background-container">
        <div className="content--limiter">
          <TopNavigationMenu />
        </div>
      </div>
    </>
  );
};
