import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import { Box, Button, Typography, Grid, } from "@mui/material";
import "./../AdminDashboard/AdminDashboard.scss";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import SearchBar from "../ReusableComponents/SearchBar";
import { DashboardProfileButtons } from '../CustomDesignMUI/CustomMUI';
import DisplayPersonal from "../DisplayEmp/DisplayPersonal/DisplayPersonal";

const ViewProfile = () => {
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Grid container>
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
                marginTop: "40px",
              }}
            >
              Employee Management
            </Typography>

            <Grid container spacing={3}>
              {/* LEFT BOX */}
              <Grid item xs={12} md={3.5}>
                <Box
                  sx={{
                    marginTop: "12px",
                    backgroundColor: "#dfeaf7",
                    borderRadius: "10px",
                    // height: "100vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "12px",
                  }}
                >
                  <Button  sx={{
                        textTransform: "capitalize",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "white",
                        color: "black",
                        height: "40px",
                        width: "100%",
                        borderRadius: "10px",
                        "&:hover": {
                          background: "var(--secondary-color)",
                          color: "white",
                          fontWeight: "bold",
                        },
                      }}>
                    Personal Details
                  </Button>
                  <Button sx={DashboardProfileButtons}>
                    Contact Details
                  </Button>
                  <Button sx={DashboardProfileButtons}>
                    Education Qualification
                  </Button>
                  <Button sx={DashboardProfileButtons}>
                    Family Details
                  </Button>
                  <Button sx={DashboardProfileButtons}>
                    Experience Details
                  </Button>
                  <Button sx={DashboardProfileButtons}>
                    Job Details
                  </Button>
                  <Button sx={DashboardProfileButtons}>
                    Financial Details
                  </Button>
                  <Button sx={DashboardProfileButtons}>
                    Leaves
                  </Button>
                </Box>
              </Grid>
              {/* RIGHT BOX */}
              <Grid item xs={12} md={8.5}>
              <DisplayPersonal />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewProfile;
