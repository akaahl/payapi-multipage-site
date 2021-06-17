import React, { useState } from "react";
import Logo from "../assets/shared/desktop/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import menu from "../assets/shared/mobile/menu.svg";
import closeMenu from "../assets/shared/mobile/close.svg";

const Navbar = ({ isOpen, setToggleOpen }) => {
  return (
    <NavContainer initial={false} animate={isOpen ? "open" : "closed"}>
      <div className="left-side">
        <Link to="/" className="logo-home">
          <img src={Logo} alt="logo img" className="logo" />
        </Link>

        <ul>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <a href="#1" className="schedule-btn">
        Schedule a demo
      </a>

      {!isOpen ? (
        <div
          className="hamburger-menu"
          onClick={() => {
            setToggleOpen(true);
            document.body.classList.add("mobile-open");
          }}
        >
          <img src={menu} alt="hamburger menu" />
        </div>
      ) : (
        ""
      )}

      {isOpen ? (
        <div
          className="close-menu"
          onClick={() => {
            setToggleOpen(false);
            document.body.classList.remove("mobile-open");
          }}
        >
          <img src={closeMenu} alt="close hamburger menu" />
        </div>
      ) : (
        ""
      )}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 8rem;

  .left-side {
    display: flex;

    .logo-home {
      margin-right: 3rem;
      height: 100%;
      width: 100%;
    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;

      li {
        margin: 0 1rem;

        a {
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          color: rgba(55, 84, 109, 0.7);
        }
      }
    }
  }

  .hamburger-menu,
  .close-menu {
    display: none;
    cursor: pointer;
    padding: 1rem;
    border-radius: 50%;
    /* background: #ffffff; */
    height: 4.5rem;
    width: 4.5rem;
    align-items: center;
    justify-content: center;
    z-index: 200;

    img {
      user-select: none;
    }
  }

  .hamburger-menu {
    &:hover {
      background: #ffffff;
      transition: background 0.3s ease-in-out;
    }

    /* &.hide {
      opacity: 0;
      transition: opacity 0.2s ease-in;
    } */
  }

  .close-menu {
    &:hover {
      background: #b9416f;
      transition: background 0.3s ease-in-out;
    }
  }

  @media (max-width: 800px) {
    padding: 2rem;

    .left-side {
      ul {
        display: none;
      }
    }

    .schedule-btn {
      display: none;
    }

    .hamburger-menu {
      display: flex;
    }

    .close-menu {
      display: flex;
    }
  }
`;

export default Navbar;
