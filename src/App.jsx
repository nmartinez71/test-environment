import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CourseApp from "./pages/CourseApp";
import CourseList from '/src/pages/CourseList';
import CourseEdit from '/src/pages/CourseEdit';
import API from '/src/pages/API';
import Login from '/src/pages/Login';
import RegistrationForm  from "/src/components/Register";  // Import RegistrationForm
import NavBar from "./components/NavBar"
import Home from './pages/Home';


export default function App() {
  return (     
    <BrowserRouter>
      <NavBar />
      <div className="container mt-5 pt-5">
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<Login />} />
        <Route path="/course" element={<CourseApp />} />
        <Route path="/api" element={<API />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/courseedit/:courseId" element={<CourseEdit />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      </div>
    </BrowserRouter>
  );
}
