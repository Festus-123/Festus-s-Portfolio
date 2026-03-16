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
          className="rounded-full w-60 h-60 border-6 border-amber-50 object-cover"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-7xl font-extrabold text-amber-950 text-center">
            FESTUS PHILLIP A.
          </h1>
          <p className="text-amber-950 text-lg md:text-xl font-medium">
            A Software Developer and Graphics Designer <br />
            <span className="flex items-center gap-4">
              <span>| Active</span> <FiCheckCircle />
              <FiCheckCircle />
            </span>
          </p>
        </div>
      </div>

      <div className="bg-amber-50/80 w-full h-full p-8 md:p-16"></div>
    </div>
  );
};

export default About_Me;
