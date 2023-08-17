import React,{useState} from "react";
import "./App.css";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./components/AdminLogin/Protected";
import AdminSignup from "./components/AdminSignup/AdminSignup";
import ViewProfile from "./components/ViewProfile/ViewProfile";
import EmpManagement from "./components/EmployeeManagement/EmpManagement";
import LeaveManagement from "./components/LeaveManagement/LeaveManagement";
import AttendanceManagement from "./components/AttendanceManagement/AttendanceManagement";
import AddEmployee from './components/AddEmployee/AddEmployee'


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/signup" element={<AdminSignup />} />
          <Route path="/dashboard" element={<Protected Comp={AdminDashboard} />} />
          {/* <Route path="/viewprofile" element={<Protected Comp={ViewProfile} />} /> */}
          <Route path="/viewprofile/:employeeId" element={<Protected Comp={ViewProfile}/>}/>
          <Route path="/viewprofile/addemployee" element={<Protected Comp={AddEmployee}/>}/>
          <Route path= "/empmanagement" element={<Protected Comp = {EmpManagement}/>}/>
          <Route path= "/leavemanagement" element={<Protected Comp = {LeaveManagement}/>}/>
          <Route path= "/attendancemanagement" element={<Protected Comp = {AttendanceManagement}/>}/>
            {/* <Route
            path="/"
            element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<AdminSignup />} />
          <Route
            path="/dashboard"
            element={
              <Protected Comp={AdminDashboard} isLoggedIn={isLoggedIn} />
            }
          /> */}
          {/* <Route path="/viewprofile" element={<Protected Comp={ViewProfile} />} /> */}
          {/* <Route
            path="/viewprofile/:employeeId"
            element={<Protected Comp={ViewProfile} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/empmanagement"
            element={<Protected Comp={EmpManagement} isLoggedIn={isLoggedIn} />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
