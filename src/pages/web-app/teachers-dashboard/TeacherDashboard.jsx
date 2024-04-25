import React, { useState } from "react";
import Sidebar from "../../../components/teachers-dashboard/Sidebar";
import "../../../styles/studentdashboard/HomePage.css";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Eventpix,
  bell,
  calender,
  mobile,
  quizImg,
  teacherdashboardImg,
} from "../../../assets";
import Header from "../../../components/teachers-dashboard/Header";
import { Link, useLocation } from "react-router-dom";

const TeacherDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  let newUser = {};
  let location = useLocation();
  if (location.state) {
    newUser = location.state.user;
  }

  const programmes = [
    {
      id: 2,
      image: mobile,
      name: "Take Attendance",
    },
    {
      id: 3,
      image: bell,
      name: "Classes",
    },
  ];
  const events = [
    {
      id: 1,
      image: Eventpix,
      tittle: "Inter- Class Debate",
      discription: "Thur., 5th  March, 2024",
    },
    {
      id: 2,
      image: Eventpix,
      tittle: "Inter- Class Debate",
      discription: "Thur., 5th  March, 2024",
    },
    {
      id: 3,
      image: Eventpix,
      tittle: "Inter- Class Debate",
      discription: "Thur., 5th  March, 2024",
    },
  ];

  return (
    <div className="flex flex-row h-screen">
      <Sidebar isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto h-full">
        <div className="flex flex-col justify-end w-full">
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
          <Header />
          <div className="flex flex-col justify-start gap-6 text-neutral pt-10 pb-5 px-[5%]">
            <div className="dashboard flex justify-between md:px-10 h-[150px]">
              <div className=" text-[#1E1E1E] flex flex-col font-normal font-manrope w-[60%] gap-2 py-5 px-3 md:px-[unset]">
                <p className="lgss:text-[2rem] font-extrabold">
                  Welcome, Doose Atumeyi
                </p>
                <p className=" text-[15px]">You have 33 notifications...</p>
              </div>
              <div className="h-[150px] p-4 w-[35%]">
                <img
                  src={teacherdashboardImg}
                  alt=""
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center py-5 md:gap-5 gap-10">
              <div className="flex flex-col gap-10 ">
                <div
                  className="flex flex-col md:flex-row gap-2 md:w-[unset] m-auto md:m-[unset] items-center"
                  style={{ fontFamily: "" }}
                >
                  <Link to="/teacher/calender">
                    <div className="love flex flex-col justify-center items-center md:w-[184px] h-[300px] md:h-[184px] gap-2 w-[295px] m-auto">
                      <img src={calender} alt="" />
                      <p>Timetable</p>
                    </div>
                  </Link>
                  {programmes.map((items) => (
                    <div
                      key={items.id}
                      className={items.id === 1 ? "love" : "hate"}
                    >
                      <div className="flex flex-col gap-2 items-center shadow-xl rounded-xl h-[300px] md:h-[184px] md:w-[200px] text-center justify-center w-[295px] m-auto">
                        <img src={items.image} alt="" />
                        <p>{items.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full gap-3 items-center md:items-start shadow-xl shadow-primary/20 px-2 py-3 rounded-[16px]">
                <p className="font-manrope text-xl font-semibold px-5 pt-4">
                  Create
                </p>
                <div className="overall flex flex-col justify-center   md:h-full items-center w-full md:gap-10 m-auto gap-5 py-2 px-[5%]">
                  <img src={quizImg} alt="" />
                  <button className="bg-primary w-full py-4 rounded-[16px] shadow-lg text-white font-bold text-md">
                    Create Quiz
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 ">
              <div className="flex flex-col border-[2px] border-[#F0F7FF] md:w-[40%] w-full gap-2 p-5 ">
                <div className="flex justify-between items-center font-bold">
                  <p>Upcoming Classes</p>
                  <p className="font-medium text-[12px] underline">See all</p>
                </div>
                <hr />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="bg-[#F0F7FF] h-12 w-12 rounded-full font-bold flex justify-center items-center">
                      JSS1
                    </p>
                    <div>
                      <p>Mathematics</p>
                      <p className="font-normal text-[10px] text-[#8A8A8A]">
                        11:20-12:00
                      </p>
                    </div>
                  </div>
                  <p>Monday</p>
                </div>
                <hr />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="bg-[#F0F7FF] h-12 w-12 rounded-full font-bold flex justify-center items-center">
                      JSS1
                    </p>
                    <div>
                      <p>Mathematics</p>
                      <p className="font-normal text-[10px] text-[#8A8A8A]">
                        11:20-12:00
                      </p>
                    </div>
                  </div>
                  <p>Monday</p>
                </div>
                <hr />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="bg-[#F0F7FF] h-12 w-12 rounded-full font-bold flex justify-center items-center">
                      JSS1
                    </p>
                    <div>
                      <p>Mathematics</p>
                      <p className="font-normal text-[10px] text-[#8A8A8A]">
                        11:20-12:00
                      </p>
                    </div>
                  </div>
                  <p>Monday</p>
                </div>
              </div>
              <div
                className="flex flex-col justify-between md:w-[60%] h-[100% bg-[#EFF2FE] p-5"
                style={{ fontFamily: "" }}
              >
                <div className="flex justify-between gap-4 items-center font-bold">
                  <p>Upcoming Events</p>
                  <p className="text-[12px] underline font-medium">See all</p>
                </div>
                <hr />
                {events.map(({ ids, tittle, image, discription }) => (
                  <div
                    key={ids}
                    className="flex justify-between gap-3 items-center py-2"
                  >
                    <div className="flex gap-5 items-center">
                      <img src={image} alt={""} className="w-[30px]" />
                      <div className="">
                        <p className="font-semibold">{tittle}</p>
                        <p className="text-[12px] font-semibold text-[#5F5F67]">
                          {discription}
                        </p>
                      </div>
                    </div>
                    <button className="bg-[#3D5EE1] rounded-lg text-[#ffff] py-2 px-3 flex items-center text-[12px]">
                      Get started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
