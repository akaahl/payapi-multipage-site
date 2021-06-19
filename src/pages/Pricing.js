import styled from "styled-components";
import checkIcon from "../assets/shared/desktop/icon-check.svg";
import circlePattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import { motion } from "framer-motion";
import { fadeInLeft } from "../animation";

const Pricing = () => {
  return (
    <StyledContainer
      variants={fadeInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.img
        src={circlePattern}
        alt="circle pattern"
        className="circle-pattern"
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0 }}
      />

      <h1>Pricing</h1>

      <div className="pricing-container">
        <section>
          <h3>Free Plan</h3>
          <p>
            Build and test using our core set of products with up to 100 API
            requests.
          </p>
          <h2>$0.00</h2>

          <ul>
            <li>
              <img src={checkIcon} alt="check" /> Transactions
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Auth
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Identity
            </li>
            <li className="unavailable">
              <img src={checkIcon} alt="check" /> Investments
            </li>
            <li className="unavailable">
              <img src={checkIcon} alt="check" /> Assets
            </li>
            <li className="unavailable">
              <img src={checkIcon} alt="check" /> Liabilities
            </li>
            <li className="unavailable">
              <img src={checkIcon} alt="check" /> Income
            </li>
          </ul>

          <button type="button">Request Access</button>
        </section>

        <section>
          <h3>Basic Plan</h3>
          <p>
            Launch your projects with unlimited requests and no contractual
            minimums.
          </p>
          <h2>$249.99</h2>

          <ul>
            <li>
              <img src={checkIcon} alt="check" /> Transactions
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Auth
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Identity
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Investments
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Assets
            </li>
            <li className="unavailable">
              <img src={checkIcon} alt="check" /> Liabilities
            </li>
            <li className="unavailable">
              <img src={checkIcon} alt="check" /> Income
            </li>
          </ul>

          <button type="button">Request Access</button>
        </section>

        <section>
          <h3>Premium Plan</h3>
          <p>
            Get tailored solutions, volume pricing, and dedicated support for
            your team.
          </p>
          <h2>$499.99</h2>

          <ul>
            <li>
              <img src={checkIcon} alt="check" /> Transactions
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Auth
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Identity
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Investments
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Assets
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Liabilities
            </li>
            <li>
              <img src={checkIcon} alt="check" /> Income
            </li>
          </ul>

          <button type="button">Request Access</button>
        </section>
      </div>

      <div className="subscribe-section">
        <h2>Ready to start?</h2>

        <div className="email-opt-in">
          <input type="email" name="email" placeholder="Enter email address" />
          <a href="#1" className="schedule-btn">
            Schedule a demo
          </a>
        </div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.main)`
  padding: 2rem 8rem;
  overflow-x: hidden;

  .circle-pattern {
    position: absolute;
    top: -40%;
    right: -15%;
    z-index: -1;
  }

  h1 {
    font-size: 4vw;
  }

  .pricing-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2.5rem;
    margin-top: 3rem;

    section {
      h3 {
        color: #b9416f;
        font-size: 2.5rem;
        font-weight: 500;
      }

      p {
        margin-top: 2rem;
        line-height: 1.7;
        font-size: 14px;
        font-weight: 600;
        opacity: 0.7;
        /* width: 90%; */
      }

      h2 {
        margin-top: 3rem;
        font-family: "Spartan", sans-serif;
        font-size: 3.5rem;
        font-weight: 600;
      }

      ul {
        list-style: none;
        margin-top: 3rem;
        border-top: 1px solid rgba(55, 84, 109, 0.2);
        border-bottom: 1px solid rgba(55, 84, 109, 0.2);

        li {
          margin: 1.5rem 0;
          font-size: 14px;
          font-weight: 600;
          opacity: 0.9;

          &.unavailable {
            opacity: 0.5;

            img {
              opacity: 0;
            }
          }

          img {
            margin-right: 1.5rem;
          }
        }
      }

      button {
        border: 1px solid rgb(55, 84, 109);
        padding: 1rem 1.5rem;
        border-radius: 2rem;
        margin-top: 3rem;
        background: none;
        cursor: pointer;
        color: rgb(55, 84, 109);
        font-weight: 600;
        transition: background 0.3s ease-in-out;

        &:hover {
          background: rgb(55, 84, 109);
          color: #fff;
        }

        &:active {
          transform: scale(0.95);
        }
      }
    }
  }

  .subscribe-section {
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 4rem;

    h2 {
      font-size: 3rem;
      font-weight: 500;
    }

    .email-opt-in {
      width: 55%;
      padding-left: 1.5rem;
      display: flex;
      justify-content: space-between;
      position: relative;
      background: #fff;
      border-radius: 2rem;
      box-shadow: 0 5px 25px -2px rgba(0, 0, 0, 0.1);

      input[type="email"] {
        border: none;
        margin: auto 0;
        width: 50%;
        padding: 1rem 0;
        padding-left: 1rem;

        &::placeholder {
          color: rgba(55, 84, 109, 0.5);
          font-weight: 800;
          margin-left: 1rem;
        }
      }

      .schedule-btn {
      }
    }
  }

  @media (max-width: 1024px) {
    .circle-pattern {
      top: -30%;
      right: 0;
    }
    .pricing-container {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 4rem;
    }

    .subscribe-section {
      flex-direction: column;

      .email-opt-in {
        margin-top: 2rem;
        width: 65%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    .circle-pattern {
      top: -20%;
      right: -1%;
    }
    h1 {
      text-align: center;
      font-size: 4rem;
    }
    .pricing-container {
      grid-template-columns: 1fr;

      section {
        h2,
        h3 {
          text-align: center;
        }

        p {
          display: block;
          text-align: center;
        }

        ul {
          li {
            padding-left: 30%;
          }
        }

        button {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    .subscribe-section {
      h2 {
        text-align: center;
      }
      .email-opt-in {
        padding-left: 0;
        background: none;
        border: none;
        padding: none;
        box-shadow: none;
        display: flex;
        flex-direction: column;

        input[type="email"] {
          width: 100%;
          background: #fff;
          border-radius: 2rem;
          box-shadow: 0 5px 40px -2px rgba(0, 0, 0, 0.1);
          padding: 1rem 1.5rem;
        }

        .schedule-btn {
          margin-top: 2rem;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .subscribe-section {
      .email-opt-in {
        width: 100%;
      }
    }
  }

  @media (max-width: 320px) {
    .pricing-container {
      section {
        ul {
          li {
            padding-left: 20%;
          }
        }
      }
    }
  }
`;

export default Pricing;
