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
          name="firstname"
          placeholder="Enter a firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Lastname"
          name="lastname"
          placeholder="Enter a lastname"
          value={formData.lastname}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Relationship"
          name="relation"
          placeholder="Enter a Relationship"
          value={formData.relation}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="email"
          label="E-mail Address"
          name="email"
          placeholder="Enter a email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          label="Phone Number"
          name="phonenumber"
          placeholder="Enter a Phone Number"
          value={formData.phonenumber}
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
          name="dob"
          placeholder="Enter a Date of Birth"
          value={formData.dob}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default FamilyDetails;
