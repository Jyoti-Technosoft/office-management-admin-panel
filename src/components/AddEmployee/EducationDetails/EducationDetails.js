// EducationDetails.js

import React from "react";
import { Box, TextField, Typography } from "@mui/material";
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
          name="educationcourse"
          placeholder="Enter a Course Name"
          value={formData.educationcourse}
          onChange={handleInputChange}
        />

        <TextField
        inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="text"
          label="University Name"
          name="educationuniversity"
          placeholder="Enter University Name"
          value={formData.educationuniversity}
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
          name="educationacademicstart"
          placeholder="Enter a Start of The Academic Year"
          value={formData.educationacademicstart}
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
          name="educationacademicend"
          placeholder="Enter a End of The Academic Year"
          value={formData.educationacademicend}
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
          name="educationcertificate"
          placeholder="Enter a Certificate Name"
          value={formData.educationcertificate}
          onChange={handleInputChange}
        />

        <TextField
        inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="text"
          label="Complited At"
          name="educationplace"
          placeholder="Enter a Place Name"
          value={formData.educationplace}
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
          name="educationprofessionalstart"
          placeholder="Enter a Starting date"
          value={formData.educationprofessionalstart}
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
          name="educationprofessionalend"
          placeholder="Enter a Ending date"
          value={formData.educationprofessionalend}
          onChange={handleInputChange}
        />

      </form>
    </Box>
  );
};

export default EducationDetails;
