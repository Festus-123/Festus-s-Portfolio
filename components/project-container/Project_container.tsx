"use client";
import React from "react";
import Link from "next/link";

interface project_details {
  project_no: string;
  project_stacks: string[];
  project_title: string;
  project_cause: string;
  project_description: string;
}

const Project_container = ({
  project_no,
  project_stacks,
  project_title,
  project_cause,
  project_description,
}: project_details) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      {/* Projects  container*/}
      <h1 className="font-extrabold text-amber-950 text-xl sm:text-2xl md:text-4xl">
        {project_no}
      </h1>
      <div className="w-full md:w-[80%]">
        <div className="w-full  h-auto border-4 bg-white/40 p-4 flex flex-col md:flex-row items-start justify-evenly gap-5 ">
          <img className=" w-full md:w-[50%]  h-auto" src="/project-1.png" />
          <div className="hidden w-[50%] h-full md:flex flex-col gap-10 p-4 text-sm rounded">
            <div className="border-b ext-gray-400 text-xl md:text-2xl font-medium">
              Tech Stacks Used
            </div>

            <div className="flex flex-wrap gap-5 items-center text-lg">
              {project_stacks.map((stack, index) => (
                <li key={index} className=" py-1 px-4 rounded-xl">
                  {stack}
                </li>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-b py-10 flex flex-col gap-4">
          <h1 className="flex flex-col gap-1 mt-5">
            <span className="font-medium text-amber-950 text-xl md:text-3xl">
              {project_title}
            </span>
            <span className="font-medium text-lg md:text-xl">
              {project_cause}
            </span>
            <span className="text-justify ">{project_description}</span>
          </h1>
          <div className="w-full flex flexx-row items-center gap-5">
            <Link
              className="border-3 text-center border-amber-950 p-2 md:p-3 text-amber-950 font-bold w-[50%] cursor-pointer"
              href="/projects"
            >
              Go to projects
            </Link>
            <Link
              className="border-3 text-center border-amber-950 p-2 md:p-3 text-amber-950 font-bold w-[50%] cursor-pointer"
              href="/projects"
            >
              Visit sites
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_container;
