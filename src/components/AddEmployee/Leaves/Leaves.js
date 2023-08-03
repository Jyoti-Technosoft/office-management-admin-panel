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

const Leaves = () => {
  const [formData, setFormData] = useState({
    typeofleave: "",
    from: "",
    to: "",
    time: "",
    reason: "",
  });

  const [formErrors, setFormErrors] = useState({
    typeofleave: "",
    from: "",
    to: "",
    time: "",
    reason: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    // Validate each field and set the error message accordingly
    const newFormErrors = { ...formErrors };
    if (name === "typeofleave" && value.trim() === "") {
      newFormErrors.typeofleave = "Type of Leave is required.";
    } else {
      newFormErrors.typeofleave = "";
    }
    if (name === "from" && value.trim() === "") {
      newFormErrors.from = "From(date) is required.";
    } else {
      newFormErrors.from = "";
    }
    if (name === "to" && value.trim() === "") {
      newFormErrors.to = "To(date) is required.";
    } else {
      newFormErrors.to = "";
    }
    if (name === "time" && value.trim() === "") {
      newFormErrors.time = "Time is required.";
    } else {
      newFormErrors.time = "";
    }
    if (name === "reason" && value.trim() === "") {
      newFormErrors.reason = "Reason is required.";
    } else {
      newFormErrors.reason = "";
    }

    setFormErrors(newFormErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form
    let hasErrors = false;
    const newFormErrors = {};

    // Check for errors in the form data and set the error messages
    if (formData.typeofleave.trim() === "") {
      newFormErrors.typeofleave = "Type of Leave is required.";
      hasErrors = true;
    }
    if (formData.from.trim() === "") {
      newFormErrors.from = "From(date) is required";
      hasErrors = true;
    }
    if (formData.to.trim() === "") {
      newFormErrors.to = "To(date) is required.";
      hasErrors = true;
    }
    if (formData.time.trim() === "") {
      newFormErrors.time = "Time is required.";
      hasErrors = true;
    }
    if (formData.reason.trim() === "") {
      newFormErrors.reason = "Reason is required.";
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
        typeofleave: "",
        from: "",
        to: "",
        time: "",
        reason: "",
      });

      // Reset formErrors after successful submission
      setFormErrors({
        typeofleave: "",
        from: "",
        to: "",
        time: "",
        reason: "",
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <Box>
      <Typography variant="h5">Add Leaves Details</Typography>
      <hr />

      <form onSubmit={handleSubmit}>
        <InputLabel sx={InputLable}>Type of Leaves</InputLabel>
        <Select
          name="typeofleave"
          fullWidth={true}
          value={formData.typeofleave}
          onChange={handleChange}
          error={!!formErrors.typeofleave}
        >
          <MenuItem value="">Select Type of Leave</MenuItem>
          <MenuItem value="Paid">Paid</MenuItem>
          <MenuItem value="Sick">Sick</MenuItem>
          <MenuItem value="Unpaid">Unpaid</MenuItem>
          <MenuItem value="Casual">Casual</MenuItem>
        </Select>
        {formErrors.typeofleave && (
              <FormHelperText error>{formErrors.typeofleave}</FormHelperText>
            )}

        <InputLabel sx={InputLable}>From(Date)</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          name="from"
          placeholder="Enter a Date"
          value={formData.from}
          onChange={handleChange}
          error={!!formErrors.from}
          helperText={formErrors.from}
        />

        <InputLabel sx={InputLable}>To(Date)</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="date"
          name="to"
          placeholder="Enter a Date"
          value={formData.to}
          onChange={handleChange}
          error={!!formErrors.to}
          helperText={formErrors.to}
        />

        <InputLabel sx={InputLable}>Time</InputLabel>
        <Select
          name="time"
          fullWidth={true}
          value={formData.time}
          onChange={handleChange}
          error={!!formErrors.time}
        >
          <MenuItem value="">Select Type of Time</MenuItem>
          <MenuItem value="fullday">Full Day</MenuItem>
          <MenuItem value="halfday">Half Day</MenuItem>
        </Select>
        {formErrors.time && (
              <FormHelperText error>{formErrors.time}</FormHelperText>
            )}

        <InputLabel sx={InputLable}>Reason</InputLabel>
        <TextField
          inputProps={{
            sx: InputFieldProps(),
          }}
          sx={InputField}
          type="text"
          name="reason"
          placeholder="Enter a Reason"
          value={formData.reason}
          onChange={handleChange}
          error={!!formErrors.reason}
          helperText={formErrors.reason}
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

export default Leaves;
