// EducationDetails.js

import React, { useContext } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { InputField, InputFieldProps } from "../../CustomDesignMUI/CustomMUI";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../ContextAPI/CustomContext";


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
      <Typography variant="h6" sx={{marginBottom: '20px'}}>Academic Records</Typography>

      <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Course Name"
          name="educationCourse"
          placeholder="Enter a Course Name"
          value={formData.educationCourse}
          onChange={handleInputChange}
        />

        <TextField
        inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="text"
          label="University Name"
          name="educationUniversity"
          placeholder="Enter University Name"
          value={formData.educationUniversity}
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
          name="educationAcademicStart"
          placeholder="Enter a Start of The Academic Year"
          value={formData.educationAcademicStart || " "}
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
          name="educationAcademicEnd"
          placeholder="Enter a End of The Academic Year"
          value={formData.educationAcademicEnd || " "}
          onChange={handleInputChange}
        />

        <hr/>
        <Typography variant="h6" sx={{marginBottom: '20px'}}>Professional Qualifications</Typography>

        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          label="Certificate Name"
          name="educationCertificate"
          placeholder="Enter a Certificate Name"
          value={formData.educationCertificate}
          onChange={handleInputChange}
        />

        <TextField
        inputProps={{
          sx: InputFieldProps(),
        }}
        sx={InputField}
          type="text"
          label="Complited At"
          name="educationPlace"
          placeholder="Enter a Place Name"
          value={formData.educationPlace}
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
          name="educationProfessionalStart"
          placeholder="Enter a Starting date"
          value={formData.educationProfessionalStart || " "}
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
          name="educationProfessionalEnd"
          placeholder="Enter a Ending date"
          value={formData.educationProfessionalEnd || " "}
          onChange={handleInputChange}
        />

      </form>
    </Box>
  );
};

export default EducationDetails;
