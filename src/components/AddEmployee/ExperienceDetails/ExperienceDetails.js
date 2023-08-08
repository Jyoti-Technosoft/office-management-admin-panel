// ExperienceDetails.js

import React from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const ExperienceDetails = ({ formData, onChange }) => {
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
      <Typography variant="h5">Experience Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <InputLabel>Job Title</InputLabel>
        <TextField
          type="text"
          name="jobtitle"
          placeholder="Enter job title"
          value={formData.jobtitle}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default ExperienceDetails;
