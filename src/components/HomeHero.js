import styled from "styled-components";
import circlePattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import phoneMockup from "../assets/home/desktop/illustration-phone-mockup.svg";

const HomeHero = () => {
  return (
    <HeroContainer>
      <div className="left-side">
        <h1>Start building with our APIs for absolutely free.</h1>
        <div className="email-opt-in">
          <input type="email" name="email" placeholder="Enter email address" />
          <a href="#" className="schedule-btn">
            Schedule a demo
          </a>
        </div>
        <p>
          Have any questions? <a href="#">Contact us</a>{" "}
        </p>
      </div>

      <img src={phoneMockup} alt="phone mockup" className="phone-mockup" />
      <img src={circlePattern} alt="circlePattern" className="circle-pattern" />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  /* display: flex; */

  .left-side {
    /* padding: 8rem 8rem 5rem 8rem; */
    margin: 8rem 0 5rem 8rem;
    width: 40%;

    h1 {
      font-size: 4.5rem;
      font-weight: lighter;
      line-height: 100%;
      width: 100%;
    }

    .email-opt-in {
      margin-top: 3rem;
      width: 80%;
      padding: 0.85rem 1.5rem;
      position: relative;
      background: #fff;
      border-radius: 2rem;
      box-shadow: 0 5px 25px -2px rgba(0, 0, 0, 0.1);

      input[type="email"] {
        border: none;

        &::placeholder {
          color: rgba(55, 84, 109, 0.5);
          font-weight: 800;
        }
      }

      .schedule-btn {
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    p {
      margin: 1.2rem 0 0 1.5rem;
      display: inline-block;
      font-size: 14px;
      font-weight: 600;
      color: rgba(55, 84, 109, 0.7);

      a {
        color: rgba(55, 84, 109, 0.7);
        font-weight: 800;
        text-decoration-thickness: 2px;
      }
    }
  }

  .phone-mockup {
    /* z-index: 100; */
    position: absolute;
    top: 12%;
    right: 8%;
  }

  .circle-pattern {
    position: absolute;
    top: -25%;
    right: -15%;
    z-index: -1;
  }
`;

export default HomeHero;
