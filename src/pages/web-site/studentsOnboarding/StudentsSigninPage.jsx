import React from 'react';
import { Link } from 'react-router-dom';
import { Manlearning } from '../../../assets';
import "../../../styles/studentsOnboarding/SignIn.css";

const StudentsSignin = () => {
  return (
    <div className="Wrapper">
      <div className="wrapper-display">
      <div className="img">
      <img src={Manlearning} className="manlearning"/>
      </div>
      <form className="form-sec">
      <div>
      <h1 className="heading">Sign into your account</h1>
      <label for="School E-mail Address" className="label">School E-mail Address</label><br></br>
      <input id="School E-mail Address" placeholder="School E-mail Address" className="input" /><br></br><br></br>
      <label for="Password" className="label" >Password</label><br></br>
      <input id="Password" placeholder="Password" className="input" />
      <div className="section">
          <div className="checkbox-display">
          <input type="checkbox" className="check"/>
          <label>Remember me</label>
         </div>
        <Link to={"/forgot-password"}>Forgot Password?</Link>
      </div>
      <button className="butn" >Sign In</button>
      <p className="signup">
               Not registered yet?
          <Link
            to={"/get-started/student/signup"}
            className="link"
          >
             Create an account
          </Link>
        </p>
      </div>
      </form>
    </div>
    </div>
  )
}

export default StudentsSignin;