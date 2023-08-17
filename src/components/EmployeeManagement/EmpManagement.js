import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
// import "./AdminDashboard.scss";
import AdminSideBar from '../../components/ReusableComponents/AdminSideBar';
import SearchBar from '../ReusableComponents/SearchBar';

// IMPORT CONTEXT 
import { GlobalContext } from "../../ContextAPI/CustomContext";
import EmpTable from "../AdminDashboard/Tables/EmpTable";

const EmpManagement = () => {
  // Context Function 
  const { employeeData } = useContext(GlobalContext);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(employeeData);
    console.log("Dashboard: ", employeeData);

  }, [employeeData])

  return (
    <Box>
      {/*  <Container>  */}
      <Grid container sx={{ height: '100vh' }}>
        {/*  Left admin dashboard  */}
        <AdminSideBar />

        <Grid item xs={12} md={9.4}>
          {/*  SEARCH BAR   */}
          <SearchBar />

          <Box
            sx={{
              margin: '30px',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '50px', }}>Employee Management</Typography>


            {/*  Add scroll to the table  */}
            <Box
              sx={{
                marginTop: '15px',
                maxHeight: 'calc(100vh - 220px)',
              }}
              overflow="auto"
            >
            <EmpTable/>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmpManagement;




