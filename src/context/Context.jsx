import React, {createContext, useReducer} from 'react';
import StudentReducer, { StudentInitialState } from './Reducer/student';

export const AppContext = createContext({});

const AppContextProvider = ({children})=>{
    const[studentState, studentDispatch] = useReducer(StudentReducer, StudentInitialState)
   return(
       <AppContext.Provider value={{studentState, studentDispatch}}>
           {children}
       </AppContext.Provider>
   )
}
export default AppContextProvider;