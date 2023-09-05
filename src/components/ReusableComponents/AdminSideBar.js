import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../../ContextAPI/CustomContext";
import { Box, Button, Grid, Typography } from "@mui/material";
// ICON IMPORT
import ProfileImg from "../../assets/img/adminIcon.svg";
import { ReactComponent as DashboardIcon } from "../../assets/img/icons/dashboardIcon.svg";
import { ReactComponent as EmployeeIcon } from "../../assets/img/icons/EmpIcon.svg";
import { ReactComponent as LeaveIcon } from "../../assets/img/icons/leaveIcon.svg";
import { ReactComponent as AttendanceIcon } from "../../assets/img/icons/attendanceIcon.svg";

const AdminSideBar = () => {
  const { setAdminFirstName, setAdminLastName, setAdminPosition, adminFirstName, adminLastName, adminPosition } =
    useContext(GlobalContext);
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
    const adminFirstNameFromStorage = localStorage.getItem("adminFirstName");
    const adminLastNameFromStorage = localStorage.getItem("adminLastName");
    const adminPositionFromStorage = localStorage.getItem("adminPosition");

    if (adminFirstNameFromStorage && adminLastNameFromStorage && adminPositionFromStorage) {
      setAdminFirstName(adminFirstNameFromStorage);
      setAdminLastName(adminLastNameFromStorage);
      setAdminPosition(adminPositionFromStorage);
    }
  }, []);

  return (
    <Grid item xs={12} md={2.5}>
      <Box
        sx={{
          position: "relative",
          background: "var(--background-table-sidebar-card-color)",
          padding: "0px 20px 0px 20px",
          height: "100%",
          color: "var(--white-color)",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <Box>
            <img width={"90px"} src={ProfileImg} alt="profile" />
          </Box>
          <Box
            sx={{
              paddingLeft: "15px",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", color: "var(--secondary-text-color)" }}
            >
                {`${capitalizeFirstLetter(adminFirstName)} ${capitalizeFirstLetter(adminLastName)}`}
            </Typography>
            <Typography
              sx={{ color: "var(--secondary-text-color)", fontSize: "13px" }}
            >
              {adminPosition}
            </Typography>
          </Box>
        </Box>
        <hr
          style={{
            border: "none",
            height: "1px",
            background: "var(--table-border-color)",
          }}
        />
        <Box mt={2}>
          <Button
            sx={{
              marginTop: "10px",
              fontSize: "15px",
              color: isDashboard
                ? "var(--primary-color)"
                : "var(--secondary-text-color)",
              fontWeight: isDashboard ? "bold" : "",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
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
              fontSize: "15px",
              color: isEmpManagement
                ? "var(--primary-color)"
                : "var(--secondary-text-color)",
              fontWeight: isEmpManagement ? "bold" : "",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
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
              fontSize: "15px",
              color: isLeaveManagement
                ? "var(--primary-color)"
                : "var(--secondary-text-color)",
              fontWeight: isLeaveManagement ? "bold" : "",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
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
            sx={{
              marginTop: "10px",
              fontSize: "15px",
              color: isAttendanceManagementActive
                ? "var(--primary-color)"
                : "var(--secondary-text-color)",
              fontWeight: isAttendanceManagementActive ? "bold" : "",
              width: "100%",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
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
