"use client";
import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import Project_container from "../project-container/Project_container";
import { motion, useTransform, useScroll } from "framer-motion";

const Project_Preview = () => {
  const { scrollY } = useScroll();

  //   const projectNextOpacity = useTransform(scrollY, [800, 1000], [0.1, 1]);
  const projectTranslateY = useTransform(scrollY, [400, 800], [100, -50]);
  const projectOverTitle = useTransform(scrollY, [900, 1100], [0, -200]);
  return (
    <div className="flex flex-col gap-20 items-center">
      <motion.h1
        style={{ y: projectTranslateY }}
        className="text-center font-extrabold text-3xl sm:text-24l md:text-6xl text-amber-950"
      >
        MY PROJECTS
      </motion.h1>

      <motion.div
        className="bg-black/90 w-full flex flex-col gap-20 items-center z-20"
        style={{ y: projectOverTitle }}
      >
        {/* Projects */}
        <Project_container
          project_no="PROJECT #1"
          project_stacks={[
            "React 19",
            "Tailwind css",
            "Framer motion",
            "supabase",
            "Typescript",
          ]}
          project_title="Tax Master"
          project_cause="Calculate and Estimate your taxes under the Nigerian 2026 tax
            regulation."
          project_description="Tax master Helps users in classes of: Individuals, (employed, self
            employed), Business owners (large or small foirms), or Others
            whatever categor they fall in Calculate their taxes to keep ccurate
            track and avoid penalties of the 2026 tax regulations"
        />

        {/* Projects */}
        <motion.div style={{}}>
          <Project_container
            project_no="PROJECT #2"
            project_stacks={[
              "React 19",
              "Tailwind css",
              "Framer motion",
              "supabase",
              "Figma",
              "javascript",
              "sonner",
            ]}
            project_title="M & K Clothing"
            project_cause="Calculate and Estimate your taxes under the Nigerian 2026 tax
            regulation."
            project_description="Tax master Helps users in classes of: Individuals, (employed, self
            employed), Business owners (large or small foirms), or Others
            whatever categor they fall in Calculate their taxes to keep ccurate
            track and avoid penalties of the 2026 tax regulations"
          />
        </motion.div>

        <Link
          className="w-full text-white/90 font-bold flex items-center justify-end gap-2 text-xl md:text-3xl cursor-pointer p-4"
          href="/about"
        >
          <span>More On Projects</span>
          <FiArrowUpRight />
        </Link>
      </motion.div>
    </div>
  );
};

export default Project_Preview;
