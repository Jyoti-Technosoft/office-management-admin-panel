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

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    add: "",
    phonenumber: "",
    dob: "",
    doj: "",
    department: "",
    designation: "",
    category: "",
    blood: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    add: "",
    phonenumber: "",
    dob: "",
    doj: "",
    department: "",
    designation: "",
    category: "",
    blood: "",
  });

  const [dateOfJoinError, setDateOfJoinError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (name === "doj" && new Date(value) < new Date(formData.dob)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        doj: "Date of Join cannot be less than Date of Birth.",
      }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, doj: "" }));
    }

    // Validate each field and set the error message accordingly
    const newFormErrors = { ...formErrors };
    if (name === "firstname" && value.trim() === "") {
      newFormErrors.firstname = "First Name is required.";
    } else {
      newFormErrors.firstname = "";
    }
    if (name === "lastname" && value.trim() === "") {
      newFormErrors.lastname = "Last Name is required.";
    } else {
      newFormErrors.lastname = "";
    }
    if (name === "email" && value.trim() === "") {
      newFormErrors.email = "Email is required.";
    } else {
      newFormErrors.email = "Enter a valid email address";
    }
    if (name === "add" && value.trim() === "") {
      newFormErrors.add = "Address is required.";
    } else {
      newFormErrors.add = "";
    }
    if (name === "phonenumber" && value.trim() === "") {
      newFormErrors.phonenumber = "Phonenumber is required.";
    } else {
      newFormErrors.phonenumber = "Enter a valid 10-digit phone number";
    }
    if (name === "doj" && value.trim() === "") {
      newFormErrors.doj = "Date of Join is required.";
    } else {
      newFormErrors.doj = "Date of Join cannot be less than Date of Birth.";
    }
    if (name === "dob" && value.trim() === "") {
      newFormErrors.dob = "Date of birth is required.";
    } else {
      newFormErrors.dob = "";
    }
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
    if (name === "category" && value.trim() === "") {
      newFormErrors.category = "Job Category is required.";
    } else {
      newFormErrors.category = "";
    }
    if (name === "blood" && value.trim() === "") {
      newFormErrors.blood = "Blood Group is required.";
    } else {
      newFormErrors.blood = "";
    }

    setFormErrors(newFormErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form
    let hasErrors = false;
    const newFormErrors = {};

    // Check for errors in the form data and set the error messages
    if (formData.firstname.trim() === "") {
      newFormErrors.firstname = "First Name is required.";
      hasErrors = true;
    }
    if (formData.lastname.trim() === "") {
      newFormErrors.lastname = "Last Name is required.";
      hasErrors = true;
    }
    if (formData.email.trim() === "") {
      newFormErrors.email = "Email is required.";
      hasErrors = true;
    }
    if (formData.add.trim() === "") {
      newFormErrors.add = "Address is required.";
      hasErrors = true;
    }
    if (formData.phonenumber.trim() === "") {
      newFormErrors.phonenumber = "Phone number is required.";
      hasErrors = true;
    }
    if (formData.doj.trim() === "") {
      newFormErrors.doj = "Date of join is required.";
      hasErrors = true;
    }
    if (formData.dob.trim() === "") {
      newFormErrors.dob = "Date of birth is required.";
      hasErrors = true;
    }
    if (formData.department.trim() === "") {
      newFormErrors.department = "Department is required.";
      hasErrors = true;
    }
    if (formData.designation.trim() === "") {
      newFormErrors.designation = "Designation is required.";
      hasErrors = true;
    }
    if (formData.category.trim() === "") {
      newFormErrors.category = "Job category is required.";
      hasErrors = true;
    }
    if (formData.blood.trim() === "") {
      newFormErrors.blood = "Blood group is required.";
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
        firstname: "",
        lastname: "",
        email: "",
        add: "",
        phonenumber: "",
        dob: "",
        doj: "",
        department: "",
        designation: "",
        category: "",
        blood: "",
      });

      // Reset formErrors after successful submission
      setFormErrors({
        firstname: "",
        lastname: "",
        email: "",
        add: "",
        phonenumber: "",
        dob: "",
        doj: "",
        department: "",
        designation: "",
        category: "",
        blood: "",
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h5">Add Personal Detail</Typography>
      <hr />

      <form onSubmit={handleSubmit}>

            <InputLabel sx={InputLable}>First Name</InputLabel>
            <TextField
              inputProps={{
                sx: InputFieldProps(),
              }}
              sx={InputField}
              type="text"
              name="firstname"
              placeholder="Enter a firstname"
              value={formData.firstname}
              onChange={handleChange}
              error={!!formErrors.firstname}
              helperText={formErrors.firstname}
            />

            <InputLabel sx={InputLable}>Last Name</InputLabel>
            <TextField
              inputProps={{
                sx: InputFieldProps(),
              }}
              sx={InputField}
              type="text"
              name="lastname"
              placeholder="Enter a lastname"
              value={formData.lastname}
              onChange={handleChange}
              error={!!formErrors.lastname}
              helperText={formErrors.lastname}
            />

            <InputLabel sx={InputLable}>E-mail Address</InputLabel>
            <TextField
              inputProps={{
                sx: InputFieldProps(),
              }}
              sx={InputField}
              type="email"
              name="email"
              placeholder="Enter an email"
              value={formData.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />

            <InputLabel sx={InputLable}>Phone Number</InputLabel>
            <TextField
              inputProps={{
                sx: InputFieldProps(),
              }}
              sx={InputField}
              type="text"
              name="phonenumber"
              placeholder="Enter a phone number"
              value={formData.phonenumber}
              onChange={handleChange}
              error={!!formErrors.phonenumber}
              helperText={formErrors.phonenumber}
            />

            <InputLabel sx={InputLable}>Date of Birth</InputLabel>
            <TextField
              inputProps={{
                sx: InputFieldProps(),
              }}
              sx={InputField}
              type="date"
              name="dob"
              placeholder="Enter birthdate"
              value={formData.dob}
              onChange={handleChange}
              error={!!formErrors.dob}
              helperText={formErrors.dob}
            />

            <InputLabel sx={InputLable}>Date of Join</InputLabel>
            <TextField
              inputProps={{
                sx: InputFieldProps(),
              }}
              sx={InputField}
              type="date"
              name="doj"
              placeholder="Enter date of join"
              value={formData.doj}
              onChange={handleChange}
              error={!!formErrors.doj || !!dateOfJoinError}
              helperText={formErrors.doj || dateOfJoinError}
            />

            <InputLabel sx={InputLable}>Address</InputLabel>
            <TextField
              inputProps={{
                sx: InputFieldProps(),
              }}
              sx={InputField}
              type="text"
              name="add"
              placeholder="Enter address"
              value={formData.add}
              onChange={handleChange}
              error={!!formErrors.add}
              helperText={formErrors.add}
            />

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

            <InputLabel sx={InputLable}>Job Category</InputLabel>
            <Select
              name="category"
              fullWidth={true}
              value={formData.category}
              onChange={handleChange}
              error={!!formErrors.category}
            >
              <MenuItem value="">Select a job category</MenuItem>
              <MenuItem value="fulltime">Full time</MenuItem>
              <MenuItem value="parttime">Part time</MenuItem>
            </Select>
            {formErrors.category && (
              <FormHelperText error>{formErrors.category}</FormHelperText>
            )}

            <InputLabel sx={InputLable}>Blood Group</InputLabel>
            <Select
              name="blood"
              fullWidth={true}
              value={formData.blood}
              onChange={handleChange}
              error={!!formErrors.blood}
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
            {formErrors.blood && (
              <FormHelperText error>{formErrors.blood}</FormHelperText>
            )}

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

export default PersonalDetails;
