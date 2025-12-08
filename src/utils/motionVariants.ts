// No import needed

export const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

export const pulse = {
  idle: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.25 },
  },
}
