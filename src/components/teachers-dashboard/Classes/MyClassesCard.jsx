import "../../../styles/teacherdashboard/MyClassesCard.css";
import React, { useState } from "react";

//const MyClassesCard = () =>{
const MyClassesCard = () => {
    const [className, setClassName] = useState("");
    const [newClassName, setNewClassName] = useState("");

    const handleInputChange = (e) => {
        setNewClassName(e.target.value);
    };

    const handleUpdateClick = () => {
        setClassName(newClassName);
    };
    return (
        <div className="card-div">
            <div>
                <p className="jss">{className}</p><br></br>
                <button className="enter-btn hover:bg-blue-300" >Enter Class</button>
            </div>
        </div>
    )
}
export default MyClassesCard;