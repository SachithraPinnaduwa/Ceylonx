import React from "react";
import smart from "../../public/glass-kid.svg";
import VerticalBox from "./VerticalBox";
import one from "../../public/vbox/1.svg";
import two from "../../public/vbox/2.svg";
import three from "../../public/vbox/3.svg";
import four from "../../public/vbox/4.svg";
function Bottom() {
  const titles = [
    "Number Sense and Operations",
    "Geometry",
    "Logic and Patterns",
    "Problem Solving",
  ];
  const listitems = [
    [
      "Fluently compose and decompose numbers within 10",
      "Understand addition and subtraction within 10 ",
    ],
    [
      "Recognize 2D and 3D shapes ",
      "Identify defining attributes of shapes (edges, vertices, cross sections, nets, etc.)",
    ],
    [
      "Use analogical reasoning to solve Sudoku puzzles and understand the concept of cycles",
    ],
    [
      "Learn tangram puzzles and practice creating shapes using tangram pieces",
      "Measure by iterating length units ",
    ],
  ];
  const widths = [120, 130, 140, 120]
  return (
    <div className="relative text-center py-4 min-h-screen mx-[6rem]">
      <h1 className="text-[48px] font-bold">
        Cultivate thinking skills from all aspects
      </h1>
      <h2 className="text-[16px] mt-2">
        Our expert advisors can help you find the right workplace solution for
        you and your team
      </h2>

      <div className="inline-flex rounded-md shadow-sm mt-10 mb-4" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-orange-500 bg-white border border-gray-200 rounded-s-2xl "
        >
          S2
          <br />
          <span className="">3-4 Years Old</span>
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium  bg-orange-500 border-t border-b border-gray-200 "
        >
          <span className=" text-white">S3</span>
          <br />
          <span className="text-gray-200">5 Years Old</span>
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-orange-500 bg-white border border-gray-200 rounded-e-2xl "
        >
          S4
          <br />
          <span className="">6 Years Old</span>
        </button>
      </div>

      <div className=" bg-gradient-to-r from-[#FEF5DB] to-[#FFDFDF] rounded-tl-[10rem] rounded-2xl flex flex-row p-10 mx-20 mb-20">
        <div className="p-10 flex justify-center items-center">
          <img src={smart} alt="image" width={400} />
        </div>
        <div className=" mx-auto justify-center items-center">
          <ul className="flex flex-col font-medium gap-y-4 ">
            <VerticalBox
              titles={titles[0]}
              listitems={listitems[0]}
              image={one}
              widths={widths[0]}
            />
            <VerticalBox
              titles={titles[1]}
              listitems={listitems[1]}
              image={two}
                widths={widths[1]}
            />
            <VerticalBox
              titles={titles[2]}
              listitems={listitems[2]}
              image={three}
              widths={widths[2]}
            />
            <VerticalBox
              titles={titles[3]}
              listitems={listitems[3]}
              image={four}
                widths={widths[3]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
