// CustomContext.js
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const CustomContext = (props) => {
  const [admin, setAdmin] = useState([]);
  const [adminPosition, setAdminPosition] = useState("");
  const [adminName, setAdminName] = useState("");
  const [employeeData, setEmployeeData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [showNextButton, setShowNextButton] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );
  const [showToast, setShowToast] = useState({});
  const [themeChange, setThemeChange] = useState(false);

  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   localStorage.getItem("loggedIn") === "false"
  // );
  // console.log("Context", isLoggedIn)
  const [searchBarValue, setSearchBarValue] = useState('');

  // Define your API endpoints
  const adminApiEndpoint = "http://localhost:8001/adminData";
  const employeeApiEndpoint = "http://localhost:8000/employeeData";

  useEffect(() => {
    async function fetchData() {
      try {
        // Admin API
        const { data: adminData } = await axios.get(adminApiEndpoint);
        setAdmin(adminData);

        // Employee API
        const { data: employeeData } = await axios.get(employeeApiEndpoint);
        setEmployeeData(employeeData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  const login = () => {
    setIsLoggedIn(true);
    // localStorage.setItem("loggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() =>{
    const body = document.getElementById("root");
    if(themeChange){
      body.classList.add("dark-theme");
    }else{
      body.classList.remove("dark-theme");
    }
  })

  const getData = () => {
    axios.get(`${employeeApiEndpoint}`)
      .then(response => {
        setUserData(response.data);
        console.log("Dashboard New: ", userData);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getData();
  }, [employeeData])

  return (
    <GlobalContext.Provider
      value={{
        admin,
        setAdmin,
        employeeData,
        setEmployeeData,
        showNextButton,
        setShowNextButton,
        employeeApiEndpoint,
        adminApiEndpoint,
        userData,
        setUserData,
        setOpenDialog,
        openDialog,
        openDeleteDialog,
        setOpenDeleteDialog,
        adminName,
        setAdminName,
        adminPosition,
        setAdminPosition,
        isLoggedIn,
        login,
        logout,
        showToast,
        setShowToast,
        themeChange,
        setThemeChange,
        searchBarValue,
        setSearchBarValue
      }}
    >
      {props.children}
    </GlobalContext.Provider>
    
  );
};

export default CustomContext;
