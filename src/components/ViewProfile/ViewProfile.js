import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import "./../AdminDashboard/AdminDashboard.scss";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import SearchBar from "../ReusableComponents/SearchBar";
import EmpButton from "../ReusableComponents/EmpButton";

const ViewProfile = () => {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Grid container>
        {/* {/ Left admin dashboard /} */}
        <AdminSideBar />

        <Grid item xs={12} md={9.4}>
          {/* {/ SEARCH BAR /} */}
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
                marginTop: "40px",
              }}
            >
              Employee Management
            </Typography>
            
            {/* FOR BUTTON AND DETAIL COMPONENTS */}
            <EmpButton />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewProfile;
