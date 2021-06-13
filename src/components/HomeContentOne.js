import styled from "styled-components";
import circlePattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import HP from "../assets/shared/desktop/hewlett-packard--white.svg";
import Google from "../assets/shared/desktop/google--white.svg";
import Microsoft from "../assets/shared/desktop/microsoft--white.svg";
import Nvidia from "../assets/shared/desktop/nvidia--white.svg";
import Oracle from "../assets/shared/desktop/oracle--white.svg";
import Tesla from "../assets/shared/desktop/tesla--white.svg";

const HomeContentOne = () => {
  return (
    <StyledContainer>
      <div className="left-side">
        <img src={circlePattern} alt="circle pattern" />
        <h2>Who we work with</h2>
        <p>
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
        <a href="#123" className="about-btn">
          About Us
        </a>
      </div>

      <div className="right-side">
        <img src={Tesla} alt="Tesla icon" />
        <img src={Microsoft} alt="Microsoft icon" />
        <img src={HP} alt="HP icon" />
        <img src={Oracle} alt="Oracle icon" />
        <img src={Google} alt="Google icon" />
        <img src={Nvidia} alt="Nvidia icon" />
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  padding: 8rem 0 8rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1c2731;
  overflow: hidden;
  position: relative;
  width: 100%;

  .left-side {
    width: 40%;

    img {
      position: absolute;
      top: -17rem;
      left: -15rem;
    }

    h2,
    p,
    a {
      color: white;
    }

    h2 {
      font-size: 3rem;
      font-weight: 500;
    }

    p {
      margin-top: 2rem;
      line-height: 2;
      font-size: 15px;
    }

    .about-btn {
      display: inline-block;
      margin-top: 2rem;
      text-decoration: none;
      padding: 1rem 2rem;
      border: 1px solid white;
      border-radius: 1.8rem;
      color: white;
      font-weight: 600;
    }
  }

  .right-side {
    /* margin-left: 15rem; */
    margin-right: 2rem;
    width: 50%;
    padding: 2rem;
    display: grid;
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    /* align-content: center;
    justify-content: center; */

    img {
      align-self: center;
      justify-self: center;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 4rem;

    .left-side {
      width: 85%;
      margin-top: 4rem;

      img {
        top: -40rem;
        left: 0;
      }

      h2,
      p,
      .about-btn {
        text-align: center;
      }

      .about-btn {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: 2rem auto;
      }
    }

    .right-side {
      width: 100%;
      margin-right: 0;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .right-side {
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
      grid-gap: 2rem;
    }
  }

  @media (max-width: 425px) {
    .right-side {
      grid-template-columns: 1fr;
      grid-row-gap: 3rem;
    }

    .left-side {
      margin-top: 6rem;
    }
  }
`;

export default HomeContentOne;
