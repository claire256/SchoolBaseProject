import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { ApplicantImg } from "../../../assets";
import { Link } from "react-router-dom";
import EmailVerification from '../EmailVerification';
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LoadingSpinner from './../../../components/Spinner/Spinner';


const ApplicantAcademiaInfo = () => {
  const [formData, setFormData] = useState({
    email: '',
    passport: null, // For file upload
    role: 'newApplicant',
    firstName: '',
    surName: '',
    middleName: '',
    gender: '',
    password: '',
    address: '',
    phoneNumber: '',
    dateOfBirth: '',
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
    additionalDocuments: null,
    signature: null,
    recommendationLetter: null,

  });

  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');
  const [emailVerificationModalOpen, setEmailVerificationModalOpen] = useState(false); // State for modal visibility
  const [backendResponse, setBackendResponse] = useState(null); // State to store backend response

  useEffect(() => {
    const storedData = localStorage.getItem('schoolbaseapplicantdata');
    if (storedData) {
      setFormData(JSON.parse(storedData));
      console.log(JSON.parse(storedData));
    }
  }, []);

  const handleInputChange = (key, value) => {
    let arr = value.split(',')
    let data = { ...formData };
    data[key] = arr;
    setFormData(data);
  };


  //function to handle submit
  const handleSubmit = async (e) => {
    localStorage.setItem('schoolbaseapplicantdata', JSON.stringify(formData));
    setLoading(true);
    try {
      // Submit form data to backend
      const response = await axios.post('https://tech4dev-project.onrender.com/students/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Response from backend:', response.data);
      // Store backend response in state

      setBackendResponse(response.data);
      // Show email verification modal on successful form submission

      setEmailVerificationModalOpen(true);
      setLoading(false);

    } catch (error) {
      console.error('Error:', error);
      alert('Error signing up. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="font-manrope bg-blueBg">
      {/* EmailVerification modal will only show when modalOpen is true */}
      {emailVerificationModalOpen &&
        <EmailVerification isOpen={emailVerificationModalOpen} onClose={() => setEmailVerificationModalOpen(false)} />
      }

      <div className="text-center text-xl border-b-4 font-extrabold py-5">
        <h1 className="">ACADEMIA INFORMATION</h1>
      </div>
      <div className="flex w-4/5 m-auto">
        <div className="my-9">
          <img
            className="md:block hidden lg: w-full h-full mr-48 px-12"
            width={100}
            height={50}
            src={ApplicantImg}
            alt="Applicant's image"
          />
        </div>

        <div className="my-10 w-11/12">
          <div className="">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              List of extracurricular (e.g; clubs, sports)
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='First name' /> */}
            <TextField
              className="w-full text-xs bg-white rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="List of extracurricular (e.g; clubs, sports)"
              size="small"
              name="extracurricular"
              value={formData.extracurricular}
              onChange={(e) => { handleInputChange('extracurricular', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}
            //   required
            />
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              Briefly state about your Interests/ goals or reason for applying
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Middle name' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] shadow-2xl outline-none"
              placeholder="Briefly state about your Interests/ goals or reason for applying"
              size="small"
              name="interests"
              value={formData.interests}
              onChange={(e) => { handleInputChange('interests', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}

            //   required
            />
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              State your special skills/ talents
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Surname' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] shadow-2xl outline-none"
              placeholder="State your special skills/ talents"
              size="small"
              name="skills"
              value={formData.skills}
              onChange={(e) => { handleInputChange('skills', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}

            //   required
            />
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              Name of previous school attended
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Residential Address' /> */}
            <TextField
              className="w-full bg-white rounded p-[12px] shadow-2xl outline-none"
              placeholder="Name of previous school attended"
              size="small"
              name="previousSchools"
              value={formData.previousSchools}
              onChange={(e) => { handleInputChange('previousSchools', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}

            //   required
            />
          </div>

          {/* Error message display */}
          {error && <div className="text-red-500">{error}</div>}


          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              Upload additional document (e.g; supplementary materials)
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Religion' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] shadow-2xl outline-none"
              placeholder=""
              type="file"
              size="small"
              name="additionalDocuments"
              value={null}
              //value={formData.additionalDocuments}
              onChange={(e) => { handleInputChange('additionalDocuments', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}

            //   required
            />
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              Recommendation letter (e.g; teachers, mentors)
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='State of Origin' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] shadow-2xl outline-none"
              placeholder=""
              type="file"
              size="small"
              name="recommendationLetter"
              value={null}
              //value={formData.recommendationLetter}
              onChange={(e) => { handleInputChange('recommendationLetter', e.target.value); }}
              sx={{
                "& fieldset": { border: "none" },
              }}

            //   required
            />
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              Signature{" "}
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='State of Origin' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] shadow-2xl outline-none"
              placeholder=""
              type="file"
              size="small"
              name="signature"
              value={null}
              //value={formData.signature}
              onChange={(e) => { handleInputChange('signature', e.target.value); }}
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

          <div className="mt-2">
            <input className='mr-2' type="checkbox" onChange={(e) => { setEnabled(e.target.checked); }} />
            I confirm that the information given on this form is correct
          </div>
          <div className="flex justify-between">
            <Link to="/get-started/applicantcontact">
              <div className="">
                <button className="border hover:bg-[#3D5EE1] hover:text-white bg-[white] text-[#3D5EE1] rounded-md h-10 w-36 cursor-pointer my-2">
                  Back
                </button>
              </div>
            </Link>

            <div className="">
              <button onClick={() => { localStorage.setItem('schoolbaseapplicantdata', JSON.stringify(formData)); /*setEmailVerificationModalOpen(true);*/ handleSubmit(); }} style={{ backgroundColor: enabled ? '#1d4ed8' : 'lightgrey', color: enabled ? 'white' : 'darkgrey' }} className="flex items-center justify-center border hover:bg-blue-300 hover:text-[#3D5EE1] bg-[#3D5EE1] text-white rounded-md h-10 w-36 cursor-pointer my-2">
                {
                  !loading ?
                    'Submit'
                    : <LoadingSpinner
                      loading={loading}
                      size={"20px"}
                      borderColor={"white"}
                      borderTopColor={"transparent"}
                    />
                }
              </button>
            </div>
          </div>
        </div>

      </div >

      {/* Display backend response */}
      {
        backendResponse && (
          console.log('Backend Response:', backendResponse),
          <div className="mt-4">
            <h2>Backend Response:</h2>
            <pre>{JSON.stringify(backendResponse, null, 2)}</pre>
          </div>
        )
      }
    </div >
  );
};

export default ApplicantAcademiaInfo;
