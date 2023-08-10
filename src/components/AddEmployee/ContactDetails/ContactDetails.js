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
          name="contactpnumber"
          placeholder="Enter a phone number 1"
          value={formData.contactpnumber}
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
        />

      </form>
    </Box>
  );
};

export default ContactDetails;
