import React from "react";
import HomeHero from "../components/HomeHero";
import HomeContentOne from "../components/HomeContentOne";
import HomeContentTwo from "../components/HomeContentTwo";
import {AnimatePresence} from 'framer-motion'

const Home = () => {
  return (
    <div>
      <AnimatePresence>
        <HomeHero />
        <HomeContentOne />
        <HomeContentTwo />
      </AnimatePresence>
    </div>
  );
};

export default Home;
