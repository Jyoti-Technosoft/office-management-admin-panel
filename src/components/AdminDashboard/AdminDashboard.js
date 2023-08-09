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
import "./AdminDashboard.scss";
import AdminSideBar from '../../components/ReusableComponents/AdminSideBar';
import SearchBar from '../ReusableComponents/SearchBar';
import EmployeeFormModal from '../AddEmployee/EmployeeFormModal';

// IMPORT ICON 
import EmployeeIcon from '../../assets/img/icons/EmpIcon.svg';
import LeaveIcon from '../../assets/img/icons/leaveIcon.svg';
import AttendanceIcon from '../../assets/img/icons/attendanceIcon.svg';

// IMPORT CONTEXT 
import { GlobalContext } from "../../ContextAPI/CustomContext";

const AdminDashboard = () => {
  // Context Function 
  const {employeeData} = useContext(GlobalContext);

  const [userData, setUserData] = useState([]);
  // const [openModal, setOpenModal] = useState(false);
  // const [currentForm, setCurrentForm] = useState("personalDetail");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()=>{
    setUserData(employeeData);
    console.log('Dashboard:- ',employeeData);
  }, [employeeData])


  const handleAddEmployee = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          <SearchBar/>
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
                marginTop: '15px',
                maxHeight: 'calc(100vh - 380px)',
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
                        <TableCell>{`${user.firstname} ${user.lastname}`}</TableCell>
                        <TableCell>{user.dob}</TableCell>
                        <TableCell>{user.doj}</TableCell>
                        <TableCell>{user.designation}</TableCell>
                        <TableCell>
                          <Button
                            component={Link}
                            to="/viewprofile"   
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




