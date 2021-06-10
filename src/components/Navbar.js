import React from "react";
import Logo from "../assets/shared/desktop/logo.svg";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="left-side">
        <img src={Logo} alt="logo img" />
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <a href="#" class="schedule-btn">
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

    img {
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
        font-size: 14px;
        font-weight: 800;
        color: rgba(55, 84, 109, 0.7);
      }
    }
  }
`;

export default Navbar;
