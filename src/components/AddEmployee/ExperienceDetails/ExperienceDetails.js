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
          name="experienceCompanyName"
          placeholder="Enter a Company Name"
          value={formData.experienceCompanyName}
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
            name="experiencePosition"
            value={formData.experiencePosition}
            label="Position"
            onChange={handleInputChange}
          >
          <MenuItem value="">Select a Position</MenuItem>
          <MenuItem value="HR">HR</MenuItem>
          <MenuItem value="Manager">Designer</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
          <MenuItem value="Developer">Front-end Developer</MenuItem>
          <MenuItem value="Jr.Developer">Back-end Developer</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Course Name"
          name="experienceCourse"
          placeholder="Enter a Course Name"
          value={formData.experienceCourse}
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
          name="experienceStartDate"
          placeholder="Enter a Date of Start"
          value={formData.experienceStartDate}
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
          name="experienceEndDate"
          placeholder="Enter a Date of End"
          value={formData.experienceEndDate}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          label="Years of Experience"
          name="experienceYears"
          placeholder="Enter Years of Experience"
          value={formData.experienceYears}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default ExperienceDetails;
