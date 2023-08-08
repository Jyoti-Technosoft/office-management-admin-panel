// FinancialDetails.js

import React from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const FinancialDetails = ({ formData, onChange }) => {
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
      <Typography variant="h5">Financial Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Bank Name"
          name="bankname"
          placeholder="Enter bank name"
          value={formData.bankname}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default FinancialDetails;
