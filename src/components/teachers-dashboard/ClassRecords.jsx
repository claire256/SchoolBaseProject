import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { FaBars, FaTimes } from "react-icons/fa";
import { vectorImage } from "../../assets";


const ClassRecords = () => {
  const [isOpen, setIsOpen] = useState(false);

  {/*student data array*/ }
  const studentData = [
    { Classes: "Jss1", "No of Subject": 0, "Add Subject": vectorImage },
    { Classes: "Jss1", "No of Subject": 0, "Add Subject": vectorImage },
    { Classes: "Jss1", "No of Subject": 0, "Add Subject": vectorImage },
    { Classes: "Jss1", "No of Subject": 0, "Add Subject": vectorImage },
    { Classes: "Jss1", "No of Subject": 0, "Add Subject": vectorImage },
    { Classes: "Jss1", "No of Subject": 0, "Add Subject": vectorImage },
  ];

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

        {/* Student Record Table */}
        <main className="mt-8 px-4">
          <div className="flex justify-between mr-4 sm:mr-16">
            <h1 className="text-xl font-bold mb-4">Student Records</h1>
            <button className="text-20 text-white font-manrope bg-buttonPrimary hover:bg-blue-500 py-2 px-4 rounded-lg">Add a New Class</button>
          </div>
          <table className="w-full border-collapse border-2 border-gray-300 shadow-lg mt-12 sm:mt-8 md:mt-12 px-12 sm:px-8 md:px-12">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Classes</th>
                <th className="border border-gray-300 px-4 py-2">No of Subject</th>
                <th className="border border-gray-300 px-4 py-2">Add Subject</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student) => (
                <tr key={student.classes}>
                  <td className="border border-gray-300 px-4 py-2 text-center align-middle">{student.Classes}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center align-middle">{student["No of Subject"]}</td>
                  <td className="border border-gray-300 px-4 py-2 flex items-center justify-center ">
                    <img src={student["Add Subject"]} alt="Vector Image" className="h-3 w-4 " /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default ClassRecords;
