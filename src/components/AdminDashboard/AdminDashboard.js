import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import "./AdminDashboard.scss";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import SearchBar from "../ReusableComponents/SearchBar";
import EmployeeTable from "./EmployeeButtons/EmployeeTable";
import Leave from "./EmployeeButtons/Leave";
import Attendance from "./EmployeeButtons/Attendance";
// IMPORT ICON
import EmployeeIcon from "../../assets/img/icons/EmpIcon.svg";
import LeaveIcon from "../../assets/img/icons/leaveIcon.svg";
import AttendanceIcon from "../../assets/img/icons/attendanceIcon.svg";
// IMPORT CONTEXT
import { GlobalContext } from "../../ContextAPI/CustomContext";
import axios from "axios";


const AdminDashboard = () => {
  // Context Function
  const { employeeData, setUserData, userData, employeeApiEndpoint } = useContext(GlobalContext);
  const [leaveData, setLeaveData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("employee");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderTabContent = () => {
    if (selectedTab === "employee") {
      return <EmployeeTable />;
    } else if (selectedTab === "leave") {
      return <Leave />;
    } else if (selectedTab === "attendance") {
      return <Attendance />;
    }
  };
  
  const getData = () => {
    axios.get(`${employeeApiEndpoint}`)
      .then(response => {
        setUserData(response.data);
        console.log("Dashboard New: ", userData);
      })
      .catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
    getData();
  }, [employeeData])



  return (
    <Box>
      {/* <Container> */}
      <Grid container sx={{ height: "100vh" }}>
        {/* Left admin dashboard */}
        <AdminSideBar />

        <Grid item xs={12} md={9.4}>
          {/* SEARCH BAR */}
          <SearchBar />
          <Box
            sx={{
              margin: "30px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginTop: "50px",
              }}
            >
              Dashboard
            </Typography>
            {/* CARDS */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: "20px",
              }}>
              {/* FIRST BOX */}
              <Button
                onClick={() => handleTabChange("employee")}
                sx={{
                  backgroundColor:
                    selectedTab === "employee"
                      ? "var(--secondary-color)"
                      : "var(--primary-color)",
                  color: selectedTab === "employee" ? "white" : "inherit",
                  marginTop: "0px",
                  "&:hover": {
                    background: "var(--secondary-color)",
                    color: "white",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // background: "var(--primary-color)",
                    borderRadius: "8px",
                    padding: "5px 20px",
                    width: "180px",
                    color: "var(--white-color)",
                  }}
                >
                  <Box>
                    <img
                      width={"35px"}
                      src={EmployeeIcon}
                      alt="Employee Icon"
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        marginBottom: "-10px",
                      }}
                    >
                      {userData.length}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Employee
                    </Typography>
                  </Box>
                </Box>
              </Button>

              {/* {/ {/ SECOND BOX /} /} */}
              <Box sx={{ marginLeft: "20px" }}>
                <Button
                  onClick={() => handleTabChange("leave")}
                  sx={{
                    backgroundColor:
                      selectedTab === "leave"
                        ? "var(--secondary-color)"
                        : "var(--primary-color)",
                    color: selectedTab === "leave" ? "white" : "inherit",
                    marginTop: "0px",
                    "&:hover": {
                      background: "var(--secondary-color)",
                      color: "white",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      // background: "var(--primary-color)",
                      borderRadius: "8px",
                      padding: "5px 20px",
                      width: "180px",
                      color: "var(--white-color)",
                    }}
                  >
                    <Box>
                      <img width={"35px"} src={LeaveIcon} alt="Employee Icon" />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "25px",
                          marginBottom: "-10px",
                        }}
                      >
                        {leaveData.length}
                      </Typography>
                      <Typography sx={{ fontWeight: "bold" }}>Leave</Typography>
                    </Box>
                  </Box>
                </Button>
              </Box>

              {/* {/ {/ THIRD BOX /} /} */}
              <Box sx={{ marginLeft: "20px" }}>
                <Button
                  onClick={() => handleTabChange("attendance")}
                  sx={{
                    backgroundColor:
                      selectedTab === "attendance"
                        ? "var(--secondary-color)"
                        : "var(--primary-color)",
                    color: selectedTab === "attendance" ? "white" : "inherit",
                    marginTop: "0px",
                    "&:hover": {
                      background: "var(--secondary-color)",
                      color: "white",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      // background: "var(--primary-color)",
                      borderRadius: "8px",
                      padding: "5px 20px",
                      width: "180px",
                      color: "var(--white-color)",
                    }}
                  >
                    <Box>
                      <img
                        width={"35px"}
                        src={AttendanceIcon}
                        alt="Employee Icon"
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "25px",
                          marginBottom: "-10px",
                        }}
                      >
                        {attendanceData.length}
                      </Typography>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Attandance
                      </Typography>
                    </Box>
                  </Box>
                </Button>
              </Box>
            </Box>
            {/* {/ {/ CARDS END  /} /} */}
            {/* FOR DASHBOARD BOTTONS */}
            <Box>{renderTabContent()}</Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
