import React, { useState } from "react";
import axios from "axios";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import {
  InputLable,
  InputField,
  InputFieldProps,
} from "../../CustomDesignMUI/CustomMUI";
const FinancialDetails = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    add: "",
    phonenumber: "",
    dob: "",
    relation: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    add: "",
    phonenumber: "",
    dob: "",
    relation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    // Validate each field and set the error message accordingly
    const newFormErrors = { ...formErrors };
    if (name === "firstname" && value.trim() === "") {
      newFormErrors.firstname = "Firstname is required.";
    } else {
      newFormErrors.firstname = "";
    }
    if (name === "lastname" && value.trim() === "") {
      newFormErrors.lastname = "Lastname is required.";
    } else {
      newFormErrors.lastname = "";
    }
    if (name === "email" && value.trim() === "") {
      newFormErrors.email = "Email is required.";
    } else {
      newFormErrors.email = "";
    }
    if (name === "add" && value.trim() === "") {
      newFormErrors.add = "Address is required.";
    } else {
      newFormErrors.add = "";
    }
    if (name === "phonenumber" && value.trim() === "") {
      newFormErrors.phonenumber = "Phone Number is required.";
    } else {
      newFormErrors.phonenumber = "";
    }
    if (name === "dob" && value.trim() === "") {
      newFormErrors.dob = "Date of Birth is required.";
    } else {
      newFormErrors.dob = "";
    }
    if (name === "relation" && value.trim() === "") {
      newFormErrors.relation = "Relation is required.";
    } else {
      newFormErrors.relation = "";
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
      newFormErrors.firstname = "Firstname is required.";
      hasErrors = true;
    }
    if (formData.lastname.trim() === "") {
      newFormErrors.lastname = "Lastname is required.";
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
      newFormErrors.phonenumber = "Phone Number is required.";
      hasErrors = true;
    }
    if (formData.dob.trim() === "") {
      newFormErrors.dob = "Date of Birth is required.";
      hasErrors = true;
    }
    if (formData.relation.trim() === "") {
      newFormErrors.relation = "Relation is required.";
      hasErrors = true;
    }

    setFormErrors(newFormErrors);

    if (hasErrors) {
      return;
    }

    try {
        // Make the POST request to the JSON server using Axios
        const response = await axios.post("http://localhost:8000/employeeData", formData);
  
        // Handle the response                      
        console.log("Data posted successfully:", response.data);
  
        // Clear the form fields after successful submission
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          add: "",
          phonenumber: "",
          dob: "",
          relation: "",
        });
  
        // Reset formErrors after successful submission
        setFormErrors({
          firstname: "",
          lastname: "",
          email: "",
          add: "",
          phonenumber: "",
          dob: "",
          relation: "",
        });
      } catch (error) {
        console.error("Error adding data:", error);
      }
    };

  return (
    <Box>
      <Typography variant="h5">Add Family Detail</Typography>
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

        <InputLabel sx={InputLable}>Relationship</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="relation"
          placeholder="Enter a Relationship"
          value={formData.relation}
          onChange={handleChange}
          error={!!formErrors.relation}
          helperText={formErrors.relation}
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
export default FinancialDetails;
