import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewProfileTitle,
  viewExperiencePosition,
} from "../../CustomDesignMUI/CustomMUI";
import ViewDocument from "./ViewDocument";

const DisplayJob = () => {
  const jobDescriptionPoints = [
    "Creating user-centered designs by understanding business requirements, and user feedback",
    "Creating user flows, wireframes, prototypes, and mockups",
    "Translating requirements into style guides, design systems, design patterns, and attractive user interfaces",
    "Designing UI elements such as input controls, navigational components, and informational components",
    "Creating original graphic designs (e.g. images, sketches, and tables)",
    "Identifying and troubleshooting UX problems (e.g. responsiveness)",
    "Collaborating effectively with product, engineering, and management teams",
    "Incorporating customer feedback, usage metrics, and usability findings into design in order to enhance user experience",
  ];

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
            <Typography sx={viewProfileTitle}>UI UX Designer</Typography>
          </Box>
          <Box sx={{ marginBottom: "25px" }}>
            <Typography sx={viewProfileSubtitle}>Department</Typography>
            <Typography sx={viewProfileTitle}>Designer & Marketing</Typography>
          </Box>
          <Box sx={{ marginBottom: "35px" }}>
            <Typography sx={viewProfileTitle}>Job Description</Typography>
            <Typography sx={viewExperiencePosition}>
              Your responsibilities will include:
            </Typography>
            <ul>
              {jobDescriptionPoints.map((point, index) => (
                <Typography
                  key={index}
                  sx={viewProfileSubtitle}
                  component="li"
                  style={{ marginLeft: "10px" }}
                >
                  {point}
                </Typography>
              ))}
            </ul>
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
        onClick={toggleViewDocument} 
        >
            View Documents
        </Button>
        </>
      )}
    </Box>
  );
};
export default DisplayJob;
