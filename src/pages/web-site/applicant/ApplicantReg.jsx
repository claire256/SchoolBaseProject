import React, { useState, useEffect } from 'react';
import { ApplicantImg } from "../../../assets";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  TextField,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";




const ApplicantReg = () => {
  const [gender, setGender] = useState("");


  const [formData, setFormData] = useState({
    email: '',
    passport: null, // For file upload
    role: 'newApplicant',
    firstName: '',
    surName: '',
    gender: '',
    middleName: '',
    password: '',
    address: '',
    phoneNumber: '',
    dateOfBirth: null,
    religion: '',
    stateOfOrigin: '',
    nationality: '',
    maritalStatus: '',
    parentName: '',
    parentOccupation: '',
    extracurricular: [],
    interests: [],
    skills: [],
    previousSchools: [],
    registeredCourses: [],
    additionalDocuments: [],
    signature: [],
    recommendationLetter: [],

  });

  useEffect(() => {
    const storedData = localStorage.getItem('schoolbaseapplicantdata');
    if (storedData) {
      setFormData(JSON.parse(storedData));
      console.log(JSON.parse(storedData));
    }
  }, []);


  const handleInputChange = (key, value) => {
    let data = { ...formData };
    data[key] = value;
    setFormData(data);
  };

  const handleContinue = () => {
    localStorage.setItem("schoolbaseapplicantdata", JSON.stringify(formData));
    window.location.href = "/get-started/applicantcontact";
  }

  //   flex w-11/12 justify-between lgss: m-auto gap-x-12

  return (
    <div className="font-manrope bg-blueBg">
      <div className="text-center text-xl border-b-4 font-extrabold py-5">
        <h1 className="">ADMISSION FORM</h1>
      </div>
      <div className="flex w-4/5 m-auto">
        <div className="my-6">
          <img
            className="md:block hidden lg: w-full h-full mr-48 px-12"
            width={100}
            height={50}
            src={ApplicantImg}
            alt="Applicant's Image"
          />
        </div>

        <div className="my-6 w-11/12">
          <div className="">
            <p className="text-sm mb-0.5 font-semibold text-[#4D4D4E]">
              First name
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='First name' /> */}
            <TextField
              id="firstName"
              className="w-full  bg-white text-[#97999C] rounded-md p-[12px] placeholder:text-base shadow-2xl"
              placeholder="First name"
              size="small"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => { handleInputChange('firstName', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}

            />
          </div>

          <div className="mt-0.5">
            <p className="text-sm mb-0.5 font-semibold text-[#4D4D4E]">
              Middle name
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Middle name' /> */}
            <TextField
              className="w-full bg-white text-[#97999C] rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="Middle name"
              size="small"
              name="middleName"
              value={formData.middleName}
              onChange={(e) => { handleInputChange('middleName', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}

            />
          </div>

          <div className="mt-0.5">
            <p className="text-sm mb-0.5 font-semibold text-[#4D4D4E]">
              Surname
            </p>

            <TextField
              className="w-full bg-white text-[#97999C] rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="Surname"
              size="small"
              name="surName"
              value={formData.surName}
              onChange={(e) => { handleInputChange('surName', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
          </div>


          <div className="mt-0.5">
            <p className="text-sm mb-0.5 font-semibold text-[#4D4D4E]">
              Date of Birth
            </p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{ textField: { size: "small" } }}
                className="px-2 bg-white text-[#97999C] text-xs shadow-2xl rounded-md p-[12px] w-full"
                label="Date of Birth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={(value) => { handleInputChange('dateOfBirth', value['$d']); }}
                sx={{
                  "& fieldset": { border: "none" },
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="mt-0.5">
            <p className="text-sm mb-0.5 font-semibold text-[#4D4D4E]">
              Gender
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Gender' /> */}
            <FormControl
              className="w-full bg-white text-[#97999C] rounded-md shadow-2xl"
              size="small"
            >
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                label="gender"
                name="gender"
                value={gender} // Use gender state here
                onChange={(e) => setGender(e.target.value)}
                //onChange={(e) => { handleInputChange('gender', e.target.value); }}
                sx={{
                  "& fieldset": { border: "none" },
                }}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mt-0.5">
            <p className="text-sm mb-0.5 font-semibold text-[#4D4D4E]">
              Residential Address
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Residential Address' /> */}
            <TextField
              className="w-full bg-white text-[#97999C] rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="Residential Address"
              size="small"
              name="ResidentialAddress"
              value={formData.ResidentialAddress}
              onChange={(e) => { handleInputChange('address', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
            />
          </div>
          <div className="mt-0.5">
            <p className="text-sm mb-0.5 font-semibold text-[#4D4D4E]">
              Religion
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Religion' /> */}
            <TextField
              className="w-full bg-white text-[#97999C] rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="Religion"
              size="small"
              name="religion"
              value={formData.religion}
              onChange={(e) => { handleInputChange('religion', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
            />
          </div>
          <div className="mt-0.5">
            <p className="text-sm mb-0.5 font-semibold text-[#4D4D4E]">
              State of Origin
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='State of Origin' /> */}
            <TextField
              className="w-full bg-white text-[#97999C] rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="State of Origin"
              size="small"
              name="stateOfOrigin"
              value={formData.stateOfOrigin}
              onChange={(e) => { handleInputChange('stateOfOrigin', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
            />
          </div>
          <div className="mt-0.5">
            <p className="text-sm mb-0.5 font-semibold text-[#4D4D4E]">
              Nationality
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Nationality' /> */}
            <TextField
              className="w-full bg-white text-[#97999C] rounded-md p-[12px] placeholder:text-base shadow-2xl"
              placeholder="Nationality"
              size="small"
              name="nationality"
              value={formData.nationality}
              onChange={(e) => { handleInputChange('nationality', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
            />
          </div>
          <div className="">
            <p>upload recent passport photograph</p>
            <input type="file" />
          </div>

          <div className="flex flex-row-reverse">
            <button onClick={() => { handleContinue(); }} className="border hover:bg-white hover:text-[#3D5EE1] bg-[#3D5EE1] text-white rounded-md h-10 w-36 cursor-pointer my-2 lgss:">
              Continue
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ApplicantReg;
