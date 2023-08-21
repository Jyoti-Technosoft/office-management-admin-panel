import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import SearchBar from "../ReusableComponents/SearchBar";
import EmpTable from "../AdminDashboard/Tables/EmpTable";
import { tableMainHead } from "../CustomDesignMUI/CustomMUI";

const EmpManagement = () => {
  return (
    <Box>
      <Grid container sx={{ height: "100vh" }}>
        {/*  LEFT ADMIN SIDE BAR  */}
        <AdminSideBar />
        <Grid item xs={12} md={9.4}>
          <Box
            sx={{
              margin: "30px",
            }}
          >
            <Typography variant="h5" sx={tableMainHead}>
              Employee Management
            </Typography>
            {/*  ADD SCROLL IN A TABLE  */}
            <Box
              sx={{
                marginTop: "15px",
                maxHeight: "calc(100vh - 110px)",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                // padding: "20px",
                borderRadius: "10px",
                background: "var(--plain-white)",
              }}
              overflow="auto"
            >
              {/* <Typography
                variant="h6"
                sx={{ color: "var(--primary-text-color)",
                //  fontWeight: "bold" ,
                }}
              >
                Employee Details
              </Typography> */}
              <Box sx={{ padding: "15px" }}>
                <SearchBar />
              </Box>
              <EmpTable />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmpManagement;
