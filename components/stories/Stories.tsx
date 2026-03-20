"use client";

import React from "react";
import StoryBlock from "./stories-block/StoryBlock";
import { stories } from "../../data/stories";

const Stories = () => {
  return (
    <div className="bg-black/90  flex flex-col gap-20">
      {/* TITLE */}
      <h1 className="text-4xl md:text-7xl font-extrabold tracking-wide text-white/90 border-b border-white/20 p-8 md:p-16">
        STORIES
      </h1>

      {/* STORY 1 */}
      <div className="p-8 md:p-16 flex flex-col gap-30">
        {stories.map((story, index) => (
          <StoryBlock
            key={index}
            images={story.images}
            title={story.title}
            text={story.description}
            reverse={story.reverse}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
