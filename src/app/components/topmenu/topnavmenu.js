import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./topmenu.scss";
import Styled from "styled-components";

const TopMenuContainer = Styled.div`
  display: flex;
  border-bottom: 1px solid #e1e4e8;
  margin-bottom: 10px;
`;
const TonMenuItem = Styled.div`
  transition:  border-bottom 0.2s, color 0.2s;
  font-size: 1.4rem;
  padding: 10px;
  border-bottom: ${(props) =>
    props.flag ? "2px solid red" : "2px solid transparent"};
  color: red;
  .TopMenuLink {
    color: ${(props) => (props.flag ? "black" : "#e1e4e8")}
  }
  &:hover {
    border-bottom: ${(props) =>
      props.flag ? "2px solid red" : "2px solid #e1e4e8"};
     .TopMenuLink {
      color: black;
    } 
  }
`;
const TopMenuLink = Styled(NavLink)`
 transition:  border-bottom 0.2s, color 0.2s;
`;

const TopNavigationMenu = () => {
  let location = useLocation();
  return (
    <TopMenuContainer>
      <TonMenuItem flag={location.pathname === "/"}>
        <TopMenuLink className="TopMenuLink" to="/">
          {"${...} Prompt"}
        </TopMenuLink>
      </TonMenuItem>
      <TonMenuItem flag={location.pathname === "/result"}>
        <TopMenuLink className="TopMenuLink" to="/result">
          {"<...> Result"}
        </TopMenuLink>
      </TonMenuItem>
      <TonMenuItem flag={location.pathname === "/setings"}>
        <TopMenuLink className="TopMenuLink" to="/setings">
          {"[[ ]] Setings"}
        </TopMenuLink>
      </TonMenuItem>
    </TopMenuContainer>
  );
};

export default TopNavigationMenu;
