"use cLient";
import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Contact_Preview from "@/components/contact-preview/Contact_Preview";
import Footer from "@/components/footer/Footer";
import { motion } from 'framer-motion';

const MainProjects = () => {
  const links = [
    {
      name: "Tax Master",
      image: "/project-1.png",
      site: "",
      github: "/github.jpg",
    },
    {
      name: "M & K Clothing",
      image: "/project-1.png",
      site: "",
      github: "/github.jpg",
    },
    {
      name: "Password Gen...",
      image: "/project-1.png",
      site: "",
      github: "/github.jpg",
    },
    {
      name: "Movie App Main",
      image: "/project-1.png",
      site: "",
      github: "/github.jpg",
    },
    {
      name: "Collecta NFT",
      image: "/project-1.png",
      site: "",
      github: "/github.jpg",
    },
    {
      name: "Virtual Robot",
      image: "/project-1.png",
      site: "",
      github: "/github.jpg",
    },
  ];
  return (
    <div
      style={{
        background: "url(/white-paper.jpg)",
        backgroundAttachment: "fixed",
      }}
      className="h-full"
    >
        
      <motion.h1
        className="text-center font-extrabold text-3xl sm:text-24l md:text-6xl text-amber-950"
      >
        PROJECTS
      </motion.h1>

      <div className="bg-black/90 text-amber-50">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 z-20 md:p-12">
          {links.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 items-center">
              <div className="w-full">
                <img src={item.image} alt={item.image} />
              </div>
              <div className="w-full flex flex-row items-center justify-between border-b pb-2">
                <h1 className="font-bold text-lg md:text-xl">{item.name}</h1>
                <div className="font-bold text-xl md:text-2xl flex flex-row items-center gap-2">
                  <Link href={item.site}>
                    <FiArrowUpRight />
                  </Link>
                  <Link href={item.github}>
                    <img
                      className="w-5 h-5 rounded-full"
                      src={item.github}
                      alt="GitHub"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading... */}
      <div className="my-40">
        <h1 className="text-amber-950 text-lg md:text-xl font-semibold text-center">
          More projects Loading...
        </h1>
      </div>

      {/* Contact and Footer */}
      <Contact_Preview />
      <Footer />
    </div>
  );
};

export default MainProjects;
