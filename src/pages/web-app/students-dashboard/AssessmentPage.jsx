import React, { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import StudentProfile from "../../../components/students-dashboard/StudentProfile";
import { Link } from "react-router-dom";
import SearchHead from "./SearchHead";

const AssessmentPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen} />
      <div className="w-full lgss:w-4/5 flex flex-col h-full overflow-auto bg-white px-[5%]">
        <SearchHead/>
        <div className="flex justify-between items-center text-primary w-full pt-[20px]">
          <div className="lgss:hidden">
            {isOpen ? (
              <FaTimes
                onClick={() => setIsOpen(false)}
                className=" cursor-pointer text-red text-xl"
              />
            ) : (
              <FaBars
                onClick={() => setIsOpen(true)}
                className=" cursor-pointer text-neutral text-xl"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-start  gap-6 w-[90%] text-neutral pt-10 pb-5">
          <StudentProfile />
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;
