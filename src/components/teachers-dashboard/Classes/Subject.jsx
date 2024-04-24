import { book } from "../../../assets";
import "../../../styles/teacherdashboard/Subject.css";

const Subject = ({ subjectname }) => {
    return (
        <div className="sub-card ml-12 mr-12 mb-10">
            <img src={book} className="sub-image" />
            <div className="btn-display">
                <p>{subjectname}</p>
                <button className="blue-btn">View Content</button>
            </div>
        </div>
    )
}
export default Subject;