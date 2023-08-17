import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { useParams } from "react-router-dom";
import LeaveTable from "../../AdminDashboard/Tables/LeaveTable";

const DisplayLeave = () => {
  // DATA CALLING START
  const { userData, setUserData } = useContext(GlobalContext);
  const { employeeId } = useParams();
  const employeeCall = userData.find(
    (user) => user.id === parseInt(employeeId)
  );
  console.log("EmployeeID: ", employeeId);
  console.log("Employee Details : ", employeeCall);
  if (!employeeCall) {
    return <Box>Loading...</Box>; // Or handle the case when the employee is not found
  }
  // DATA CALLING END

  return (
    <Box
      sx={{
        marginTop: "30px",
        marginLeft: "9px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "30px", borderBottom: 1 }}
      >
        Leave History
      </Typography>
      <Box
        sx={{
          borderRadius:"10px",
          marginBottom: "25px",
          backgroundColor: "whitesmoke",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
        }}
      >
        <LeaveTable />
      </Box>
    </Box>
  );
};

export default DisplayLeave;
