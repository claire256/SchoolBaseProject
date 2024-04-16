import { Arrowdown, colleaguesDiscussing, imageicon } from "../../../assets";
import "../../../styles/studentsOnboarding/signup.css";
import { Link } from "react-router-dom";

const StudentsSignUp = () => {
  return (
    <div className="container">
      <div className="container-display">
        <div className="image">
          <img src={colleaguesDiscussing} className="colleague-image" />
        </div>
        <form className="form">
          <h1 className="h1">Create your account</h1>
          <div className="form-display">
            <div>
              <label for="Surname" className="label">Surname</label>
              <br></br>
              <input id="Surname" placeholder="Surname" className="input"/>
            </div>
            <div>
              <label for="First Name" className="label">First Name</label>
              <br></br>
              <input id="First Name" placeholder="First Name" className="input"/>
            </div>
          </div>
          <br></br>
          <div className="form-display">
            <div>
              <label for="Middle Name" className="label">Middle Name</label>
              <br></br>
              <input id="Middle Name" placeholder="Middle Name" className="input"/>
            </div>
            <div>
              <label for="Gender" className="label">Gender</label>
              <br></br>
              <input id="Gender" placeholder="Gender" className="input" />
            </div>
          </div>
          <br></br>
          <div className="form-display">
            <div>
              <label for="Residential Address" className="label">Residential Address</label>
              <br></br>
              <input
                id="Residential Address"
                placeholder="Residential Address"
                className="input"
              />
            </div>
            <div className="state">
              <label for="Date of Birth" className="label">Date of Birth</label>
              <br></br>
              <input id="Date of Birth" placeholder="Date of Birth" className="input" />
              <img src={Arrowdown} className="arrow" />
            </div>
          </div>
          <br></br>
          <div className="form-display">
            <div className="state">
              <label for="State" className="label">State</label>
              <br></br>
              <input id="State" placeholder="State"  className="input"/>
              <img src={Arrowdown} className="arrow" />
            </div>
            <div className="state">
              <label for="City" className="label">City</label>
              <br></br>
              <input id="City" placeholder="City" className="input"/>
              <img src={Arrowdown} className="arrow" />
            </div>
          </div>
          <br></br>
          <div className="form-display">
            <div>
              <label for="Password" className="label">Password</label>
              <br></br>
              <input id="Password" placeholder="Password" className="input" />
            </div>
            <div>
              <label for="password" className="label">Comfirm Password</label>
              <br></br>
              <input id="password" placeholder="Comfirm Password" className="input" />
            </div>
          </div>
          <div className="last-sec">
            <p>Upload your recent passport photogragh, JPEG, PNG</p>
            <div className="state">
              <button className="file">select from file</button>
              <img src={imageicon} className="image-icon" />
            </div>
          </div>
          <Link to={"/student/dashboard"}>          
          <button className="button">Sign Up</button>
          </Link>
          <p className="login">
            Already have an account?{" "}
            <Link to={"/get-started/student/signin"}  className="link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default StudentsSignUp;
