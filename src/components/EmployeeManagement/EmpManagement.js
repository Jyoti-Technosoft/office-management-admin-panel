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
              <TableContainer component={Paper}>
                <Table>
                  <TableHead sx={{ background: 'var(--pirmary-light-color)' }}>
                    <TableRow sx={{ textDecoration: 'none' }}>
                      <TableCell>
                        <b>Emp ID</b>
                      </TableCell>
                      <TableCell>
                        <b>Name</b>
                      </TableCell>
                      <TableCell>
                        <b>Date of Birth</b>
                      </TableCell>
                      <TableCell>
                        <b>Date of Join</b>
                      </TableCell>
                      <TableCell>
                        <b>Designation</b>
                      </TableCell>
                      <TableCell>
                        <b>Action</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userData?.map((user, index) => (
                      <TableRow
                        key={index}
                        sx={{ backgroundColor: index % 2 === 1 ? 'var(--pirmary-light-color)' : '' }} // Apply alternating colors
                      >
                        <TableCell>{'JT' + " " + (index + 101)}</TableCell>
                        <TableCell>{`${user.personalFirstname} ${user.personalLastname}`}</TableCell>
                        <TableCell>{user.personalDob}</TableCell>
                        <TableCell>{user.jobDoj}</TableCell>
                        <TableCell>{user.jobDesignation}</TableCell>
                        <TableCell>
                          {/* <Button
                            component={Link}
                            to="/viewprofile"   
                            variant="outlined"
                            color="primary"
                            onClick={() => user.id}
                          >
                            View Profile
                          </Button> */}

                          <Button
                            component={Link}
                            to={`/viewprofile/${user.id}`}   // Pass the employee's ID as a parameter in the URL
                            variant="outlined"
                            color="primary"
                          >
                            View Profile
                          </Button>

                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmpManagement;




