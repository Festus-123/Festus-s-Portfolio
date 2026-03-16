"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Contact_Preview from "@/components/contact-preview/Contact_Preview";
import Footer from "@/components/footer/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

export type Project = {
  name: string;
  video: string;
  site?: string;
  github_site?: string;
  github: string;
};

const Projects = () => {

  const { scrollY } = useScroll();

  // title moves up slightly
  const titleY = useTransform(scrollY, [0, 300], [0, 200]);

  // project container moves up faster (slides over title)
  const containerY = useTransform(scrollY, [0, 400], [200, -100]);

  const links: Project[] = [
    {
      name: "Tax Master",
      video: "/tax-master.mp4",
      site: "https://tax-master.vercel.app/",
      github_site: "https://github.com/Festus-123/Tax-Master",
      github: "/github.jpg",
    },
    {
      name: "M & K Clothing",
      video: "/mk-clothing.mp4",
      site: "https://mkclothing-kna2.vercel.app/",
      github_site: "https://github.com/Festus-123/mkclothing",
      github: "/github.jpg",
    },
    {
      name: "Password Gen...",
      video: "/password-gen.mp4",
      site: "https://password-generator-mauve-zeta.vercel.app/",
      github_site: "https://github.com/Festus-123/Password-Generator",
      github: "/github.jpg",
    },
    {
      name: "Movie App Main",
      video: "/movie-app.mp4",
      site: "https://movie-app-delta-sand.vercel.app/",
      github_site: "https://github.com/Festus-123/Movie-app",
      github: "/github.jpg",
    },
    {
      name: "Collecta NFT",
      video: "/collecta-nft.mp4",
      site: "https://collecta-nfts.vercel.app/",
      github_site: "https://github.com/Festus-123/Collecta-nfts",
      github: "/github.jpg",
    },
    {
      name: "Virtual Robot",
      video: "/virtual-robot.mp4",
      site: "https://virtual-robot-gold.vercel.app/",
      github_site: "https://github.com/Festus-123/virtual-robot",
      github: "/github.jpg",
    },
    {
      name: "Ciera-Fi",
      video: "/ciera-fi.mp4",
      site: "https://ciera-fi.vercel.app/",
      github_site: "https://github.com/Festus-123/Ciera-Fi",
      github: "/github.jpg",
    },
    {
      name: "Movie Search",
      video: "/movie-search.mp4",
      site: "https://movie-search-app-six-lake.vercel.app/",
      github_site: "https://github.com/Festus-123/Movie-search-app",
      github: "/github.jpg",
    },
  ];

  return (
    <div
      style={{
        background: "url(/white-paper.jpg)",
        backgroundAttachment: "fixed",
      }}
      className="h-full pt-40"
    >

      {/* PROJECT TITLE */}
      <motion.h1
        style={{ y: titleY }}
        className="text-center font-extrabold text-3xl sm:text-4xl md:text-6xl text-amber-950 mb-5"
      >
        PROJECTS
      </motion.h1>

      {/* PROJECT CONTAINER */}
      <motion.div
        style={{ y: containerY }}
        className="bg-black/90 text-amber-50 z-10"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 p-6 md:p-12">
          {links.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 items-center">

              <div className="w-full">
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
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
                      <img
                        className="w-5 h-5 rounded-full"
                        src={item.github}
                        alt="GitHub"
                      />
                    </Link>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Loading */}
      <div className="my-40">
        <h1 className="text-amber-950 text-lg md:text-xl font-semibold text-center">
          More projects Loading...
        </h1>
      </div>

      <Contact_Preview />
      <Footer />

    </div>
  );
};

export default Projects;