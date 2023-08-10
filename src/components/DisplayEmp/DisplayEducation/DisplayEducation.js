import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewProfileTitle,
  viewEducationBox,
  viewEducationTitle,
} from "../../CustomDesignMUI/CustomMUI";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { useParams } from "react-router-dom";

const DisplayEducation = () => {
  
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
        Education Details
      </Typography>
      {/* FOR ACADEMIC RECORDS */}
      <Typography sx={viewProfileTitle}>Academic Records</Typography>
      <Box sx={{ marginBottom: "25px" }}>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>{employeeCall.educationUniversity}</Typography>
          <Typography sx={viewProfileSubtitle}>
          {employeeCall.educationCourse}{","} {employeeCall.educationAcademicStart}{"-"}{employeeCall.educationAcademicEnd}
          </Typography>
        </Box>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>English College</Typography>
          <Typography sx={viewProfileSubtitle}>
            W.A.S.S.C.E , February 2006 - June 2012
          </Typography>
        </Box>
      </Box>

      {/* FOR PROFESIONAL QUALIFICATION */}
      <Typography sx={viewProfileTitle}>Professional Qualifications</Typography>
      <Box sx={{ marginBottom: "25px" }}>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>CCNA Certification</Typography>
          <Typography sx={viewProfileSubtitle}>
            at New Horizons , May 2019 - September 2021
          </Typography>
        </Box>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>
            Google UI / UX Certification
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            at Google Inc , September 2021 - September 2022
          </Typography>
        </Box>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>Web Developer</Typography>
          <Typography sx={viewProfileSubtitle}>
            at Google Inc, May 2019 - September 2021
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            Collaborated with teammates to deliver valuable features meeting
            business and customer needs.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayEducation;
