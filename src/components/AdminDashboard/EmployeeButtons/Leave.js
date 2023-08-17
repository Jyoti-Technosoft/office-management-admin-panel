import React, { useState, useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import LeaveTable from "../Tables/LeaveTable";

const Leave = () => {
  const { employeeData } = useContext(GlobalContext);

  const [leaveData, setLeaveData] = useState([]);

  useEffect(() => {
    setLeaveData(employeeData);
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
        Leave
      </Typography>
      <Box
        sx={{
          // height: "500px",
          marginTop: "15px",
          maxHeight: "calc(100vh - 380px)",
        }}
        overflow="auto"
      >
        <LeaveTable />
      </Box>
    </Box>
  );
};
export default Leave;
