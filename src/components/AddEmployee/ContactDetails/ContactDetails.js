// ContactDetails.js

import React from "react";
import {
  Box,
  TextField,
  Typography,
} from "@mui/material";
import {
  InputField,
  InputFieldProps,
} from "../../CustomDesignMUI/CustomMUI";

const ContactDetails = ({ formData, onChange }) => {
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
          name="contactpnumber"
          placeholder="Enter a phone number 1"
          value={formData.contactpnumber}
          onChange={handleInputChange}
        />
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Additional Number"
          name="contactenumber"
          placeholder="Enter a phone number 2"
          value={formData.contactenumber}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="email"
          label="E-mail Address"
          name="contactemail"
          placeholder="Enter an email"
          value={formData.contactemail}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="State of residence"
          name="contactsor"
          placeholder="Enter your State"
          value={formData.contactsor}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="City"
          name="contactcity"
          placeholder="Enter your City"
          value={formData.contactcity}
          onChange={handleInputChange}

        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Residential Address"
          name="contactra"
          placeholder="Enter a Residential Address"
          value={formData.contactra}
          onChange={handleInputChange}

        />

      </form>
    </Box>
  );
};

export default ContactDetails;
