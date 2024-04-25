import React from "react";
import { BlkLine, clock, folder, girl, monitor } from "../../assets";

const Choose = () => {
  const features = [
    {
      title: "Organize",
      imageSrc: girl,
      content: "Empower yourself with the knowledge and skills gained...",
    },
    {
      title: "Manage",
      imageSrc: clock,
      content: "Empower yourself with the knowledge and skills gained...",
    },
    {
      title: "Monitor",
      imageSrc: monitor,
      content: "Empower yourself with the knowledge and skills gained...",
    },
    {
      title: "Learn",
      imageSrc: folder,
      content: "Empower yourself with the knowledge and skills gained...",
    },
  ];

  return (
    <div className="flex flex-col justify-center w-[80%] items-center mb-24">
      <div className="flex flex-col mb-10">
        <div className="flex mt-40 ">
          <img src={BlkLine} alt="black line" />
          <h1 className="mx-4 ">Why choose us</h1>
          <img src={BlkLine} alt="black line" />
        </div>
        <p className="font-semibold text-3xl">All-in-one platform</p>
      </div>
      <div className="w-full flex lgss:flex-row flex-wrap justify-between  overflow-x-hidden">
        {features.map((i) => (
          <div
            className="rounded-2xl w-1/3 lgss:w-[230px] mx-2 p-[19.3px]"
            style={{ boxShadow: "4px 4px 4px 4px rgba(189,215,255,0.75)" }}
          >
            <img src={i.imageSrc} alt="" className="w-[100px] h-[100px]" />
            <h1 className="font-semibold text-2xl">{i.title}</h1>
            <p className="text-secondary my-3 text-[14px]">{i.content}</p>
            <button className="text-secondary font-bold text-[14px]">
              {" "}
              Learn more ...
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
