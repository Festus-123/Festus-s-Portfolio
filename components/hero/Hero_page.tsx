"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Changa_One,
  Jaro,
  Erica_One,
  Rubik_Maps
} from "next/font/google";

import About_Preview from "../about-preview/About_Preview";
import Project_Preview from "../project-preview/Project_Preview";
import Contact_Preview from "../contact-preview/Contact_Preview";
import Footer from "../footer/Footer";

const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
});
const ericaOne = Erica_One({
  weight: ["400"],
  subsets: ["latin"],
});
const rubikMaps = Rubik_Maps({
  weight: ["400"],
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
    const contentTranslateY = useTransform(scrollY, [600, 800], [-50, -320]);
    const raceHello = useTransform(scrollY, [400, 800], [-60, 50])

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <motion.section
        className="h-[80vh] w-full overflow-hidden sticky top-0"
        style={{}}
      >
        <motion.img
          src="/her-img.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

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
        className="relative h-full w-full rounded-t-2xl z-10"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/5"></div>

        <div className={`relative p-8 w-full mt-5 ${changaOne.className}`} >
          <motion.h2
            className="text-6xl sm:text-7xl md:text-8xl lg:tex-9xl font- leading-none md:leading-none text-[#300e0e] font-style"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            FRONTEND {' '} ENGINEER 
          </motion.h2>
        </div>

        {/* Abotu Preview */}
        <motion.div style={{y: contentTranslateY}} className="relative mt-40">
            <motion.div
                style={{y: raceHello}}
                className=" p-4 text-3xl md:text-6xl text-gray-200 font-bold drop-shadow-lg ">
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
          className={`p-4 md:p-8`}>
          <motion.h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-amber-950 text-center leading-relaxed mb-20">
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
