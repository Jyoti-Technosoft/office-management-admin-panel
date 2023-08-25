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
          name="financialBankName"
          placeholder="Enter a Bank Name"
          value={formData.financialBankName}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          label="Account No."
          name="financialAccountNo"
          placeholder="Enter a Account Number"
          value={formData.financialAccountNo}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Account Holder Name"
          name="financialHolderName"
          placeholder="Enter a Account Holder Name"
          value={formData.financialHolderName}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="IFSC No."
          name="financialIfsc"
          placeholder="Enter a IFSC No."
          value={formData.financialIfsc}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Branch Name"
          name="financialBranchName"
          placeholder="Enter a Branch Name"
          value={formData.financialBranchName}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default FinancialDetails;
