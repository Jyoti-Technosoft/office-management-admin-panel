import React, { useState } from "react";
import { Box, Typography, TextField, Button, InputLabel } from "@mui/material";
import {
  InputLable,
  InputField,
  InputFieldProps,
} from "../../CustomDesignMUI/CustomMUI";
import axios from "axios";

const EducationDetails = () => {
  const [formData, setFormData] = useState({
    course: "",
    college: "",
    startingyear: "",
    endingyear: "",
    certificatename: "",
    place: "",
    startdate: "",
    enddate: "",
  });

  const [formErrors, setFormErrors] = useState({
    course: "",
    college: "",
    startingyear: "",
    endingyear: "",
    certificatename: "",
    place: "",
    startdate: "",
    enddate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "startdate" && new Date(value) > new Date(formData.enddate)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        startdate: "Start date cannot be after End date.",
      }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, startdate: "" }));
    }

    if (name === "enddate" && new Date(value) < new Date(formData.startdate)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        enddate: "End date cannot be before Start date.",
      }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, enddate: "" }));
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.course.trim()) {
      errors.course = "Course Name is required";
    }
    if (!formData.college.trim()) {
      errors.college = "College Name is required";
    }
    if (!formData.startingyear.trim()) {
      errors.startingyear = "Start of The Academic Year is required";
    }
    if (!formData.endingyear.trim()) {
      errors.endingyear = "End of The Academic Year is required";
    }
    if (!formData.certificatename.trim()) {
      errors.certificatename = "Certificate Name is required";
    }
    if (!formData.place.trim()) {
      errors.place = "Complited placename is required";
    }
    if (!formData.startdate.trim()) {
      errors.startdate = "Start Date is required";
    }
    if (!formData.enddate.trim()) {
      errors.enddate = "End Date is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Make the POST request to the JSON server using Axios
      axios
        .post("http://localhost:8000/employeeData", formData)
        .then((response) => {
          console.log("Data posted successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  };

  return (
    <Box>
      <Typography variant="h5">Add Education Detail</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Academic Records</Typography>
        <InputLabel sx={InputLable}>Course Name</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="course"
          placeholder="Enter a Course name"
          value={formData.course}
          onChange={handleChange}
          error={!!formErrors.course}
          helperText={formErrors.course}
        />

        <InputLabel sx={InputLable}>College Name</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="college"
          placeholder="Enter a College name"
          value={formData.college}
          onChange={handleChange}
          error={!!formErrors.college}
          helperText={formErrors.college}
        />

        <InputLabel sx={InputLable}>Start of The Academic Year</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          name="startingyear"
          placeholder="Enter a Start of The Academic Year"
          value={formData.startingyear}
          onChange={handleChange}
          error={!!formErrors.startingyear}
          helperText={formErrors.startingyear}
        />

        <InputLabel sx={InputLable}>End of The Academic Year</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          name="endingyear"
          placeholder="Enter an End of The Academic Year"
          value={formData.endingyear}
          onChange={handleChange}
          error={!!formErrors.endingyear}
          helperText={formErrors.endingyear}
        />

        <hr />
        <Typography variant="h6">Professional Qualifications</Typography>
        <InputLabel sx={InputLable}>Certificate Name</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="certificatename"
          placeholder="Enter a Certificate name"
          value={formData.certificatename}
          onChange={handleChange}
          error={!!formErrors.certificatename}
          helperText={formErrors.certificatename}
        />

        <InputLabel sx={InputLable}>Complited At</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="place"
          placeholder="Enter a Place name"
          value={formData.place}
          onChange={handleChange}
          error={!!formErrors.place}
          helperText={formErrors.place}
        />

        <InputLabel sx={InputLable}>Date of Start</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          name="startdate"
          value={formData.startdate}
          onChange={handleChange}
          error={!!formErrors.startdate}
          helperText={formErrors.startdate}
        />

        <InputLabel sx={InputLable}>Date of End</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          name="enddate"
          value={formData.enddate}
          onChange={handleChange}
          error={!!formErrors.enddate}
          helperText={formErrors.enddate}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: "20px", textTransform: "capitalize" }}
          color="primary"
          size="medium"
        >
          Add Detail
        </Button>
      </form>
    </Box>
  );
};

export default EducationDetails;
