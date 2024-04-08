import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiBookOpen } from "react-icons/hi2";
import { IoVideocam } from "react-icons/io5";
import ClassesCard from "./ClassesCard";



const Classes = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="lgss:hidden pt-5 px-[5%] flex justify-end">
          {isOpen ? (
            <FaTimes
              onClick={() => setIsOpen(false)}
              className=" cursor-pointer text-secondary text-xl"
            />
          ) : (
            <FaBars
              onClick={() => setIsOpen(true)}
              className=" cursor-pointer text-secondary text-xl"
            />
          )}
        </div>
        <div className="flex flex-col justify-between w-full">
          <Header />
          <div className="px-[5%]">
            <div className="flex text-[1.6em] font-bold">
              <h1>Classes</h1>
            </div>
            <div className="flex lgss:flex-row flex-col gap-9 text-white mt-9">
              <ClassesCard title="My Subjects" number={4} icon={HiBookOpen} />
              <ClassesCard title="My Classes" number={6} icon={IoVideocam} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
