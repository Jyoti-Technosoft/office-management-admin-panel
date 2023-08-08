import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

const CustomContext = (props) => {
  const [admin, setAdmin] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // Admin API
        const { data: adminData } = await axios.get('http://localhost:8001/adminData');
        setAdmin(adminData);

        // Employee API
        const { data: employeeData } = await axios.get('http://localhost:8000/employeeData');
        setEmployeeData(employeeData);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ admin, setAdmin, employeeData, setEmployeeData, showNextButton, setShowNextButton, }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default CustomContext;
