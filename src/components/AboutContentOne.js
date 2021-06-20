import styled from "styled-components";
import circlePattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import { motion } from "framer-motion";
import { slideFromLeft, fadeIn } from "../animation";

const AboutContentOne = () => {
  return (
    <StyledContainer>
      <img
        src={circlePattern}
        alt="circle-pattern"
        className="circle-pattern"
      />
      <motion.h1 variants={slideFromLeft} initial="hidden" animate="visible">
        We empower innovators by delivering access to the financial system.
      </motion.h1>

      <motion.section
        className="container"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="text-content">
          <h3>Our Vision</h3>
          <p>
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </div>

        <div className="text-content">
          <h3>Our Business</h3>
          <p>
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </div>
      </motion.section>
    </StyledContainer>
  );
};

const StyledContainer = styled.main`
  padding: 2rem 14rem;
  overflow-x: hidden;

  .circle-pattern {
    position: absolute;
    top: -27%;
    right: -16%;
    z-index: -1;
  }

  h1 {
    font-size: 3.9vw;
    font-weight: 500;
    width: 68%;
    line-height: 1;
  }

  .container {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;

    .text-content {
      display: grid;
      grid-template-columns: 30% 80%;
      margin-bottom: 4rem;

      h3 {
        margin-right: 4rem;
        font-size: 2rem;
        font-weight: 500;
      }

      p {
        line-height: 1.7;
        font-size: 14px;
        font-weight: 600;
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 2rem 8rem;

    .circle-pattern {
      right: 0%;
    }
    h1 {
      width: 100%;
      text-align: center;
      margin-top: 2rem;
      font-size: 3.5rem;
    }

    .container {
      .text-content {
        grid-template-columns: 30% 70%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    h1 {
      font-size: 3rem;
    }

    .container {
      .text-content {
        grid-template-columns: 1fr;

        h3 {
          margin-right: 0;
          text-align: center;
        }

        p {
          display: block;
          text-align: center;
          margin-top: 2rem;
        }
      }
    }
  }
`;

export default AboutContentOne;
