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
    bankname: "",
    acno: "",
    acname: "",
    ifsc: "",
    branchname: "",
  });

  const [formErrors, setFormErrors] = useState({
    bankname: "",
    acno: "",
    acname: "",
    ifsc: "",
    branchname: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    // Validate each field and set the error message accordingly
    const newFormErrors = { ...formErrors };
    if (name === "bankname" && value.trim() === "") {
      newFormErrors.bankname = "Bank Name is required.";
    } else {
      newFormErrors.bankname = "";
    }
    if (name === "acno" && value.trim() === "") {
      newFormErrors.acno = "Account number is required.";
    } else {
      newFormErrors.acno = "";
    }
    if (name === "acname" && value.trim() === "") {
      newFormErrors.acname = "Account name is required.";
    } else {
      newFormErrors.acname = "";
    }
    if (name === "branchname" && value.trim() === "") {
      newFormErrors.branchname = "Branch name is required.";
    } else {
      newFormErrors.branchname = "";
    }
    if (name === "ifsc" && value.trim() === "") {
      newFormErrors.ifsc = "IFSC Code is required.";
    } else {
      newFormErrors.ifsc = "";
    }
    
    setFormErrors(newFormErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form
    let hasErrors = false;
    const newFormErrors = {};

    // Check for errors in the form data and set the error messages
    if (formData.bankname.trim() === "") {
      newFormErrors.bankname = "Bank Name is required.";
      hasErrors = true;
    }
    if (formData.acno.trim() === "") {
      newFormErrors.acno = "Account number is required.";
      hasErrors = true;
    }
    if (formData.acname.trim() === "") {
      newFormErrors.acname = "Account name is required.";
      hasErrors = true;
    }
    if (formData.ifsc.trim() === "") {
      newFormErrors.ifsc = "IFSC Code is required.";
      hasErrors = true;
    }
    if (formData.branchname.trim() === "") {
      newFormErrors.branchname = "Branch name is required.";
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
        bankname: "",
        acno: "",
        acname: "",
        ifsc: "",
        branchname: "",
      });

      // Reset formErrors after successful submission
      setFormErrors({
        bankname: "",
        acno: "",
        acname: "",
        ifsc: "",
        branchname: "",
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h5">Add Financial Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <InputLabel sx={InputLable}>Bank Name</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="bankname"
          placeholder="Enter a Bank Name"
          value={formData.bankname}
          onChange={handleChange}
          error={!!formErrors.bankname}
          helperText={formErrors.bankname}
        />

        <InputLabel sx={InputLable}>Account No</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="number"
          name="acno"
          placeholder="Enter a Account Number"
          value={formData.acno}
          onChange={handleChange}
          error={!!formErrors.acno}
          helperText={formErrors.acno}
        />

        <InputLabel sx={InputLable}>Account Name</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="acname"
          placeholder="Enter a Account Name"
          value={formData.acname}
          onChange={handleChange}
          error={!!formErrors.acname}
          helperText={formErrors.acname}
        />

        <InputLabel sx={InputLable}>IFSC No</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="ifsc"
          placeholder="Enter a IFSC Code"
          value={formData.ifsc}
          onChange={handleChange}
          error={!!formErrors.ifsc}
          helperText={formErrors.ifsc}
        />

        <InputLabel sx={InputLable}>Branch Name</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="branchname"
          placeholder="Enter a Branch Name"
          value={formData.branchname}
          onChange={handleChange}
          error={!!formErrors.branchname}
          helperText={formErrors.branchname}
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
