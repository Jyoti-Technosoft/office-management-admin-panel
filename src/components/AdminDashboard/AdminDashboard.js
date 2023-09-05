import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import "./AdminDashboard.scss";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import Employee from "./EmployeeButtons/Employee";
import Leave from "./EmployeeButtons/Leave";
import Attendance from "./EmployeeButtons/Attendance";
// IMPORT ICON
import { ReactComponent as EmployeeIcon } from "../../assets/img/icons/EmpIcon.svg";
import { ReactComponent as LeaveIcon } from "../../assets/img/icons/leaveIcon.svg";
import { ReactComponent as AttendanceIcon } from "../../assets/img/icons/attendanceIcon.svg";
// IMPORT CONTEXT
import { GlobalContext } from "../../ContextAPI/CustomContext";
import axios from "axios";
import CustomToast from "../ReusableComponents/CustomToast";
import Header from "../ReusableComponents/Header";

const AdminDashboard = () => {
  // Context Function
  const {
    employeeData,
    setUserData,
    userData,
    employeeApiEndpoint,
    showToast,
  } = useContext(GlobalContext);
  const [leaveData, setLeaveData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("employee");

  const getData = () => {
    axios
      .get(`${employeeApiEndpoint}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, [employeeData]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderTabContent = () => {
    if (selectedTab === "employee") {
      return <Employee />;
    } else if (selectedTab === "leave") {
      return <Leave />;
    } else if (selectedTab === "attendance") {
      return <Attendance />;
    }
  };

  const DashboardEmpIcons = {
    fill:
      selectedTab === "employee"
        ? "var(--secondary-highlight-color)"
        : "var(--primary-highlight-color)",
    stroke:
      selectedTab === "employee"
        ? "var(--secondary-color)"
        : "var(--primary-color)",
  };
  const DashboardLeaveIcons = {
    fill:
      selectedTab === "leave"
        ? "var(--secondary-highlight-color)"
        : "var(--primary-highlight-color)",
    stroke:
      selectedTab === "leave"
        ? "var(--secondary-color)"
        : "var(--primary-color)",
  };
  const DashboardAttendanceIcons = {
    fill:
      selectedTab === "attendance"
        ? "var(--secondary-highlight-color)"
        : "var(--primary-highlight-color)",
    stroke:
      selectedTab === "attendance"
        ? "var(--secondary-color)"
        : "var(--primary-color)",
  };

  return (
    <Box>
      {/* <Container> */}
      <Grid container sx={{ height: "100vh" }}>
        {/* Left admin dashboard */}
        <AdminSideBar />
        <Grid item xs={12} md={9.4}>
          {/* Header */}
          <Header />
          <Box
            sx={{
              margin: "0px 30px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "var(--primary-text-color)",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Dashboard
            </Typography>
            {/* CARDS */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {/* FIRST BOX */}
                <Button
                  onClick={() => handleTabChange("employee")}
                  sx={{
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                    backgroundColor:
                      "var(--background-table-sidebar-card-color)",
                    color: "var(--secondary-text-color)",
                    "&:hover": {
                      background: "var(--background-table-sidebar-card-color)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "10px",
                      padding: "5px 20px",
                      width: "130px",
                      color: "var(--white-color)",
                    }}
                  >
                    <Box
                      className="DashboardIcons"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <EmployeeIcon height={"40px"} style={DashboardEmpIcons} />
                    </Box>
                    <Box sx={{ marginLeft: "20px" }}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "25px",
                          marginBottom: "-10px",
                          textAlign: "left",
                        }}
                      >
                        {userData.length}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          textTransform: "capitalize",
                          fontSize: "15px",
                          textAlign: "left",
                        }}
                      >
                        Employee
                      </Typography>
                    </Box>
                  </Box>
                </Button>

                {/* {/ {/ SECOND BOX /} /} */}
                <Box
                  sx={{
                    marginLeft: "30px",
                  }}
                >
                  <Button
                    onClick={() => handleTabChange("leave")}
                    sx={{
                      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                      backgroundColor:
                        "var(--background-table-sidebar-card-color)",
                      color: "var(--secondary-text-color)",
                      marginTop: "0px",
                      "&:hover": {
                        background:
                          "var(--background-table-sidebar-card-color)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "10px",
                        padding: "5px 20px",
                        width: "130px",
                        color: "var(--white-color)",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <LeaveIcon
                          height={"40px"}
                          style={DashboardLeaveIcons}
                        />
                      </Box>
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "25px",
                            marginBottom: "-10px",
                            textAlign: "left",
                          }}
                        >
                          {leaveData.length}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textTransform: "capitalize",
                            fontSize: "15px",
                            textAlign: "left",
                          }}
                        >
                          Leave
                        </Typography>
                      </Box>
                    </Box>
                  </Button>
                </Box>

                {/* {/ {/ THIRD BOX /} /} */}
                <Box className="DashboardIcons" sx={{ marginLeft: "30px" }}>
                  <Button
                    className="dashboard-attendance-button"
                    onClick={() => handleTabChange("attendance")}
                    sx={{
                      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                      backgroundColor:
                        "var(--background-table-sidebar-card-color)",
                      color: "var(--secondary-text-color)",
                      marginTop: "0px",
                      "&:hover": {
                        background:
                          "var(--background-table-sidebar-card-color)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "10px",
                        padding: "5px 20px",
                        width: "130px",
                        color: "var(--white-color)",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AttendanceIcon
                          height={"40px"}
                          style={DashboardAttendanceIcons}
                        />
                      </Box>
                      <Box
                        sx={{
                          marginLeft: "20px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "25px",
                            marginBottom: "-10px",
                            textAlign: "left",
                          }}
                        >
                          {attendanceData.length}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textTransform: "capitalize",
                            fontSize: "15px",
                            textAlign: "left",
                          }}
                        >
                          Attendance
                        </Typography>
                      </Box>
                    </Box>
                  </Button>
                </Box>
              </Box>
              {/* {/ {/ CARDS END  /} /} */}

              <Box
                sx={{
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                  marginTop: "30px",
                  borderRadius: "10px",
                  background: "var(--background-table-sidebar-card-color)",
                }}
              >
                {/* FOR DASHBOARD BOTTONS */}
                <Box>{renderTabContent()}</Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* FOR SHOW TOASTER */}
      {showToast.show ? (
        <CustomToast toastType={showToast.type} message={showToast.msg} />
      ) : null}
    </Box>
  );
};

export default AdminDashboard;
