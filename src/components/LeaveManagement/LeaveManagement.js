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
import Leave from "../../assets/img/leave.png";


// IMPORT CONTEXT 
import { GlobalContext } from "../../ContextAPI/CustomContext";

const LeaveManagement = () => {
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
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '50px',marginBottom:"20px" }}>Leave Management</Typography>
            <Box
              sx={{
                backgroundColor: "#dfeaf7",
                margin: "auto",
                padding: "50px",
                height: "100vh",
                borderRadius: "10px",
              }}
            >
              <Box
                 sx={{
                    background: "white",
                    borderRadius: "10px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                  }}
              >
                  <img src={Leave} width={500} alt="leave" />
              </Box>
            </Box>
            {/*  Add scroll to the table  */}
            {/* <Box
              sx={{
                marginTop: '15px',
                maxHeight: 'calc(100vh - 220px)',
              }}
              overflow="auto"
            >
              <TableContainer component={Paper}>
                <Table>
                  <TableHead sx={{ background: 'var(--pirmary-light-color)' }}>
                    <TableRow sx={{ textDecoration: 'none' }}>
                      <TableCell>
                        <b>From</b>
                      </TableCell>
                      <TableCell>
                        <b>To</b>
                      </TableCell>
                      <TableCell>
                        <b>Time</b>
                      </TableCell>
                      <TableCell>
                        <b>Reason(s)</b>
                      </TableCell>
                      <TableCell>
                        <b>Type</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userData?.map((user, index) => (
                      <TableRow
                        key={index}
                        sx={{ backgroundColor: index % 2 === 1 ? 'var(--pirmary-light-color)' : '' }} // Apply alternating colors
                      >
                        <TableCell>28/04/2022</TableCell>
                        <TableCell>28/04/2022</TableCell>
                        <TableCell>Full day</TableCell>
                        <TableCell>Personal</TableCell>
                        <TableCell>Paid</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeaveManagement;




