import {STUDENTLOGIN, STUDENTLOGIN_ERRORS, STUDENTSIGNUP, STUDENTSIGNUP_ERRORS} from '../Type';

export const StudentInitialState ={
    signup: null,
    studentsignup_errors: null,
    studentlogin_err: null
}

const StudentReducer = (state, action)=>{
switch(action.type){
    case STUDENTSIGNUP: 
    return({...state, signup: action.payload, studentsignup_errors: null})

    case STUDENTSIGNUP_ERRORS:
        return({...state, signup: null, studentsignup_errors: action.payload})

    default:
        return state
}

}
export default StudentReducer;
