import React, { useContext } from "react";
import { Box, Typography, Grid } from "@mui/material";
import {
  viewProfileSubtitle,
  viewProfileTitle,
} from "../../CustomDesignMUI/CustomMUI";
import { BorderBottom } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../ContextAPI/CustomContext";

const DisplayContact = () => {
  // DATA CALLING START
  const { userData, setUserData } = useContext(GlobalContext);
  const { employeeId } = useParams();
  const employeeCall = userData.find((user) => user.id === parseInt(employeeId));


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
        Contact Details
      </Typography>
      {/* <Grid container> */}
      <Box sx={{ marginBottom: "25px" }}>
        {/* <Grid container spacing={2}>
          <Grid item xs={6}> */}
        <Box>
          <Typography sx={viewProfileSubtitle}>Phone Number</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactPersonalNumber}
          </Typography>
        </Box>
      </Box>
      {/* </Grid> */}
      {/* <Grid item xs={6}> */}
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>Additional Number</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactAdditionalNumber}
          </Typography>
        </Box>
      </Box>
      {/* </Grid> */}
      {/* </Grid> */}
      <Box sx={{ marginBottom: "25px" }}>
        {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={12}> */}
        <Box>
          <Typography sx={viewProfileSubtitle}>E-mail Address</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactEmail}
          </Typography>
        </Box>
        {/* </Grid> */}
        {/* </Grid> */}
      </Box>
      <Box sx={{ marginBottom: "25px" }}>
        {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={6}> */}
        <Box>
          <Typography sx={viewProfileSubtitle}>State of residence</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactState}
          </Typography>
        </Box>
      </Box>
      {/* </Grid> */}
      {/* <Grid item xs={6}> */}
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>City</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactCity}
          </Typography>
        </Box>
      </Box>
      {/* </Grid> */}
      {/* </Grid> */}
      <Box sx={{ marginBottom: "21px" }}>
        {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={12}> */}
        <Box>
          <Typography sx={viewProfileSubtitle}>Residential Address</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactResidental}
          </Typography>
        </Box>
        {/* </Grid> */}
        {/* </Grid> */}
      </Box>
      {/* </Grid> */}
    </Box>
  );
};

export default DisplayContact;
