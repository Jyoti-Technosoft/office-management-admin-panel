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
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
        padding: "14px",
        marginTop: "30px",
        borderRadius: "10px",
        background: "var(--plain-white)",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "var(--primary-text-color)",
          }}
          >
          Leave
        </Typography>
        <hr/>
        <Box
          sx={{
            // height: "500px",
            marginTop: "15px",
            maxHeight: "calc(100vh - 420px)",
          }}
          overflow="auto"
        >
          <LeaveTable />
        </Box>
      </Box>
    </Box>
  );
};
export default Leave;
