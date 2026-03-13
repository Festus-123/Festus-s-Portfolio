"use client";
import React from "react";
import { FiSend } from "react-icons/fi";

const Contact_Preview = () => {
  return (
    <div className="bg-amber-50/40">
      <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10 lg:gap-15 p-2 md:p-8 lg:p-16">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-amber-950 md:leading-40">
          GET <br /> IN <br /> TOUCH
        </h1>

        <form className="relative w-full flex flex-col gap-5 p-2 border-amber-950">
          {/* Email field */}
          <div className="flex flex-col gap-5 p-2 text-amber-950 border-b-2 text-lg md:text-xl ">
            <label htmlFor="Email">Your Email</label>
            <input
              id="Email"
              placeholder="your-email@gmail.com"
              required
              type="email"
              className="font-light"
            />
          </div>
          {/* Name field */}
          <div className="flex flex-col gap-5 p-2 text-amber-950 border-b-2 text-lg md:text-xl ">
            <label htmlFor="Email">Your Name</label>
            <input
              id="Email"
              placeholder="your name"
              type="Text"
              className="font-light"
            />
          </div>
          {/* Description field */}
          <div className="flex flex-col gap-5 p-2 text-amber-950  border-b-2 text-lg md:text-xl ">
            <label htmlFor="Email">Your Offer</label>
            <textarea
              id="Email"
              placeholder="Build..."
              required
              className="font-light min-h-25 max:h-25 md:min-h-30 md:max-h-30"
            />
          </div>
          <button 
            className="text-2xl md:text-4xl font-semibold italic border-2 border-amber-950 rounded-full p-2 md:p-3 absolute bottom-5 right-5 cursor-pointer">
            <FiSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact_Preview;
