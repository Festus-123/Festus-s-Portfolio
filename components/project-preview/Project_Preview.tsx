import React from "react";

const Project_Preview = () => {
  return (
    <div className="flex flex-col gap-20 items-center">
      <h1 className="text-center font-extrabold text-3xl sm:text-24l md:text-6xl text-amber-950">
        MY PROJECTS
      </h1>
      {/* Projects */}
      <div className="w-full flex flex-col items-center justify-center gap-10">
        {/* #! Project */}
        <h1 className="font-extrabold text-amber-950 text-xl sm:text-2xl md:text-4xl">
          PROJECT #1
        </h1>
        <div className="w-full md:w-[80%]">
          <div className="w-full  h-auto border-4 bg-white/40 p-4 flex flex-col md:flex-row items-start justify-evenly gap-5 ">
            <img className=" w-full md:w-[50%]  h-auto" src="/project-1.png" />
            <div className="hidden w-[50%] h-full md:flex flex-col gap-10 p-4 text-sm rounded">
              <div className="border-b ext-gray-400 text-xl md:text-2xl font-medium">
                Tech Stacks Used
              </div>

              <div className="flex flex-wrap gap-5 items-center text-lg">
                <li className=" py-1 px-4 rounded-xl">React</li>
                <li className=" py-1 px-4 rounded-xl">Tailwind</li>
                <li className=" py-1 px-4 rounded-xl">Vercel</li>
                <li className=" py-1 px-4 rounded-xl">Visual Studio COde</li>
              </div>
            </div>
          </div>
          <h1 className="flex flex-col gap-1 mt-5">
            <span className="font-medium text-amber-950 text-xl md:text-3xl">
            Tax Master
            </span>
            <span className="font-medium text-lg md:text-xl">
                Calculate and Estimate your taxes under the Nigerian 2026 tax regulation.
            </span>
            <span className="text-justify ">
                Tax master Helps users in classes of: Individuals, (employed, self employed),
                Business owners (large or small foirms), or Others whatever categor they fall in
                Calculate their taxes to keep ccurate track and avoid penalties of the 
                2026 tax regulations
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Project_Preview;
