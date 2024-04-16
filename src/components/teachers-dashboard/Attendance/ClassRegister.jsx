import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { FaBars, FaTimes } from 'react-icons/fa';
import Select from '../Select';
import "../../../styles/teacherdashboard/ClassRegister.css";
import Register from './ Register'
import { Link } from 'react-router-dom';

const ClassRegister = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="attendance-container">
      <div>
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
        <div className="attendance-section">
        <div className="select-display">
        <h1 className="attendance-header">Attendance</h1>
        <Select/>
        </div>
        <button className="attendance-btn">Take Attendance</button>
        <div className="attendance-display">
          <div className="attendance-div"><p className="paragraph">Total Students<br></br><span className="total">5,546</span></p></div>
          <div className="attendance-div"><p className="paragraph">Inside School<br></br><span className="inside">4852</span></p></div>
          <div className="attendance-div"><p className="paragraph">On Leave<br></br><span className="leave">105</span></p></div>
        </div>
        <div className="second-display">
          <Link to="" className="all">All</Link>
          <p className="present">Present</p>
          <p className="present">Absent</p>
        </div>
        <section className="section-div">
        <div className="third-display">
          <h4 className="register">Class Register</h4>
          <div className="export-div"><p className="export">Export Data</p></div>
        </div>
        <div className="title-display">
          <p className="name">Names</p>
          <p className="in">Time in</p>
          <p className="out">Time out</p>
        </div>
        <Register/>
        <Register/>
        <Register/>
        <Register/>
        <Link to="/teacher/dashboard/attendance/classlist" className="more" >See more</Link>
        </section>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default ClassRegister;
