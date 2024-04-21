import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../../styles/teacherdashboard/MyClasses.css";
import { chevleft } from "../../../assets";
import MyClassesCard from "./MyClassesCard";
import Back from "./Back";
import { Link } from "react-router-dom";

const MyClasses = ()=>{
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
       <div className="first-sec">
           <div className="chevimg-div">
             <img src={chevleft} className="chevimg"/>
             <h2 className="myheader">My Classes</h2>
            </div>
            <button className="class-btn">+ Add Class</button>
       </div>
       <div className="second-sec">
           <MyClassesCard/>
           <MyClassesCard/>
           <MyClassesCard/>
           </div>
           <div className="third-sec">
           <MyClassesCard/>
           <MyClassesCard/>
           <MyClassesCard/>
       </div>
       <Link to="/teacher/dashboard/classes/myclasses/addsubject">
       <div className="backcomp-div"><Back className="back-comp"/></div>
       </Link>
       </div>
       </div>
   )
}
export default MyClasses;