import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { FaBars, FaTimes } from "react-icons/fa";
import { chevleft } from "../../../assets";
import "../../../styles/teacherdashboard/UploadFile.css"
import { Form, Link } from "react-router-dom";
import Back from "./Back";

const UploadFile = ()=>{
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
    <div className="upload-sec">
           <div className="chevimg-upload">
             <img src={chevleft} className="chevupload"/>
             <h2 className="uploadheader">My Classes</h2>
             <p className="uploadheader">| JSS1</p>
            </div>
       </div>
    <form className="upload-form">
        <label>Title</label><br></br>
        <input className="upload-input" placeholder="Title of the file"/><br></br><br></br>
        <label>Description</label><br></br>
        <input className="upload-input" placeholder="Description"/>
        <div className="file-upload"><p>Drag File in here OR <span className="span">Upload file</span></p> </div>
        <div className="upload-div">
            <Link to="/teacher/dashboard/classes/myclasses/addsubject/uploadfile/subjectcontent">
            <Back/>
            </Link>
            <button className="file-btn">upload and Finish</button>
        </div>
    </form>
       </div>
       </div>
    )
}

export default UploadFile;