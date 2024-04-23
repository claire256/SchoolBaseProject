import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { FaBars, FaTimes } from "react-icons/fa";
import { chevleft } from "../../../assets";
import "../../../styles/teacherdashboard/AddSubject.css";
import Subject from "./Subject";
import Back from "./Back";
import { Link } from "react-router-dom";
import Modal from "../Modal";

const AddSubject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [subjects, setSubjects] = useState([]);

  const addSubject = (subjectname) => {
    console.log('add');
    let list = [...subjects];
    list.push({ name: subjectname });
    setSubjects(list);
    console.log(list);
    setShowModal(false);
  }

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
        <div className="sub-sec">
          <div className="chevimg-sub">
            <img src={chevleft} className="chevsub" />
            <h2 className="subheader">My Classes</h2>
            <p className="subheader">| JSS1 |</p>
            <p className="subheader">Subjects</p>
          </div>
          <button className="sub-btn" onClick={() => { setShowModal(true); }}>+ Add Subject</button>
        </div>
        <div className="flex flex-row items-start justify-start flex-wrap">
          {
            subjects.length > 0 ?
              subjects.map((subject, index) => {
                return (
                  <Subject key={'subject' + index} subjectname={subject.name} />
                )
              })
              : <div className="w-[85%] mx-auto text-center border-2 border-slate-300 rounded-lg mt-8 px-12 py-4 box-border pb-4">
                No Class has been added
              </div>
          }
        </div>
        <div className="sub-back">
          <Link to="/teacher/dashboard/classes/myclasses/addsubject/uploadfile">
            <Back />
          </Link>
        </div>
      </div>
      <Modal
        page="subject"
        visible={showModal} // Set modal visibility based on state
        close={() => { setShowModal(false); }} // Function to close the modal
        addClass={(classname) => { }}
        editClass={(classname) => { }}
        prevVal={""} // Set previous value as empty for new class
        addSubject={(subject, content) => { addSubject(subject); }}
        contentavailable={false}
        editSubject={(subject, content) => { }}
        prevName={null}
        prevSub={null}
      />
    </div>
  )
}
export default AddSubject;