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
          name="bankname"
          placeholder="Enter a Bank Name"
          value={formData.bankname}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          label="Account No."
          name="acno"
          placeholder="Enter a Account Number"
          value={formData.acno}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Account Holder Name"
          name="acname"
          placeholder="Enter a Account Holder Name"
          value={formData.acname}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="IFSC No."
          name="ifsc"
          placeholder="Enter a IFSC No."
          value={formData.ifsc}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Branch Name"
          name="branchname"
          placeholder="Enter a Branch Name"
          value={formData.branchname}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default FinancialDetails;
