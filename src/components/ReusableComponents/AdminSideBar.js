import React, { useContext, useState, useEffect } from "react";
// ICON IMPORT
import ProfileImg from "../../assets/img/profile.svg";
import DashboardIcon from "../../assets/img/icons/dashboardIcon.svg";
import LogoutIcon from "../../assets/img/icons/logoutIcon.svg";
import EmployeeIcon from "../../assets/img/icons/EmpIcon.svg";
import LeaveIcon from "../../assets/img/icons/leaveIcon.svg";
import AttendanceIcon from "../../assets/img/icons/attendanceIcon.svg";

import {
  Box,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../../ContextAPI/CustomContext";
import { Close } from "@mui/icons-material";

const AdminSideBar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const {
    setAdminName,
    setAdminPosition,
    adminName,
    adminPosition,
    setShowToast,
  } = useContext(GlobalContext);
  const location = useLocation();
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const isAttendanceManagementActive =
    location.pathname === "/attendancemanagement";
  const isLeaveManagement = location.pathname === "/leavemanagement";
  const isEmpManagement = location.pathname === "/empmanagement";

  useEffect(() => {
    const adminNameFromStorage = localStorage.getItem("adminName");
    const adminPositionFromStorage = localStorage.getItem("adminPosition");

    if (adminNameFromStorage && adminPositionFromStorage) {
      setAdminName(adminNameFromStorage);
      setAdminPosition(adminPositionFromStorage);
    }
  }, []);

  const handleLogOut = () => {
    setOpenDialog(true);
  };

  // Function to handle logout confirmation
  const handleLogoutConfirmation = () => {
    localStorage.removeItem("loggedIn");
    setShowToast({ show: true, msg: "Logout Successfully", type: "success" });
    setOpenDialog(false);
  };

  // Function to handle canceling logout
  const handleCancelLogout = () => {
    setOpenDialog(false);
  };

  return (
      <Grid item xs={12} md={2.5}>
        <Box
          sx={{
            position: "relative",
            background: "var(--primary-color)",
            padding: "20px",
            height: "100%",
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
              <Typography variant="subtitle" sx={{ fontWeight: "bold" }}>
                {capitalizeFirstLetter(adminName)}
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
                // border: "1px solid var(--white-color)",
                fontWeight: "bold",
                width: "100%",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px 30px",
                "&:hover": {
                  background: "var(--secondary-dark-color)",
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
                background: isEmpManagement ? "var(--secondary-color)" : "",

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
                background: isLeaveManagement ? "var(--secondary-color)" : "",

                "&:hover": {
                  background: "var(--secondary-color)",
                  color: "white",
                },
              }}
              component={Link}
              to="/leavemanagement"
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
                background: isAttendanceManagementActive
                  ? "var(--secondary-color)"
                  : "",

                "&:hover": {
                  background: "var(--secondary-color)",
                  color: "white",
                },
              }}
              component={Link}
              to="/attendancemanagement"
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
                  background: "var(--secondary-dark-color)",
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
            <Box
              sx={{
                backgroundColor: "var(--primary-color)",
                color: "var(--white-color)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <DialogTitle
                    sx={{ color: "var(--white-color)", fontWeight: "bold" }}
                  >
                    Confirm Logout
                  </DialogTitle>
                </Box>
                <Box>
                  <IconButton
                    onClick={handleCancelLogout}
                    sx={{
                      color: "var(--white-color)",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      marginRight: "15px",
                      "&:hover": {
                        background: "var(--secondary-color)",
                        color: "white",
                      },
                    }}
                  >
                    <Close />
                  </IconButton>
                </Box>
              </Box>
              {/* <DialogTitle
              sx={{ color: "var(--secondary-color)", fontWeight: "bold" }}
            >
              Confirm Logout
            </DialogTitle> */}
              <DialogContent>
                <Typography>Are you sure you want to log out?</Typography>
              </DialogContent>
              <DialogActions>
                {/* <Button onClick={handleCancelLogout} color="primary">
                Cancel
              </Button> */}
                <Button
                  onClick={handleLogoutConfirmation}
                  sx={{
                    fontWeight: "bold",
                    color: "var(--white-color)",
                    textTransform: "capitalize",
                    "&:hover": {
                      background: "var(--white-color)",
                      color: "var(--primary-color)",
                    },
                  }}
                  component={Link}
                  to="/"
                >
                  Log Out
                </Button>
              </DialogActions>
            </Box>
          </Dialog>
        </Box>
      </Grid>
  );
};

export default AdminSideBar;
