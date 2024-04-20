import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { FaBars, FaTimes } from "react-icons/fa";
import { chevleft } from "../../../assets";
import "../../../styles/teacherdashboard/AddSubject.css";
import Subject from "./Subject";
import Back from "./Back";
import { Link } from "react-router-dom";

const AddSubject = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="flex flex-row h-screen">
        <Sidebar isOpen={isOpen} />
       <div className="lgss:w-4/5 w-full lgss:overflow-auto">
      <div className="flex justify-between w-full">
      <Header />
      <div className="lgss:hidden pt-5 px-[5%]">
        {isOpen ? (
          <FaTimes
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-secondary text-xl"
          />
        ) : (
          <FaBars
            onClick={() => setIsOpen(true)}
            className=" cursor-pointer text-secondary text-xl"
          />
        )}
      </div>
    </div>
    <div className="sub-sec">
           <div className="chevimg-sub">
             <img src={chevleft} className="chevsub"/>
             <h2 className="subheader">My Classes</h2>
             <p className="subheader">| JSS1 |</p>
             <p className="subheader">Subjects</p>
            </div>
            <button className="sub-btn">+ Add Subject</button>
       </div>
       <div className="subject-display">
       <Subject/>
       <Subject/>
       </div>
       <div className="subject-display">
       <Subject/>
       <Subject/>
       </div>
       <div className="sub-back">
       <Link to="/teacher/dashboard/classes/myclasses/addsubject/uploadfile">
       <Back />
       </Link>
       </div>
    </div>
    </div>
    )
}
export default AddSubject;