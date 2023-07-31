import React from "react";
// ICON IMPORT 
import ProfileImg from "../../assets/img/profile.svg";
import DashboardIcon from '../../assets/img/icons/DashboardIcon.png';
import EmployeeIcon from '../../assets/img/icons/employeeIcon.png';
import LeaveIcon from '../../assets/img/icons/leaveicon.png';
import AttendanceIcon from '../../assets/img/icons/attendanceIcon.png';
import LogoutIcon from '../../assets/img/icons/LogoutIcon.png';
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  // LOGOUT ON CLICK OF LOGOUT BUTTON 
  const handleLogOut = () => {
    localStorage.setItem("loggedIn", "false"); 
  };
    return(
        <Grid item xs={12} md={2.5}>
        <Box
          sx={{
            position: 'relative',
            background: "var(--primary-color)",
            padding: '20px',
            height: '100vh',
            color: "var(--white-color)",
          }}
          >
          <Box
            sx={{
              display: "flex",
              alignItems: 'center',
            }}
          >
            <Box>
              <img width={'90px'} src={ProfileImg} />
            </Box>
            <Box
              sx={{
                paddingLeft: '10px',
              }}
            >
              <Typography
                variant="subtitle"
                sx={{
                  fontWeight: "bold",
                }}
              >
                HR Admin
              </Typography>
              <Typography variant="subtitle2">Admin</Typography>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle2">Features</Typography>

            <Button
              sx={{
                marginTop: '10px',
                background: 'var(--secondary-color)',
                color: 'var(--white-color)',
                fontWeight: 'bold',
                width: '100%',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '10px 30px',
                '&:hover': {
                  background: 'darkgreen',
                  color: 'white',
                },
              }}
              component={Link}
              to="/dashboard"
            >
              <Box sx={{
                marginRight: '15px'
              }}>
                <img width="25px" src={DashboardIcon} alt="Dashboard Icon" />
              </Box>
              Dashboard
            </Button>

          </Box>
          <Box mt={5}>
            <Typography variant="subtitle2">Organization</Typography>
            <Button
              sx={{
                marginTop: '10px',
                color: 'var(--white-color)',
                width: '100%',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '10px 30px',
                '&:hover': {
                  background: 'var(--secondary-color)',
                  color: 'white',
                },
              }}
              component={Link}
              to="/register"
            >
              <Box sx={{
                marginRight: '15px'
              }}>
                <img width="18px" src={EmployeeIcon} alt="Employee Icon" />
              </Box>
              Employee Management
            </Button>

            <Button
              sx={{
                marginTop: '10px',
                color: 'var(--white-color)',
                width: '100%',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '10px 30px',
                '&:hover': {
                  background: 'var(--secondary-color)',
                  color: 'white',
                },
              }}
              component={Link}
              to="/leave"
            >
              <Box sx={{
                marginRight: '15px'
              }}>
                <img width="18px" src={LeaveIcon} alt="Leave Icon" />
              </Box>
              Leave Management
            </Button>

            <Button
              sx={{
                marginTop: '10px',
                color: 'var(--white-color)',
                width: '100%',
                textTransform: 'capitalize',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '10px 30px',
                '&:hover': {
                  background: 'var(--secondary-color)',
                  color: 'white',
                },
              }}
              component={Link}
              to="/attendance"
            >
              <Box sx={{
                marginRight: '15px'
              }}>
                <img width="18px" src={AttendanceIcon} alt="Attandance Icon" />
              </Box>
              Attendance Management
            </Button>
          </Box>

          <Box
            sx={{
              position: 'absolute',
          bottom: '40px',
          left: '0',
          right: '0',
          padding: '0px 30px',
            }}
            >
            <Button
              sx={{
                background: 'var(--secondary-color)',
                color: 'var(--white-color)',
                textTransform: 'capitalize',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: 'darkgreen',
                  color: 'var(--white-color)',
                },
              }}
              onClick={handleLogOut}
              component={Link}
              to="/"
            >
              <Box sx={{
                marginRight: '10px'
              }}>
                <img width="18px" src={LogoutIcon} alt="Logout Icon" />
              </Box>
              Logout
            </Button>
            
          </Box>
        </Box>
      </Grid>
    );
};

export default AdminSideBar;