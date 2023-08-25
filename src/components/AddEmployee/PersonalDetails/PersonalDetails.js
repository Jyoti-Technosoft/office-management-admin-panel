import React from "react";
import { Box, TextField, Typography, InputLabel , FormControl, Select, MenuItem } from "@mui/material";
import { InputField, InputFieldProps } from "../../CustomDesignMUI/CustomMUI";

const PersonalDetails = ({ formData, onChange }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Box>
      <Typography variant="h5">Personal Details</Typography>
      <hr/>
      <form onSubmit={handleSubmit}>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Firstname"
          name="personalFirstname"
          placeholder="Enter a personalfirstname"
          value={formData.personalFirstname}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Lastname"
          name="personalLastname"
          placeholder="Enter a lastname"
          value={formData.personalLastname}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          label="Date of Birth"
          name="personalDob"
          placeholder="Enter a Date of Birth"
          value={formData.personalDob || " "}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Address"
          name="personalAddress"
          placeholder="Enter a Address"
          value={formData.personalAddress}
          onChange={handleInputChange}
        />

        <FormControl fullWidth>
          <InputLabel id="blood">Blood Group</InputLabel>
          <Select
           inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
            labelId="blood"
            id="selectblood"
            name="personalBlood"
            value={formData.personalBlood}
            label="Designation"
            onChange={handleInputChange}
          >
          <MenuItem value="">Select a blood group</MenuItem>
          <MenuItem value="ab+">AB+</MenuItem>
          <MenuItem value="a+">A+</MenuItem>
          <MenuItem value="b+">B+</MenuItem>
          <MenuItem value="o+">O+</MenuItem>
          <MenuItem value="ab-">AB-</MenuItem>
          <MenuItem value="a-">A-</MenuItem>
          <MenuItem value="b-">B-</MenuItem>
          <MenuItem value="o-">O-</MenuItem>
          </Select>
        </FormControl>

      </form>
    </Box>
  );
};
export default PersonalDetails;
