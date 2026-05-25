"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Changa_One
} from "next/font/google";

import About_Preview from "../about-preview/About_Preview";
import Project_Preview from "../project-preview/Project_Preview";

export const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
});

const HeroPage = () => {
  // New scroll hook
  const { scrollY } = useScroll();

  // Hero fades out
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroTranslateY = useTransform(scrollY, [0, 300], [0, -100]);

  // Next section fades in and slides up
  const contentOpacity = useTransform(scrollY, [150, 300], [0.1, 1]);
    const contentTranslateY = useTransform(scrollY, [600, 800], [-50, -220]);
    const raceHello = useTransform(scrollY, [400, 800], [-60, 50])

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <motion.section
        className="h-[80vh] w-full overflow-hidden sticky top-0"
        style={{}}
      >
        <motion.img
          src="/forground.png"
          alt="Hero"
          className="md:hidden w-full h-full object-cover bg-top-right bg-blend-saturation"
        />
        <motion.img
          src="/forground.png"
          alt="Hero"
          className="hidden md:block w-full h-full md:h-350 object-cover place-self-center bg-blend-saturation"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full"
          style={{ y: heroTranslateY, opacity: heroOpacity }}
        >
          <h1 className={`text-white fon-changa text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg ${changaOne.className}`}>
            Festus Phillip A.
          </h1>
          <p className="text-white text-lg md:text-2xl drop-shadow-lg mt-2">
            Problem ~ Program ~ Solution
          </p>
        </motion.div>
      </motion.section>

      {/* Next Section */}
      <motion.section
        style={{
          opacity: contentOpacity,
          backgroundImage: "url(/white-paper.jpg)",
          backgroundAttachment: "fixed",
        }}
        className="relative h-full w-full z-10"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gray-50/60"></div>

        <div className={`relative p-8 w-full mt-5 ${changaOne.className}`} >
          <motion.h2
            className="text-[3em] sm:text-[5em] md:text-[9em] lg:text-[14em] font- leading-none  text-[#49332a] font-style"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            FRONTEND {' '} DEVELOPER 
          </motion.h2>
        </div>

        {/* Abotu Preview */}
        <motion.div style={{y: contentTranslateY}} className="relative mt-40 ">
            <motion.div
                style={{y: raceHello}}
                className=" p-4 text-3xl md:text-6xl text-gray-400 font-bold drop-shadow-lg z-40">
                👋{''}🏃‍♀️...
            </motion.div>
          <About_Preview />
        </motion.div>

        {/* Project preview */}
        <motion.div
          style={{ }}
          className="relative mt-20"
        >
          <Project_Preview />
        </motion.div>

        {/* We should work together */}
        <motion.div
          // style={{ y: contnetDescribeTranslateY }}
          className={`p-4 md:p-8 relative`}>
          <motion.h1 className="uppercase text-3xl md:text-5xl lg:text-7xl font-extrabold text-[#49332a] text-center leading-relaxed mb-20">
            {/* WANT TO BUILD A USER FRIENDLY WEBSITE LET&apos;S BUILD TOGEHTER!!! */}
            {/* WANT TO BUILD A RESPONSIVE USER FRIENDLY WEBSITE 👇👇 */}
            Want To Build A Responsive User Friendly Website 👇👇
          </motion.h1>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroPage;
