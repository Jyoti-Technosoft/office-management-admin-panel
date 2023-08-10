// Job Details
import React from "react";
import {
  Box,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { InputField, InputFieldProps } from "../../CustomDesignMUI/CustomMUI";

const JobDetails = ({ formData, onChange }) => {
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
      <Typography variant="h5">Job Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        {/* MAKE A DROPDOWN */}
        <FormControl fullWidth>
          <InputLabel id="department">Department</InputLabel>
          <Select
           inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
            labelId="department"
            id="selectdepartment"
            name="jobdepartment"
            value={formData.jobdepartment}
            label="Department"
            onChange={handleInputChange}
          >
            <MenuItem value="">Select a Department</MenuItem>
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Manager">Designer</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Developer">Front-end Developer</MenuItem>
            <MenuItem value="Jr.Developer">Back-end Developer</MenuItem>
          </Select>
        </FormControl>

        {/* MAKE A DROPDOWN */}
        <FormControl fullWidth>
          <InputLabel id="designation">Designation</InputLabel>
          <Select
           inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
            labelId="designation"
            id="selectdesignation"
            name="jobdesignation"
            value={formData.jobdesignation}
            label="Designation"
            onChange={handleInputChange}
          >
          <MenuItem value="">Select a designation</MenuItem>
          <MenuItem value="HR">HR</MenuItem>
          <MenuItem value="Manager">Manager</MenuItem>
          <MenuItem value="Designer">UI & UX Designer</MenuItem>
          <MenuItem value="Developer">JAVA Developer</MenuItem>
          <MenuItem value="Jr.Developer">Jr.Developer</MenuItem>
          </Select>
        </FormControl>


        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Job Description"
          name="jobdescription"
          placeholder="Enter a Job Description"
          multiline
          rows={5}
          value={formData.jobdescription}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default JobDetails;
