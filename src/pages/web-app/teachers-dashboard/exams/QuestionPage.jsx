import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import Header from '../../../../components/teachers-dashboard/Header'
import Sidebar from '../../../../components/teachers-dashboard/Sidebar'
import TitleComponent from '../../../../components/teachers-dashboard/exams/TitleComponent'

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
          <div className="h-[50vh] mt-10 w-full shadow-lg rounded-[8px] border flex flex-col pt-5 px-[5%]">
            <div className="w-full flex justify-end text-red-500">
              <FaTimes/>
            </div>
            <div className="flex w-full justify-between pt-5">
              <div className="flex gap-5 font-semibold">
                <h1>Question: <span>1</span></h1>
              </div>
              <div className="flex gap-5">
                <h2>Points</h2>
                <div className="px-3 rounded-[4px] bg-inputBg py-2 ">
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage