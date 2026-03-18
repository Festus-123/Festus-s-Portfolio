"use client";
import Image from "next/image";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";

const About_Me = () => {
  const { scrollY } = useScroll();
  const translateTitle = useTransform(scrollY, [0, 400], [0, 300]);
  const translateTitleOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const translateContent = useTransform(scrollY, [0, 400], [0, -300]);
  return (
    <div
      style={{
        backgroundImage: "url(/white-paper.jpg)",
        backgroundAttachment: "fixed",
      }}
      className="w-full h-full relative"
    >
      {/* About me  */}

      {/* Photo */}
      <motion.div
        style={{ y: translateTitle, opacity: translateTitleOpacity }}
        className="w-full flex flex-col md:flex-row items-center gap-10 p-8 md:p-16"
      >
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-6xl font-extrabold text-amber-950 text-center">
            FESTUS PHILLIP A.
          </h1>
          <p className="text-amber-950 text-lg md:text-xl font-medium flex flex-col items-center md:items-start">
            <span>A Fullstack Web Developer</span>

            <span className="flex items-center gap-4 text-center">
              <span>| Active</span> <FiCheckCircle />
              <FiCheckCircle />
            </span>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ y: translateContent }}
        className="bg-amber-50/80 w-full h-full p-8 md:p-16 flex flex-col gap-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-40">
        <p className="w-full font-light text-justify text-lg md:text-2xl leading-relaxed">
          <span className="font-medium text-amber-950">Hi👋, I’m Festus, </span>
          a 300 level Computer Science student at OAUSTECH with a current First
          Class CGPA of 4.61. I specialize in JavaScript technologies like
          React, Next.js and React Native, using them to develop responsive web
          applications, interactive interfaces, and practical solutions to
          real-world problems. <br /> <br />
          With over 3 years of experience, I’ve worked on a variety of
          projects—from simple tools to more structured applications—constantly
          refining my skills and attention to detail. I enjoy turning ideas into
          working systems and continuously pushing myself to grow as a
          developer.
        </p>
        <div className="w-[90%] bg-white drop-shadow-2xl p-4">
        <img
          src={"/festus.jpg"}
          alt="festus"
          className="w-full h-110 object-cover"
        />
        </div>
        </div>

        <p className="font-light text-justify w-full lg::w-[50%] text-lg md:text-2xl leading-relaxed">
          I&apos;m a passionate Fullstack Developer and Computer Science student with a
          strong focus on building clean, functional, and user-friendly digital
          experiences.  <br /> <br />
          <span className="flex flex-col gap-2 ">
            <span className="">if (!coding 👨‍💻) {"{"}</span>
            <span className=" pl-10">
              Gaming🎮: true, Trading 📉: true, Watching movie series🎬: true
              reading📖: false,
            </span>
            <span>{"}"}</span>
          </span>{" "}
          <br />
          I’m currently open to opportunities where I can
          contribute, learn, and build impactful solutions while growing into a
          well-rounded software engineer.
        </p>
        {/* Album */}
        {/* <div className="p-16"></div> */}
      </motion.div>
    </div>
  );
};

export default About_Me;
