import { Arrowdown, colleaguesDiscussing, imageicon } from "../../../assets";
import "../../../styles/studentsOnboarding/signup.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/Context";
import { STUDENTSIGNUP, STUDENTSIGNUP_ERRORS } from "../../../context/Type";
import { AddStudent } from "../../../context/Actions/student";
import validateStudent from "../../../Auth/validateStudent";

const StudentsSignUp = () => {
    const navigate = useNavigate();
    const [apierrors, setApierrors] = useState(null);
    const [errors, setErrors] = useState({});
    const{studentState, studentDispatch} = useContext(AppContext)
    const[student, setStudent] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      surName: "",
      firstName: "",
      middleName: "",
      // phoneNumber: "",
      // gender: "",
      class: "",
      address: "",
      passport: "",
      role: "",
    })
    useEffect(()=>{
      if (studentState?.signup?.newRecord.user) {
        console.log('id', studentState?.signup?.newRecord.user)
        studentDispatch({ type: STUDENTSIGNUP, payload: null });
        return navigate("/student/dashboard");
      }

      if (studentState.studentsignup_errors) {
        setApierrors(studentState.studentsignup_errors.message);
        studentDispatch({ type: STUDENTSIGNUP_ERRORS, payload: null });
      }
    }, [studentState])

    const handleOnChange = (e)=>{
      if(e.target.name == 'passport'){
         setStudent({...student, passport:e.target.files[0]})   
      }
      else {
        setStudent({...student, [e.target.name]:e.target.value})
      }
    }
    const handleSubmit = async(event)=>{
      event.preventDefault()
      const studentErrors = validateStudent(student);
    if (studentErrors) {
      setErrors(studentErrors);
      return;
    }
    const form = {
      firstName: student?.firstName,
      surName: student?.surName,
      middleName: student?.middleName,
      role: student?.role,
      email: student?.email,
      password: student?.password,
      class: student?.class,
      passport: student?.passport,
      address: student?.address
    };
    await AddStudent(form)(studentDispatch);
    }
  
  return (
    <div className="container">
      <div className="container-display">
        <div className="image">
          <img src={colleaguesDiscussing} className="colleague-image" />
        </div>
        <form className="form">
          <h1 className="h1">Create your account</h1>
          {apierrors && <p className="error">{apierrors}</p>}
          <div className="form-display">
            <div>
              <label htmlFor="Surname" className="label">Surname</label>
              <br></br>
              <input id="Surname" placeholder="Surname" className="input" name="surName" onChange={handleOnChange}/>
              {errors.surName && (
                      <p className="error">{errors.surName}</p>
                    )}
            </div>
            <div>
              <label htmlFor="First Name" className="label">First Name</label>
              <br></br>
              <input id="First Name" placeholder="First Name" className="input" name="firstName" onChange={handleOnChange}/>
              {errors.firstName && (
                      <p className="error">{errors.firstName}</p>
                    )}
            </div>
          </div>
          <br></br>
          <div className="form-display">
            <div>
              <label htmlFor="Middle Name" className="label">Middle Name</label>
              <br></br>
              <input id="Middle Name" placeholder="Middle Name" className="input" name="middleName" onChange={handleOnChange}/>
            </div>
            {/* <div>
              <label htmlFor="Gender" className="label">Gender</label>
              <br></br>
              <input id="Gender" placeholder="Gender" className="input" name="gender" onChange={handleOnChange}/>
            </div> */}
          </div>
          <br></br>
          <div className="form-display">
            <div>
              <label htmlFor="Residential Address" className="label">Residential Address</label>
              <br></br>
              <input
                id="Residential Address"
                placeholder="Residential Address"
                className="input"
                name="address"
                onChange={handleOnChange}
              />
            </div>
            <div className="state">
              <label htmlFor="Email Address" className="label">Email Address</label>
              <br></br>
              <input id="Email Address" placeholder="Email Address" className="input" type="email" name="email" onChange={handleOnChange}/>
              {/* <img src={Arrowdown} className="arrowdown" /> */}
              {errors.email && (
                      <p className="error">{errors.email}</p>
                    )}
            </div>
          </div>
          <br></br>
          <div className="form-display">
            <div className="state">
              <label htmlFor="Class" className="label">Class</label>
              <br></br>
              <input id="Class" placeholder="Class"  className="input" name="class" onChange={handleOnChange}/>
              {/* <img src={Arrowdown} className="arrowdown" /> */}
            </div>
            <div className="state">
              {/* <label htmlFor="Phone Number" className="label">Phone Number</label>
              <br></br>
              <input id="Phone Number" placeholder="Phone Number" className="input" type="" name="phoneNumber" onChange={handleOnChange}/> */}
              {/* <img src={Arrowdown} className="arrowdown" /> */}
            </div>
          </div>
          {errors.class && (
                      <p className="error">{errors.class}</p>
                    )}
          <br></br>
          <div className="form-display">
            <div>
              <label htmlFor="role" className="label">Role</label>
              <br></br>
              <input id="role" placeholder="role" className="input" name="role" onChange={handleOnChange}/>
              {errors.role && (
                      <p className="error">{errors.role}</p>
                    )}
            </div>
            </div>
          <br></br>
          <div className="form-display">
            <div>
              <label htmlFor="New Password" className="label">New Password</label>
              <br></br>
              <input id="New Password" placeholder="New Password" className="input" type="password" name="password" onChange={handleOnChange}/>
              {errors.password && (
                      <p className="error">{errors.password}</p>
                    )}
            </div>
            <div>
              <label htmlFor="Comfirm Password" className="label">Comfirm Password</label>
              <br></br>
              <input id="Confirm Password" placeholder="Comfirm Password" className="input" type="password" name="confirmPassword" onChange={handleOnChange}/>
              {errors.confirmPassword && (
                      <p className="error">{errors.confirmPassword}</p>
                    )} 
            </div>
          </div>
          {errors.comfirmPassword && (
                      <p className="error">{errors.confirmPassword}</p>
                    )}
          <div className="last-sec">
            <p>Upload your recent passport photogragh, JPEG, PNG</p>
            <div className="state">
              <input className="file" type="file" id="myFile" name="passport" onChange={handleOnChange} />
              {/* <img src={imageicon} className="image-icon" /> */}
            </div>
            {errors.passport && (
                      <p className="error">{errors.passport}</p>
                    )}
          </div>
          {/* <Link to={"/student/dashboard"}>           */}
          <button className="button" onClick={handleSubmit}>Sign Up</button>
          {/* </Link> */}
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
