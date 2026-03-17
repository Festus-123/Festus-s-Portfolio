"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiX, FiMenu } from "react-icons/fi";
import Loading from "../main-sites/Loading";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { scrollX } = useScroll();
  const [loading, setLoading] = useState<boolean>(false)

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

  const handleNav = () => {
    setOpen(false)
    setLoading(true)
    setTimeout(() => setLoading(false), 3200)
  }

  if(loading) return <Loading />

  return (
    // Side bar pannel
    <div className="flex flex-row ">
      <div
        onClick={handleOpen}
        className= {`${open && "absolute"} fixed z-50 right-5 top-5 bg-gray-50/50 p-4 text-2xl cursor-pointer drop-shadow-xl`}
      >
        {open ? <FiX /> : <FiMenu />}
      </div>
      <AnimatePresence>
      { open && (
      <motion.div 
        initial={{ x: "-100%"}}
        animate={{ x: 0}}
        exit={{ x: "-100%"}}
        transition={{ duration: 0.6, ease: "easeInOut"}}
        className="fixed h-screen backdrop-blur-md bg-black/80 w-full md:w-[60%] lg:w-[50%] p-16 z-20">
        <motion.div 
            initial={{ x: "-100%", y: 100}}
            animate={{ x: 0, y: 0}}
            transition={{ duration: 1, ease: "easeInOut"}}
            className="flex flex-col gap-10 justify-center h-full">
          {/* Portfolio */}
          {links.map((item, index) => (
            <motion.div 
                whileHover={{ x: 40}}
                transition={{ duration: 0.2, ease: "easeInOut"}}
                style={{}} key={index}>
              <Link
                href={item.href}
                prefetch={false}
                onClick={handleNav}
                className="text-amber-50 text-2xl md:text-3xl lg::text-4xl font-extrabold "
              >
                {item.name}
              </Link>
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
