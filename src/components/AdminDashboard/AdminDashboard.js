import React, { useEffect, useState } from "react";
import axios from "axios";
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
  List,
  ListItem,
  ListItemText,
  // Container,
  Grid,
  Dialog,
  DialogContent,
  DialogActions,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import {
  InputLable,
  InputField,
  InputFieldProps,
} from "../CustomDesignMUI/CustomMUI";
import "./AdminDashboard.scss";
import AdminSideBar from '../../components/ReusableComponents/AdminSideBar';
import SearchBar from '../ReusableComponents/SearchBar';
import ContactDetails from "../AddEmployee/ContactDetails/ContactDetails";
import PersonalDetails from "../AddEmployee/PersonalDetails/PersonalDetails";
import EducationDetails from "../AddEmployee/EducationDetails/EducationDetails";
import FamilyDetails from "../AddEmployee/FamilyDetails/FamilyDetails";
import FinancialDetails from "../AddEmployee/FinancialDetails/FinancialDetails";
import ExperienceDetails from "../AddEmployee/ExperienceDetails/ExperienceDetails";
import Leaves from "../AddEmployee/Leaves/Leaves";
import JobDetail from "../AddEmployee/JobDetails/JobDetails";

// IMPORT ICON 
import EmployeeIcon from '../../assets/img/icons/EmpIcon.svg';
import LeaveIcon from '../../assets/img/icons/leaveIcon.svg';
import AttendanceIcon from '../../assets/img/icons/attendanceIcon.svg';

