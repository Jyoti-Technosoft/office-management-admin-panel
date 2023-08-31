import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import AdminSideBar from "../../components/ReusableComponents/AdminSideBar";
import SearchBar from "../ReusableComponents/SearchBar";
import { GlobalContext } from "../../ContextAPI/CustomContext";
import AttendanceTable from "../AdminDashboard/Tables/AttendanceTable";
import { tableMainHead } from "../CustomDesignMUI/CustomMUI";
import Header from "../ReusableComponents/Header";

const AttendanceManagement = () => {
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
          <Header />
          <Box
            sx={{
              margin: "0px 30px",
            }}
          >
            <Typography variant="h5" sx={tableMainHead}>
              Attendance Management
            </Typography>
            {/*  ADD SCROLL TO TABLE  */}
            <Box
              sx={{
                marginTop: "20px",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                borderRadius: "8px",
                background: "var(--background-table-sidebar-card-color)",
              }}
            >
              <Box sx={{ padding: "15px" }}>
                <SearchBar />
              </Box>
              <Box sx={{ maxHeight: "calc(100vh - 310px)" }} overflow="auto">
                <AttendanceTable />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AttendanceManagement;
