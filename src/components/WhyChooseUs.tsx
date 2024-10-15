"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const novelSchool = [
  {
    title: "Mastering Character Development",
    description: "Join seasoned authors as they guide you through the intricacies of creating memorable and relatable characters. Learn techniques to bring your characters to life and drive your story forward.",
  },
  {
    title: "Crafting Compelling Plots",
    description: "Discover the art of plotting with expert instructors. Dive into various plot structures, pacing, and tension-building strategies to keep your readers engaged from beginning to end.",
  },
  {
    title: "Dialogue That Dances",
    description: "Enhance your writing with masterclasses focused on authentic and engaging dialogue. Learn how to capture voices, convey emotions, and advance your story through conversations.",
  },
  {
    title: "World-Building Wonders",
    description: "Explore the fundamentals of creating immersive worlds in your stories. Work with experienced writers to develop rich settings that enhance your narrative and captivate your readers.",
  },
  
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={novelSchool} />
    </div>
  );
}

export default WhyChooseUs;
