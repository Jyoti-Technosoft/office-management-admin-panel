// ExperienceDetails.js

import React from "react";
import { Box, Select, TextField, MenuItem, FormControl, InputLabel, Typography } from "@mui/material";
import { InputField, InputFieldProps } from "../../CustomDesignMUI/CustomMUI";

const ExperienceDetails = ({ formData, onChange }) => {
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
      <Typography variant="h5">Experience Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Company Name"
          name="experiencecname"
          placeholder="Enter a Company Name"
          value={formData.experiencecname}
          onChange={handleInputChange}
        />

        {/* MAKE A DROPDOWN */}
        <FormControl fullWidth>
          <InputLabel id="position">Position</InputLabel>
          <Select
           inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
            labelId="position"
            id="selectposition"
            name="experienceposition"
            value={formData.experienceposition}
            label="Position"
            onChange={handleInputChange}
          >
          <MenuItem value="">Select a Position</MenuItem>
          <MenuItem value="HR">HR</MenuItem>
          <MenuItem value="Manager">Designer</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
          <MenuItem value="Developer">Front-end Developer</MenuItem>
          <MenuItem value="Jr.Developer">Back-end Developer</MenuItem>
          </Select>
        </FormControl>

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Course Name"
          name="experiencecourse"
          placeholder="Enter a Course Name"
          value={formData.experiencecourse}
          onChange={handleInputChange}
        />

        {/* FOR START OF DATE */}
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          label="Date of Start"
          name="experiencestartdate"
          placeholder="Enter a Date of Start"
          value={formData.experiencestartdate}
          onChange={handleInputChange}
        />
        {/* FOR END OF DATE */}
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          label="Date of End"
          name="experienceenddate"
          placeholder="Enter a Date of End"
          value={formData.experienceenddate}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          label="Years of Experience"
          name="experience"
          placeholder="Enter Years of Experience"
          value={formData.experience}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default ExperienceDetails;
