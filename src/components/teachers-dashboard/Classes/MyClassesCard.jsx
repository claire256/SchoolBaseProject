import "../../../styles/teacherdashboard/MyClassesCard.css";
import React, { useState } from "react";


const MyClassesCard = ({ nameOfClass }) => {
    const [className, setClassName] = useState("");
    const [newClassName, setNewClassName] = useState("");

    const handleInputChange = (e) => {
        setNewClassName(e.target.value);
    };

    const handleUpdateClick = () => {
        setClassName(newClassName);
    };
    return (
        <div className="card-div mb-16">
            <div>
                <p className="jss">{nameOfClass}</p><br></br>
                <button className="enter-btn hover:bg-blue-300" >Enter Class</button>
            </div>
        </div>
    )
}
export default MyClassesCard;