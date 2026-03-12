"use client";
import React from "react";
import Link from "next/link";
// import Image from "next/image";

const About_Preview = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      {/* Title About me */}
      <h1 className="text-center font-extrabold text-3xl sm:text-24l md:text-6xl text-amber-950">
        ABOUT ME
      </h1>

      {/* Details Purview */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center justify-evenly">
        <img
          src="/hero-img.jpg"
          alt="My Image"
          className="w-[70%] md:w-[40%] lg:w-[30%] h-auto rounded border-4 border-black place-self-center md:place-self-start"
        />
        <div className="w-full md:w-[60%] flex flex-col gap-10 items-center md:items-start">
          <p className="w-full text-justify md:text-left">
            <span className="font-bold text-amber-950">
              Hi, I&apos;m Festus,
            </span>{" "}
            a 300 level Computer Science student at OAUSTECH with a current
            First Class CGPA of 4.61. With over 3 years experience, I&apos;ve
            been working as both a software developer and a graphics designer,
            mainly focusing on JavaScript technologies to build websites, mobile
            applications, and interactive simulations. <br /> <br />
            I have worked on several projects ranging from simple password
            Generator systems to responsive Enterprise web apps, reflecting my
            interest in experimenting with ideas and turning them into working
            systems. <br /> <br />I approach development with a simple goal
            driven strategy of{" "}
            <span className="font-medium text-amber-950">
              understanding what the problem the system must solve is —
            </span>{" "}
            I like to understand how things work, question assumptions, and
            build solutions that make sense logically. As a fast learner and a
            quick thinker My goal is to keep improving my skills by building
            useful and creative products while growing as a developer. <br />
          </p>
        <Link className="border-3 text-center border-amber-950 p-2 md:p-3 text-amber-950 font-bold w-[40%] cursor-pointer" href="/about">
          More About Me
        </Link>
        </div>
      </div>

      {/* Outline of experience */}
      <div className="w-full flex flex-row items-center justify-evenly">
        {/* Experience */}
        <h1 className="text-amber-950 flex flex-col items-center">
          <span className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            3+
          </span>
          <span className=" text-xl">Experience</span>
        </h1>
        {/* Projects */}
        <h1 className="text-amber-950 flex flex-col items-center">
          <span className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            30+
          </span>
          <span className=" text-xl">Projects</span>
        </h1>
        {/* Reviews */}
        <h1 className="text-amber-950 flex flex-col items-center">
          <span className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            138+
          </span>
          <span className=" text-xl">Reviews</span>
        </h1>
      </div>
    </div>
  );
};

export default About_Preview;
