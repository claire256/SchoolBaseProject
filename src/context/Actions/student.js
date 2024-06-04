import axios from 'axios'
import {STUDENTLOGIN, STUDENTLOGIN_ERRORS, STUDENTSIGNUP, STUDENTSIGNUP_ERRORS} from '../Type';

export const AddStudent = (students)=> async(dispatch)=>{
    try{
        const url = import.meta.env.VITE_API_BASE_URL
        const formData = new FormData()
        for(const key of Object.keys(students)){
            // console.log('key value', key, students[key])
             formData.append(key, students[key])
        }           
        const response = await axios.post(`${url}/user/signup`, formData)
        console.log('res', formData)
        dispatch({type: STUDENTSIGNUP, payload: response.data})
    }
    catch(err){
        console.log('err', err)
       dispatch({type: STUDENTSIGNUP_ERRORS, payload: err})
    }
}