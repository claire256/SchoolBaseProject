const validateStudent = (student)=>{
    let errors = {}
     
    if(!student.firstName){
       errors.firstName = "First name required"
    }
    if(!student.surName){
        errors.surName = "Last name required"
    }
    if(!student.middleName){
        errors.middleName = "Middle name required"
    }
    if(!student.class){
        errors.class = "Class required"
    }
    if(!student.phoneNumber){
         errors.phoneNumber = "phone number required"
     }
    if(!student.passport){
        errors.passport = "Passport photo required"
    }
    if(!student.email){
     errors.email= "Email required"
    
   }else if(/\s+@\s+\.\s+/.test(student.email)){
     errors.email= "Email is invalid"
    }
    if(!student.password){
     errors.password = "Password required"
    
    }else if(student.password.length< 5){
       errors.password = "Password must be more than 5 characters "
    }
    if(!student.confirmPassword){
     errors.confirmPassword = "Confirm Password required"
    
   }else if(student.confirmPassword !== student.password){
     errors.confirmPassword = "Passwords do not match"
    }
    // console.log(Object.keys(errors))
    // console.log(Object.values(errors))
    if(Object.keys(errors).length == 0){
        return null;
    }
    return errors;
 };
 
 export default validateStudent;