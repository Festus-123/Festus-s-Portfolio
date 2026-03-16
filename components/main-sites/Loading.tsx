"use client";

import { motion, Variants } from "framer-motion";

const dot: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 0.6,
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
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-[9999]"
    >
      <div className="flex gap-3">
        <motion.span
          variants={dot}
          animate="animate"
          className="w-4 h-4 bg-white rounded-full"
        />

        <motion.span
          variants={dot}
          animate="animate"
          transition={{ delay: 0.2 }}
          className="w-4 h-4 bg-white rounded-full"
        />

        <motion.span
          variants={dot}
          animate="animate"
          transition={{ delay: 0.4 }}
          className="w-4 h-4 bg-white rounded-full"
        />
      </div>
    </motion.div>
  );
}