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
      <hr/>
      <form onSubmit={handleSubmit}>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Firstname"
          name="personalfirstname"
          placeholder="Enter a personalfirstname"
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
          name="personallastname"
          placeholder="Enter a lastname"
          value={formData.personallastname}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps()
          }}
          sx={InputField}
          type="email"
          label="E-mail Address"
          name="personalemail"
          placeholder="Enter a email"
          value={formData.personalemail}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          label="Phone Number"
          name="personalphonenumber"
          placeholder="Enter a Phone Number"
          value={formData.personalphonenumber}
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
          name="personaldob"
          placeholder="Enter a Date of Birth"
          value={formData.personaldob}
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
          name="personaldoj"
          placeholder="Enter a Date of Join"
          value={formData.personaldoj}
          onChange={handleInputChange}
        />

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Address"
          name="personaladd"
          placeholder="Enter a Address"
          value={formData.personaladd}
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
            name="personaldepartment"
            value={formData.personaldepartment}
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
            name="personaldesignation"
            value={formData.personaldesignation}
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
            name="personalcategory"
            value={formData.personalcategory}
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
            name="personalblood"
            value={formData.personalblood}
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
