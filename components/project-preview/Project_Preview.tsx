"use client";
import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import Project_container from "../project-container/Project_container";
import { motion, useTransform, useScroll } from "framer-motion";


const Project_Preview = () => {
  const { scrollY } = useScroll();

  const links = [
    {name: "Tax Master", image: "/project-1.png", site: "", github: "/github.jpg"},
    {name: "M & K Clothing", image: "/project-1.png", site: "", github: "/github.jpg"},
    // {name: "Collecta NFT", image: "/project-1.png", site: "", github: "/github.jpg"},
  ]

  //   const projectNextOpacity = useTransform(scrollY, [800, 1000], [0.1, 1]);
  const projectTranslateY = useTransform(scrollY, [400, 800], [100, -50]);
  const projectOverTitle = useTransform(scrollY, [900, 1100], [0, -200]);

  return (
    <div className="flex flex-col gap-20 items-center">
      <motion.h1
        style={{ y: projectTranslateY }}
        className="text-center font-extrabold text-3xl sm:text-24l md:text-6xl text-amber-950"
      >
        RECENT PROJECTS
      </motion.h1>

      <motion.div
        className="bg-black/90 text-amber-50/90 flex flex-col items-end px-4 py-8 md:py-4 "
        style={{ y: projectOverTitle }}
      >
        {/* <h1 className="w-full font-bold text-2xl md:text-4xl text-white/90 text-center py-4 md:py-0">Recents Works</h1> */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 z-20 md:p-12">
        { links.map((item, index) => (
            <div
                key={index}
                className="flex flex-col gap-4 items-center">
                    <div className="w-full">
                    <img src={item.image} alt={item.image}/>
                    </div>
                    <div className="w-full flex flex-row items-center justify-between border-b pb-2">
                        <h1 className="font-bold text-lg md:text-xl">{item.name}</h1>
                        <div className="font-bold text-xl md:text-2xl flex flex-row items-center gap-2">
                            <Link href={item.site}>
                                <FiArrowUpRight />
                            </Link>
                            <Link href={item.github}>
                                <img className="w-5 h-5 rounded-full" src={item.github} alt="GitHub"/>
                            </Link>
                        </div>
                    </div>
            </div>
        ))}
        </div>
        <Link
          className="font-bold flex items-center gap-2 text-xl md:text-3xl cursor-pointer p-4"
          href="/projects"
        >
          <span>More On Projects</span>
          <FiArrowUpRight />
        </Link>
        </motion.div>
    </div>
  );
};

export default Project_Preview;
