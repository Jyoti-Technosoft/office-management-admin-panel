// EducationDetails.js

import React from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const EducationDetails = ({ formData, onChange }) => {
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
      <Typography variant="h5">Education Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <InputLabel>University</InputLabel>
        <TextField
          type="text"
          name="university"
          placeholder="Enter university name"
          value={formData.university}
          onChange={handleInputChange}
        /> 
      </form>
    </Box>
  );
};

export default EducationDetails;
