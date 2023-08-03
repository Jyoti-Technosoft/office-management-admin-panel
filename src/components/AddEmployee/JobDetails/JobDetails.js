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

const JobDetail = () => {
  const [formData, setFormData] = useState({
    department: "",
    designation: "",
    jobdescription: "",
  });

  const [formErrors, setFormErrors] = useState({
    department: "",
    designation: "",
    jobdescription: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    // Validate each field and set the error message accordingly
    const newFormErrors = { ...formErrors };
    if (name === "department" && value.trim() === "") {
      newFormErrors.department = "Department is required.";
    } else {
      newFormErrors.department = "";
    }
    if (name === "designation" && value.trim() === "") {
      newFormErrors.designation = "Designation is required.";
    } else {
      newFormErrors.designation = "";
    }
    if (name === "jobdescription" && value.trim() === "") {
      newFormErrors.jobdescription = "Job Description is required.";
    } else {
      newFormErrors.jobdescription = "";
    }

    setFormErrors(newFormErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form
    let hasErrors = false;
    const newFormErrors = {};

    // Check for errors in the form data and set the error messages
    if (formData.department.trim() === "") {
      newFormErrors.department = "Department is required.";
      hasErrors = true;
    }
    if (formData.designation.trim() === "") {
      newFormErrors.designation = "Designation is required";
      hasErrors = true;
    }
    if (formData.jobdescription.trim() === "") {
      newFormErrors.jobdescription = "Job Description is required.";
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
        department: "",
        designation: "",
        jobdescription: "",
      });

      // Reset formErrors after successful submission
      setFormErrors({
        department: "",
        designation: "",
        jobdescription: "",
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h5">Add Job Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <InputLabel sx={InputLable}>Department</InputLabel>
        <Select
          name="department"
          fullWidth={true}
          value={formData.department}
          onChange={handleChange}
          error={!!formErrors.department}
        >
          <MenuItem value="">Select a Department</MenuItem>
          <MenuItem value="HR">HR</MenuItem>
          <MenuItem value="Manager">Designer</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
          <MenuItem value="Developer">Front-end Developer</MenuItem>
          <MenuItem value="Jr.Developer">Back-end Developer</MenuItem>
        </Select>
        {formErrors.department && (
              <FormHelperText error>{formErrors.department}</FormHelperText>
            )}

        <InputLabel sx={InputLable}>Designation</InputLabel>
        <Select
          name="designation"
          fullWidth={true}
          value={formData.designation}
          onChange={handleChange}
          error={!!formErrors.designation}
        >
          <MenuItem value="">Select a designation</MenuItem>
          <MenuItem value="HR">HR</MenuItem>
          <MenuItem value="Manager">Manager</MenuItem>
          <MenuItem value="Designer">UI & UX Designer</MenuItem>
          <MenuItem value="Developer">JAVA Developer</MenuItem>
          <MenuItem value="Jr.Developer">Jr.Developer</MenuItem>
        </Select>
        {formErrors.designation && (
              <FormHelperText error>{formErrors.designation}</FormHelperText>
            )}

        <InputLabel sx={InputLable}>Job Description</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="jobdescription"
          placeholder="Enter a Job Description"
          value={formData.jobdescription}
          onChange={handleChange}
          error={!!formErrors.jobdescription}
          helperText={formErrors.jobdescription}
          multiline
          rows={5}
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

export default JobDetail;
