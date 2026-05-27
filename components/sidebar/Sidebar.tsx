"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiX, FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { scrollX } = useScroll();

  const transleteX = useTransform(scrollX, [0, 0], [-100, 1])

  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const links = [
    { name: "Portfolio", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // Side bar pannel
    <div className="flex flex-row ">
      <div className={`${open && "flex flex-row items-center gap-5"} ${open && "absolute"} fixed z-50 right-5 top-5 text-2xl cursor-pointer drop-shadow-xl`}>
        { open && (
          <div className=" text-white">
            <h1 className="font-light text-center traking-wider">
              FesCode
            </h1>
          </div>
        )}
      <div
        onClick={handleOpen}
        className= {` bg-gray-50/50 p-4`}
      >
        {open ? <FiX /> : <FiMenu />}
      </div>
      </div>
      <AnimatePresence>
      { open && (
      <motion.div 
        initial={{ x: "100%"}}
        animate={{ x: 0}}
        exit={{ x: "100%"}}
        transition={{ duration: 0.2, ease: "easeInOut"}}
        className="fixed right-0 h-screen backdrop-blur-md bg-black/40 w-full md:w-[60%] lg:w-[50%] p-16 z-20">
        <motion.div 
            initial={{ x: "100%", y: 100}}
            animate={{ x: 0, y: 0}}
            transition={{ duration: 1, ease: "easeInOut"}}
            className="flex flex-col gap-10 justify-center items-end h-full px-8 md:px-16">
          {/* Portfolio */}
          {links.map((item, index) => (
            <motion.div 
                whileHover={{ x: -40}}
                animate={{ x: 0}}
                transition={{ duration: 0.2, ease: "easeInOut"}}
                style={{}} key={index}>
              <Link
                href={item.href}
                prefetch={false}
                onClick={() => setOpen(false)}
                className="text-white/80 text-2xl md:text-3xl lg:text-4xl font-extrabold "
              >
                {item.name}
              </Link>
              { item.href === "contact" && (
                <a href="#contact" className="">contact</a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
