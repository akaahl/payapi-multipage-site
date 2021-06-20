export const fadeInLeft = {
  hidden: {
    x: -150,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: {
    y: 300,
    opacity: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, delay: 0.7 },
  },
};

export const slideFromLeft = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const slideFromRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const staggerAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const verticalReveal = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: { y: 0, opacity: 1 },
};
