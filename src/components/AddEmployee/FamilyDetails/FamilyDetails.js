// FamilyDetails.js

import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { InputField, InputFieldProps } from "../../CustomDesignMUI/CustomMUI";

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
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Firstname"
          name="familyfirstname"
          placeholder="Enter a firstname"
          value={formData.familyfirstname}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Lastname"
          name="familylastname"
          placeholder="Enter a lastname"
          value={formData.familylastname}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Relationship"
          name="familyrelation"
          placeholder="Enter a Relationship"
          value={formData.familyrelation}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="email"
          label="E-mail Address"
          name="familyemail"
          placeholder="Enter a email"
          value={formData.familyemail}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          label="Phone Number"
          name="familyphonenumber"
          placeholder="Enter a Phone Number"
          value={formData.familyphonenumber}
          onChange={handleInputChange}
        />

        {/* FOR DATE OF BIRTH */}
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          label="Date of Birth"
          name="familydob"
          placeholder="Enter a Date of Birth"
          value={formData.familydob}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default FamilyDetails;
