
import React from "react";
import { motion } from "framer-motion";

const imageVariants = (index: number, reverse: boolean,) => ({
  initial: {
    rotate: index === 0 ? -12 : index === 1 ? 0 : 12,
    x: 0,
    y: 0,
    zIndex: 3 - index,
    scale: 1,
  },

  hover: {
    x: reverse
      ? index === 0
        ? -20
        : index === 2
        ? -800
        : -400
      : index === 0
      ? 20
      : index === 2
      ? 800
      : 400,

    y: -20,
    rotate: 0,
    scale: 1.15,
    zIndex: 50,

    transition: {
      duration: 0.7,
    },
  },
});

const StoryBlock = ({
  images,
  title,
  text,
  reverse = false,
}: {
  images: string[];
  title: string;
  text: string;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      whileHover={{ }}
      className={`flex flex-col-reverse md:flex-row ${
        reverse ? " md:flex-row-reverse" : ""
      } items-center gap-20 md:gap-20 transition-colors duration-500 md:border-b md:border-[#ffffff39]`}
    >
      {/* IMAGE STACK */}
      <motion.div
        initial="initial"
        whileHover="hover"
        // whileInView="hover md:none"
        className="relative w-50 h-55 md:w-75 md:h-75 cursor-pointer z-10"
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            variants={imageVariants(index, reverse)}
            className="absolute w-full h-full object-cover rounded-xl shadow-xl will-change-transform"
          />
        ))}
      </motion.div>

      {/* TEXT */}
      <motion.div 
        whileHover={{ opacity: 0.8}}
        initial={{ y: 10, opacity: 0.3}}
        animate={{ y: 0, opacity: 0.5}}
        className="w-full  md:max-w-[70%] text-white/80">
        <h2 className="text-2xl md:text-4xl font-medium tracking-wide mb-4">{title}</h2>
        <p className="text-lg md:text-xl leading-relaxed font-light tracking-wide text-gray-300 text-justify">
          {text}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default StoryBlock