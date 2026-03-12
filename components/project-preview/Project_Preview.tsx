"use client";
import React from "react";

import Project_container from "../project-container/Project_container";
import { motion, useTransform, useScroll } from "framer-motion";

const Project_Preview = () => {
  const { scrollY } = useScroll();

  const projectNextOpacity = useTransform(scrollY, [2300, 2400], [0.1, 1]);
  return (
    <div className="flex flex-col gap-20 items-center">
      <h1 className="text-center font-extrabold text-3xl sm:text-24l md:text-6xl text-amber-950">
        MY PROJECTS
      </h1>

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
      <motion.div style={{ opacity: projectNextOpacity }}>
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
    </div>
  );
};

export default Project_Preview;
