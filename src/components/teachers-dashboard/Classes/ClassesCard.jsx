import React from "react";

const ClassesCard = ({ title, number, icon: Icon }) => {
  return (
    <div className="bg-primary text-white py-8 px-10 rounded-[32px] text-[3.5em] flex justify-center items-center space-x-6">
      {Icon && <Icon />}
      <div className="flex flex-col space-y-3 text-[0.4em]">
        <h2>{title}</h2>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default ClassesCard;
