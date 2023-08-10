// FinancialDetails.js

import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { InputField, InputFieldProps } from "../../CustomDesignMUI/CustomMUI";

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
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Bank Name"
          name="financialbankname"
          placeholder="Enter a Bank Name"
          value={formData.financialbankname}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          label="Account No."
          name="financialacno"
          placeholder="Enter a Account Number"
          value={formData.financialacno}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Account Holder Name"
          name="financialacname"
          placeholder="Enter a Account Holder Name"
          value={formData.financialacname}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="IFSC No."
          name="financialifsc"
          placeholder="Enter a IFSC No."
          value={formData.financialifsc}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Branch Name"
          name="financialbranchname"
          placeholder="Enter a Branch Name"
          value={formData.financialbranchname}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default FinancialDetails;
