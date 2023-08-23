import React, { useContext } from "react";
import { Box, List, ListItemText, Typography } from "@mui/material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { useParams } from "react-router-dom";
import { viewEducationBox } from "../../CustomDesignMUI/CustomMUI";

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
      <Box sx={viewEducationBox}> 
        <List>
          <Typography sx={{ fontWeight: "bold" }}>Leave Details</Typography>
          <ListItemText>Unpaid Leave</ListItemText>
          <ListItemText>Paid Leave</ListItemText>
          <ListItemText>Sick Leave</ListItemText>
          <ListItemText>Causal Leave</ListItemText>
        </List>
      </Box>
    </Box>
  );
};

export default DisplayLeave;
