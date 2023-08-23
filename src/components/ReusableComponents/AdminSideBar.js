import React, { useContext, useState, useEffect } from "react";
// ICON IMPORT
import ProfileImg from "../../assets/img/adminIcon.svg";
import { ReactComponent as DashboardIcon } from "../../assets/img/icons/dashboardIcon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/img/icons/logoutIcon.svg";
import { ReactComponent as EmployeeIcon } from "../../assets/img/icons/EmpIcon.svg";
import { ReactComponent as LeaveIcon } from "../../assets/img/icons/leaveIcon.svg";
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
          // background: "var(--plain-white)",

          padding: "0px 20px 0px 20px",
          height: "100%",
          color: "var(--white-color)",
          // borderRight: "2px solid #f3f4f6",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop:"20px",
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
              sx={{ fontWeight: "bold", color: "var(--secondary-text-color)" }}
            >
              {capitalizeFirstLetter(adminName)}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "var(--secondary-text-color)" }}
            >
              {adminPosition}
            </Typography>
          </Box>
        </Box>
        <hr />
        <Box mt={2}>
          <Button
            className="Icon-Color"
            sx={{
              marginTop: "10px",
              color: isDashboard
                ? "var(--primary-color)"
                : "var(--secondary-text-color)",
              fontWeight: isDashboard ? "bold" : "",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              // padding: "10px 30px",
              padding: "0px 30px",
              background: isDashboard ? "var(--primary-highlight-color)" : "",
              "&:hover": {
                background: "var(--primary-highlight-color)",
                color: "var(--primary-color)",
                fontWeight: "bold",
              },
            }}
            component={Link}
            to="/dashboard"
          >
            <Box
              sx={{
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <DashboardIcon width="18px" />
            </Box>
            Dashboard
          </Button>
          <Button
            className="Icon-Color"
            sx={{
              marginTop: "10px",
              color: isEmpManagement
                ? "var(--primary-color)"
                : "var(--secondary-text-color)",
              fontWeight: isEmpManagement ? "bold" : "",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              // padding: "10px 30px",
              padding: "0px 30px",
              background: isEmpManagement
                ? "var(--primary-highlight-color)"
                : "",
              "&:hover": {
                background: "var(--primary-highlight-color)",
                color: "var(--primary-color)",
                fontWeight: "bold",
              },
            }}
            component={Link}
            to="/empmanagement"
          >
            <Box
              sx={{
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <EmployeeIcon width="18px" />
            </Box>
            Employee Management
          </Button>

          <Button
            className="Icon-Color"
            sx={{
              marginTop: "10px",
              color: isLeaveManagement
                ? "var(--primary-color)"
                : "var(--secondary-text-color)",
              fontWeight: isLeaveManagement ? "bold" : "",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              // padding: "10px 30px",
              padding: "0px 30px",
              background: isLeaveManagement
                ? "var(--primary-highlight-color)"
                : "",
              "&:hover": {
                background: "var(--primary-highlight-color)",
                color: "var(--primary-color)",
                fontWeight: "bold",
              },
            }}
            component={Link}
            to="/leavemanagement"
          >
            <Box
              sx={{
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LeaveIcon width="18px" />
            </Box>
            Leave Management
          </Button>

          <Button
            className="Icon-Color"
            sx={{
              marginTop: "10px",
              color: isAttendanceManagementActive
                ? "var(--primary-color)"
                : "var(--secondary-text-color)",
              fontWeight: isAttendanceManagementActive ? "bold" : "",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              // padding: "10px 30px",
              padding: "0px 30px",
              background: isAttendanceManagementActive
                ? "var(--primary-highlight-color)"
                : "",
              "&:hover": {
                background: "var(--primary-highlight-color)",
                color: "var(--primary-color)",
                fontWeight: "bold",
              },
            }}
            component={Link}
            to="/attendancemanagement"
          >
            <Box
              sx={{
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AttendanceIcon width="18px" />
            </Box>
            Attendance Management
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default AdminSideBar;
