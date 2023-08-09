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

  return (
    <Box>
      <Typography variant="h5">Contact Details</Typography>
      <hr />

      <form>
        <TextField
         inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="text"
          label="Personal Number"
          name="pnumber"
          placeholder="Enter a phone number 1"
          value={formData.pnumber}
        />
     
      <TextField
         inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="text"
          label="Additional Number"
          name="enumber"
          placeholder="Enter a phone number 2"
          value={formData.enumber}
        />

      <TextField
         inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="email"
          label="E-mail Address"
          name="email"
          placeholder="Enter an email"
          value={formData.email}
        />

      <TextField
         inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="text"
          label="State of residence"
          name="sor"
          placeholder="Enter your State"
          value={formData.sor}
        />

<TextField
         inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="text"
          label="City"
          name="city"
          placeholder="Enter your City"
          value={formData.city}
        />

<TextField
         inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="text"
          label="Residential Address"
          name="ra"
          placeholder="Enter a Residential Address"
          value={formData.ra}
        />

      </form>
    </Box>
  );
};

export default ContactDetails;
