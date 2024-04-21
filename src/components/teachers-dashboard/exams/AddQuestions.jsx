import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react'
import { FaPlus } from 'react-icons/fa6';
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';


const AddQuestions = () => {
  return (
    <div className="mt-10 w-full shadow-lg rounded-[8px] border flex flex-col pt-5 px-[5%] py-4">
      <div className="w-full flex justify-end text-red-500">
        <FaTimes />
      </div>
      <div className="flex w-full justify-between pt-5">
        <div className="flex gap-5 font-extrabold">
          <h1>
            Question: <span>1</span>
          </h1>
        </div>
        <div className="flex gap-5">
          <h2>Points:</h2>
          <div className="px-4 rounded-[4px] bg-inputBg shadow-md py-2 ">
            <p>3</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full font-semibold">
        <div className="flex justify-between items-center w-full">
          <div className="w-1/4">
            <h3>Question type:</h3>
          </div>
          <div className="w-3/4">
            <div className="mt-2">
              <FormControl
                className="w-1/2 h-[2.2rem] bg-inputBg text-[#97999C] rounded-[8px] shadow-lg shadow-gray-400/70"
                size="small"
              >
                <Select
                  label="gender"
                  sx={{
                    "& fieldset": { border: "none" },
                  }}
                >
                  <MenuItem value="single">Single Choice</MenuItem>
                  <MenuItem value="german">German type</MenuItem>
                  <MenuItem value="checkbox">Checkbox type</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-1/4">
            <h3>Question:</h3>
          </div>
          <div className="w-3/4">
            <div className="mt-2">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write your question here..."
                className="w-full rounded-[8px] font-light pt-2 h-[7rem] bg-inputBg text-[#97999C] shadow-lg shadow-gray-400/70 px-2 outline-none"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-1/4">
            <h3>Options:</h3>
          </div>
          <div className="w-3/4 flex flex-col gap-7">
            <div className="mt-2 flex flex-col gap-3">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Option 1"
                className="w-full rounded-[8px] text-[14px] font-light pt-2 h-[2.5rem] bg-inputBg text-[#97999C] shadow-lg shadow-gray-400/70 px-2 outline-none"
              ></textarea>
              <div className="flex gap-4 text-[14px] font-normal">
                <input type="checkbox" />
                <p>Correct</p>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Option 2"
                className="w-full rounded-[8px] flex items-center font-light pt-2 h-[2.5rem] text-[14px] bg-inputBg text-[#97999C] shadow-lg shadow-gray-400/70 px-2 outline-none"
              ></textarea>
              <div className="flex gap-4 text-[14px] font-normal">
                <input type="checkbox" />
                <p>Correct</p>
              </div>
            </div>
            <div className="">
              <button className="px-6 flex justify-center items-center gap-2 py-2 border-primary border-[1px] rounded-[8px] text-primary text-[14px]">
                Add Option <FaPlus />
              </button>
            </div>
            <div className="w-full flex flex-col lgss:flex-row gap-6 justify-end">
              <button className="px-6 flex justify-center items-center gap-2 py-2 bg-transparent rounded-[8px] text-primary border-primary border-[1px] font-medium">
                Save and add another
              </button>
              <Link to={"/teacher/dashboard/exams/complete-quiz"}>
              <button className="w-full px-6 flex justify-center items-center gap-2 py-2 bg-primary rounded-[8px] text-white font-medium">
                Finish
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddQuestions