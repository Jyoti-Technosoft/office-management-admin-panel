import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "./../AdminDashboard/AdminDashboard.scss";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import Header from "../ReusableComponents/Header";
import EmpButton from "../ReusableComponents/EmpButton";

const ViewProfile = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left admin dashboard */}
      <AdminSideBar />
      <Grid xs={12} md={9.4}>
        {/* SEARCH BAR */}
        <Header />
        <Box sx={{
          padding: "15px",
          marginLeft: "15px"
        }}>
        </Box>
        <Box
          sx={{
            margin: "0px 30px",
          }}
        >
        
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "var(--primary-text-color)" }}
          >
            {" "}
            Employee Management{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "0px 55px",
          }}
        >
          <EmpButton />
        </Box>
      </Grid>
    </Grid>
  );
};
export default ViewProfile;
