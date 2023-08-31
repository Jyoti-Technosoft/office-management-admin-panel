import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { InputField, InputFieldProps } from "../../CustomDesignMUI/CustomMUI";

const ContactDetails = ({ formData, onChange }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Typography variant="h5">Contact Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Personal Number"
          name="contactPersonalNumber"
          placeholder="Enter a phone number 1"
          value={formData.contactPersonalNumber}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Additional Number"
          name="contactAdditionalNumber"
          placeholder="Enter a phone number 2"
          value={formData.contactAdditionalNumber}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="email"
          label="E-mail Address"
          name="contactEmail"
          placeholder="Enter an email"
          value={formData.contactEmail}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="State of residence"
          name="contactState"
          placeholder="Enter your State"
          value={formData.contactState}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="City"
          name="contactCity"
          placeholder="Enter your City"
          value={formData.contactCity}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Residential Address"
          name="contactResidental"
          placeholder="Enter a Residential Address"
          value={formData.contactResidental}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default ContactDetails;
