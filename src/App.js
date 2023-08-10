import React from "react";
import "./App.css";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./components/AdminLogin/Protected";
import AdminSignup from "./components/AdminSignup/AdminSignup";
import ViewProfile from "./components/ViewProfile/ViewProfile";
import EmpManagement from "./components/EmployeeManagement/EmpManagement";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/signup" element={<AdminSignup />} />
          <Route path="/dashboard" element={<Protected Comp={AdminDashboard} />} />
          {/* <Route path="/viewprofile" element={<Protected Comp={ViewProfile} />} /> */}
          <Route path="/viewprofile/:employeeId" element={<Protected Comp={ViewProfile}/>}/>
          <Route path= "/empmanagement" element={<Protected Comp = {EmpManagement}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
