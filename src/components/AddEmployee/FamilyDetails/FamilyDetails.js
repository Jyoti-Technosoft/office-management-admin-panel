// FamilyDetails.js

import React from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const FamilyDetails = ({ formData, onChange }) => {
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
      <Typography variant="h5">Family Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <InputLabel>Father's Name</InputLabel>
        <TextField
          type="text"
          name="fathername"
          placeholder="Enter father's name"
          value={formData.fathername}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default FamilyDetails;
