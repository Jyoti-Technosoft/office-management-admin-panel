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
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import EmployeeFormModal from "../../AddEmployee/EmployeeFormModal";


const Employee = () => {
    // Context Function
  const { employeeData, setUserData, userData } = useContext(GlobalContext);

  // const [userData, setUserData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setUserData(employeeData);
    console.log("Dashboard:- ", employeeData);
  }, [employeeData]);

  const handleAddEmployee = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

    return (
        <>
        <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "40px",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Employee
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    background: "var(--secondary-color)",
                    color: "var(--white-color)",
                    fontWeight: "bold",
                  }}
                  onClick={handleAddEmployee} // Open the modal when button is clicked
                >
                  + add
                </Button>
              </Box>
            </Box>
            <EmployeeFormModal open={isModalOpen} onClose={handleCloseModal} />

            {/* {/ {/ Add scroll to the table /} /} */}
            <Box
              sx={{
                // height: "500px",
                marginTop: "15px",
                maxHeight: "calc(100vh - 380px)",
              }}
              overflow="auto"
            >
              <TableContainer component={Paper}>
                <Table>
                  <TableHead sx={{ background: "var(--pirmary-light-color)" }}>
                    <TableRow sx={{ textDecoration: "none" }}>
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
                        sx={{
                          backgroundColor:
                            index % 2 === 1 ? "var(--pirmary-light-color)" : "",
                        }} // Apply alternating colors
                      >
                        <TableCell>{"JT" + " " + (index + 101)}</TableCell>
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
                            onClick={() => { console.log(user.id); return user.id}}
                          >
                            View Profile
                          </Button> */}

                          <Button
                            component={Link}
                            to={`/viewprofile/${user.id}`} // Pass the employee's ID as a parameter in the URL
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
        </>
    );
}
export default  Employee;