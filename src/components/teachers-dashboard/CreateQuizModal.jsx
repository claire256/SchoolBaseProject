import React from "react";
import CalendarComponent from "./CalendarComponent";
import { Link } from "react-router-dom";
import TitleComponent from "./exams/TitleComponent";

const CreateQuizModal = () => {
  return (
    <div className="">
      <TitleComponent title="Create Quiz" destination="/teacher/dashboard" />
      <form className="xl:px-16 xl:py-16 py-12 xl:mx-16 mx-12 xl:my-20 my-12 grid xl:grid-cols-2 grid-cols-1 gap-12 items-center justify-center xl:border rounded-3xl">
        <div className="flex flex-col justify-between xl:h-[450px] xl:grid-col-auto grid-col-1">
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-xs">Class</p>
              <select
                name=""
                id=""
                className="outline-none xl:w-[50%] w-full bg-white border border-gray-300 py-1 px-3 rounded-md text-gray-600"
                defaultValue="DEFAULT"
              >
                <option value="DEFAULT" disabled>
                  Select a Class
                </option>
                <option value="1">JSS1</option>
                <option value="2">JSS2</option>
                <option value="3">JSS3</option>
                <option value="3">SS1</option>
                <option value="3">SS2</option>
                <option value="3">SS3</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-xs">Subject</p>
              <select
                name=""
                id=""
                className="outline-none xl:w-[50%] w-full bg-white border border-gray-300 py-1 px-3 rounded-md text-gray-600"
                defaultValue="DEFAULT"
              >
                <option value="DEFAULT" disabled>
                  Select a Class
                </option>
                <option value="1">MATHEMATICS</option>
                <option value="2">ENGLISH</option>
                <option value="3">ARTS</option>
              </select>
            </div>
          </div>
        </div>

        <CalendarComponent />

        <Link
          className="bg-[#3D5EE1] text-white font-bold rounded-xl py-2 items-center flex justify-center xl:-mt-32"
          to={"/teacher/dashboard/exams/add"}
        >
          <button>Create Quiz</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateQuizModal;
