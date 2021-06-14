import React from "react";
import styled from "styled-components";
import desktopImg from "../assets/about/desktop/image-team-members.jpg";
import tabletImg from "../assets/about/tablet/image-team-members.jpg";
import mobileImg from "../assets/about/mobile/image-team-members.jpg";
import circlePattern from "../assets/shared/desktop/bg-pattern-circle.svg";

const AboutImageHero = () => {
  return (
    <ImageContainer>
      <img
        src={circlePattern}
        alt="circle-pattern"
        className="circle-pattern"
      />
      <img src={desktopImg} alt="desktop" className="desktop-img" />
      <img src={tabletImg} alt="tablet" className="tablet-img" />
      <img src={mobileImg} alt="mobile" className="mobile-img" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  img {
    height: auto;
    width: 100%;
  }

  .circle-pattern {
    position: absolute;
    top: 27%;
    left: -40%;
    z-index: -1;
    height: auto;
    width: auto;
  }

  .tablet-img,
  .mobile-img {
    display: none;
  }

  @media (max-width: 1024px) {
    .circle-pattern {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .desktop-img {
      display: none;
    }

    .tablet-img {
      display: block;
    }
  }

  @media (max-width: 425px) {
    .tablet-img {
      display: none;
    }

    .mobile-img {
      display: block;
    }
  }
`;

export default AboutImageHero;
