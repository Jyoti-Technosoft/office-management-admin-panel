import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewEducationBox,
  viewEducationTitle,
} from "../../CustomDesignMUI/CustomMUI";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
const DisplayFamily = () => {

  // DATA CALLING START 
  const { userData, setUserData } = useContext(GlobalContext)
  const { employeeId } = useParams();
  const employeeCall = userData.find(user => user.id === parseInt(employeeId));
  console.log("EmployeeID: ", employeeId)
  console.log("Employee Details : ", employeeCall);
  if (!employeeCall) {
    return <Box>Loading...</Box>;  // Or handle the case when the employee is not found
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
        Family Details
      </Typography>
      <Box sx={{ marginBottom: "25px" }}>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>
            {employeeCall.familyFirstname}{" "}{employeeCall.familyLastname}
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            Relationship : {employeeCall.familyRelation} | Phone No : {employeeCall.familyPhoneNumber}
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            Email: {employeeCall.familyEmail} | DOB: {employeeCall.familyDob}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayFamily;
