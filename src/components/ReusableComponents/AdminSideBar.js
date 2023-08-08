import React, { useState } from "react";
// ICON IMPORT
import ProfileImg from "../../assets/img/profile.svg";
import DashboardIcon from "../../assets/img/icons/DashboardIcon.png";
import EmployeeIcon from "../../assets/img/icons/employeeIcon.png";
import LeaveIcon from "../../assets/img/icons/leaveicon.png";
import AttendanceIcon from "../../assets/img/icons/attendanceIcon.png";
import LogoutIcon from "../../assets/img/icons/LogoutIcon.png";
import {
  Box,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  const [openDialog, setOpenDialog] = useState(false); 

  const handleLogOut = () => {
    setOpenDialog(true); // Open the dialog on logout button click
  };

  // Function to handle logout confirmation
  const handleLogoutConfirmation = () => {
    localStorage.setItem("loggedIn", "false");
    setOpenDialog(false); 
  };

  // Function to handle canceling logout
  const handleCancelLogout = () => {
    setOpenDialog(false); 
  };

  // Retrieve admin name and position from local storage
  const adminName = localStorage.getItem("adminName");
  const adminPosition = localStorage.getItem("adminPosition");

  const capitalizedAdminName =
    adminName.charAt(0).toUpperCase() + adminName.slice(1).toLowerCase();

  return (
    <Grid item xs={12} md={2.5}>
      <Box
        sx={{
          position: "relative",
          background: "var(--primary-color)",
          padding: "20px",
          height: "100vh",
          color: "var(--white-color)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <img width={"90px"} src={ProfileImg} alt="profile" />
          </Box>
          <Box
            sx={{
              paddingLeft: "10px",
            }}
          >
            <Typography
              variant="subtitle"
              sx={{
                fontWeight: "bold",
              }}
            >
              {capitalizedAdminName}
            </Typography>
            <Typography variant="subtitle2">{adminPosition}</Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle2">Features</Typography>

          <Button
            sx={{
              marginTop: "10px",
              background: "var(--secondary-color)",
              color: "var(--white-color)",
              fontWeight: "bold",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px 30px",
              "&:hover": {
                background: "darkgreen",
                color: "white",
              },
            }}
            component={Link}
            to="/dashboard"
          >
            <Box
              sx={{
                marginRight: "15px",
              }}
            >
              <img width="25px" src={DashboardIcon} alt="Dashboard Icon" />
            </Box>
            Dashboard
          </Button>
        </Box>
        <Box mt={5}>
          <Typography variant="subtitle2">Organization</Typography>
          <Button
            sx={{
              marginTop: "10px",
              color: "var(--white-color)",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px 30px",
              "&:hover": {
                background: "var(--secondary-color)",
                color: "white",
              },
            }}
            component={Link}
            to="/empmanagement"
          >
            <Box
              sx={{
                marginRight: "15px",
              }}
            >
              <img width="18px" src={EmployeeIcon} alt="Employee Icon" />
            </Box>
            Employee Management
          </Button>

          <Button
            sx={{
              marginTop: "10px",
              color: "var(--white-color)",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px 30px",
              "&:hover": {
                background: "var(--secondary-color)",
                color: "white",
              },
            }}
            component={Link}
            to="/leave"
          >
            <Box
              sx={{
                marginRight: "15px",
              }}
            >
              <img width="18px" src={LeaveIcon} alt="Leave Icon" />
            </Box>
            Leave Management
          </Button>

          <Button
            sx={{
              marginTop: "10px",
              color: "var(--white-color)",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px 30px",
              "&:hover": {
                background: "var(--secondary-color)",
                color: "white",
              },
            }}
            component={Link}
            to="/attendance"
          >
            <Box
              sx={{
                marginRight: "15px",
              }}
            >
              <img width="18px" src={AttendanceIcon} alt="Attandance Icon" />
            </Box>
            Attendance Management
          </Button>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "40px",
            left: "0",
            right: "0",
            padding: "0px 30px",
          }}
        >
          <Button
            sx={{
              background: "var(--secondary-color)",
              color: "var(--white-color)",
              textTransform: "capitalize",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              "&:hover": {
                background: "darkgreen",
                color: "var(--white-color)",
              },
            }}
            onClick={handleLogOut}
          >
            <Box
              sx={{
                marginRight: "10px",
              }}
            >
              <img width="18px" src={LogoutIcon} alt="Logout Icon" />
            </Box>
            Logout
          </Button>
        </Box>

       <Dialog open={openDialog} onClose={handleCancelLogout} maxWidth="md">
          <DialogTitle>Confirm Logout</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to log out?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelLogout} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleLogoutConfirmation}
              color="error"
              component={Link}
              to="/"
            >
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  );
};

export default AdminSideBar;
