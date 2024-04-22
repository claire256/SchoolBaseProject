import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Modal from "./Modal";
import { FaBars, FaTimes } from "react-icons/fa";
import { vectorImage } from "../../assets";


{/*active state functions*/ }
const ClassRecords = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showmodal, setShowmodal] = useState(false);
  const [prevName, setPrevName] = useState('');
  const [prevSub, setPrevSub] = useState(null);
  const [activeindex, setActiveIndex] = useState(null);
  const [subjectindex, setSubjectIndex] = useState(null);


  const [studentData, setStudentData] = useState([]);
  const [classsubjects, setClassSubjects] = useState([]);
  const [page, setPage] = useState('class');

  const updateClass = (classname) => {
    let data = [...studentData];
    data.push({ Classes: classname, "No of Subject": [], "Edit Classname": vectorImage, "Add Subject": '+' });
    setStudentData(data);
  }

  const editClass = (classname) => {
    let data = [...studentData];
    data[activeindex] = { Classes: classname, "No of Subject": [], "Edit Classname": vectorImage, "Add Subject": '+' };
    setStudentData(data); setPrevName(''); setActiveIndex(null);
  }

  const addSubject = (subject, content) => {
    let data = [...studentData];
    data[activeindex]["No of Subject"].push({ "Subject Name": subject, "Subject Content": content });
    setStudentData(data);
  }

  const editSubject = (subject, content) => {
    let data = [...studentData];
    data[activeindex]["No of Subject"][subjectindex] = { "Subject Name": subject, "Subject Content": content };
    setStudentData(data); setSubjectIndex(null); setPrevSub(null);
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
                className=" cursor-pointer text-secondary text-xl"
              />
            ) : (
              <FaBars
                onClick={() => setIsOpen(true)}
                className=" cursor-pointer text-secondary text-xl"
              />
            )}
          </div>
        </div>

        {/* Student Record */}
        {
          page === "class" &&
          <main className="mt-8 px-4">
            <div className="flex justify-between mr-4 sm:mr-16">
              <h1 className="text-xl font-bold mb-4">Class Records | Classes</h1>
              <button className="text-20 text-white font-manrope bg-buttonPrimary hover:bg-blue-500 py-2 px-4 rounded-lg"
                onClick={() => { setShowmodal(true); }}>Add a New Class</button>
            </div>
            <div className="w-[85%] mx-auto border-2 border-slate-300 rounded-lg mt-8 px-12 box-border pb-8">
              <div className="flex flex-row items-center justify-between font-bold py-2">
                <div className="px-4 py-2 w-[25%] text-center">Classes</div>
                <div className="px-4 py-2 w-[25%] text-center">No of Subject</div>
                <div className="px-4 py-2 w-[25%] text-center">Add Subject</div>
                <div className="px-4 py-2 w-[25%] text-center">Edit Classname</div>
              </div>
              {
                studentData.length > 0 ?
                  studentData.map((student, index) => (
                    <div key={student.classes} className="flex flex-row items-center justify-between py-2 border-0 border-b border-gray-300">
                      <div className="w-[25%] px-4 py-2 text-center align-middle">{student.Classes}</div>
                      <div className="w-[25%] px-4 py-2 text-center align-middle">{student["No of Subject"].length}</div>
                      <div className="w-[25%] px-4 py-2 flex items-center justify-center font-bold cursor-pointer"
                        onClick={() => { setActiveIndex(index); setPage('subject'); }}>{student["Add Subject"]}</div>
                      <div className="w-[25%] px-4 py-2 flex items-center justify-center cursor-pointer"
                        onClick={() => { setShowmodal(true); setPrevName(student.Classes); setActiveIndex(index); }}>
                        <img src={student["Edit Classname"]} alt="Vector Image" className="h-4 w-4 " />
                      </div>
                    </div>
                  ))
                  : <div className="w-full text-center py-4">No student record is available</div>
              }
            </div>
          </main>
        }


        {/* Student Record: Subjects */}
        {
          page === "subject" &&
          <main className="mt-8 px-4">
            <div className="flex justify-between mr-4 sm:mr-16">
              <h1 className="text-xl font-bold mb-4">{'Class Records  |  Class  |  Subject  |  ' + studentData[activeindex].Classes}</h1>
              <div>
                <button className="text-20 text-white font-manrope bg-buttonPrimary hover:bg-blue-500 py-2 px-4 rounded-lg mr-8" onClick={() => { setPage('class'); }}>Back</button>
                <button className="text-20 text-white font-manrope bg-buttonPrimary hover:bg-blue-500 py-2 px-4 rounded-lg" onClick={() => { setShowmodal(true); }}>Add a New Subject</button>
              </div>
            </div>
            <div className="w-[85%] mx-auto border-2 border-slate-300 rounded-lg mt-8 px-12 box-border pb-8">
              <div className="flex flex-row items-center justify-between font-bold py-2">
                <div className="px-4 py-2 w-[33%] text-center">Subject</div>
                <div className="px-4 py-2 w-[33%] text-center">Content of Subjects</div>
                <div className="px-4 py-2 w-[33%] text-center"></div>
              </div>
              {
                studentData[activeindex]["No of Subject"].length > 0 ?
                  studentData[activeindex]["No of Subject"].map((subject, index) => (
                    <div key={subject + index} className="flex flex-row items-center justify-between py-2 border-0 border-b border-gray-300">
                      <div className="w-[33%] px-4 py-2 text-center align-middle">{subject["Subject Name"]}</div>
                      <div className="w-[33%] px-4 py-2 text-center align-middle">{subject["Subject Content"]}</div>
                      <div className="w-[33%] px-4 py-2 flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          console.log(studentData[activeindex]["No of Subject"][index]["Subject Name"]);
                          setShowmodal(true); setPrevSub({
                            name: studentData[activeindex]["No of Subject"][index]["Subject Name"],
                            content: studentData[activeindex]["No of Subject"][index]["Subject Content"]
                          });
                          setSubjectIndex(index);
                        }}>
                        <img src={vectorImage} alt="Vector Image" className="h-4 w-4 " />
                      </div>
                    </div>
                  ))
                  : <div className="w-full text-center py-4">No class subject is available</div>
              }
            </div>
          </main>
        }

      </div>

      <Modal
        page={page}
        visible={showmodal}
        close={() => { setShowmodal(false); }}
        addClass={(classname) => { updateClass(classname); }}
        editClass={(classname) => { editClass(classname); }}
        addSubject={(subject, content) => { addSubject(subject, content); }}
        contentavailable={true}
        editSubject={(subject, content) => { editSubject(subject, content); }}
        prevVal={prevName}
        prevSub={prevSub}
      />
    </div>
  );
};

export default ClassRecords;