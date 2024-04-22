import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars, FaPlus } from "react-icons/fa6";
import Header from "../../../../components/teachers-dashboard/Header";
import Sidebar from "../../../../components/teachers-dashboard/Sidebar";
import TitleComponent from "../../../../components/teachers-dashboard/exams/TitleComponent";
import { FormControl, MenuItem, Select } from "@mui/material";
import AddQuestions from "../../../../components/teachers-dashboard/exams/AddQuestions";

const QuestionPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="flex justify-between w-full">
          <Header />
          <div className="lgss:hidden pt-5 px-[5%]">
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
        </div>
        <TitleComponent
          title="Add Questions"
          destination="/teacher/dashboard/exams/add"
        />
        <div className="flex flex-col px-[5%]">
          <AddQuestions/>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
