import React, { useState } from "react";
import "../../../styles/studentdashboard/HomePage.css";
import { Modal, Button, message } from "antd";
import { plus } from "../../../assets";
const App = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      
      setConfirmLoading(false);
      
    }, []);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  
  return (
    <>
      <button
        className="font-bold p-5 rounded-full shadow-xl border-[1px"
        onClick={showModal}
      >
        <img src={plus} alt="" className="w-[15px]" />
      </button>
      <Modal
        title="Add New Subject"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form action="" method="" className="flex flex-col h-full gap-5 pt-4">
          <input
            type="text"
            name="subject"
            placeholder="Add new subject"
            className="border-[1px] p-1 rounded-md outline-none"
          />
          <input
            type="date"
            name="date"
            className="border-[1px] p-1 rounded-md outline-none"
          />
          <div className="flex justify-between">
            <input
              type="time"
              name="startTime"
              className="border-[1px] p-1 rounded-md w-[45%] outline-none"
            />
            <input
              type="time"
              name="endTime"
              className="border-[1px] p-1 rounded-md w-[45%] outline-none"
            />
          </div>
          <textarea
            name="discription"
            id="discription"
            placeholder="Add discription"
            className="border-[1px] p-1 h-[35px] rounded-md outline-none"
          ></textarea>
          <select
            name="color"
            id="color"
            className="outline-none border-[1px] rounded-md h-[35px] p-1"
          >
            <option value="">Select the Display Color</option>
            <option value="red"> Red</option>
            <option value="black"> Black</option>
            <option value="green"> Green</option>
            <option value="blue"> Blue</option>
          </select>
          <button onClick={handleOk} type="submit" className="flex bg-primary w-[30%] px-2 py-1  rounded-md text-white justify-center items-center text-[16px]">save</button>
        </form>
      </Modal>
      {/* <div>
        <form>
          <input type="text" />
          <input type="text" />
          <div className="flex">
          <input type="text" />
          <input type="text" />
          </div>
          <input type="text" />
          <input type="text" />
          <button onClick={handleOk} type="submit" className="flex bg-primary w-[30%] px-2 py-1  rounded-md text-white justify-center items-center text-[16px]">save</button>
        </form>
      </div> */}
    </>
  );
};
export default App;
