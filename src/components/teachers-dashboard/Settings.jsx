import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { FaBars, FaTimes } from 'react-icons/fa';
import { nigerianWoman } from "../../assets";
import { closeVectorImage, Edit } from "../../assets";
import Dashboard from './Dashboard';


const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstNameEditableValue, setFirstNameEditableValue] = useState('');
  const [lastNameEditableValue, setLastNameEditableValue] = useState('');
  const [contactEmailEditableValue, setContactEmailEditableValue] = useState('');
  const [contactPhoneEditableValue, setContactPhoneEditableValue] = useState('');
  const [cityEditableValue, setCityEditableValue] = useState('');
  const [bioEditableValue, setBioEditableValue] = useState('');
  const [addressEditableValue, setAddressEditableValue] = useState('');
  const [namesEditable, setNamesEditable] = useState(false);
  const [contactEditable, setContactEditable] = useState(false);
  const [addressEditable, setAddressEditable] = useState(false);


  {/* function to cancle and delete values of invalid profile edit*/ }
  const cancelEdit = (fieldName) => {
    if (fieldName === 'firstName') {
      setFirstNameEditableValue('');
    } else if (fieldName === 'lastName') {
      setLastNameEditableValue('');
    } else if (fieldName === 'contactEmail') {
      setContactEmailEditableValue('');
    } else if (fieldName === 'contactPhone') {
      setContactPhoneEditableValue('');
    } else if (fieldName === 'address') {
      setAddressEditableValue('');
    } else if (fieldName === 'city && state') {
      setCityEditableValue('');
    } else if (fieldName === 'bio') {
      setBioEditableValue('');
    }

    setNamesEditable(false); // Revert to initial state
    setContactEditable(false); // Revert to initial state
    setAddressEditable(false); // Revert to initial state
  };

  const save = () => {
    setNamesEditable(false);
    setContactEditable(false);
    setAddressEditable(false);
  }

  return (
    <div className="flex h-full overflow-y-hidden border-black border">
      <Sidebar isOpen={isOpen} />

      <div className="lgss:w-4/5 w-full h-[100%] lgss:overflow-auto overflow-y-scroll pb-10">
        <Dashboard />
        <div className="mt-6 w-full flex flex-row items-start justify-center">
          <div className="w-[95%] mt-0 flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-start">
              <img className="h-14 w-14 rounded-full" src={nigerianWoman} alt="Nigeria Woman Image" />
              <div className="ml-2 flex flex-col justify-start items-start">
                <div className="text-sm font-bold">Doose Atumeyi</div>
                <div className="text-sm">General Teacher</div>
                <div className="text-sm mt-1">Lagos, Nigeria</div>
              </div>
            </div>

            <div>
              <div className='mt-6 text-sm font-bold'>Personal Information</div>

              {/* Names with Edit button */}
              <div className="mt-4 w-[800px] flex-row items-center justify-start py-2 px-4 rounded-lg" style={{ backgroundColor: '#EFF6FE', display: namesEditable ? 'none' : 'flex' }}>
                <div className="flex flex-col items-start justify-start w-[40%]">
                  <div className='text-sm'>First name</div>
                  <div className='text-sm font-bold'>Doose</div>
                </div>
                <div className="flex flex-col items-start justify-start w-[40%]">
                  <div className='text-sm'>Last name</div>
                  <div className='text-sm font-bold'>Atumeyi</div>
                </div>
                <div className="w-[85px] h-[35px] flex flex-row items-center justify-center rounded-lg text-white text-sm cursor-pointer" style={{ backgroundColor: '#007BFF' }} onClick={() => { setNamesEditable(true); }}>
                  Edit
                  <img className='ml-2' src={Edit} alt="edit image" />
                </div>
              </div>

              {/* Names with Input */}
              <div className="w-[800px] flex-col items-start justify-start" style={{ display: namesEditable ? 'flex' : 'none' }}>
                <div className="w-[60%] mt-2">
                  <label className="text-xs font-bold">First name</label>
                  <div className='flex flex-row items-center justify-start'>
                    <input type="text" className="mt-0.5 w-full border border-slate-500 text-sm p-1.5 rounded-lg" value={firstNameEditableValue} onChange={(e) => setFirstNameEditableValue(e.target.value)} />
                    <img className="ml-4 w-4 h-4 cursor-pointer" src={closeVectorImage} alt="Close Vector Image" onClick={() => cancelEdit('firstName')} />
                  </div>
                </div>

                <div className="w-[60%] mt-4 mb-4">
                  <label className="text-xs font-bold">Last name</label>
                  <div className='flex flex-row items-center justify-start'>
                    <input type="text" className="mt-0.5 w-full border border-slate-500 text-sm p-1.5 rounded-lg" value={lastNameEditableValue} onChange={(e) => setLastNameEditableValue(e.target.value)} />
                    <img className="ml-4 w-4 h-4 cursor-pointer" src={closeVectorImage} alt="Close Vector Image" onClick={() => cancelEdit('lastName')} />
                  </div>
                </div>
              </div>


              {/* Contact with Edit button */}
              < div className="mt-4 w-[800px] flex flex-row items-center justify-start py-2 px-4 rounded-lg" style={{ backgroundColor: '#EFF6FE', display: contactEditable ? 'none' : 'flex' }}>
                <div className="flex flex-col items-start justify-start w-[40%]">
                  <div className='text-sm'>Email address</div>
                  <div className='text-sm font-bold'>dooseatumeyi@gmail.com</div>
                </div>
                <div className="flex flex-col items-start justify-start w-[40%]">
                  <div className='text-sm'>Phone</div>
                  <div className='text-sm font-bold'>+234 8109675622</div>
                </div>
                <div className="w-[85px] h-[35px] flex flex-row items-center justify-center rounded-lg text-white text-sm cursor-pointer" style={{ backgroundColor: '#007BFF' }} onClick={() => { setContactEditable(true); }}>
                  Edit
                  <img className='ml-2' src={Edit} alt="edit image" />
                </div>
              </div>

              {/*Contact with Input */}
              <div className="w-[800px] flex flex-col items-start justify-start" style={{ display: contactEditable ? 'flex' : 'none' }}>
                <div className="w-[60%] mt-2">
                  <label className="text-xs font-bold">Email address</label>
                  <div className='flex flex-row items-center justify-start'>
                    <input type="email" className="mt-0.5 w-full border border-slate-500 text-sm p-1.5 rounded-lg" value={contactEmailEditableValue} onChange={(e) => setContactEmailEditableValue(e.target.value)} />
                    <img className="ml-4 w-4 h-4 cursor-pointer" src={closeVectorImage} alt="Close Vector Image" onClick={() => cancelEdit('contactEmail')} />
                  </div>
                </div>

                <div className="w-[60%] mt-4 mb-4">
                  <label className="text-xs font-bold">Phone</label>
                  <div className='flex flex-row items-center justify-start'>
                    <input type="phone" className="mt-0.5 w-full border border-slate-500 text-sm p-1.5 rounded-lg" value={contactPhoneEditableValue} onChange={(e) => setContactPhoneEditableValue(e.target.value)} />
                    <img className="ml-4 w-4 h-4 cursor-pointer" src={closeVectorImage} alt="Close Vector Image" onClick={() => cancelEdit('contactPhone')} />
                  </div>
                </div>
              </div>

              {/**Address with Edit button */}
              <div className='mt-8 text-sm font-bold'>Address</div>
              <div className="mt-4 w-[800px] flex flex-row items-center justify-start py-2 px-4 rounded-lg" style={{ backgroundColor: '#EFF6FE', display: addressEditable ? 'none' : 'flex' }}>
                <div className="flex flex-col items-start justify-start w-[40%]">
                  <div className='text-sm'>Country</div>
                  <div className='text-sm font-bold'>Nigeria</div>
                </div>
                <div className="flex flex-col items-start justify-start w-[40%]">
                  <div className='text-sm'>City/State</div>
                  <div className='text-sm font-bold'>Festac, Lagos</div>
                </div>
                <div className="w-[85px] h-[35px] flex flex-row items-center justify-center rounded-lg text-white text-sm cursor-pointer" style={{ backgroundColor: '#007BFF' }} onClick={() => { setAddressEditable(true); }}>
                  Edit
                  <img className='ml-2' src={Edit} alt="edit image" />
                </div>
              </div>

              {/**Address with Input */}
              <div className="w-[800px] flex flex-col items-start justify-start" style={{ display: addressEditable ? 'flex' : 'none' }}>
                <div className="w-[60%] mt-2">
                  <label className="text-xs font-bold">Country</label>
                  <div className='flex flex-row items-center justify-start'>
                    <input type="email" className="mt-0.5 w-full border border-slate-500 text-sm p-1.5 rounded-lg" value={addressEditableValue} onChange={(e) => setAddressEditableValue(e.target.value)} />
                    <img className="ml-4 w-4 h-4 cursor-pointer" src={closeVectorImage} alt="Close Vector Image" onClick={() => cancelEdit('address')} />
                  </div>
                </div>

                <div className="w-[60%] mt-4 mb-4">
                  <label className="text-xs font-bold">City/State</label>
                  <div className='flex flex-row items-center justify-start'>
                    <input type="phone" className="mt-0.5 w-full border border-slate-500 text-sm p-1.5 rounded-lg" value={cityEditableValue} onChange={(e) => setCityEditableValue(e.target.value)} />
                    <img className="ml-4 w-4 h-4 cursor-pointer" src={closeVectorImage} alt="Close Vector Image" onClick={() => cancelEdit('city && state')} />
                  </div>
                </div>
              </div>


              <div className='mt-8 text-sm font-bold'>Bio</div>
              <div className="mt-4 w-[800px] flex flex-row items-center justify-start py-2 px-4 rounded-lg" style={{ backgroundColor: '#EFF6FE' }}>
                <textarea className="w-[590px] h-[100px] border border-slate-400 rounded-lg text-sm p-2">
                </textarea>
                <div className="w-[85px] h-[35px] flex flex-row items-center justify-center rounded-lg text-white text-sm ml-6" style={{ backgroundColor: '#007BFF' }}>
                  Edit
                  <img className='ml-2' src={Edit} alt="edit image" />

                </div>

              </div>

              <div className="mt-20 flex flex-row items-center justify-between w-full">
                <div className="w-[170px] h-[40px] border flex flex-row items-center justify-center rounded-lg font-semibold text-sm cursor-pointer" style={{ borderColor: "#3D5EE1", color: "#3D5EE1" }} onClick={() => { save(); }}>Back</div>
                <div className="w-[170px] h-[40px] text-white flex flex-row items-center justify-center rounded-lg font-semibold text-sm cursor-pointer" style={{ backgroundColor: "#3D5EE1" }}>Save and Finish</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Settings;