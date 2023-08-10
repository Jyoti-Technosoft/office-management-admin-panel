import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

const CustomContext = (props) => {
  const [admin, setAdmin] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [showNextButton, setShowNextButton] = useState(false);


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

  return (
    <GlobalContext.Provider value={{ admin, setAdmin, employeeData, setEmployeeData, showNextButton, setShowNextButton, employeeApiEndpoint, adminApiEndpoint, userData, setUserData}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default CustomContext;