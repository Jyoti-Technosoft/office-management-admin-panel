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
          name="familyFirstname"
          placeholder="Enter a firstname"
          value={formData.familyFirstname}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Lastname"
          name="familyLastname"
          placeholder="Enter a lastname"
          value={formData.familyLastname}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Relationship"
          name="familyRelation"
          placeholder="Enter a Relationship"
          value={formData.familyRelation}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="email"
          label="E-mail Address"
          name="familyEmail"
          placeholder="Enter a email"
          value={formData.familyEmail}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          label="Phone Number"
          name="familyPhoneNumber"
          placeholder="Enter a Phone Number"
          value={formData.familyPhoneNumber}
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
          name="familyDob"
          placeholder="Enter a Date of Birth"
          value={formData.familyDob || " "}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default FamilyDetails;
