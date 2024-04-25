import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupImg } from "../../../assets";
import { FormControl, MenuItem, Select } from "@mui/material";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { BiErrorCircle } from "react-icons/bi";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [residence, setResidence] = useState("");
  const [gender, setGender] = useState("");
  const [surname, setSurname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [avatar, setAvatar] = useState("");

  const [error, setError] = useState("");
  const validateEmail = (
    surname,
    firstName,
    middleName,
    gender,
    residence,
    email,
    password,
    confirmPassword
  ) => {
    if (!surname) {
      setError("You need to tell us your surname to proceed");
      setTimeout(() => {
        setError("");
      }, 5000);
      return false;
    }

    if (!firstName) {
      setError("You need to tell us your first name to proceed");
      setTimeout(() => {
        setError("");
      }, 5000);
      return false;
    }

    if (!middleName) {
      setError("You need to tell us your middle name to proceed");
      setTimeout(() => {
        setError("");
      }, 5000);
      return false;
    }

    if (!gender) {
      setError("You need to tell us your gender to proceed");
      setTimeout(() => {
        setError("");
      }, 5000);
      return false;
    }

    if (!residence) {
      setError("You need to tell us your residential address to proceed");
      setTimeout(() => {
        setError("");
      }, 5000);
      return false;
    }

    if (!email) {
      setError("kindly add your email");
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

    if (!password) {
      setError("kindly add your desired password");
      setTimeout(() => {
        setError("");
      }, 5000);
      return false;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[A-Za-z\d!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}$/;

    if (!passwordRegex.test(password.trim())) {
      setError(
        "Password must contain atleast 8 characters, 1 uppercase, 1 digit, 1 lowercase and 1 special character"
      );
      setTimeout(() => {
        setError("");
      }, 6000);
      return false;
    }
    if (!confirmPassword) {
      setError("Retype your password in the field above");
      setTimeout(() => {
        setError("");
      }, 5000);
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
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 1000000) {
      MySwal.fire("image must not exceed 1MB'");

      setAvatar("");
    } else {
      setAvatar(file);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !validateEmail(
        surname,
        firstName,
        middleName,
        gender,
        residence,
        email,
        password,
        confirmPassword
      )
    ) {
      return;
    }
    navigate("/teacher/dashboard");
  };
  return (
    <div className="flex bg-gray-100">
      <div className="bg-signUpBg hidden lgss:flex lgss:w-1/2 flex-col justify-start items-start">
        <Link to={"/"} className="px-5 py-3">
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary font-itim">
            SchoolBase
          </h1>
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
              <label htmlFor="surname" className="text-md font-semibold">
                Surname
              </label>
              <input
                type="text"
                name="surname"
                value={surname}
                id="surname"
                placeholder="Surname"
                className="py-1 shadow-lg shadow-gray-400/70 text-sm outline-none px-2"
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="flex flex-col lgss:w-1/2">
              <label htmlFor="surname" className="text-md font-semibold">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="py-1 text-sm outline-none shadow-lg shadow-gray-400/70 px-2"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col lgss:flex-row w-[90%] lgss:space-x-8">
            <div className="flex flex-col lgss:w-1/2">
              <label htmlFor="middle name" className="text-md font-semibold">
                Middle Name
              </label>
              <input
                type="text"
                value={middleName}
                name="middleName"
                id="middleName"
                placeholder="Middle Name"
                className="py-1 text-sm shadow-lg shadow-gray-400/70 outline-none px-2"
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
            <div className="flex flex-col lgss:w-1/2">
              <label htmlFor="gender" className="text-md font-semibold">
                Gender
              </label>
              <div className="">
                <FormControl
                  className="w-full h-[1.8rem] bg-white text-[#97999C] shadow-lg shadow-gray-400/70"
                  size="small"
                >
                  <Select
                    value={gender}
                    id="gender"
                    label="gender"
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="flex flex-col lgss:flex-row w-[90%] lgss:space-x-8">
            <div className="flex flex-col lgss:w-1/2">
              <label
                htmlFor="residential address"
                className="text-md font-semibold"
              >
                Residential Address
              </label>
              <input
                type="text"
                value={residence}
                name="residence"
                id="residence"
                placeholder="Residential Address"
                className="py-1 text-sm shadow-lg shadow-gray-400/70 outline-none px-2"
                onChange={(e) => setResidence(e.target.value)}
              />
            </div>
            <div className="flex flex-col lgss:w-1/2">
              <label htmlFor="Email Address" className="text-md font-semibold">
                Email Address
              </label>
              <input
                type="text"
                value={email}
                name="Email Address"
                id="email"
                placeholder="Email Address"
                className="py-1 text-sm outline-none shadow-lg shadow-gray-400/70 px-2"
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
              />
            </div>
          </div>
          <div className="flex flex-col lgss:flex-row w-[90%] lgss:space-x-8">
            <div className="flex flex-col lgss:w-1/2">
              <label
                htmlFor="residential address"
                className="text-md font-semibold"
              >
                Password
              </label>
              <div className="  bg-white flex outline-none text-sm w-full justify-between items-center py-1 shadow-lg shadow-gray-400/70 px-2">
                <input
                  type={viewPassword ? "text" : "password"}
                  value={password}
                  placeholder="Password"
                  className="outline-none w-full"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
                htmlFor="residential address"
                className="text-md font-semibold"
              >
                Confirm Password
              </label>
              <div className="  bg-white flex outline-none text-sm w-full justify-between items-center py-1 shadow-lg shadow-gray-400/70 px-2">
                <input
                  type={viewConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  className="outline-none w-full"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
          <label htmlFor="Class Taught" className="text-md font-semibold">
            Class Taught
          </label>
          <div className="border-2 rounded-[16px] w-[90%] shadow-sm p-2 flex flex-wrap lgss:space-x-5">
            <div className="space-y-3">
              <div className="border-2 rounded-[8px] px-3 shadow-sm flex justify-center items-center text-[20px] gap-3 font-semibold py-1">
                <p className="text-[14px]">JSS 1</p>
                <input type="checkbox" className="w-4" name="jss1" id="jss1" />
              </div>
              <div className="border-2 rounded-[8px] px-3 shadow-sm flex justify-center items-center text-[20px] gap-3 font-semibold py-1">
                <p className="text-[14px]">JSS 2</p>
                <input type="checkbox" name="jss2" id="jss2" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-2 rounded-[8px] px-3 shadow-sm flex justify-center items-center text-[14px] gap-3 font-semibold py-1">
                <p className="text-[14px]">JSS 3</p>
                <input type="checkbox" className="w-4" name="jss3" id="jss3" />
              </div>
              <div className="border-2 rounded-[8px] px-3 shadow-sm flex justify-center items-center text-[14px] gap-3 font-semibold py-1">
                <p className="text-[14px]">SS 1</p>
                <input type="checkbox" className="w-4" name="ss1" id="ss1" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="border-2 rounded-[8px] px-3 shadow-sm flex justify-center items-center text-[20px] gap-3 font-semibold py-1">
                <p className="text-[14px]">SS 2</p>
                <input type="checkbox" className="w-4" name="ss2" id="ss2" />
              </div>
              <div className="border-2 rounded-[8px] px-3 shadow-sm flex justify-center items-center text-[20px] gap-3 font-semibold py-1">
                <p className="text-[14px]">SS 3</p>
                <input type="checkbox" name="ss3" id="ss3" />
              </div>
            </div>
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
              id="avatar"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="flex space-x-3 pt-1 text-[14px] font-semibold">
          <input type="checkbox" className="w-3" required />
          <p>I confirm that the information given on this form is correct</p>
        </div>
        {error && (
          <div className="bg-red-600 w-[90%] text-white text-[14px] rounded-xl justify-start items-center gap-2 flex h-[48px] px-2 font-bold mt-4">
            <BiErrorCircle className="text-xl" />
            {error}
          </div>
        )}
        <button
          type="submit"
          className="bg-primary py-2 mt-3 w-[90%] text-white font-semibold text-md rounded-[4px]"
        >
          Sign Up
        </button>
        <p className="text-center w-full font-semibold mt-2 text-[14px]">
          Already have an account?{" "}
          <Link
            to={"/get-started/teacher/signin"}
            className="text-red-300 underline px-2 font-medium"
          >
            Sign In
          </Link>
        </p>
      </form>
      ;
    </div>
  );
};

export default SignUpPage;
