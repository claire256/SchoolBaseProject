import React, { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";

const SettingsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen} />
      <div className=" w-full lgss:w-4/5 flex flex-col h-full overflow-auto">
        <div className="flex flex-col justify-between items-center text-primary w-full pt-[20px] px-[5%]">
          <div className="w-full flex justify-between">
          <h1 className="text-[28px] px-[40px] font-semibold text-primary">
            Settings
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
                className=" cursor-pointer text-red text-xl"
              />
            )}
          </div>
        </div>
        <div className="flex flex-row justify-start items-center px-8 gap-8 w-full text-[22px] text-[#8F8F8F] font-medium"></div>
      </div>
    </div>
    </div>
  );
};

export default SettingsPage;
