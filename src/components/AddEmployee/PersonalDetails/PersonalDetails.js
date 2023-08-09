// PersonalDetails.js

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
    // Validate the form fields here if needed
  };

  return (
    <Box>
      <Typography variant="h5">Personal Details</Typography>
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
            sx: InputFieldProps()
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
        
        {/* FOR DATE OF JOIN */}
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          label="Date of Join"
          name="doj"
          placeholder="Enter a Date of Join"
          value={formData.doj}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Address"
          name="add"
          placeholder="Enter a Address"
          value={formData.add}
          onChange={handleInputChange}
        />
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
            value={formData.department}
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
            value={formData.designation}
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

        {/* MAKE A DROPDOWN */}
        <FormControl fullWidth>
          <InputLabel id="category">Job Category</InputLabel>
          <Select
           inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
            labelId="category"
            id="selectcategory"
            value={formData.category}
            label="Designation"
            onChange={handleInputChange}
          >
         <MenuItem value="">Select a job category</MenuItem>
          <MenuItem value="fulltime">Full time</MenuItem>
          <MenuItem value="parttime">Part time</MenuItem>
          </Select>
        </FormControl>

        {/* MAKE A DROPDOWN */}
        <FormControl fullWidth>
          <InputLabel id="blood">Blood Group</InputLabel>
          <Select
           inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
            labelId="blood"
            id="selectblood"
            value={formData.blood}
            label="Designation"
            onChange={handleInputChange}
          >
          <MenuItem value="">Select a blood group</MenuItem>
          <MenuItem value="ab">AB+</MenuItem>
          <MenuItem value="a">A+</MenuItem>
          <MenuItem value="b">B+</MenuItem>
          <MenuItem value="o">O+</MenuItem>
          <MenuItem value="-ab">AB-</MenuItem>
          <MenuItem value="-a">A-</MenuItem>
          <MenuItem value="-b">B-</MenuItem>
          <MenuItem value="-o">O-</MenuItem>
          </Select>
        </FormControl>

      </form>
    </Box>
  );
};

export default PersonalDetails;
