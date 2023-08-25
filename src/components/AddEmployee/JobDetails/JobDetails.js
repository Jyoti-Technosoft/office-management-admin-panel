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
  };

  return (
    <Box>
      <Typography variant="h5">Job Details</Typography>
      <hr />
      <form onSubmit={handleSubmit}>

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          label="Date of Join"
          name="jobDoj"
          placeholder="Enter a Date of Join"
          value={formData.jobDoj || " "}
          onChange={handleInputChange}
        />

        <FormControl fullWidth>
          <InputLabel id="department">Department</InputLabel>
          <Select
            inputProps={{
              sx: InputFieldProps(),
            }}
            sx={InputField}
            labelId="department"
            id="selectdepartment"
            name="jobDepartment"
            value={formData.jobDepartment}
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

        <FormControl fullWidth>
          <InputLabel id="designation">Designation</InputLabel>
          <Select
            inputProps={{
              sx: InputFieldProps(),
            }}
            sx={InputField}
            labelId="designation"
            id="selectdesignation"
            name="jobDesignation"
            value={formData.jobDesignation}
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

        <FormControl fullWidth>
          <InputLabel id="category">Job Category</InputLabel>
          <Select
            inputProps={{
              sx: InputFieldProps(),
            }}
            sx={InputField}
            labelId="category"
            id="selectcategory"
            name="jobCategory"
            value={formData.jobCategory}
            label="Designation"
            onChange={handleInputChange}
          >
            <MenuItem value="">Select a job category</MenuItem>
            <MenuItem value="fulltime">Full time</MenuItem>
            <MenuItem value="parttime">Part time</MenuItem>
          </Select>
        </FormControl>

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Job Responsibilities"
          name="jobResponsibilities"
          placeholder="Enter a Job Responsibilities"
          multiline
          rows={5}
          value={formData.jobResponsibilities}
          onChange={handleInputChange}
        />
      </form>
    </Box>
  );
};

export default JobDetails;
