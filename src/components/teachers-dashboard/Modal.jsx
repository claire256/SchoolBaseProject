import { useState } from 'react';
import { closeVectorImage } from "../../assets";

export default function Modal({ page, visible, close, addClass, editClass, prevVal, prevSub, addSubject, editSubject, contentavailable }) {
    const [warning, setWarning] = useState('');
    const [subjectwarning, setSubjectWarning] = useState('');
    const [contentwarning, setContentWarning] = useState('');

    const classInputChecker = () => {
        if (page === 'class') {
            setWarning('');
            let input = document.getElementById('classinput');

            if (prevVal === '') {
                if (["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"].includes(input.value.toUpperCase())) {
                    addClass(input.value.toUpperCase());
                    input.value = '';
                    close();
                } else {
                    setWarning('Please input a valid class i.e. JSS1 - SS3')
                }
            } else {
                if (["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"].includes(input.value.toUpperCase())) {
                    editClass(input.value.toUpperCase());
                    input.value = '';
                    close();
                } else {
                    setWarning('Please input a valid class i.e. JSS1 - SS3')
                }
            }

        } else {

            setSubjectWarning(''); setContentWarning('');
            let subject = document.getElementById('subjectinput');
            let content = document.getElementById('contentinput');

            if (subject.value === '') {
                setSubjectWarning('This field must not be empty')
            }

            if (content.value === '') {
                setContentWarning('This field must not be empty')
            }

            if (prevSub === null) {
                if (subject.value !== '' && content.value !== '' && contentavailable) {
                    addSubject(subject.value, content.value);
                    subject.value = ''; content.value = '';
                    close();
                }

                if (subject.value !== '' && !contentavailable) {
                    addSubject(subject.value, '');
                    subject.value = ''; content.value = '';
                    close();
                }
            } else {
                if (subject.value !== '' && content.value !== '') {
                    editSubject(subject.value, content.value);
                    subject.value = ''; content.value = '';
                    close();
                }
            }
        }
    }

    return (
        <div className="absolute w-full h-full flex-row items-center justify-center" style={{ display: visible ? 'flex' : 'none', backgroundColor: 'rgba(20, 20, 20, 0.3)' }}>
            {
                page === 'class' &&
                <div className="bg-white w-[500px] h-[400px] flex flex-col items-center justify-start shadow-xl">
                    <div className="w-full flex flex-row items-center justify-between px-8 py-8">
                        <div className="w-[40%] border-0 border-b-4 pb-4 font-bold" style={{ borderColor: '#0066FF' }}>
                            {prevVal === '' ? 'Add a New Class' : 'Edit Class'}
                        </div>
                        <img className="w-3 h-3 cursor-pointer" src={closeVectorImage} alt="Close Vector Image" onClick={() => { close(); }} />
                    </div>
                    <div className="w-[85%] mt-2 px-8 flex flex-col items-start justify-start">
                        <label className="text-sm font-bold">Name of Class</label>
                        <input id="classinput" className="w-full bg-gray-200 mt-2 rounded-md py-2 px-2 text-sm" type="text" placeholder={prevVal === '' ? 'Type Class Name' : prevVal} />
                        <div className="text-xs w-full text-slate-400 mt-2 text-right">0/100</div>
                        <div className='text-red-700 text-xs mt-0.5'>{warning}</div>


                        <button className="mt-16 py-2 rounded-lg w-full bg-[#3D5EE1] text-white" onClick={() => { classInputChecker(); }}>
                            Proceed
                        </button>
                    </div>
                </div>
            }


            {
                page === 'subject' &&
                <div className="bg-white w-[500px] h-[450px] flex flex-col items-center justify-start shadow-xl">
                    <div className="w-full flex flex-row items-center justify-between px-8 py-8">
                        <div className="w-[40%] border-0 border-b-4 pb-4 font-bold" style={{ borderColor: '#0066FF' }}>
                            Add Subject
                        </div>
                        <img className="w-3 h-3 cursor-pointer" src={closeVectorImage} alt="Close Vector Image" onClick={() => { close(); }} />
                    </div>
                    <div className="w-[85%] mt-2 px-8 flex flex-col items-start justify-start">
                        <label className="text-sm font-bold">Name of Subject</label>
                        <input id="subjectinput" className="w-full bg-gray-200 mt-2 rounded-md py-2 px-2 text-sm" type="text" placeholder={prevSub === null ? 'Type Subject Name' : prevSub.name} />
                        <div className="text-xs w-full text-slate-400 mt-2 text-right">0/100</div>
                        <div className='text-red-700 text-xs mt-0.5'>{subjectwarning}</div>


                        <label style={{ display: contentavailable ? 'flex' : 'none' }} className="text-sm font-bold mt-4">Subject Content</label>
                        <input style={{ display: contentavailable ? 'flex' : 'none' }} id="contentinput" className="w-full bg-gray-200 mt-2 rounded-md py-2 px-2 text-sm" type="text" placeholder={prevSub === null ? 'Type Subject Content' : prevSub.content} />
                        <div style={{ display: contentavailable ? 'flex' : 'none' }} className="text-xs w-full text-slate-400 mt-2 text-right">0/100</div>
                        <div style={{ display: contentavailable ? 'flex' : 'none' }} className='text-red-700 text-xs mt-0.5'>{contentwarning}</div>


                        <button className="mt-10 py-2 rounded-lg w-full bg-[#3D5EE1] text-white" onClick={() => { classInputChecker(); }}>
                            Proceed
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}