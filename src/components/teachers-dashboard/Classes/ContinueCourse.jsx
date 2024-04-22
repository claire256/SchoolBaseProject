import "../../../styles/teacherdashboard/ContinueCourse.css"

const ContinueCourse = () =>{
   return(
       <div>
           <div className="wrap-div">
               <div className="para-display">
               <p>Mathematics</p>
               <p>70% done</p>
               </div>
               <div className="progress-bar">
                   <div className="blue-bar"></div>
                   </div>
               <p className="click">Click here to continue</p>
           </div>
       </div>
   )
}
export default ContinueCourse;