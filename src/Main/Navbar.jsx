import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  
  return (
    
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/courses">
              COURSES
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/career">
              CAREERS
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contactUs">
              CONTACT US
            </NavLink>
            </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact">
              <button class="btn">Book a Demo</button>
            </NavLink>
          </li>
        </ul>
        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.div`
    .navbar-list {
      display: flex;
      gap: 4.8rem;
      margin-top:2rem;
      

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            font-family: Consolas;
           
            
            display: inline-block;
            text-decoration: none;
            font-size: 2.2rem;

            // text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    // .btn {
    //   background-color: DodgerBlue; /* Blue background */
    //   border: none; /* Remove borders */
    //   color: white; /* White text */
    //   padding: 12px 16px; /* Some padding */
    //   font-size: 16px; /* Set a font size */
    //   cursor: pointer; /* Mouse pointer on hover */
    // }
    
    /* Darker background on mouse-over */
    .btn:hover {
      background-color: rgb(247, 147, 32);
    }
   
   .btn{ background-color: #0078CD;
   margin-top:-6rem;
  border: none;
  border-radius:1rem;
  color: white;
  padding: 1.5rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  }

    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      /* hide the original nav menu  */
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        // display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;

        // transform: translateX(100%);

        // visibility: hidden;
        // opacity: 0;

        display:none;

        li {
          .navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
            }

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        // visibility: visible;
        // opacity: 1;
        display:flex;
        // transform: translateX(0);
         z-index: 999;
      }
    }
  `;


export default Navbar;
