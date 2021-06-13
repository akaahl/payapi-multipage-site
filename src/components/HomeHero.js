import styled from "styled-components";
import circlePattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import phoneMockup from "../assets/home/desktop/illustration-phone-mockup.svg";

const HomeHero = () => {
  return (
    <HeroContainer>
      <img src={phoneMockup} alt="phone mockup" className="phone-mockup" />

      <div className="left-side">
        <h1>Start building with our APIs for absolutely free.</h1>
        <div className="email-opt-in">
          <input type="email" name="email" placeholder="Enter email address" />
          <a href="#1" className="schedule-btn">
            Schedule a demo
          </a>
        </div>
        <p>
          Have any questions? <a href="#2">Contact us</a>{" "}
        </p>
      </div>
      <img src={circlePattern} alt="circlePattern" className="circle-pattern" />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  padding-bottom: 10rem;
  .left-side {
    /* padding: 8rem 8rem 5rem 8rem; */
    margin: 8rem 0 5rem 8rem;
    width: 40%;

    h1 {
      font-size: 5vw;
      font-weight: lighter;
      line-height: 100%;
      width: 100%;
    }

    .email-opt-in {
      margin-top: 3rem;
      width: 100%;
      padding: 0.87rem 1.5rem;
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
      margin: 2rem 0 0 1.5rem;
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
    top: 3%;
    right: 8%;
  }

  .circle-pattern {
    position: absolute;
    top: -5%;
    right: -15%;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    .left-side {
      h1 {
        font-size: 6vw;
      }
    }

    .phone-mockup {
      right: -4%;
    }
  }

  @media (max-width: 850px) {
    .left-side {
      .email-opt-in {
        background: none;
        border: none;
        padding: none;
        box-shadow: none;
        display: flex;
        flex-direction: column;
        width: 100%;

        input[type="email"] {
          width: 100%;
          background: #fff;
          border-radius: 2rem;
          box-shadow: 0 5px 25px -2px rgba(0, 0, 0, 0.1);
          padding: 1rem 1.5rem;
        }

        .schedule-btn {
          position: relative;
          width: 100%;
          text-align: center;
          margin: 1rem 0;
        }
      }
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .left-side {
      padding: 0 1rem;
      margin: -20vw auto 10rem auto;
      width: 90%;

      h1 {
        font-size: 6vw;
        text-align: center;
      }

      p {
        display: block;
        text-align: center;
      }
    }

    .email-opt-in {
      padding: 0;
    }

    .phone-mockup {
      position: relative;
      top: 0;
      display: block;
      transform: scale(0.8);
      margin-top: -12vw;
    }

    .circle-pattern {
      top: -30rem;
      right: 0;
      transform: scale(0.7);
    }
  }

  @media (max-width: 425px) {
    .circle-pattern {
      top: -20rem;
      right: -8rem;
    }
  }
`;

export default HomeHero;
