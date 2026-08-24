"use client";

import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { Changa_One } from "next/font/google";
import { toast } from "sonner";
import contacts from "@/data/contact";

const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
});

const Contact_Preview = () => {
  const [loading, setLoading] = useState<boolean>(false);

const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();

  const toastId = toast.loading("Sending Message!");

  const form = e.currentTarget as HTMLFormElement ; // store reference
  const formData = new FormData(form);

  if(loading) setLoading(false);
  else setLoading(true)

  const res = await fetch("/api/send", {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      name: formData.get("name"),
      message: formData.get("message"),
    }),
  });

  const data = await res.json();

  if (data.success) {
    setLoading(false)
    toast.success("Message sent successfully", { id: toastId });

    form.reset();
  } else {
    setLoading(false)
    toast.error("Err, couldn't send message", { id: toastId });
  }
};
  return (
    <div
      id="contact"
      style={{
        backgroundImage: "url(/white-paper.jpg)",
        backgroundAttachment: "fixed",
      }}
      className=""
    >
      <div className="flex flex-col bg-gray-50/90">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-20 lg:gap-30 p-2 md:p-8 lg:p-12">
        <h1
          className={`text-[clamp(6em,12vw,14em)] font-extrabold text-[#49332a] md:leading-40 ${changaOne.className}`}
        >
          GET <br /> IN <br /> TOUCH
        </h1>

        <form
          onSubmit={handleSubmit}
          className="relative w-full flex flex-col gap-5 p-2 border-amber-950"
        >
          {/* Email field */}
          <div className="flex flex-col gap-5 p-2 text-amber-950 border-b  text-lg md:text-xl ">
            <label htmlFor="Email">Your Email</label>
            <input
              id="Email"
              placeholder="your-email@gmail.com"
              required
              type="email"
              name="email"
              className="font-light outline-none border-none"
            />
          </div>
          {/* Name field */}
          <div className="flex flex-col gap-5 p-2 text-amber-950 border-b text-lg md:text-xl ">
            <label htmlFor="Email">Your Name</label>
            <input
              id="Email"
              placeholder="your name"
              required
              type="text"
              name="name"
              className="font-light outline-none border-none"
            />
          </div>
          {/* Description field */}
          <div className="flex flex-col gap-5 p-2 text-amber-950  border-b text-lg md:text-xl ">
            <label htmlFor="Email">Your Offer</label>
            <textarea
              id="Email"
              placeholder="Build..."
              required
              name="message"
              className="font-light min-h-25 max:h-25 md:min-h-30 md:max-h-30 outline-none border-none hide-scrollbar"
            />
          </div>
          <button 
            disabled={loading}
            type="submit"
            className="text-2xl md:text-4xl font-semibold italic border border-amber-950 rounded-full p-2 md:p-3 absolute bottom-5 right-5 cursor-pointer">
            <FiSend />
          </button>
        </form>
      </div>

      {/* <h1 className="uppercase font-extrabold w-full text-[clamp(9rem,20vw,15rem)] text-center opacity-5 absolute z-40 bottom-0 tracking-widest">
        festus
      </h1> */}

        <div className="w-full flex flex-row items-center justify-evenly text-2xl p-8">
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="hover:scale-110 transition duration-300 text-amber-950 cursor-pointer" />
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Contact_Preview;
