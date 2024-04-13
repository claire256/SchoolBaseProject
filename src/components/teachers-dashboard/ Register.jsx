import { man, vector } from "../../assets";
import "../../styles/teacherdashboard/Register.css";

const Register = ()=>{
    return(
        <div className="section-display">
          <div className="display">
            <img src={man}/>
            <p>Tega Chukwuemeka</p>
          </div>
          <div className="display">
           <img src={vector} className="" />
          <p>7:30</p>
          </div>
          <div className="display">
           <img src={vector} className=""/> 
           <p>15:30</p>
          </div>
        </div>        
    )
}
export default Register;