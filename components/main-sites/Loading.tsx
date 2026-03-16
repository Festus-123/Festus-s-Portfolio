"use client";

import { motion, Variants } from "framer-motion";

const dot1: Variants = {
  animate: {
    x: [400, 0, -400],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
const dot2: Variants = {
  animate: {
    x: [300, 0, -300],
    transition: {
      duration: 2.1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
const dot3: Variants = {
  animate: {
    x: [200, 0, -200],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Loading() {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%", animationDuration: 0.4 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-9999"
    >
      <div className="flex gap-3">
        <motion.span
          variants={dot1}
          animate="animate"
          className="w-5 h-5 bg-white rounded-full"
        />

        <motion.span
          variants={dot2}
          animate="animate"
          transition={{ delay: 0.4 }}
          className="w-5 h-5 bg-white rounded-full"
        />

        <motion.span
          variants={dot3}
          animate="animate"
          transition={{ delay: 0.6 }}
          className="w-5 h-5 bg-white rounded-full"
        />
      </div>
    </motion.div>
  );
}