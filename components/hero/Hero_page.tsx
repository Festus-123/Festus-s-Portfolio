"use client";

import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import About_Preview from "../about-preview/About_Preview";
import Project_Preview from "../project-preview/Project_Preview";

const HeroPage = () => {
  // New scroll hook
  const { scrollY } = useScroll();

  // Hero fades out
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroTranslateY = useTransform(scrollY, [0, 300], [0, -100]);

  // Next section fades in and slides up
  const contentOpacity = useTransform(scrollY, [150, 300], [0.1, 1]);
//   const aboutOpacity = useTransform(scrollY, [400, 600], [0.1, 1]);
//   const projectOpacity = useTransform(scrollY, [1500, 1800], [0.1, 1]);
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
          <h1 className="text-white fon-changa text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
            Festus Phillip A.
          </h1>
          <p className="text-white text-lg md:text-2xl drop-shadow-md mt-2">
            Software Developer & Graphics Designer
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

        <div className="relative p-8 w-full mt-10 ">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl text-justify font-changa  font-extrabold leading-none md:leading-none text-amber-950 flex flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            SOFTWARE DEVELOPER & <br /> GRAPHICS DESIGNER
          </motion.h2>
        </div>

        {/* Abotu Preview */}
        <motion.div style={{y: contentTranslateY}} className="relative mt-40">
            <motion.div
                initial={{ x: "50%"}}
                animate={{ x: "0"}}
                transition={{ duration: 1}}
                style={{y: raceHello}}
                className=" p-4 text-2xl md:text-6xl text-gray-200 font-bold drop-shadow-lg ">
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
      </motion.section>
    </div>
  );
};

export default HeroPage;
