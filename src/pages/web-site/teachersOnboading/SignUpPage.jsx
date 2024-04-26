import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { schoolbaseLogo, signupImg } from "../../../assets";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { BiErrorCircle } from "react-icons/bi";
import axios from "axios";
import { API_URL } from "../../../constants";
import { ClipLoader } from "react-spinners";

const classes = ["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"];

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = location.state || {};
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    middleName: "",
    gender: "",
    email: "",
    password: "",
    classTaught: [],
    address: "",
    passport: null,
    role: "teacher",
  });

  const validateForm = (
    surName,
    firstName,
    middleName,
    gender,
    address,
    email,
    password,
    confirmPassword
  ) => {
    if (
      !surName ||
      !firstName ||
      !middleName ||
      !gender ||
      !address ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("All fields are required");
      setTimeout(() => {
        setError("");
      }, 5000);
      return false;
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      setError("Your email is not in the correct format");
      setTimeout(() => {
        setError("");
      }, 6000);
      return false;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[A-Za-z\d!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}$/;

    if (!passwordRegex.test(password.trim())) {
      setError(
        "Password must contain at least 8 characters, 1 uppercase, 1 digit, 1 lowercase and 1 special character"
      );
      setTimeout(() => {
        setError("");
      }, 6000);
      return false;
    }

    if (confirmPassword !== password) {
      setError("Oops!!! Your passwords do not match");
      setTimeout(() => {
        setError("");
      }, 6000);
      return false;
    }

    setError("");
    return true;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      const updatedArray = checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);

      setFormData({
        ...formData,
        [name]: updatedArray,
      });
    } else if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !validateForm(
        formData.surName,
        formData.firstName,
        formData.middleName,
        formData.gender,
        formData.address,
        formData.email,
        formData.password,
        confirmPassword
      )
    ) {
      return;
    }
    setLoader(true);

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("surName", formData.surName);
    formDataToSend.append("middleName", formData.middleName);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formData.classTaught.forEach((classItem) =>
      formDataToSend.append("classTaught", classItem)
    );
    formDataToSend.append("address", formData.address);
    formDataToSend.append("passport", formData.passport);
    formDataToSend.append("role", formData.role);

    try {
      const response = await axios.post(
        `${API_URL}/user/signup`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/teacher/dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
      if (error.response) {
        if (error.response.status === 400) {
          setError(
            "This email address is already in use. Please use a different email."
          );
        } else {
          console.log("Error:", error.response.data);
          setError("An error occurred");
        }
      } else {
        console.log("Request setup error:", error.message);
        setError("Account already exists, proceed to login");
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
        <div className="flex justify-center items-center flex-grow px-8 h-screen">
          <img
            src={signupImg}
            alt="SignUp"
            className="w-full h-3/5"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full lgss:w-1/2 flex flex-col justify-center items-start px-8"
      >
        <div className="py-2">
          <h1 className="text-[26px] font-extrabold cursor-pointer">
            Create your account
          </h1>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <div className="flex flex-col lgss:flex-row w-[90%] lgss:space-x-8">
            <div className="flex flex-col lgss:w-1/2">
              <label htmlFor="surName" className="text-md font-semibold">
                Surname
              </label>
              <input
                type="text"
                name="surName"
                value={formData.surName}
                id="surName"
                placeholder="Surname"
                className="py-1 shadow-lg shadow-gray-400/70 text-sm outline-none px-2"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col lgss:w-1/2">
              <label htmlFor="firstName" className="text-md font-semibold">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="py-1 text-sm outline-none shadow-lg shadow-gray-400/70 px-2"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col lgss:flex-row w-[90%] lgss:space-x-8">
            <div className="flex flex-col lgss:w-1/2">
              <label htmlFor="middleName" className="text-md font-semibold">
                Middle Name
              </label>
              <input
                type="text"
                value={formData.middleName}
                name="middleName"
                id="middleName"
                placeholder="Middle Name"
                className="py-1 text-sm shadow-lg shadow-gray-400/70 outline-none px-2"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col lgss:w-1/2">
              <label htmlFor="gender" className="text-md font-semibold">
                Gender
              </label>
              <select
                className="w-full h-[1.8rem] bg-white text-[#97999C] outline-none shadow-lg shadow-gray-400/70"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col lgss:flex-row w-[90%] lgss:space-x-8">
            <div className="flex flex-col lgss:w-1/2">
              <label htmlFor="address" className="text-md font-semibold">
                Residential Address
              </label>
              <input
                type="text"
                value={formData.address}
                name="address"
                id="address"
                placeholder="Residential Address"
                className="py-1 text-sm shadow-lg shadow-gray-400/70 outline-none px-2"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col lgss:w-1/2">
              <label htmlFor="email" className="text-md font-semibold">
                Email Address
              </label>
              <input
                type="text"
                value={formData.email}
                name="email"
                id="email"
                placeholder="Email Address"
                className="py-1 text-sm outline-none shadow-lg shadow-gray-400/70 px-2"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col lgss:flex-row w-[90%] lgss:space-x-8">
            <div className="flex flex-col lgss:w-1/2">
              <label htmlFor="password" className="text-md font-semibold">
                Password
              </label>
              <div className="  bg-white flex outline-none text-sm w-full justify-between items-center py-1 shadow-lg shadow-gray-400/70 px-2">
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
            <div className="flex flex-col lgss:w-1/2">
              <label
                htmlFor="confirmPassword"
                className="text-md font-semibold"
              >
                Confirm Password
              </label>
              <div className="  bg-white flex outline-none text-sm w-full justify-between items-center py-1 shadow-lg shadow-gray-400/70 px-2">
                <input
                  type={viewConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="outline-none w-full"
                  onChange={handleChange}
                />

                {viewConfirmPassword ? (
                  <IoMdEye
                    onClick={() => setViewConfirmPassword((prev) => !prev)}
                    className="cursor-pointer text-xl relative"
                  />
                ) : (
                  <IoMdEyeOff
                    onClick={() => setViewConfirmPassword((prev) => !prev)}
                    className="cursor-pointer text-xl relative "
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 space-y-1 w-full">
          <label htmlFor="classTaught" className="text-md font-semibold">
            Class Taught
          </label>
          <div className="border-2 rounded-[16px] w-[90%] shadow-sm p-2 flex flex-wrap lgss:space-x-5">
            {classes.map((classItem) => (
              <div
                key={classItem}
                className="border-2 rounded-[8px] px-3 shadow-sm flex justify-center items-center text-[16px] gap-3 font-light py-1"
              >
                <input
                  className=""
                  type="checkbox"
                  id={`class${classItem}`}
                  name="classTaught"
                  value={classItem}
                  checked={formData.classTaught.includes(classItem)}
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor={`class${classItem}`}
                >
                  {classItem}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-6 w-[90%] items-end">
          <div className="border-[1px] border-secondary mt-2 rounded-[16px] px-4 py-4 shadow-sm flex justify-center items-center text-[24px]">
            <CiImageOn />
          </div>
          <div className="">
            <CiImageOn />
            <input
              type="file"
              id="passport"
              name="passport"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex space-x-3 pt-1 text-[14px] font-semibold">
          <input type="radio" className="w-3" required />
          <p>I confirm that the information given on this form is correct</p>
        </div>
        {error && (
          <div className="bg-red w-[90%] text-white text-[14px] rounded-xl justify-start items-center gap-2 flex h-[48px] px-2 font-bold mt-4">
            <BiErrorCircle className="text-xl" />
            {error}
          </div>
        )}
        <button
          type="submit"
          className="bg-primary py-2 mt-3 w-[90%] text-white font-semibold text-md rounded-[4px]"
        >
          {loader ? <ClipLoader color="#ffffff" /> : "Sign Up"}
        </button>
        <p className="text-center w-full font-semibold mt-2 text-[14px]">
          Already have an account?{" "}
          <span
            onClick={() => {
              navigate("/get-started/teacher/signin");
            }}
            className="text-red-300 underline px-2 cursor-pointer font-medium"
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
