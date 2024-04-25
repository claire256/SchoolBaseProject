import { useState } from "react";
import Sidebar from "../../../components/students-dashboard/Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import { ThumbsUp } from "../../../assets";
import Header from "../../../components/teachers-dashboard/Header";


const TestResult = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row h-screen font-manrope">
      <Sidebar isOpen={isOpen} />
      <div className=" w-full lgss:w-4/5 flex flex-col h-full overflow-auto">
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
<Header/>
        <div className="flex mt-7 mx-auto rounded-2xl flex-col border w-10/12 items-center shadow-2xl pb-5">
          <div className="mt-5 w-36 mds:w-44">
            <img src={ThumbsUp} alt="" />
          </div>
          <div className="font-bold text-xl mt-6 mds:text-2xl lgss:text-4xl">
            <p>Test Result</p>
          </div>
          <div className="flex-wrap text-xs w-64 mt-6 mds:text-sm mds:w-10/12 text-center">
            <p>
              Lörem ipsum sara dialören därför att bokstav teran är neostik
              laskapet autonöpuktig kroliga. Vapossade självka rantän
              pompekunskap carpa.
            </p>
          </div>
          <div className="w-56 mt-4 flex justify-between mds:w-64 lgss:w-3/6">
            <div>
              <p className="font-bold mds:text-xl lgss:text-4xl">50</p>
              <p className="text-xs lgss:text-lg">Total Point</p>
            </div>
            <div>
              <p className="font-bold mds:text-xl lgss:text-4xl">48</p>
              <p className="text-xs lgss:text-lg">Your Point</p>
            </div>
            <div>
              <p className="font-bold mds:text-xl lgss:text-4xl">83.33%</p>
              <p className="text-xs lgss:text-lg">Percentagee</p>
            </div>
          </div>
          <div className="mt-10 lgss:flex lgss:w-3/6 lgss:justify-between">
            <div className="border bg-[#3D5EE1] rounded-xl text-center text-white text-sm pt-1 w-40 h-8 lgss:mt-4">
                <p>Go to Dashboard</p>
            </div>
            <div className="border  rounded-xl text-center text-[#007BFF] text-sm pt-1 w-40 h-8 mt-4">
                <p>Re-take Test</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
