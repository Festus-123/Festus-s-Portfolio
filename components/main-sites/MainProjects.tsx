"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import { Changa_One } from "next/font/google";
import { links } from "@/data/projects";
import Image from "next/image";
// import { Project as type } from "@/data/projects";

const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"]
})

const Projects = () => {
  const { scrollY } = useScroll();

  // title moves up slightly
  const titleY = useTransform(scrollY, [0, 300], [0, 200]);

  // project container moves up faster (slides over title)
  const containerY = useTransform(scrollY, [0, 400], [200, -100]);

  return (
    <div
      style={{
        background: "url(/white-paper.jpg)",
        backgroundAttachment: "fixed",
      }}
      className="relative h-full pt-40"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-50/60"></div>

      {/* PROJECT TITLE */}
      <motion.h1
        style={{ y: titleY }}
        className={`relative text-center font-extrabold text-[4em] sm:text-[9em] md:text-[12em] text-[#49332a] mb-5 ${changaOne.className}`}
      >
        PROJECTS
      </motion.h1>

      {/* PROJECT CONTAINER */}
      <motion.div style={{ y: containerY }} className="bg-white">
        <motion.div className="bg-black/90 text-amber-50 z-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-4 md:p-12">
            {links.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 items-center">
                <div className="w-full relative">
                  <Link
                    href={`/projects/${item.slug}`}
                    className="absolute z-10 w-full h-full cursor-pointer"
                  />
                  <Image
                    priority
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </div>

                <div className="w-full flex items-center justify-between border-b pb-2">
                  <h1 className="font-bold text-lg md:text-xl">{item.name}</h1>

                  <div className="flex items-center gap-3 text-xl">
                    {item.site && (
                      <Link href={item.site}>
                        <FiArrowUpRight />
                      </Link>
                    )}

                    {item.github_site && (
                      <Link href={item.github_site}>
                        <Image
                          priority
                          src={item.github}
                          alt="GitHub"
                          width={20}
                          height={20}
                          className="w-5 h-5 rounded-full"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Loading */}
      <div className="py-24">
        <h1 className="text-amber-950 text-lg md:text-xl font-semibold text-center">
          More projects Loading...
        </h1>
      </div>
    </div>
  );
};

export default Projects;
