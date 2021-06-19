import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = ({ setToggleOpen }) => {
  return (
    <StyledNav
      animate={{ x: 0, transition: { ease: "anticipate", duration: 0.6 } }}
      initial={{ x: "100%" }}
      exit={{ x: "100%", transition: { duration: 0.4 } }}
    >
      <ul>
        <li
          onClick={() => {
            setToggleOpen(false);
            document.body.classList.remove("mobile-open");
          }}
        >
          <Link
            to="/pricing"
            onClick={() => {
              setToggleOpen(false);
              document.body.classList.remove("mobile-open");
            }}
          >
            Pricing
          </Link>
        </li>

        <li
          onClick={() => {
            setToggleOpen(false);
            document.body.classList.remove("mobile-open");
          }}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          onClick={() => {
            setToggleOpen(false);
            document.body.classList.remove("mobile-open");
          }}
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="#1" className="schedule-btn">
            Schedule a demo
          </a>
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled(motion.nav)`
  height: 100vh;
  width: 80vw;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 150;
  background: #1c2731;
  display: flex;
  justify-content: center;
  transition: right 0.3s ease-in;

  &.show {
    right: 0;
  }

  ul {
    width: 90%;
    height: 40%;
    /* background: #fff; */
    list-style: none;
    margin-top: 8rem;
    border-top: 1px solid rgb(55, 84, 109);

    li {
      display: block;
      margin: 2rem auto;

      &:last-child {
        margin-top: 3.5rem;
      }

      a {
        text-decoration: none;
        text-align: center;
        color: #fff;
        font-size: 1.5rem;
        display: block;
        margin: 0 auto;
      }

      .schedule-btn {
        font-size: 1.3rem;
        padding: 1.2rem 1.5rem;
      }
    }
  }
`;

export default MobileNav;
