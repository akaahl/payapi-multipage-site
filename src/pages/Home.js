import React from "react";
import HomeHero from "../components/HomeHero";
import HomeContentOne from "../components/HomeContentOne";
import HomeContentTwo from "../components/HomeContentTwo";
import { motion } from "framer-motion";
import { fadeInLeft } from "../animation";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeContentOne />
      <HomeContentTwo />
    </>
  );
};

export default Home;
