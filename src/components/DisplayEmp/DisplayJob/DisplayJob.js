import React, { useState, useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewProfileTitle,
  viewExperiencePosition,
} from "../../CustomDesignMUI/CustomMUI";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import ViewDocument from "./ViewDocument";
import { useParams } from "react-router-dom";


const DisplayJob = () => {

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showViewDocument, setShowViewDocument] = useState(false);

  const toggleViewDocument = () => {
    setShowViewDocument(!showViewDocument);
  };

  return (
    <Box
      sx={{
        marginTop: "30px",
        marginLeft: "9px",
      }}
    >
      {showViewDocument ? (
        <ViewDocument onBackClick={toggleViewDocument} />
      ) : (
        <>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "30px", borderBottom: 1 }}
          >
            View Job Details
          </Typography>
          <Box sx={{ marginBottom: "15px" }}>
            <Typography sx={viewProfileSubtitle}>Job Role</Typography>
            <Typography sx={viewProfileTitle}>{employeeCall.jobDesignation}</Typography>
          </Box>
          <Box sx={{ marginBottom: "25px" }}>
            <Typography sx={viewProfileSubtitle}>Department</Typography>
            <Typography sx={viewProfileTitle}>{employeeCall.jobDepartment}</Typography>
          </Box>
          <Box sx={{ marginBottom: "35px" }}>
            <Typography sx={viewProfileTitle}>Job Description</Typography>
            <Typography sx={viewProfileSubtitle}>
              {employeeCall.jobResponsibilities}
            </Typography>
          </Box>

          <Button
            sx={{
              background: "var(--primary-color)",
              textTransform: "capitalize",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                background: "var(--secondary-color)",
                color: "white",
              },
            }}
            variant="contained"
            onClick={toggleViewDocument}>
            View Documents
          </Button>
        </>
      )}
    </Box>
  );
};
export default DisplayJob;
