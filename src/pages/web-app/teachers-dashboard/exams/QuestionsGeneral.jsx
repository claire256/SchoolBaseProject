import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars, FaPlus } from "react-icons/fa6";
import Header from "../../../../components/teachers-dashboard/Header";
import Sidebar from "../../../../components/teachers-dashboard/Sidebar";
import TitleComponent from "../../../../components/teachers-dashboard/exams/TitleComponent";
import CalendarComponent from "../../../../components/teachers-dashboard/CalendarComponent";
import Grading from "../../../../components/teachers-dashboard/exams/Grading";

const QuestionGeneral = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [time1, setTime1] = useState(""); // Initialize with empty string
  const [time2, setTime2] = useState(""); // Initialize with empty string

  const handleTimeChange = (event, setTime) => {
    const { value } = event.target;
    console.log("Input value:", value);
    // Basic validation to check if the entered time matches the format HH:MM
    const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
    if (timeRegex.test(value) || value === "") {
      setTime(value);
    }
  };

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
        <TitleComponent destination="/teacher/dashboard/exams/add-question" />
        <div className="flex flex-col px-[5%]">
          <div className="flex flex-col lgss:flex-row pt-6 gap-6">
            <button
              onClick={() => setActiveScreen(1)}
              className={
                activeScreen === 1
                  ? "bg-transparent text-black border px-6 font-semibold py-2 rounded-t-[16px] border-b-[2px] border-b-black shadow-md"
                  : "text-black font-semibold"
              }
            >
              General
            </button>
            <button
              onClick={() => setActiveScreen(2)}
              className={
                activeScreen === 2
                  ? "bg-transparent text-black border px-6 font-semibold py-2 rounded-t-[16px] border-b-[2px] border-b-black shadow-md"
                  : "text-black font-semibold"
              }
            >
              Grading
            </button>
          </div>
          {activeScreen === 1 ? (
            <div className="mt-10 w-4/5 shadow-lg rounded-[8px] border flex flex-col pt-5 px-[5%] py-4">
              <div className="flex flex-col gap-4 w-full font-semibold">
                <div className="flex justify-between items-center w-full">
                  <div className="w-1/4">
                    <h3>Test type:</h3>
                  </div>
                  <div className="w-3/4">
                    <div className="w-1/2 py-2 px-2 bg-inputBg text-black rounded-[8px] font-normal shadow-lg shadow-gray-400/70">
                      <p>Geography weekly test 2</p>
                    </div>
                    <p className="text-[12px] pt-2 text-secondary">
                      This name will be visible to the students
                    </p>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="w-1/4">
                    <h3>Schedule:</h3>
                  </div>
                  <div className="w-3/4">
                    <div className="mt-2 w-full flex gap-4">
                      <div className="flex gap-4 items-center">
                        <p>From</p>
                        <input
                          className="w-1/3 outline-none border rounded-md bg-inputBg text-black rounded-[8px] font-normal shadow-lg shadow-gray-400/70 py-2 px-2"
                          type="text"
                          placeholder="10:00 AM"
                          value={time1}
                          onChange={(e) => handleTimeChange(e, setTime1)}
                        />
                      </div>
                      {/* Second time input field */}
                      <div className="flex gap-4 items-center">
                        <p>To</p>
                        <input
                          className="w-1/3 outline-none border rounded-md bg-inputBg text-black rounded-[8px] font-normal shadow-lg shadow-gray-400/70 py-2 px-2"
                          type="text"
                          placeholder="11:30 AM"
                          value={time2}
                          onChange={(e) => handleTimeChange(e, setTime2)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="w-1/4">
                    <h3>Test date:</h3>
                  </div>
                  <div className="w-3/4">
                    <div className="w-1/5 py-2 px-2 bg-inputBg text-black rounded-[8px] font-normal shadow-lg shadow-gray-400/70">
                      <p>12/08/2024</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="w-1/4">
                    <h3>Questions per page:</h3>
                  </div>
                  <div className="w-3/4 flex flex-col gap-7">
                    <div className="w-1/5 py-2 px-2 bg-inputBg text-black rounded-[8px] font-normal shadow-lg shadow-gray-400/70">
                      <p>5</p>
                    </div>
                    <div className="w-full flex gap-6">
                      <button className="px-16 w-[60%] flex justify-center items-center gap-2 py-2 bg-primary rounded-[8px] text-white font-medium">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : activeScreen === 2 ? (
            <div className="mt-10 w-full shadow-lg rounded-[8px] border flex flex-col pt-5 px-[5%] py-4">
               <Grading/>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default QuestionGeneral;
