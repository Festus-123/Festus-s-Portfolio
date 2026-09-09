"use client";
import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
// import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

const About_Preview = () => {
  const { scrollY } = useScroll();
  return (
    <div className="">
      {/* Details Purview */}
      <div className="relative flex flex-col gap-5 md:flex-row md:items justify-evenly bg-gray-50/60">
        {/* <div className="absolute inset-0 bg-black/10" /> */}
        <motion.div className="relative z-20 w-full flex flex-col gap-10  p-4 md:p-8">
          <p className="w-full md:w-[70%] font-light text-justify md:text-left p-4 text-lg md:text-2xl">
            <span className="font-medium text-amber-950">
              Hi, I&apos;m Festus,
            </span>{" "}
            A Fullstack Developer. With over 5 years experience,, mainly
            focusing on JavaScript technologies to build websites, mobile
            applications, and interactive simulations. <br /> <br />I as well at
            times leverage python technologies for heavy program lifting. Worked
            on several projects ranging from simple password Generator systems
            to responsive Enterprise web apps to complex data processing
            frameworks, reflecting my interest in experimenting with ideas and
            turning them into working systems.
          </p>
          <Link
            className="text-amber-950 font-bold flex items-center place-self-end gap-2 text-right text-xl md:text-3xl cursor-pointer"
            href="/about"
          >
            <span>More About Me</span>
            <FiArrowUpRight />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About_Preview;
