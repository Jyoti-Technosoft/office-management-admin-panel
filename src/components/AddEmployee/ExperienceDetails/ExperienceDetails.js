import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import {
  InputLable,
  InputField,
  InputFieldProps,
} from "../../CustomDesignMUI/CustomMUI";

const ExperienceDetails = () => {
  const [formData, setFormData] = useState({
    cname: "",
    position: "",
    coursename: "",
    start: "",
    end: "",
  });

  const [formErrors, setFormErrors] = useState({
    cname: "",
    position: "",
    coursename: "",
    start: "",
    end: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    // Validate each field and set the error message accordingly
    const newFormErrors = { ...formErrors };
    if (name === "cname" && value.trim() === "") {
      newFormErrors.cname = "Company Name is required.";
    } else {
      newFormErrors.cname = "";
    }
    if (name === "position" && value.trim() === "") {
      newFormErrors.position = "Position is required.";
    } else {
      newFormErrors.position = "";
    }
    if (name === "coursename" && value.trim() === "") {
      newFormErrors.coursename = "Course name is required.";
    } else {
      newFormErrors.coursename = "";
    }
    if (name === "start" && value.trim() === "") {
      newFormErrors.start = "Strat of date is required.";
    } else {
      newFormErrors.start = "";
    }
    if (name === "end" && value.trim() === "") {
      newFormErrors.end = "End of date is required.";
    } else {
      newFormErrors.end = "";
    }

    setFormErrors(newFormErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form
    let hasErrors = false;
    const newFormErrors = {};

    // Check for errors in the form data and set the error messages
    if (formData.cname.trim() === "") {
      newFormErrors.cname = "Company Name is required.";
      hasErrors = true;
    }
    if (formData.position.trim() === "") {
      newFormErrors.position = "Position is required.";
      hasErrors = true;
    }
    if (formData.coursename.trim() === "") {
      newFormErrors.coursename = "Course name is required.";
      hasErrors = true;
    }
    if (formData.start.trim() === "") {
      newFormErrors.start = "Start of date is required.";
      hasErrors = true;
    }
    if (formData.end.trim() === "") {
      newFormErrors.end = "End of data is required.";
      hasErrors = true;
    }

    setFormErrors(newFormErrors);

    if (hasErrors) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/employeeData",
        formData
      );

      console.log(response.data);

      setFormData({
        cname: "",
        position: "",
        coursename: "",
        start: "",
        end: "",
      });

      // Reset formErrors after successful submission
      setFormErrors({
        cname: "",
        position: "",
        coursename: "",
        start: "",
        end: "",
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h5">Add Experience Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <InputLabel sx={InputLable}>Comapany Name</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="cname"
          placeholder="Enter a Company Name"
          value={formData.cname}
          onChange={handleChange}
          error={!!formErrors.cname}
          helperText={formErrors.cname}
        />

        <InputLabel sx={InputLable}>Position</InputLabel>
        <Select
          name="position"
          fullWidth={true}
          value={formData.position}
          onChange={handleChange}
          error={!!formErrors.position}
        >
          <MenuItem value="">Select a Department</MenuItem>
          <MenuItem value="HR">HR</MenuItem>
          <MenuItem value="Manager">Designer</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
          <MenuItem value="Developer">Front-end Developer</MenuItem>
          <MenuItem value="Jr.Developer">Back-end Developer</MenuItem>
        </Select>
        {formErrors.position && (
              <FormHelperText error>{formErrors.position}</FormHelperText>
            )}

        <InputLabel sx={InputLable}>Course Name</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="coursename"
          placeholder="Enter a Course Name"
          value={formData.coursename}
          onChange={handleChange}
          error={!!formErrors.coursename}
          helperText={formErrors.coursename}
        />

        <InputLabel sx={InputLable}>Start of Date</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          name="start"
          placeholder="Enter a Start of Date"
          value={formData.start}
          onChange={handleChange}
          error={!!formErrors.start}
          helperText={formErrors.start}
        />

        <InputLabel sx={InputLable}>End of Date</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          name="end"
          placeholder="Enter a End of Date"
          value={formData.end}
          onChange={handleChange}
          error={!!formErrors.end}
          helperText={formErrors.end}
        />

        {/* Button to switch to the EmpContact form */}

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

export default ExperienceDetails;
