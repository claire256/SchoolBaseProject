import { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import { teachImg } from "../../../assets";
import SubjectContent from "../../../components/students-dashboard/SubjectContent";

const SubjectPage = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen} />
      <div className=" w-full lgss:w-4/5 flex flex-col h-full overflow-x-hidden">
        <div className="flex flex-col justify-between items-center text-primary w-full px-[5%]">
          <div className="w-screen h-20 items-center flex justify-between bg-[#F6F1F1] px-[5%]">
            <h1 className="text-[28px] px-[100px] font-semibold text-secondary mx-auto">
              PHYSICS
            </h1>
            <div className="lgss:hidden">
              {isOpen ? (
                <FaTimes
                  onClick={() => setIsOpen(false)}
                  className=" cursor-pointer text-red text-xl"
                />
              ) : (
                <FaBars
                  onClick={() => setIsOpen(true)}
                  className=" cursor-pointer text-secondary text-xl"
                />
              )}
            </div>
          </div>
          <div className="text-black">
            <div className="flex flex-wrap items-center text-[22px] text-[#1E1E1E] font-medium pb-4 pl-24 pt-6 border-b-2 w-screen md:pl-64 lg:pl-96">
              <p>Subject Content</p>
            </div>
            <div className="mt-5 ml-3 md:ml-7 md:text-lg lg:ml-48">
              <p>Teacher</p>
            </div>
            <div className="flex justify-between w-24 mt-5 ml-3 md:ml-7 lg:ml-48">
              <div>
                <img src={teachImg} alt="" />
              </div>
              <div>
                <p>Mr Sam</p>
              </div>
            </div>
            <div className="mt-5 ml-3 md:ml-7 lg:ml-48">
              <p>Books and Resources</p>
            </div>
            <div className="border-b-2 text-xs mt-2 pl-3 pb-7 w-screen md:pl-7 md:w-full md:text-sm lg:pl-48">
              <p>View your subject books and resources</p>
            </div>
            <div className="px-[5%] lgss:px-0 pt-5">
              <p>Subject Content</p>
            </div>
            <SubjectContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
