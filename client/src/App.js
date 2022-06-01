import "./styles.css";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home'
import Login from './components/Login'
import Course from './components/courses/Course'
import Signup from './pages/signup'
import Payment from './pages/payment'
import Allcourses from './components/AllCourses'
import StudentDashboard from './pages/studentDashboard'
import InstructorDashboard from './pages/instructorDashboard'
import UploadCourse from './pages/uploadcourse'

const App = () => {
  return (
    <Routes>      
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route  path = '/course/:id' element = {<Course/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/allcourses' element={<Allcourses/>} />
        <Route path='/studentDashboard' element={<StudentDashboard/>} />
        <Route path='/instructorDashboard' element={<InstructorDashboard/>} />
        <Route path='/uploadcourse' element={<UploadCourse/>} />
   </Routes>
  );
}