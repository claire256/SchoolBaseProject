import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginImg, schoolbaseLogo } from "../../../assets";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { BiErrorCircle } from "react-icons/bi";
import axios from "axios";
import { API_URL } from "../../../constants";
import { ClipLoader } from "react-spinners";

const SignInPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
    const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const validateEmail = (email, password) => {
    // check if email is empty
    if (!email) {
      setError("Kindly tell us your mail");
      setTimeout(() => {
        setError("");
      }, 5000);
      return false;
    }
    // check if email is in the correct format using a regular expression
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      setError("Your email is not in the correct format");
      setTimeout(() => {
        setError("");
      }, 6000);
      return false;
    }
    // check if password is empty
    if (!password) {
      setError("We need your password to proceed");
      setTimeout(() => {
        setError("");
      }, 5000);
      return false;
    }

    setError("");
    return true;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!validateEmail(formData.email, formData.password)) {
    return;
  }
  setLoader(true);

  const formDataToSend = new FormData();
  formDataToSend.append("email", formData.email);
  formDataToSend.append("password", formData.password);

  try {
    // const response = await axios.post(`${API_URL}/user/login`, formDataToSend, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
      console.log(response.data);
    navigate("/teacher/dashboard");
  } catch (error) {
    navigate("/teacher/dashboard");
      // console.error("Signin failed:", error);

    if (error.response) {
      if (error.response.status === 500) {
        setError("Internal server error.");
      } else {
        console.log("Error:", error.response.data);
        setError("An error occurred");
      }
    } else {
      console.log("Request setup error:", error.message);
      setError("Access Denied");
    }
  } finally {
    setLoader(false);
  }
};

  return (
    <div className="flex bg-gray-100">
      <div className="bg-signUpBg hidden lgss:flex lgss:w-1/2 flex-col justify-start items-start">
        <Link to={"/"} className="px-5 py-3">
          <div className="flex items-center">
            <img src={schoolbaseLogo} alt="" />
            <p className="font-manrope sans px-2 font-extrabold text-[28px]">
              SCHOOL<span className=" ">BASE</span>
            </p>
          </div>
        </Link>
        <div className="flex justify-center items-center flex-grow px-8">
          <img
            src={loginImg}
            alt="Login"
            className="w-full "
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full lgss:w-1/2 flex flex-col justify-center h-2/3 mt-[5%] items-start px-8"
      >
        <div className="py-4">
          <h1 className="text-[26px] font-extrabold cursor-pointer">
            Login to your account
          </h1>
        </div>
        <div className="w-[80%] space-y-4">
          <div className="flex flex-col w-full space-y-3">
            <div className="flex flex-col w-full space-y-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-md font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  placeholder="Email"
                  className="py-2 shadow-lg text-sm shadow-gray-400/70 outline-none px-2"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="residential address"
                  className="text-md font-semibold"
                >
                  Password
                </label>
                <div className="  bg-white flex outline-none text-sm w-full justify-between items-center py-2 shadow-lg shadow-gray-400/70 px-2">
                  <input
                    type={viewPassword ? "text" : "password"}
                    value={formData.password}
                    name="password"
                    placeholder="Password"
                    className="outline-none w-full"
                    onChange={handleChange}
                  />

                  {viewPassword ? (
                    <IoMdEye
                      onClick={() => setViewPassword((prev) => !prev)}
                      className="cursor-pointer text-xl relative"
                    />
                  ) : (
                    <IoMdEyeOff
                      onClick={() => setViewPassword((prev) => !prev)}
                      className="cursor-pointer text-xl relative "
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full">
            <h2
              onClick={() => navigate("/")}
              className=" mt-4 cursor-pointer text-right font-bold font-manrope text-primary"
            >
              Forgot password?
            </h2>
            {error && (
              <div className="bg-red w-full text-white text-[14px] rounded-xl justify-start items-center gap-2 flex h-[48px] px-2 font-bold mt-4">
                <BiErrorCircle className="text-xl" />
                {error}
              </div>
            )}
            <button className="bg-primary w-full py-3 mt-8 text-white font-semibold text-md rounded-[4px]">
              {loader ? <ClipLoader color="#ffffff" /> : "Log In"}
            </button>
            <p className="text-center w-full text-sm font-semibold mt-3">
              Not registered yet?
              <Link
                to={"/get-started/teacher/signup"}
                className="text-red-300 underline px-2 font-medium"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );

};

export default SignInPage;
