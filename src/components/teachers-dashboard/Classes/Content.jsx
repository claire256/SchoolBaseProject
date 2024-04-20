import { ArrowLeft, circle, subimg } from "../../../assets";
import "../../../styles/teacherdashboard/Content.css";

const Content = ({title, image})=>{
    return(
    <div className="main-display">
        <div className="min-display">
            <img src={circle} className="circular"/>
            <img src={subimg} className="subimage"/>
            <p>{title}</p>
        </div>
        <div className="line-content">
            <div className="line-cont"></div>
            <img src={image} className="a-left"/>
        </div>
    </div>
    )
}

export default Content;