import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { FaBars, FaTimes } from "react-icons/fa";
import {  Arrowdown, chevleft, circle, clockIcon, vector  } from "../../../assets";
import "../../../styles/teacherdashboard/ViewSyllabus.css";
import Content from "./Content";
import Back from "./Back";

const ViewSyllabus = ()=>{
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
       <div className="bar-display">
           <div className="light-div">
               <div className="blue"></div>
           </div>
            <p className="done">70% done</p> 
       </div>
       <div className="introduction">
         <div className="intro-display">
         <h1 className="intro-header">Introduction to English Language</h1>
         <img src={Arrowdown} className="intro-img"/>
         </div>
         <p className="intro-p">Alphabets, Spellings, and words in a sentence <br></br>
             <span className="intro-span">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
         </p><br></br>
         <h2 className="co-header">Course details</h2>
       <div className="word-display">
           <p className="co-header">Words</p>
           <img src={Arrowdown} className="intro-img"/>
       </div>
       <hr/>
       <div className="c-display">
           <div className="cons-display">
           <div className="cons-circle"></div>
           <p>Constructing words in English language</p>
           </div>
           <div className="c-circle">
               <p>C</p>
           </div>
           <div className="clock-display">
           <img src={clockIcon} className="clock-img" /><p>20 min</p>
           </div>           
       </div>

       <div className="c-display">
           <div className="cons-display">
           <div className="cons-circle"></div>
           <p>Constructing words in English language</p>
           </div>
           <div className="c-circle">
               <p>C</p>
           </div>
           <div className="clock-display">
           <img src={clockIcon} className="clock-img" /><p>20 min</p>
           </div>           
       </div>
       <div className="word-display">
           <p className="co-header">Assignment</p>
           <img src={Arrowdown} className="intro-img"/>
       </div>
       <hr/>
       <button class="view-btn">View Syllabus</button>
       </div>
       <div className="last-box">
       <div className="plus-div">+</div>
           <div className="cont-sec"><Content title="Week 1" image={vector}/></div>
           <div className="cont-sec"><Content title="Week 1" image={vector}/></div>
           <div className="cont-sec"><Content title="Week 1" image={vector}/></div>
           <div className="cont-sec"><Content title="Week 1" image={vector}/></div>
       </div>
       <div className="back-link">
       <Back/>
       </div>
    </div>
    </div>
    )
}

export default ViewSyllabus;