const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);
  // const [totalEmployees, setTotalEmployees] = useState(0);
  const [openModal, setOpenModal] = useState(false); // State to handle modal open/close
  const [currentForm, setCurrentForm] = useState("personalDetail"); // New state variable to keep track of the currently visible form


  const handleLogOut = () => {
    localStorage.setItem("loggedIn", "false");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/employeeData");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const handleOpenModal = () => {
    // Function to handle opening of the modal
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    // Function to handle closing of the modal
    setOpenModal(false);
    setCurrentForm("personalDetail"); // Reset the currentForm state when the modal is closed
  };

  // Function to switch to the next form
  const switchToNextForm = () => {
    if (currentForm === "personalDetail") {
      setCurrentForm("contactDetail");
    } else if (currentForm === "contactDetail") {
      setCurrentForm("educationDetail");
    } else if (currentForm === "educationDetail") {
      setCurrentForm("familyDetail");
    } else if (currentForm === "familyDetail") {
      setCurrentForm("financialDetail");
    } else if (currentForm === "financialDetail") {
      setCurrentForm("experienceDetail");
    } else if (currentForm === "experienceDetail") {
      setCurrentForm("leaveDetail");
    } else if (currentForm === "leaveDetail") {
      setCurrentForm("jobDetail");
    }
  };

  // Function to switch to the previous form
  const switchToPreviousForm = () => {
    if (currentForm === "jobDetail") {
      setCurrentForm("leaveDetail");
    } else if (currentForm === "leaveDetail") {
      setCurrentForm("experienceDetail");
    } else if (currentForm === "experienceDetail") {
      setCurrentForm("financialDetail");
    } else if (currentForm === "financialDetail") {
      setCurrentForm("familyDetail");
    } else if (currentForm === "familyDetail") {
      setCurrentForm("educationDetail");
    } else if (currentForm === "educationDetail") {
      setCurrentForm("contactDetail");
    } else if (currentForm === "contactDetail") {
      setCurrentForm("personalDetail");
    }
  };


  return (
    <Box
      sx={{
        height: '100vh',
      }}
    >
      {/* {/ {/ <Container> /} /} */}
      <Grid container>
        {/* {/ {/ Left admin dashboard /} /} */}
        <AdminSideBar />

        <Grid item xs={12} md={9.4}>
          {/* {/ {/ SEARCH BAR  /} /} */}
          <SearchBar />

          <Box
            sx={{
              margin: '30px',
            }}
          >
            <Typography variant="h5"
              sx={{
                fontWeight: 'bold',
                marginTop: '50px',
              }}
            >Dashboard</Typography>

            {/* {/ {/ CARDS  /} /} */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              {/* {/ {/ FIRST BOX /} /} */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'var(--secondary-color)',
                  borderRadius: '8px',
                  padding: '5px 20px',
                  width: '180px',
                  color: 'var(--white-color)',
                }}
              >
                <Box>
                  <img width={'35px'} src={EmployeeIcon} alt='Employee Icon' />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '25px', marginBottom: '-10px' }}>
                    {userData.length}
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Employee
                  </Typography>
                </Box>
              </Box>

              {/* {/ {/ SECOND BOX /} /} */}
              <Box
                sx={{
                  marginLeft: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'var(--primary-color)',
                  borderRadius: '8px',
                  padding: '5px 20px',
                  width: '180px',
                  color: 'var(--white-color)',
                }}
              >
                <Box>
                  <img width={'35px'} src={LeaveIcon} alt='Employee Icon' />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '25px', marginBottom: '-10px' }}>
                    02
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Leave
                  </Typography>
                </Box>
              </Box>

              {/* {/ {/ THIRD BOX /} /} */}
              <Box
                sx={{
                  marginLeft: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'var(--primary-color)',
                  borderRadius: '8px',
                  padding: '5px 20px',
                  width: '180px',
                  color: 'var(--white-color)',
                }}
              >
                <Box>
                  <img width={'35px'} src={AttendanceIcon} alt='Employee Icon' />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '25px', marginBottom: '-10px' }}>
                    198
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Attandance
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* {/ {/ CARDS END  /} /} */}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '40px',
              }}
            >
              <Box>
                <Typography variant="h6"
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Employee
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    background: 'var(--secondary-color)',
                    color: 'var(--white-color)',
                    fontWeight: 'bold',
                  }}
                  onClick={handleOpenModal} // Open the modal when button is clicked
                >
                  + add
                </Button>
              </Box>
            </Box>

            {/* {/ Modal /} */}
            <Dialog
              className="custom-modal-content"
              fullScreen
              open={openModal}
              onClose={handleCloseModal}
            >
              <DialogContent>
                {/* {/ Render the forms based on the currentForm state /} */}
                {currentForm === "personalDetail" && <PersonalDetails />}
                {currentForm === "contactDetail" && <ContactDetails />}
                {currentForm === "educationDetail" && <EducationDetails />}
                {currentForm === "familyDetail" && <FamilyDetails />}
                {currentForm === "financialDetail" && <FinancialDetails />}
                {currentForm === "experienceDetail" && <ExperienceDetails />}
                {currentForm === "leaveDetail" && <Leaves />}
                {currentForm === "jobDetail" && <JobDetail />}

                <DialogActions>
                  {/* {/ Back button /} */}
                  {currentForm !== "personalDetail" && (
                    <Button
                      type="button"
                      onClick={switchToPreviousForm}
                      color="success"
                      sx={{ textTransform: "capitalize" }}
                      variant="contained"
                    >
                      Back
                    </Button>
                  )}

                  {/* {/ Next button /} */}
                  {currentForm !== "jobDetail" && (
                    <Button
                      type="button"
                      variant="contained"
                      color="warning"
                      size="medium"
                      onClick={switchToNextForm}
                      sx={{ textTransform: "capitalize" }}
                    >
                      Next
                    </Button>
                  )}

                  {/* {/ Close button /} */}
                  <Button
                    onClick={handleCloseModal}
                    color="error"
                    variant="contained"
                    sx={{ textTransform: "capitalize" }}
                  >
                    Close
                  </Button>
                </DialogActions>
              </DialogContent>
            </Dialog>

            {/* {/ {/ Add scroll to the table /} /} */}
            <Box
              sx={{
                // height: "500px",
                marginTop: '15px',
                maxHeight: 'calc(100vh - 370px)',
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
                    {userData.map((user, index) => (
                      <TableRow
                        key={index}
                        sx={{ backgroundColor: index % 2 === 1 ? 'var(--pirmary-light-color)' : '' }} // Apply alternating colors
                      >
                        <TableCell>{'JT' + " " + (index + 101)}</TableCell>
                        <TableCell>{`${user.firstname} ${user.lastname}`}</TableCell>
                        <TableCell>{user.dob}</TableCell>
                        <TableCell>{user.doj}</TableCell>
                        <TableCell>{user.designation}</TableCell>
                        <TableCell>
                          <Button
                            component={Link}
                            to="/register"
                            variant="outlined"
                            color="primary"
                            onClick={() => user.id}
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

export default AdminDashboard;




