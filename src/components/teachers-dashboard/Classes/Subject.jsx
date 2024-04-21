import { book } from "../../../assets";
import "../../../styles/teacherdashboard/Subject.css";

const Subject = ()=>{
    return(
        <div className="sub-card">
          <img src={book} className="sub-image"/>
          <div className="btn-display">
              <p>Mathematics</p>
              <button className="blue-btn">View Content</button>
          </div>
        </div>
    )
}
export default Subject;