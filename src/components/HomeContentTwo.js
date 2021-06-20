import styled from "styled-components";
import codeSample from "../assets/home/desktop/illustration-easy-to-implement.svg";
import phoneIllustration from "../assets/home/desktop/illustration-simple-ui.svg";
import personalFinancesIcon from "../assets/home/desktop/icon-personal-finances.svg";
import bankingIcon from "../assets/home/desktop/icon-banking-and-coverage.svg";
import consumerIcon from "../assets/home/desktop/icon-consumer-payments.svg";
import circlePattern from "../assets/shared/desktop/bg-pattern-circle.svg";

const HomeContentTwo = () => {
  return (
    <StyledContainer>
      <img
        src={circlePattern}
        alt="circle pattern"
        className="circle-pattern"
      />
      <section className="first-section">
        <img src={codeSample} alt="code sandbox" />
        <div className="text-content">
          <h2>Easy to implement</h2>
          <p>
            Our API comes with just a few lines of code. You'll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </section>

      <section className="second-section">
        <img src={phoneIllustration} alt="phone illustration" />
        <div className="text-content">
          <h2>Simple UI &amp; UX</h2>
          <p>
            Our pre-built form is easy to your app or website's checkout flow
            and designed to optimize conversion.
          </p>
        </div>
      </section>

      <section className="third-section">
        <div className="icon-layout">
          <img src={personalFinancesIcon} alt="personal finances" />
          <h4>Personal Finances</h4>
          <p>
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>

        <div className="icon-layout">
          <img src={bankingIcon} alt="banking and coverage" />
          <h4>Banking &amp; Coverage</h4>
          <p>
            With our coverage, you can speed up account onboarding and support
            ongoing payments for checkings, savings, credit card, and brokerage
            accounts.
          </p>
        </div>

        <div className="icon-layout">
          <img src={consumerIcon} alt="consumer payments" />
          <h4>Consumer Payments</h4>
          <p>
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </div>
      </section>

      <section className="fourth-section">
        <h2>Ready to start?</h2>

        <div className="email-opt-in">
          <input type="email" name="email" placeholder="Enter email address" />
          <a href="#1" className="schedule-btn">
            Schedule a demo
          </a>
        </div>
      </section>
    </StyledContainer>
  );
};

const StyledContainer = styled.main`
  padding: 5rem 1rem;
  position: relative;
  overflow-x: hidden;

  .circle-pattern {
    position: absolute;
    top: 50%;
    right: -30%;
    transform: translateY(-50%);
    z-index: -1;
  }

  .first-section,
  .second-section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: auto;
      width: 100%;
      transform: scale(0.9);
    }

    .text-content {
      h2 {
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: 2rem;
      }

      p {
        line-height: 2;
        font-size: 14px;
        font-weight: 700;
        opacity: 0.7;
        width: 80%;
        margin-bottom: 2.5rem;
      }
    }
  }

  .second-section {
    flex-direction: row-reverse;

    .text-content {
      padding-left: 4rem;

      p {
        width: 100%;
      }
    }
  }

  .third-section {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding-left: 4rem;

    .icon-layout {
      h4,
      p {
        text-align: center;
      }

      img {
        display: block;
        margin: 0 auto;
      }

      h4 {
        margin-top: 2rem;
      }

      p {
        line-height: 1.7;
        font-size: 14px;
        font-weight: 600;
        opacity: 0.7;
        width: 90%;
        display: block;
        margin: 1.5rem auto 0 auto;
      }
    }
  }

  .fourth-section {
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem 0 6rem;

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
        width: 60%;
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
    padding: 2rem 1rem 8rem 1rem;

    .circle-pattern {
      display: none;
    }

    .first-section,
    .second-section {
      flex-direction: column;

      .text-content {
        width: 90%;
        margin-top: -3rem;
        h2 {
          text-align: center;
        }

        p {
          width: 100%;
          text-align: center;
        }
      }
    }

    .second-section {
      .text-content {
        padding-left: 0;
      }
    }

    .third-section {
      padding-left: 0;
      margin-top: 4rem;
    }

    .fourth-section {
      flex-direction: column;
      padding: 0 2rem;

      .email-opt-in {
        width: 65%;
        margin-top: 2rem;
      }
    }
  }

  @media (max-width: 768px) {
    .third-section {
      flex-direction: column;

      .icon-layout {
        &:not(:first-child) {
          margin-top: 3rem;
        }

        p {
          width: 80%;
        }
      }
    }

    .fourth-section {
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
    .fourth-section {
      .email-opt-in {
        width: 90%;
      }
    }
  }
`;
export default HomeContentTwo;
