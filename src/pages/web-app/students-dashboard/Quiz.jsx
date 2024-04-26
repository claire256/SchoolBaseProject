import { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import { Arrow } from "../../../assets";
import {
    FormGroup,
    FormControlLabel,
    Checkbox,
  } from "@mui/material";
import Header from "../../../components/teachers-dashboard/Header";
import { useNavigate } from "react-router";


const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-row h-screen font-manrope">
      <Sidebar isOpen={isOpen} />
      <div className=" w-full lgss:w-4/5 flex flex-col h-full overflow-auto pb-10">
        <div className="flex flex-col justify-between items-center text-primary w-full pt-[20px] px-[5%]">
          <div className="w-full flex justify-between">
            <h1 className="text-[28px] px-[40px] font-semibold text-secondary"></h1>
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
        </div>
        <Header />
        <div className="mds:flex justify-between ml-2 mds:ml-6 lgss:ml-20">
          <div className="font-semibold text-xl pt-3 ">
            <p>Take a Test</p>
          </div>
          <div className="flex w-60 mt-5 lgss:mr-20">
            <div className="bg-[#3D5EE1] rounded-lg w-24 h-11 text-center text-white pt-2">
              <p>Start</p>
            </div>
            <div className="border border-[#007BFF] rounded-lg w-24 h-11 text-center text-[#007BFF] ml-8 pt-2">
              <p>Save</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end pr-6 mt-5 lgss:pr-24">
          <div className="font-bold">
            <p>Page 1</p>
          </div>
          <div className="mt-2 ml-2">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="mt-4 ml-2 mds:ml-10 lgss:ml-24 justify-between lgss:w-10/12 lgss:flex">
          <div className="lgss:w-4/6">
            <p>
              1. Lörem ipsum sara dialören därför att bokstav teran är neostik
              laskapet autonöpuktig kroliga. Vapossade självka rantän
              pompekunskap carpa.
            </p>
          </div>
          <div className="border text-center rounded-2xl w-32 h-8  pt-1 mt-5 lgss:mt-0">
            <p>3 points</p>
          </div>
        </div>
        <div className="ml-10 mt-3 mds:ml-20 lgss:ml-32">
          <div className="">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Lörem ipsum sara dialören därför att"
              />{" "}
            </FormGroup>
          </div>
          <div className="mt-2">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Lörem ipsum sara dialören därför att"
              />{" "}
            </FormGroup>
          </div>
          <div className="mt-2">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Lörem ipsum sara dialören därför att"
              />{" "}
            </FormGroup>
          </div>
          <div className="mt-2">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Lörem ipsum sara dialören därför att"
              />{" "}
            </FormGroup>
          </div>
        </div>
        <div className="mt-4 ml-2 mds:ml-10 lgss:ml-24 justify-between lgss:w-10/12 lgss:flex">
          <div className="lgss:w-4/6">
            <p>
              1. Lörem ipsum sara dialören därför att bokstav teran är neostik
              laskapet autonöpuktig kroliga. Vapossade självka rantän
              pompekunskap carpa.
            </p>
          </div>
          <div className="border text-center rounded-2xl w-32 h-8  pt-1 mt-5 lgss:mt-0">
            <p>3 points</p>
          </div>
        </div>
        <div className="ml-10 mt-3 mds:ml-20 lgss:ml-32">
          <div className="">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Lörem ipsum sara dialören därför att"
              />{" "}
            </FormGroup>
          </div>
          <div className="mt-2">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Lörem ipsum sara dialören därför att"
              />{" "}
            </FormGroup>
          </div>
          <div className="mt-2">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Lörem ipsum sara dialören därför att"
              />{" "}
            </FormGroup>
          </div>
          <div className="mt-2">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Lörem ipsum sara dialören därför att"
              />{" "}
            </FormGroup>
          </div>
        </div>
        <div className="lgss:flex justify-between ml-2 mt-4 lgss:w-10/12 lgss:ml-24">
          <div className="font-semibold text-sm pt-3 mds:ml-10 lgss:ml-0">
            <p>Answered 0 of 2</p>
          </div>
          <div className="flex w-64 mt-5 mr-7 mds:ml-10 lgss:mr-0 lgss:justify-between lgss:w-56">
            <div className="bg-[#3D5EE1] cursor-pointer rounded-lg w-24 h-11 text-center text-white text-xs pt-2 lgss:pt-3">
              <p>Save and Next</p>
            </div>
            <div
              onClick={() => {
                navigate("/student/quiz/result");
              }}
              className="border cursor-pointer border-[#007BFF] rounded-lg w-24 h-11 text-xs text-center text-[#007BFF] ml-8 pt-2 lgss:pt-3"
            >
              <p>End Test</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
