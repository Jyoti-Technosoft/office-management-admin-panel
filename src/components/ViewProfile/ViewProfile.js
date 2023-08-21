import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "./../AdminDashboard/AdminDashboard.scss";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import Header from "../ReusableComponents/Header";
import EmpButton from "../ReusableComponents/EmpButton";

const ViewProfile = () => {
  return (

      <Grid container sx={{height: '100vh'}}>
        {/* Left admin dashboard */}
        <AdminSideBar />
        <Grid xs={12} md={9.4}>
          {/* SEARCH BAR */}
          <Box sx={{padding:"15px",marginLeft:"15px"}}>
            <Header />
          </Box>
          <Box sx={{ margin: " 50px" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold",color:"var(--primary-text-color)" }}> Employee Management </Typography>
            <EmpButton />
          </Box>
        </Grid>
      </Grid>
  );
};
export default ViewProfile;
