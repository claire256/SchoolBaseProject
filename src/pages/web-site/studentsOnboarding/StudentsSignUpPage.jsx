import { colleaguesDiscussing, imageicon } from "../../../assets";
import "../../../styles/studentsOnboarding/signup.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/Context";
import { STUDENTSIGNUP, STUDENTSIGNUP_ERRORS } from "../../../context/Type";
import { AddStudent } from "../../../context/Actions/student";
import validateStudent from "../../../Auth/validateStudent";
import { ClipLoader } from "react-spinners";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const StudentsSignUp = () => {
    const navigate = useNavigate();
    const [buttonLoading, setButtonLoading] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);
    const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
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
      // role: "",
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
     navigate("/student/dashboard")
    
     setButtonLoading(true);
    
     const form = {
      firstName: student?.firstName,
      surName: student?.surName,
      middleName: student?.middleName,
      role: student?.role,
      email: student?.email,
      password: student?.password,
      class: student?.class,
      passport: student?.passport,
      address: student?.address,
      // gender: student?.gender
    };
    await AddStudent(form)(studentDispatch);

    setButtonLoading(false);
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
             <div>
              <label htmlFor="Gender" className="label">Gender</label>
              <br></br>
              <select
                className="input"
                id="gender"
                name="gender"
                onChange={handleOnChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div> 
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
              <select
                className="input"
                id="class"
                name="class"
                onChange={handleOnChange}
              >
                <option value="">Select Class</option>
                <option value="jss1">JSS1</option>
                <option value="jss2">JSS2</option>
                <option value="jss3">JSS3</option>
                <option value="ss1">SS1</option>
                <option value="ss2">SS2</option>
                <option value="ss3">SS3</option>
              </select>

            </div>
            <div className="state">
              <label htmlFor="Phone Number" className="label">Phone Number</label>
              <br></br>
              <input id="Phone Number" placeholder="Phone Number" className="input" type="" name="phoneNumber" onChange={handleOnChange}/> 
            </div>
          </div>
          {errors.class && (
                      <p className="error">{errors.class}</p>
                    )}
          <br></br>
          {/* <div className="form-display">
            <div>
              <label htmlFor="role" className="label">Role</label>
              <br></br>
              <input id="role" placeholder="role" className="input" name="role" onChange={handleOnChange}/>
              {errors.role && (
                      <p className="error">{errors.role}</p>
                    )}
            </div>
            </div> */}
          <br></br>
          <div className="form-display">
            <div>
              <label htmlFor="New Password" className="label">New Password</label>
              <br></br>
              <div className="eye-display">
              <input id="New Password" placeholder="New Password" className="input" type="password" name="password" onChange={handleOnChange}/>
              {viewPassword ? (
                  <IoMdEye
                    // onClick={() => setViewPassword((prev) => !prev)}
                    className="eye"
                  />
                ) : (
                  <IoMdEyeOff
                    // onClick={() => setViewPassword((prev) => !prev)}
                    className="eye"
                  />
                )}
              </div>
              {errors.password && (
                      <p className="error">{errors.password}</p>
                    )}
            </div>
            <div>
              <label htmlFor="Comfirm Password" className="label">Comfirm Password</label>
              <br></br>
              <div className="eye-display">
              <input id="Confirm Password" placeholder="Comfirm Password" className="input" type="password" name="confirmPassword" onChange={handleOnChange}/>
              {viewConfirmPassword ? (
                  <IoMdEye
                    onClick={() => setViewConfirmPassword((prev) => !prev)}
                    className="eye"
                  />
                ) : (
                  <IoMdEyeOff
                    onClick={() => setViewConfirmPassword((prev) => !prev)}
                    className="eye" 
                  />
                )}
                </div>
              {errors.confirmPassword && (
                      <p className="error">{errors.confirmPassword}</p>
                    )} 
            </div>
          </div>
          <div className="last-sec">
            <p>Upload your recent passport photogragh, JPEG, PNG</p>
            <div className="state">
              <input className="file" type="file" id="myFile" name="passport" onChange={handleOnChange} />
            </div>
            {errors.passport && (
                      <p className="error">{errors.passport}</p>
                    )}
          </div>
          {/* <Link to={"/student/dashboard"}>            */}
          <button className="button" onClick={handleSubmit}>
           {/* {buttonLoading? <ClipLoader color="#ffffff" className="loader"/> :"Sign Up"} */}
           Sign Up
            </button>
          {/* </Link>  */}
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
