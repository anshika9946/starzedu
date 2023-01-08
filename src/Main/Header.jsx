import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
font-family:Microsoft Sans Serif;
  padding: 0 4.8rem;
  height: 8rem;
  background-color: #F4F4F4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: fixed;
  width:100%;
  top:0;
  

  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;
