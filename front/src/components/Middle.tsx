import React from "react";
import Box from "./Box";
import image from "../../public/master-banner.svg";
import one from "../../public/boxes/one.png";
import two from "../../public/boxes/2.svg";
import three from "../../public/boxes/three.png";

function Middle() {
  const headings = [
    "Professional Curriculum Helps Parents Rest Easy",
    "Personal Mentoring Service",
    "A Math Learning App Kids Crave",
  ];
  const lists = [
    [
      "Systematic curriculum for kids ages 3-8",
      "Interactive AI content fosters and maintains kids' interest in learning",
      "Immersive classes with interactive learning experiences"
    ],
    [
      "Your Mentor provides 1-on-1 mentoring at any time",
      "Daily reports keep you up to date on your child's learning",
      "Instant feedback keeps kids encouraged and motivated"
    ],
    [
      "Developed by early education specialists from Ivy League and other top universities",
      "Progressive learning pathways thoughtfully developed for each child"
    ],
  ];

  return (
    <div className="relative text-center py-4 min-h-screen mx-[6rem]">
      <h1 className="text-[48px] font-bold">
        Adaptive learning path + best teachers = Math mastery
      </h1>
      <h2 className="text-[20px] mt-2">
        The guaranteed formula to be a Math wizard
      </h2>
      <div className="flex flex-col lg:flex-row items-center mt-8">
        <div className="lg:absolute lg:grid lg:grid-cols-4 lg:gap-x-8 lg:w-full relative">
          <Box colour={["bg-pink-100", "text-pink-500"]} headings={headings[0]} lists={lists[0]} maxWordsPerRow={3} image={one}/>
          <Box colour={["bg-yellow-100", "text-yellow-400"]} headings={headings[1]} lists={lists[1]} maxWordsPerRow={3} image={two}/>
          <Box colour={["bg-blue-100", "text-blue-400"]} headings={headings[2]} lists={lists[2]} maxWordsPerRow={3} image={three}/>
        </div>
        <img src={image} alt="hero" className="ml-auto mt-4 hidden lg:block" />
      </div>
    </div>
  );
}

export default Middle;
