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
              <label for="Surname">Surname</label>
              <br></br>
              <input id="Surname" placeholder="Surname" />
            </div>
            <div>
              <label for="First Name">First Name</label>
              <br></br>
              <input id="First Name" placeholder="First Name" />
            </div>
          </div>
          <br></br>
          <div className="form-display">
            <div>
              <label for="Middle Name">Middle Name</label>
              <br></br>
              <input id="Middle Name" placeholder="Middle Name" />
            </div>
            <div>
              <label for="Gender">Gender</label>
              <br></br>
              <input id="Gender" placeholder="Gender" />
            </div>
          </div>
          <br></br>
          <div className="form-display">
            <div>
              <label for="Residential Address">Residential Address</label>
              <br></br>
              <input
                id="Residential Address"
                placeholder="Residential Address"
              />
            </div>
            <div className="state">
              <label for="Date of Birth">Date of Birth</label>
              <br></br>
              <input id="Date of Birth" placeholder="Date of Birth" />
              <img src={Arrowdown} className="arrow" />
            </div>
          </div>
          <br></br>
          <div className="form-display">
            <div className="state">
              <label for="State">State</label>
              <br></br>
              <input id="State" placeholder="State" />
              <img src={Arrowdown} className="arrow" />
            </div>
            <div className="state">
              <label for="City">City</label>
              <br></br>
              <input id="City" placeholder="City" />
              <img src={Arrowdown} className="arrow" />
            </div>
          </div>
          <br></br>
          <div className="form-display">
            <div>
              <label for="Password">Password</label>
              <br></br>
              <input id="Password" placeholder="Password" />
            </div>
            <div>
              <label for="Comfirm Password">Comfirm Password</label>
              <br></br>
              <input id="Comfirm Password" placeholder="Comfirm Password" />
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
            <Link to="/" className="link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default StudentsSignUp;
