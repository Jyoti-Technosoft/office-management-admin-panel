import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import "./AdminDashboard.scss";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import SearchBar from "../ReusableComponents/SearchBar";
import Employee from "./EmployeeButtons/Employee";
import Leave from "./EmployeeButtons/Leave";
import Attendance from "./EmployeeButtons/Attendance";
// IMPORT ICON
import { ReactComponent as EmployeeIcon} from "../../assets/img/icons/EmpIcon.svg";
import { ReactComponent as LeaveIcon} from "../../assets/img/icons/leaveIcon.svg";
import { ReactComponent as  AttendanceIcon} from "../../assets/img/icons/attendanceIcon.svg";
// IMPORT CONTEXT
import { GlobalContext } from "../../ContextAPI/CustomContext";
import axios from "axios";
import CustomToast from "../ReusableComponents/CustomToast";

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
  console.log("employeeData", employeeData);
  const getData = () => {
    axios
      .get(`${employeeApiEndpoint}`)
      .then((response) => {
        console.log("re", response);
        setUserData(response.data);
        console.log("Dashboard New: ", userData);
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
                color: "var(--primary-text-color)",
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
              }}
            >
              {/* FIRST BOX */}
              <Button
                onClick={() => handleTabChange("employee")}
                sx={{
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                  backgroundColor:
                    selectedTab === "employee"
                      ? "var(--secondary-highlight-color)"
                      : "var(--plain-white)",
                  color:
                    selectedTab === "employee"
                      ? "var(--secondary-text-color)"
                      : "var(--secondary-text-color)",
                  marginTop: "0px",
                  "&:hover": {
                    background: "var(--secondary-highlight-color)",
                    color: "var(--secondary-text-color)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    // justifyContent: "space-between",
                    alignItems: "center",
                    // background: "var(--primary-color)",
                    borderRadius: "10px",
                    padding: "5px 20px",
                    width: "170px",
                    color: "var(--white-color)",
                  }}
                >
                  <Box>
                    <EmployeeIcon height={'40px'}/>
                  </Box>
                  <Box sx={{marginLeft:"20px"}}>
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
              <Box sx={{ marginLeft: "30px" }}>
                <Button
                  onClick={() => handleTabChange("leave")}
                  sx={{
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                    backgroundColor:
                      selectedTab === "leave"
                        ? "var(--secondary-highlight-color)"
                        : "var(--plain-white)",
                    color:
                      selectedTab === "leave"
                        ? "var(--secondary-text-color)"
                        : "var(--secondary-text-color)",
                    marginTop: "0px",
                    "&:hover": {
                      background: "var(--secondary-highlight-color)",
                      color: "var(--secondary-text-color)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      // justifyContent: "space-between",
                      alignItems: "center",
                      // background: "var(--primary-color)",
                      borderRadius: "10px",
                      padding: "5px 20px",
                      width: "170px",
                      color: "var(--white-color)",
                    }}
                  >
                    <Box>
                      <LeaveIcon height={'40px'}/>
                    </Box>
                    <Box sx={{marginLeft:"20px"}}>
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
              <Box sx={{ marginLeft: "30px" }}>
                <Button
                  className="dashboard-attendance-button"
                  onClick={() => handleTabChange("attendance")}
                  sx={{
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                    backgroundColor:
                      selectedTab === "attendance"
                        ? "var(--secondary-highlight-color)"
                        : "var(--plain-white)",
                    color:
                      selectedTab === "attendance"
                        ? "var(--secondary-text-color)"
                        : "var(--secondary-text-color)",
                    marginTop: "0px",
                    "&:hover": {
                      background: "var(--secondary-highlight-color)",
                      color: "var(--secondary-text-color)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      // justifyContent: "space-between",
                      alignItems: "center",
                      // background: "var(--primary-color)",
                      borderRadius: "10px",
                      padding: "5px 20px",
                      width: "170px",
                      color: "var(--white-color)",
                    }}
                  >
                    <Box>
                      <AttendanceIcon height={'40px'}/>
                    </Box>
                    <Box sx={{marginLeft:"20px"}}>
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
      {showToast.show ? (
        <CustomToast toastType={showToast.type} message={showToast.msg} />
      ) : null}
    </Box>
  );
};

export default AdminDashboard;
