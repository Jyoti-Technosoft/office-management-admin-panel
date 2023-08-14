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


  // DATE TO MONTH FUNCTION 
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
            {employeeCall.educationCourse}{","} {formatDate(employeeCall.educationAcademicStart)} - {formatDate(employeeCall.educationAcademicEnd)}
          </Typography>
        </Box>
      </Box>

      {/* FOR PROFESIONAL QUALIFICATION */}
      <Typography sx={viewProfileTitle}>Professional Qualifications</Typography>
      <Box sx={{ marginBottom: "25px" }}>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>{employeeCall.educationCertificate}</Typography>
          <Typography sx={viewProfileSubtitle}>
            {employeeCall.educationPlace}{","} {formatDate(employeeCall.educationProfessionalStart)} - {formatDate(employeeCall.educationProfessionalEnd)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayEducation;
