import React, { useState, useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewProfileTitle,
} from "../../CustomDesignMUI/CustomMUI";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import ViewDocument from "./ViewDocument";
import { useParams } from "react-router-dom";

const DisplayJob = () => {
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
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "30px", borderBottom: 1 }}
          >
            View Job Details
          </Typography>
          <Box sx={{ marginBottom: "15px" }}>
            <Typography sx={viewProfileSubtitle}>Job Role</Typography>
            <Typography sx={viewProfileTitle}>
              {employeeCall.jobDesignation}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "25px" }}>
            <Typography sx={viewProfileSubtitle}>Department</Typography>
            <Typography sx={viewProfileTitle}>
              {employeeCall.jobDepartment}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "35px" }}>
            <Typography sx={viewProfileTitle}>Job Description</Typography>
            <Typography sx={viewProfileSubtitle}>
              {employeeCall.jobResponsibilities}
            </Typography>
          </Box>

          <Button
            sx={{
              background: "var(--primary-highlight-color)",
              textTransform: "capitalize",
              color: "var(--primary-color)",
              fontWeight: "bold",
              "&:hover": {
                background: "var(--primary-color)",
                color: "white",
              },
            }}
            variant="outlined"
            onClick={toggleViewDocument}
          >
            View Documents
          </Button>
        </Box>
      )}
    </Box>
  );
};
export default DisplayJob;
