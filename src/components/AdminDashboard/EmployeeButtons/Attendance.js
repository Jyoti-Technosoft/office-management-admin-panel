import React, { useState, useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import AttendanceTable from "../Tables/AttendanceTable";

const Attendance = () => {
  const { employeeData } = useContext(GlobalContext);

  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    setAttendanceData(employeeData);
    console.log("Dashboard: ", employeeData);
  }, [employeeData]);

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "40px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
        }}
      >
        Attandance
      </Typography>
      <Box
        sx={{
          // height: "500px",
          marginTop: "15px",
          maxHeight: "calc(100vh - 380px)",
        }}
        overflow="auto"
      >
        <AttendanceTable />
      </Box>
    </Box>
  );
};
export default Attendance;
