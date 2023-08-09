import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "./../AdminDashboard/AdminDashboard.scss";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import SearchBar from "../ReusableComponents/SearchBar";
import EmpButton from "../ReusableComponents/EmpButton";

const ViewProfile = () => {
  return (
      <Grid container sx={{height: '100vh'}}>
        {/* {/ Left admin dashboard /} */}
        <AdminSideBar />
        <Grid xs={12} md={9.4}>
          {/* {/ SEARCH BAR /} */}
          <SearchBar />
          <Box sx={{ margin: "0px 50px" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}> Employee Management </Typography>
            <EmpButton />
          </Box>
        </Grid>
      </Grid>
  );
};

export default ViewProfile;
