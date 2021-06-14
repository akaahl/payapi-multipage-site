import React from "react";
import Logo from "../assets/shared/desktop/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavContainer>
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
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
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
  }
`;

export default Navbar;
