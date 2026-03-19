import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { links } from "@/data/projects";
import { FiArrowUpRight } from "react-icons/fi";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = links.find((p) => p.slug === slug);
  const index = links.findIndex((p) => p.slug === slug);

  console.log("project", project);

  if (!project) return notFound();

  const prev = links[index - 1];
  const next = links[index + 1];

  return (
    <div className="w-full flex flex-col bg-black/90 text-white/80 items-center justify-center gap-10 p-4 md:py-8">
      {/* Projects  container*/}
      <div className="w-full h-auto p-4 flex flex-col items-start justify-evenly gap-10 ">
        <h1 className={`font-extrabold text-4xl md:text-7xl`}>
          {project.name}
        </h1>
        <div className="flex flex-row gap-20 text-lg font-light">
          {project.stacks.map((stack, index) => (
            <p key={index} className=" py-1 px-4 rounded-xl ">
              {stack}
            </p>
          ))}
        </div>
        <div className="h-full flex md:flex-row flex-col gap-10 p-4 rounded">
          <video className=" w-full md:w-[50%]  h-auto" src={project.video} />
          <div>
            <h1 className="font-light text-lg md:text-2xl leading-relaxed">
              {project.description}
            </h1>
            {project.site && (
              <Link
                className="text-center p-2 md:p-3 font-extrabold text-lg md:text-2xl cursor-pointer"
                href={project.site}
              >
                <FiArrowUpRight />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-b py-10 flex flex-col gap-4"></div>
      <div className="flex justify-between mt-20">
        {prev && <Link href={`/projects/${prev.slug}`}>← {prev.name}</Link>}

        {next && <Link href={`/projects/${next.slug}`}>{next.name} →</Link>}
      </div>
    </div>
  );
};

export default page;
