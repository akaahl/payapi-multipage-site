import styled from "styled-components";
import circlePattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import logo from "../assets/shared/desktop/logo--white.svg";
import facebook from "../assets/shared/desktop/facebook.svg";
import linkedin from "../assets/shared/desktop/linkedin.svg";
import twitter from "../assets/shared/desktop/twitter.svg";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <StyledNav>
      <img
        src={circlePattern}
        alt="circle pattern"
        className="circle-pattern"
      />
      <div className="left-side">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="right-side">
        <img src={facebook} alt="facebook icon" />
        <img src={twitter} alt="twitter icon" />
        <img src={linkedin} alt="linkedin icon" />
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1c2731;
  padding: 2rem 4rem;
  position: relative;
  overflow: hidden;

  .circle-pattern {
    position: absolute;
    top: -140%;
    right: -30%;
  }

  .left-side {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      margin-right: 3rem;
    }

    ul {
      list-style: none;
      display: flex;

      li {
        margin: 0 1rem;

        a {
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }

  .right-side {
    margin-right: 4rem;
    img {
      margin: 0 0.8rem;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;

    .circle-pattern {
      right: -5%;
      bottom: 0;
      top: 40%;
    }

    .left-side {
      flex-direction: column;

      img {
        margin-right: 0;
      }
      ul {
        flex-direction: column;
        margin-top: 2rem;

        li {
          margin: 1rem 0;
        }
      }
    }

    .right-side {
      margin: 2rem 0 0 0;
    }
  }
`;

export default FooterNav;
