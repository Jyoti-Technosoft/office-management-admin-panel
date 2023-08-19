import React, { useContext, useState, useEffect } from "react";
// ICON IMPORT
import ProfileImg from "../../assets/img/profile.svg";
import { ReactComponent as DashboardIcon } from "../../assets/img/icons/dashboardIcon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/img/icons/logoutIcon.svg";
import { ReactComponent as  EmployeeIcon } from "../../assets/img/icons/EmpIcon.svg";
import { ReactComponent as LeaveIcon }from "../../assets/img/icons/leaveIcon.svg";
import { ReactComponent as AttendanceIcon } from "../../assets/img/icons/attendanceIcon.svg";

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
  const isDashboard = location.pathname === "/dashboard";

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
            background: "var(--plain-white)",
            padding: "20px",
            height: "100%",
            color: "var(--white-color)",
            boxShadow: "-15px 0px 40px 0px rgba(0, 0, 0, 0.25)",
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
              <Typography variant="subtitle" sx={{ fontWeight: "bold",color:"var(--secondary-text-color)" }}>
                {capitalizeFirstLetter(adminName)}
              </Typography>
              <Typography variant="subtitle2" sx={{color:"var(--secondary-text-color)"}}>{adminPosition}</Typography>
            </Box>
          </Box>
          <hr/>
          <Box mt={2}>
            <Button
            className="Icon-Color"
              sx={{
                marginTop: "10px",
                color: isDashboard ? "var(--primary-color)" : "var(--secondary-text-color)",
                fontWeight: isDashboard ? "bold" : "",
                width: "100%",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px 30px",
                background: isDashboard ? "var(--primary-highlight-color)" : "",
                "&:hover": {
                  background: "var(--primary-highlight-color)",
                  color: "var(--primary-color)",
                  fontWeight:"bold",
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
                <DashboardIcon width='19px'/>
              </Box>
              Dashboard
            </Button>
            <Button
            className="Icon-Color"
              sx={{
                marginTop: "5px",
                color: isEmpManagement ? "var(--primary-color)" : "var(--secondary-text-color)",
                fontWeight: isEmpManagement ? "bold" : "",
                width: "100%",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px 30px",
                background: isEmpManagement ? "var(--primary-highlight-color)" : "",
                "&:hover": {
                  background: "var(--primary-highlight-color)",
                  color: "var(--primary-color)",
                  fontWeight:"bold",
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
                <EmployeeIcon width="18px" />
              </Box>
              Employee Management
            </Button>

            <Button
            className="Icon-Color"
              sx={{
                marginTop: "5px",
                color: isLeaveManagement ? "var(--primary-color)" : "var(--secondary-text-color)",
                fontWeight: isLeaveManagement ? "bold" : "",
                width: "100%",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px 30px",
                background: isLeaveManagement ? "var(--primary-highlight-color)" : "",
                "&:hover": {
                  background: "var(--primary-highlight-color)",
                  color: "var(--primary-color)",
                  fontWeight:"bold",
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
                <LeaveIcon width='18px'/>

              </Box>
              Leave Management
            </Button>

            <Button
            className="Icon-Color"
              sx={{
                marginTop: "5px",
                color: isAttendanceManagementActive ? "var(--primary-color)" : "var(--secondary-text-color)",
                fontWeight: isAttendanceManagementActive ? "bold" : "",
                width: "100%",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px 30px",
                background: isAttendanceManagementActive
                  ? "var(--primary-highlight-color)"
                  : "",
                "&:hover": {
                  background: "var(--primary-highlight-color)",
                  color: "var(--primary-color)",
                  fontWeight:"bold",
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
                <AttendanceIcon width="18px" />
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
                background: "var(--primary-color)",
                color: "var(--plain-white)",
                textTransform: "capitalize",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                width: "100%",
                borderRadius:"10px",
                "&:hover": {
                  background: "var(--secondary-color)",
                  color: "var(--plain-white)",
                },
              }}
              onClick={handleLogOut}
            >
              <Box
                sx={{
                  marginRight: "10px",
                }}
              >
                <LogoutIcon width="18px" />
              </Box>
              Logout
            </Button>
          </Box>

          <Dialog open={openDialog} onClose={handleCancelLogout} maxWidth="md">
            <Box
              sx={{
                backgroundColor: "var(--primary-background-color)",
                color: "var(--secondary-text-color)",
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
                    sx={{ fontWeight: "bold" }}
                  >
                    Confirm Logout
                  </DialogTitle>
                </Box>
                <Box>
                  <IconButton
                    onClick={handleCancelLogout}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      marginRight: "15px",
                      "&:hover": {
                        background: "var(--primary-highlight-color)",
                        color: "var(--primary-color)",
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
                    color: "var(--secondary-text-color)",
                    textTransform: "capitalize",
                    "&:hover": {
                      background: "var(--primary-highlight-color)",
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
