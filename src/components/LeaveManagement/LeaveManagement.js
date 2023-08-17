import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import SearchBar from "../ReusableComponents/SearchBar";
import { GlobalContext } from "../../ContextAPI/CustomContext";
import LeaveTable from "../AdminDashboard/Tables/LeaveTable";

const LeaveManagement = () => {
  const { employeeData } = useContext(GlobalContext);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(employeeData);
    console.log("Dashboard: ", employeeData);
  }, [employeeData]);

  return (
    <Box>
      <Grid container sx={{ height: "100vh" }}>
        {/*  LEFT ADMIN SIDE BAR  */}
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
              Leave Management
            </Typography>
            {/* ADD TO SCROLL TO THE TABLE */}
            <Box
              sx={{
                marginTop: "15px",
                maxHeight: "calc(100vh - 220px)",
              }}
              overflow="auto"
            >
              <LeaveTable />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeaveManagement;
