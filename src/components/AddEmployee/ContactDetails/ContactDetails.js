import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import {
  InputLable,
  InputField,
  InputFieldProps,
} from "../../CustomDesignMUI/CustomMUI";

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    pnumber: "",
    enumber: "",
    email: "",
    sor: "",
    city: "",
    ra: "",
  });

  const [errors, setErrors] = useState({
    pnumber: "",
    enumber: "",
    email: "",
    sor: "",
    city: "",
    ra: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateEmail = (email) => {
    // Simple email validation using regular expression
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form data
    let newErrors = {};
    if (!formData.pnumber || formData.pnumber.length !== 10) {
      newErrors.pnumber = "Enter a valid 10-digit phone number";
    }
    if (!formData.enumber || formData.enumber.length !== 10) {
      newErrors.enumber = "Enter a valid 10-digit phone number";
    }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.sor) {
      newErrors.sor = "Enter the state of residence";
    }
    if (!formData.city) {
      newErrors.city = "Enter the city";
    }
    if (!formData.ra) {
      newErrors.ra = "Enter the residential address";
    }

    // If there are errors, update the state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with form submission
    try {
      const response = await axios.post(
        "http://localhost:8000/employeeData",
        formData
      );

      console.log(response.data);

      setFormData({
        pnumber: "",
        enumber: "",
        email: "",
        sor: "",
        city: "",
        ra: "",
      });
      setErrors({
        pnumber: "",
        enumber: "",
        email: "",
        sor: "",
        city: "",
        ra: "",
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h5">Add Contact Detail</Typography>
      <hr />
      <form onSubmit={handleSubmit}>
        <InputLabel sx={InputLable}>Personal Number</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="pnumber"
          placeholder="Enter a phone number 1"
          value={formData.pnumber}
          onChange={handleChange}
          error={!!errors.pnumber}
          helperText={errors.pnumber}
        />
        <InputLabel sx={InputLable}>Additional Number</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="enumber"
          placeholder="Enter a phone number 2"
          value={formData.enumber}
          onChange={handleChange}
          error={!!errors.enumber}
          helperText={errors.enumber}
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
          error={!!errors.email}
          helperText={errors.email}
        />
        <InputLabel sx={InputLable}>State of residence</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="sor"
          placeholder="Enter your State"
          value={formData.sor}
          onChange={handleChange}
          error={!!errors.sor}
          helperText={errors.sor}
        />
        <InputLabel sx={InputLable}>City</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="city"
          placeholder="Enter your City"
          value={formData.city}
          onChange={handleChange}
          error={!!errors.city}
          helperText={errors.city}
        />
        <InputLabel sx={InputLable}>Residential Address</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="ra"
          placeholder="Enter a Residential Address"
          value={formData.ra}
          onChange={handleChange}
          error={!!errors.ra}
          helperText={errors.ra}
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

export default ContactDetails;
