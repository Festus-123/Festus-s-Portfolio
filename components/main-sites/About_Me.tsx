"ue client";
import Image from "next/image";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const About_Me = () => {
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
      <div className="w-full flex flex-col md:flex-row items-center gap-10 p-8 md:p-16">
        <img
          src={"/festus.jpg"}
          alt="festus"
          className="rounded-full w-50 h-50 object-cover"
        />
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-6xl font-extrabold text-amber-950 text-center">
            FESTUS PHILLIP A.
          </h1>
          <p className="text-amber-950 text-lg md:text-xl font-medium flex flex-col items-center md:items-start">
            <span>
            A Fullstack Web Developer
            </span>

            <span className="flex items-center gap-4 text-center">
              <span>| Active</span> <FiCheckCircle />
              <FiCheckCircle />
            </span>
          </p>
        </div>
      </div>

      <div className="bg-amber-50/80 w-full h-full p-8 md:p-16">
          <p className="font-light text-justify">
            <span className="font-bold text-amber-950">
              Hi, I&apos;m Festus,
            </span>{" "}
            a 300 level Computer Science student at OAUSTECH with a current
            First Class CGPA of 4.61. With over 3 years experience, I&apos;ve
            been working as both a software developer and a graphics designer,
            mainly focusing on JavaScript technologies to build websites, mobile
            applications, and interactive simulations. <br /> <br />I have
            worked on several projects ranging from simple password Generator
            systems to responsive Enterprise web apps, reflecting my interest in
            experimenting with ideas and turning them into working systems.
          </p>
      </div>
    </div>
  );
};

export default About_Me;
