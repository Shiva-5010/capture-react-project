export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnimation = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.7 },
  },
};

export const imageAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.7 },
  },
};

export const lineAnimation = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 0.75,
    },
  },
};

export const RainbowAnimate = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const RainbowAnimateContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};
//navbar Animations
export const NavbarAnimation = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
