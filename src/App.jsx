import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import GetStarted from './pages/web-site/GetStarted';
import TeacherDashboard from './pages/web-app/teachers-dashboard/TeacherDashboard';
import ClassRecords from './components/teachers-dashboard/ClassRecords';
import Classes from './components/teachers-dashboard/Classes/Classes';
import Exams from './components/teachers-dashboard/Exams';
import Settings from './components/teachers-dashboard/Settings';
import QuizHistory from './components/teachers-dashboard/QuizHistory';
import ApplicantReg from './pages/web-site/applicant/ApplicantReg';
import ApplicantContact from './pages/web-site/applicant/ApplicantContact';
import ApplicantAcademiaInfo from './pages/web-site/applicant/ApplicantAcademiaInfo';
import SignInPage from './pages/web-site/teachersOnboading/SignInPage';
import SignUpPage from './pages/web-site/teachersOnboading/SignUpPage';
import HomePage from './pages/web-app/students-dashboard/HomePage';
import StudentsPage from './pages/web-app/students-dashboard/StudentsPage';
import ClassesPage from './pages/web-app/students-dashboard/ClassesPage';
import SubjectPage from "./pages/web-app/students-dashboard/SubjectPage";
import Quiz from "./pages/web-app/students-dashboard/Quiz";
import PaymentsPage from './pages/web-app/students-dashboard/PaymentsPage';
import SettingsPage from './pages/web-app/students-dashboard/Settings';
import LandingPage from './pages/web-site/landingpage/LandingPage';
import AssessmentPage from './pages/web-app/students-dashboard/AssessmentPage';
import PayFees from './pages/web-app/students-dashboard/PayFees';
import StudentsSignUp from './pages/web-site/studentsOnboarding/StudentsSignUpPage';
import StudentsSignin from './pages/web-site/studentsOnboarding/StudentsSigninPage';
import ClassRegister from './components/teachers-dashboard/Attendance/ClassRegister';
import ClassList from './components/teachers-dashboard/Attendance/ClassList';
import Timetable from './pages/web-app/students-dashboard/Calender';
import TimetableTeacher from './pages/web-app/teachers-dashboard/Calender';
import ResetPassword from './pages/web-site/applicant/ResetPassword';
import ResetPasswordVerification from './pages/web-site/applicant/ResetPasswordVerification';
import PasswordResetSuccessful from './pages/web-site/applicant/PasswordResetSuccessful';
import CreatePassword from './pages/web-site/applicant/CreatePassword';
import EmailVerification from './pages/web-site/EmailVerification';
import ConfirmEmail from './pages/web-site/ConfirmEmail';
import QuestionPage from './pages/web-app/teachers-dashboard/exams/QuestionPage';
import AddQuestions from './pages/web-app/teachers-dashboard/exams/AddQuestions';
import QuestionGeneral from './pages/web-app/teachers-dashboard/exams/QuestionsGeneral';
import MyClasses from './components/teachers-dashboard/Classes/MyClasses';
import AddSubject from './components/teachers-dashboard/Classes/AddSubject';
import UploadFile from './components/teachers-dashboard/Classes/UploadFile';
import SubjectContent from './components/teachers-dashboard/Classes/SubjectContent';
import ViewSyllabus from './components/teachers-dashboard/Classes/ViewSyllabus';
import ClassesForm from './components/teachers-dashboard/Classes/ClassesForm';
import TestResult from "./pages/web-app/students-dashboard/TestResult";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route
          path="/reset-password-email"
          element={<ResetPasswordVerification />}
        />
        <Route path="/new-password" element={<CreatePassword />} />
        <Route
          path="/reset-password-success"
          element={<PasswordResetSuccessful />}
        />
        <Route path="/get-started/teacher/signin" element={<SignInPage />} />
        <Route path="/get-started/teacher/signup" element={<SignUpPage />} />
        <Route
          path="/get-started/student/signup"
          element={<StudentsSignUp />}
        />
        <Route
          path="/get-started/student/signin"
          element={<StudentsSignin />}
        />
        <Route path="/student/dashboard" element={<HomePage />} />
        <Route path="/student/calender" element={<Timetable />} />
        <Route path="/student/student-life" element={<StudentsPage />} />
        <Route path="/student/classes" element={<ClassesPage />} />
        <Route path="/student/subject" element={<SubjectPage />} />
        <Route path="/student/quiz" element={<Quiz />} />
        <Route path="/student/quiz/result" element={<TestResult />} />
        <Route path="/student/payments" element={<PaymentsPage />} />
        <Route path="/student/payments/pay" element={<PayFees />} />
        <Route path="/student/assessment" element={<AssessmentPage />} />
        <Route path="/student/settings" element={<SettingsPage />} />
        <Route path="/teacher/verify-email" element={<EmailVerification />} />
        <Route path="/teacher/confirm-email" element={<ConfirmEmail />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/calender" element={<TimetableTeacher />} />
        <Route
          path="/teacher/dashboard/class-records"
          element={<ClassRecords />}
        />
        <Route path="/teacher/dashboard/classes" element={<Classes />} />
        <Route
          path="/teacher/dashboard/classes/myclasses"
          element={<MyClasses />}
        />
        <Route
          path="/teacher/dashboard/classes/myclasses/addsubject"
          element={<AddSubject />}
        />
        <Route
          path="/teacher/dashboard/classes/myclasses/addsubject/uploadfile"
          element={<UploadFile />}
        />
        <Route
          path="/teacher/dashboard/classes/myclasses/addsubject/uploadfile/subjectcontent"
          element={<SubjectContent />}
        />
        <Route
          path="/teacher/dashboard/classes/myclasses/addsubject/uploadfile/subjectcontent/viewsyllabus"
          element={<ViewSyllabus />}
        />
        <Route
          path="/teacher/dashboard/classes/myclasses/addsubject/uploadfile/subjectcontent/viewsyllabus/form"
          element={<ClassesForm />}
        />
        <Route
          path="/teacher/dashboard/attendance"
          element={<ClassRegister />}
        />
        <Route
          path="/teacher/dashboard/attendance/classlist"
          element={<ClassList />}
        />
        <Route path="/teacher/dashboard/exams" element={<Exams />} />
        <Route path="/teacher/dashboard/exams/add" element={<AddQuestions />} />
        <Route
          path="/teacher/dashboard/exams/add-question"
          element={<QuestionPage />}
        />
        <Route
          path="/teacher/dashboard/exams/complete-quiz"
          element={<QuestionGeneral />}
        />
        <Route path="/teacher/dashboard/settings" element={<Settings />} />
        <Route
          path="/teacher/dashboard/attendance"
          element={<ClassRegister />}
        />
        <Route
          path="/teacher/dashboard/attendance/classlist"
          element={<ClassList />}
        />
        <Route path="/teacher/dashboard/exams" element={<Exams />} />
        <Route path="/teacher/dashboard/settings" element={<Settings />} />
        <Route
          path="/teacher/dashboard/exams/history"
          element={<QuizHistory />}
        />
        <Route
          path="/get-started/applicant/signup"
          element={<ApplicantReg />}
        />
        <Route
          path="/get-started/applicantcontact"
          element={<ApplicantContact />}
        />
        <Route
          path="/get-started/applicantacademiainfo"
          element={<ApplicantAcademiaInfo />}
        />
      </Routes>
    </Router>
  );
}

export default App;
