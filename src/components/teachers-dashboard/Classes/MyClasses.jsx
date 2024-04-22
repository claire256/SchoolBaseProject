import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../../styles/teacherdashboard/MyClasses.css";
import { chevleft } from "../../../assets";
import MyClassesCard from "./MyClassesCard";
import Back from "./Back";
import { Link } from "react-router-dom";
import Modal from "./../Modal";



const MyClasses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [classNameInput, setClassNameInput] = useState(""); // Track inputted class name
  const [newClassName, setNewClassName] = useState(""); // Track inputted class name
  const [studentData, setStudentData] = useState([]);
  const [prevName, setPrevName] = useState('');
  const [prevSub, setPrevSub] = useState(null);

  // Function to handle "Add Class" button click
  const handleAddClassClick = () => {
    setShowModal(true); // Show modal when button is clicked
  };

  const handleAddClass = () => {
    if (newClassName.trim() !== "") {
      // Add new class to studentData
      const updatedStudentData = [...studentData, { Classes: newClassName }];
      setStudentData(updatedStudentData);
      setNewClassName(""); // Clear input field after adding class
      setShowModal(false); // Close modal after adding classs
    }
  };

  const updateClass = (classname) => {
    // Add new class to studentData
    const updatedStudentData = [...studentData, { Classes: classname }];
    setStudentData(updatedStudentData);
    console.log(studentData);
    setShowModal(false); // Close the modal after adding class
  };

  const handleInputChange = (e) => {
    setNewClassName(e.target.value);
  };
  //let data = [...studentData];
  //data.push({ Classes: classname });
  //setStudentData(data);
  //}

  //const editClass = (classname) => {
  //let data = [...studentData];
  // data[activeindex] = { Classes: classname };
  // setStudentData(data); setPrevName(''); setActiveIndex(null);
  //}

  return (
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
            <img src={chevleft} className="chevimg" />
            <h2 className="myheader">My Classes</h2>
          </div>


          <button className="class-btn cursor-pointer hover:bg-blue-500" onClick={handleAddClassClick}>+ Add Class</button>
        </div>

        <div className="second-sec">
          {studentData.length > 0 ? (
            studentData.map((className, index) => (
              <MyClassesCard key={index} nameOfClass={className.Classes} />
            ))
          ) : (
            <div className="w-[85%] mx-auto text-center border-2 border-slate-300 rounded-lg mt-8 px-12 py-4 box-border pb-4">
              No Class has been added
            </div>
          )}
        </div>



        <Link to="/teacher/dashboard/classes/myclasses/addsubject">
          <div className="backcomp-div"><Back className="back-comp" /></div>
        </Link>
      </div>
      <Modal
        page="class"
        visible={showModal} // Set modal visibility based on state
        close={() => { setShowModal(false); }} // Function to close the modal
        addClass={(classname) => { updateClass(classname); }}
        editClass={(classname) => { editClass(classname); }}
        prevVal={""} // Set previous value as empty for new class
        addSubject={(subject, content) => { addSubject(subject, content); }}
        editSubject={(subject, content) => { editSubject(subject, content); }}
        prevName={prevName}
        prevSub={prevSub}
      />
    </div >
  )
}
export default MyClasses;