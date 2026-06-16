"use client";
// import Image from "next/image";
import React from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
// import { experiences } from "@/data/experience";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Changa_One } from "next/font/google";
// import { FiTarget } from "react-icons/fi";
// import Stories from "../stories/Stories";


export const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
});

const About_Me = () => {
  const { scrollY } = useScroll();
  // const translateTitle = useTransform(scrollY, [0, 400], [0, 300]);
  const translateTitleOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const translateContent = useTransform(scrollY, [0, 400], [0, -300]);
  return (
    <div
      style={{
        backgroundImage: "url(/white-paper.jpg)",
        backgroundAttachment: "fixed",
      }}
      className="w-full h-full relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-50/60"></div>
      {/* Name section and active */}
      <motion.section
        style={{ opacity: translateTitleOpacity }}
        className="z-10 sticky top-5 w-full flex flex-col md:flex-row items-center gap-10 p-8 md:p-16"
      >
        <div className={`flex flex-col items-center md:items-start text-[#49332a]`}>
          <h1 className={`text-[2em] md:text-[6em] font-extrabold text-center ${changaOne.className}`}>
            FESTUS PHILLIP A.
          </h1>
          <p className=" text-lg md:text-xl font-medium flex flex-col items-center md:items-start">
            <span>A Frontend Web Developer</span>

            <span className="flex items-center gap-4 text-center">
              <span>| Active</span> <FiCheckCircle />
              <FiCheckCircle />
            </span>
          </p>
        </div>
      </motion.section>

      {/* About me content section */}
      <motion.section
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ y: translateContent }}
        className="relative bg-gray-50 w-full h-full p-8 md:p-16 flex flex-col gap-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-40">
          <p className="w-full font-light text-justify text-lg md:text-2xl leading-relaxed">
            <span className="font-medium text-amber-950">
              Hi👋, I’m Festus,{" "}
            </span>
            a 300 level Computer Science student at OAUSTECH with a current
            First Class CGPA of 4.61. I specialize in JavaScript technologies
            like React, Next.js and React Native, using them to develop
            responsive web applications, interactive interfaces, and practical
            solutions to real-world problems. <br /> <br />
            With over 5 years of experience, I’ve worked on a variety of
            projects—from simple tools to more structured
            applications—constantly refining my skills and attention to detail.
            I enjoy turning ideas into working systems and continuously pushing
            myself to grow as a developer.
          </p>
          <div className="w-[90%] drop-shadow-xl bg-white p-4">
            <Image
              priority
              src={"/festus.jpg"}
              alt="festus"
              width={400}
              height={400}
              className="w-full h-80 md:h-110 object-cover"
            />
          </div>
        </div>

        <p className="font-light text-justify w-full lg::w-[50%] text-lg md:text-2xl leading-relaxed">
          I&apos;m a passionate Frontend Developer and Computer Science student
          with a strong focus on building clean, functional, and user-friendly
          digital experiences. <br /> <br />
          <span className="flex flex-col gap-2 ">
            <span className="">if (!coding 👨‍💻) {"{"}</span>
            <span className=" pl-10">
              Gaming🎮: true, Trading 📉: true, Watching movie series🎬: true,
              reading📖: false, shopping 🛒: false
            </span>
            <span>{"}"}</span>
          </span>{" "}
          <br />
          I’m currently open to opportunities where I can contribute, learn, and
          build impactful solutions while growing into a well-rounded software
          engineer.
        </p>
        {/* Album */}
        {/* <div className="p-16"></div> */}
        <a
          href="https://drive.google.com/file/d/1TVMUCl-87MpxEpfWkhQ_oLjU5XwdR_RY/view?usp=sharing" 
          target="_blank"
          rel="noopeener noreferrer"
          className="font-extrabold text-2xl text-[#49332a] uppercase flex items-center gap-2 cursor-pointer ">
          <span>View resume</span>
          <span className="text-4xl">
            {" "}
            <FiArrowRight />{" "}
          </span>
        </a>
      </motion.section>

      {/* <Experience/> */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ y: translateContent }}
        className="bg-white text-white hidden"
      >
        <motion.div className="bg-black/90 px-4 pt-4 md:pt-8 md:px-8">
          <h1 className="text-balance text-4xl md:text-7xl font-extrabold border-b border-gray-300 pb-8">
            Experience 5+
          </h1>

          {/* Experiences */}
          <div className="text-4xl md:text-6xl font-extrabold text-white/80 mt-15 flex flex-col gap-10 text-right tracking-wide">
            <h2 className="border-b border-gray-400/20 pb-8 md:pb-12 px-4 md:px-8">
              Internship at Deejoft
            </h2>
            <h2 className=" border-b border-gray-400/20 pb-8 md:pb-12 px-4 md:px-8">
              Senior Developer at Phipest-bens
            </h2>
            <h2 className=" border-b border-gray-400/20 pb-8 md:pb-12 px-4 md:px-8">
              C.E.O & Founder of DebateX
            </h2>
            <h2 className=" border-b border-gray-400/20 pb-8 md:pb-12 px-4 md:px-8">
              C.E.O & Founder of Chat-space
            </h2>
            <h2 className=" border-b border-gray-400/20 pb-8 md:pb-12 px-4 md:px-8">
              Brains behind MeXn
            </h2>
            <h2 className=" border-b border-gray-400/20 pb-8 md:pb-12 px-4 md:px-8">
              50+ Freelance Projects
            </h2>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About_Me;
