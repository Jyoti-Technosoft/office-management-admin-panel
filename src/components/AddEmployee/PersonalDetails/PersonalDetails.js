// PersonalDetails.js

import React from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const PersonalDetails = ({ formData, onChange }) => {
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
      <Typography variant="h5">Personal Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="lastname"
          placeholder="Enter a lastname"
          value={formData.lastname}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default PersonalDetails;
