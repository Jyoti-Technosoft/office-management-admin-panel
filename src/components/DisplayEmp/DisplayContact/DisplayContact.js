import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewProfileTitle,
} from "../../CustomDesignMUI/CustomMUI";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../ContextAPI/CustomContext";

const DisplayContact = () => {
  // DATA CALLING START
  const { userData } = useContext(GlobalContext);
  const { employeeId } = useParams();
  const employeeCall = userData.find(
    (user) => user.id === parseInt(employeeId)
  );
  console.log("EmployeeID: ", employeeId);
  console.log("Employee Details : ", employeeCall);
  if (!employeeCall) {
    return <Box>Loading...</Box>; 
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
        Contact Details
      </Typography>
      {/* <Grid container> */}
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>Phone Number</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactPersonalNumber}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>Additional Number</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactAdditionalNumber}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>E-mail Address</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactEmail}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>State of residence</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactState}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>City</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactCity}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "21px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>Residential Address</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactResidental}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayContact;
