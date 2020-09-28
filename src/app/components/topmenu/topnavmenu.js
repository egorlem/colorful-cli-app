import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const TopMenuContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e1e4e8;
  background: transparent;
`;
//#f2f2f2
const TonMenuItem = styled.div`
  transition: border-bottom 0.2s, color 0.2s;
  font-size: 1.4rem;
  padding: 10px;
  background: ${(props) => (props.flag ? "#f8f8f8" : "transparent")};
  border-bottom: ${(props) =>
    props.flag ? "2px solid cyan" : "2px solid transparent"};
  color: red;
  .TopMenuLink {
    color: ${(props) => (props.flag ? "black" : "#e1e4e8")};
  }
  &:hover {
    border-bottom: ${(props) =>
      props.flag ? "2px solid cyan" : "2px solid #e1e4e8"};
    .TopMenuLink {
      color: black;
    }
  }
`;
const TopMenuLink = styled(NavLink)`
  transition: border-bottom 0.2s, color 0.2s;
`;

const TopNavigationMenu = () => {
  const { pathname } = useLocation();
  return (
    <TopMenuContainer>
      <TonMenuItem flag={pathname === "/psone"}>
        <TopMenuLink className="TopMenuLink" to="/psone">
          {"${...} Prompt"}
        </TopMenuLink>
      </TonMenuItem>
      <TonMenuItem flag={pathname === "/result"}>
        <TopMenuLink className="TopMenuLink" to="/result">
          {"<...> Result"}
        </TopMenuLink>
      </TonMenuItem>
      <TonMenuItem flag={pathname === "/settings"}>
        <TopMenuLink className="TopMenuLink" to="/settings">
          {"[[ ]] Setings"}
        </TopMenuLink>
      </TonMenuItem>
    </TopMenuContainer>
  );
};

export default TopNavigationMenu;
