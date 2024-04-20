import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const TitleComponent = ({ title, destination }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(destination);
  };
  return (
    <div className="flex items-center gap-5 px-[5%]">
      <button className="bg-primary rounded-full px-1 py-1 text-white text-[22px]" onClick={handleBackButtonClick}>
        <FaAngleLeft />
      </button>
      <h1 className="font-bold text-[22px]">{title}</h1>
    </div>
  );
};

export default TitleComponent;
