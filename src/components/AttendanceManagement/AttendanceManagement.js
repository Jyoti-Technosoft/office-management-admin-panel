import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Grid } from "@mui/material";
// import "./AdminDashboard.scss";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import SearchBar from "../ReusableComponents/SearchBar";
import FingerPrint from "../../assets/img/icons/finger.png";
import Attendance from "../../assets/img/attendance.png";
// IMPORT CONTEXT
import { GlobalContext } from "../../ContextAPI/CustomContext";

const AttendanceManagement = () => {
  // Context Function
  const { employeeData } = useContext(GlobalContext);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(employeeData);
    console.log("Dashboard: ", employeeData);
  }, [employeeData]);

  return (
    <Box>
      {/*  <Container>  */}
      <Grid container sx={{ height: "100vh" }}>
        {/*  Left admin dashboard  */}
        <AdminSideBar />

        <Grid item xs={12} md={9.4}>
          {/*  SEARCH BAR   */}
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
                marginBottom: "20px",
              }}
            >
              Attendance Management
            </Typography>
            <Box
              sx={{
                backgroundColor: "#dfeaf7",
                margin: "auto",
                padding: "50px",
                height: "100vh",
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  background: "white",
                  borderRadius: "10px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                }}
              >
                  <img src={Attendance} width={500} alt="attendance" />
              </Box>
              {/* <Box>
                <img src={FingerPrint} width={200} alt="print" />
              </Box> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AttendanceManagement;
