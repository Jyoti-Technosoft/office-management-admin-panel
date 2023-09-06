import React from "react";
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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AdminDetails from "./components/ReusableComponents/MenuItems/AdminDetails";



function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Jost, sans-serif',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/signup" element={<AdminSignup />} />
            <Route path="/dashboard" element={<Protected><AdminDashboard /></Protected>} />
            <Route path="/profile/:employee_id" element={<Protected><ViewProfile /></Protected>} />
            <Route path="/employee-management" element={<Protected><EmpManagement /></Protected>} />
            <Route path="/profile/employee" element={<Protected> <ViewProfile/></Protected>}/>
            <Route path="/leave-management" element={<Protected><LeaveManagement /></Protected>} />
            <Route path="/attendance-management" element={<Protected> <AttendanceManagement /></Protected>} />
            <Route path="/admin-profile" element={<Protected> <AdminDetails /></Protected>} />
          </Routes>
        </BrowserRouter>
      </div>
     </ThemeProvider>
  );
}

export default App;
