import styled from "styled-components";
import circlePattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import HP from "../assets/shared/desktop/hewlett-packard.svg";
import Google from "../assets/shared/desktop/google.svg";
import Microsoft from "../assets/shared/desktop/microsoft.svg";
import Nvidia from "../assets/shared/desktop/nvidia.svg";
import Oracle from "../assets/shared/desktop/oracle.svg";
import Tesla from "../assets/shared/desktop/tesla.svg";

const Contact = () => {
  return (
    <StyledContainer>
      <h1>Submit a help request and we'll get in touch shortly.</h1>

      <div className="container">
        <form action="#">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email Address" />
          <input type="text" name="company-name" placeholder="Company Name" />
          <input type="text" name="title" placeholder="title" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>

          <div className="checkbox-container">
            <input type="checkbox" name="stay-updated" />
            <label htmlFor="stay-updated">
              Stay up-to-date with our company announcements and updates to our
              API.
            </label>
          </div>

          <button type="button">Submit</button>
        </form>

        <div className="list-of-companies">
          <h3>Join the thousand of innovators already building with us.</h3>

          <div className="image-container">
            <img src={Tesla} alt="tesla" />
            <img src={Microsoft} alt="microsoft" />
            <img src={HP} alt="hewlett packard" />
            <img src={Oracle} alt="oracle" />
            <img src={Google} alt="google" />
            <img src={Nvidia} alt="nvidia" />
          </div>
        </div>
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

const StyledContainer = styled.main`
  padding: 2rem 8rem;

  h1 {
    font-size: 3.9vw;
    font-weight: 500;
    width: 60%;
    line-height: 1;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;

    form {
      flex: 2;
      display: flex;
      flex-direction: column;

      input[type="text"],
      input[type="email"],
      textarea {
        background: none;
        border: none;
        border-bottom: 1px solid rgba(55, 84, 109, 0.2);
        padding: 1.5rem;
      }

      .checkbox-container {
        margin-top: 2rem;

        label {
          font-size: 14px;
          font-weight: 600;
          opacity: 0.7;
        }
      }
    }

    .list-of-companies {
      flex: 1;
    }
  }
`;

export default Contact;
