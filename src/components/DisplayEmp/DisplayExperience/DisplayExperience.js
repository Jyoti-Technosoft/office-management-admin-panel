import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewEducationBox,
  viewEducationTitle,
  viewExperiencePosition,
} from "../../CustomDesignMUI/CustomMUI";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../ContextAPI/CustomContext";

const DisplayExperience = () => {
  // DATA CALLING START
  const { userData } = useContext(GlobalContext);
  const { employee_id } = useParams();
  const employeeCall = userData.find(
    (user) => user.id === parseInt(employee_id)
  );
  console.log("EmployeeID: ", employee_id);
  console.log("Employee Details : ", employeeCall);
  if (!employeeCall) {
    return <Box>Loading...</Box>;
  }

  // DATE TO MONTH FUNCTION
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // CALCULATE NUMBER OF YEARS
  const calYears = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const yearsDiff = end.getFullYear() - start.getFullYear();
    const isSameMonthAndDay =
      end.getMonth() === start.getMonth() && end.getDate() >= start.getDate();
    if (isSameMonthAndDay) {
      return yearsDiff;
    } else {
      const monthsDiff = (end.getMonth() - start.getMonth() + 12) % 12;
      const decimalYears = monthsDiff / 12;
      return yearsDiff + decimalYears;
    }
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
        Experience Details
      </Typography>
      <Box sx={{ marginBottom: "25px" }}>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>
            {employeeCall.experienceCompanyName}
          </Typography>
          <Typography sx={viewExperiencePosition}>
            Position: {employeeCall.experiencePosition}
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            {formatDate(employeeCall.experienceStartDate)} -{" "}
            {formatDate(employeeCall.experienceEndDate)}
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            Experience :{" "}
            {calYears(
              employeeCall.experienceStartDate,
              employeeCall.experienceEndDate
            ).toFixed(2)}{" "}
            Years
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayExperience;
