import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { FaBars, FaTimes } from 'react-icons/fa';
import Select from '../Select';
import {chevleft } from '../../../assets/index';
import "../../../styles/teacherdashboard/ClassList.css";
import List from '../List';

const ClassList = ()=>{
    const [isOpen, setIsOpen] = useState(false);

     return(
         <div className="list-section">
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
        <div className="list-container">
        <div className="select-div">
            <div className="chev-div">
             <img src={chevleft} className="chevleft"/>
             <h2 className="class-header">Class List</h2>
            </div>
             <Select/>
         </div>
         <div>
             <p className="class-p">Number of students Present/Absent</p>
             <div className="title-sec">
                 <p>Surname</p>
                 <p className="first">Firstname</p>
                 <p className="status">Status</p>
             </div><br></br>
             <div className="list-div">
             <List/><br></br><br></br>
             <List/><br></br><br></br>
             <List/><br></br><br></br>
             <List/><br></br><br></br>
             <List/><br></br><br></br>
             <List/><br></br><br></br>
             <List/><br></br><br></br>
             </div>
         </div>
         </div>
        </div>
        </div>
        </div>

     )
}
export default ClassList;