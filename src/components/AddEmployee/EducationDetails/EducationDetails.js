// EducationDetails.js

import React from "react";
import { Box, InputLabel, TextField, Typography } from "@mui/material";
import { InputField, InputFieldProps } from "../../CustomDesignMUI/CustomMUI";


const EducationDetails = ({ formData, onChange }) => {
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
      <Typography variant="h5">Education Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
      <Typography variant="h6">Academic Records</Typography>

      <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Course Name"
          name="course"
          placeholder="Enter a Course Name"
          value={formData.course}
          onChange={handleInputChange}
        />

        <TextField
        inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="text"
          label="University Name"
          name="university"
          placeholder="Enter University Name"
          value={formData.university}
          onChange={handleInputChange}
        />

         {/* FOR START OF DATE */}
         <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          label="Start of The Academic Year"
          name="start"
          placeholder="Enter a Start of The Academic Year"
          value={formData.start}
          onChange={handleInputChange}
        />
        {/* FOR END OF DATE */}
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          label="End of The Academic Year"
          name="end"
          placeholder="Enter a End of The Academic Year"
          value={formData.end}
          onChange={handleInputChange}
        />

        <hr/>
        <Typography variant="h6">Professional Qualifications</Typography>

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Certificate Name"
          name="certificate"
          placeholder="Enter a Certificate Name"
          value={formData.certificate}
          onChange={handleInputChange}
        />

        <TextField
        inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="text"
          label="Complited At"
          name="place"
          placeholder="Enter a Place Name"
          value={formData.place}
          onChange={handleInputChange}
        />

          {/* FOR START OF DATE */}
         <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          label="Start of Date"
          name="sdate"
          placeholder="Enter a Starting date"
          value={formData.start}
          onChange={handleInputChange}
        />
        {/* FOR END OF DATE */}
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          label="End of Date"
          name="edate"
          placeholder="Enter a Ending date"
          value={formData.end}
          onChange={handleInputChange}
        />

      </form>
    </Box>
  );
};

export default EducationDetails;
