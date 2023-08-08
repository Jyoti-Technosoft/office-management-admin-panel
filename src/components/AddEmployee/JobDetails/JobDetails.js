// Job Details
import React from "react";
import { Box, InputLabel, TextField, Typography } from "@mui/material";

const JobDetails = ({ formData, onChange }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the form fields here if needed
  };

  return (
    <Box>
      <Typography variant="h5">Job Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Job Title"
          name="jobdetails"
          placeholder="Enter Job Title"
          value={formData.jobdetails}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default JobDetails;
