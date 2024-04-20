import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { FaBars, FaTimes } from "react-icons/fa";
import { Arrowdown, ArrowLeft, chevleft, circle, redirect, subimg } from "../../../assets";
import "../../../styles/teacherdashboard/SubjectContent.css";
import Back from "./Back";
import Content from "./Content";
import { Link } from "react-router-dom";

const SubjectContent = ()=>{
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
    <div className="content-sec">
           <div className="chevimg-content">
             <img src={chevleft} className="chevcontent"/>
             <h2 className="content-header">My Classes</h2>
             <p className="content-header">| JSS1 |</p>
             <p className="content-header">English Lang</p>
            </div>
       </div>
       <div className="sub-display">
           <p className="content-header">Subject Content</p>
           <Link to="/teacher/dashboard/classes/myclasses/addsubject/uploadfile/subjectcontent/viewsyllabus">
           <Back/>
           </Link>
       </div>
       <div className="division-display">
         <div className="circle-display">
           <img src={circle} className="circle-img"/>
           <img src={subimg} className="subimg"/>
           <p>Subject Information</p>
         </div>
         <div className="line-display">
          <div className="line-div"></div>
          <img src={Arrowdown}/>
         </div>
       </div>
       <div className="left-div"><br></br>
           <Content title="Subject Information" image={ArrowLeft}/><br></br><br></br>
           <Content title="Groups" image={ArrowLeft}/><br></br>
         </div>
         <hr className="horizontal"/>
         <div className="division-display">
         <div className="circle-display">
           <img src={circle} className="circle-img"/>
           <img src={subimg} className="subimg"/>
           <p>Subject Content</p>
         </div>
         <div className="line-display">
          <div className="line-div"></div>
          <img src={Arrowdown}/>
         </div>
       </div>
       <div className="left-div"><br></br>
       <Content title="Week 1" image={ArrowLeft}/><br></br><br></br>
       <Content title="Week 2" image={ArrowLeft}/><br></br><br></br>
       <Content title="Week 3" image={ArrowLeft}/><br></br><br></br>
       <Content title="Week 4" image={ArrowLeft}/><br></br>
        </div>
        <hr className="horizontal"/> 
        <div className="division-display">
         <div className="circle-display">
           <img src={circle} className="circle-img"/>
           <img src={subimg} className="subimg"/>
           <p>Assessment and Feedback</p>
         </div>
         <div className="line-display">
          <div className="line-div"></div>
          <img src={Arrowdown}/>
         </div>
         </div>
         <div className="left-div"><br></br>
         <Content title="Assessment Information" image={ArrowLeft}/><br></br><br></br>
         <Content title="Submission Link" image={redirect}/><br></br><br></br>
         <Content title="Take Quiz" image={redirect}/><br></br>
        </div> 
        <hr className="horizontal"/> 
    </div>
    </div>
    )
};

export default SubjectContent;