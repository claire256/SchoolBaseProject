import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import Header from '../../../../components/teachers-dashboard/Header'
import Sidebar from '../../../../components/teachers-dashboard/Sidebar'
import TitleComponent from '../../../../components/teachers-dashboard/exams/TitleComponent'
import { Link } from 'react-router-dom'

const AddQuestions = () => {
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
          title="Create Quiz"
          destination="/teacher/dashboard/exams"
        />
        <div className="flex flex-col px-[5%]">
          <div className="h-[50vh] mt-10 w-full shadow-lg rounded-[8px] border flex justify-center items-center">
            <Link to={"/teacher/dashboard/exams/add-question"}>
              <button className="border shadow-lg font-semibold px-5 rounded-[8px] py-5">
                Add New Questions
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddQuestions