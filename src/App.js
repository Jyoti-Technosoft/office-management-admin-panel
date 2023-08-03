import React from "react";
import "./App.css";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./components/AdminLogin/Protected";
import AdminSignup from "./components/AdminSignup/AdminSignup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path= "/" element={<AdminLogin/>}/>
        <Route path= "/signup" element={<AdminSignup/>}/>
        <Route path= "/dashboard" element={<Protected Comp = {AdminDashboard}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
