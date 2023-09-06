import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import {
  InputFieldPropsForm,
  viewProfileSubtitle,
} from "../../CustomDesignMUI/CustomMUI";
import { Edit } from "@mui/icons-material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";

const DisplayContact = (props) => {
  const { employeeCall, saveNextButtonCallback, nextButtonCallback } = props;
  console.log("lsdlksd", nextButtonCallback);
  // DATA CALLING START
  const { setEditable, editable, themeChange } = useContext(GlobalContext);
  const [editedEmployeeData, setEditedEmployeeData] = useState({
    ...employeeCall,
  });
  const [originalEmployeeData, setOriginalEmployeeData] = useState({
    ...employeeCall,
  });

  const editEmployee = () => {
    setEditable(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const cancelEdit = () => {
    setEditedEmployeeData({ ...originalEmployeeData });
    setEditable(false);
  };

  // --
  const [errors, setErrors] = useState({
    contactPersonalNumber: "",
    contactAdditionalNumber: "",
    contactEmail: "",
    contactState: "",
    contactCity: "",
    contactResidental: "",
  });

  const validateForm = () => {
    const newErrors = {};
    // FOR PersonalNumber
    if (!editedEmployeeData.contactPersonalNumber) {
      newErrors.contactPersonalNumber = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(editedEmployeeData.contactPersonalNumber)) {
      newErrors.contactPersonalNumber = "Phone number is not valid";
    }
    // FOR AdditionalNumber
    if (!editedEmployeeData.contactAdditionalNumber) {
      newErrors.contactAdditionalNumber = "Phone number is required";
    } else if (
      !/^[6-9]\d{9}$/.test(editedEmployeeData.contactAdditionalNumber)
    ) {
      newErrors.contactAdditionalNumber = "Phone number is not valid";
    }
    // FOR ContactEmail
    if (!editedEmployeeData.contactEmail) {
      newErrors.contactEmail = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(
        editedEmployeeData.contactEmail
      )
    ) {
      newErrors.contactEmail = "Invalid email format";
    }
    // FOR State
    if (!editedEmployeeData.contactState) {
      newErrors.contactState = "State is required";
    }
    // FOR City
    if (!editedEmployeeData.contactCity) {
      newErrors.contactCity = "City is required";
    }
    // FOR Residental address
    if (!editedEmployeeData.contactResidental) {
      newErrors.contactResidental = "Residental address is required";
    }

    setErrors(newErrors);

    // Check if there are any errors
    return Object.keys(newErrors).length === 0;
  };
  // END --

  return (
    <Box
      sx={{
        marginTop: "10px",
        marginLeft: "9px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Contact Details
          </Typography>
        </Box>
        {/* EDIT AND DELETE BUTTONS */}
        <Box>
          {employeeCall?.id ? (
            <Box
              sx={
                {
                  // display: "flex",
                  // justifyContent: "flex-end",
                  // marginTop: "-2px",
                }
              }
            >
              <IconButton
                disabled={editable}
                onClick={editEmployee}
                sx={{ color: "var( --third-color)" }}
              >
                <Edit />
              </IconButton>
            </Box>
          ) : null}
        </Box>
      </Box>
      <hr />
      {/* <Grid container> */}
      <Box sx={{ marginBottom: "25px", paddingTop: "20px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>Phone Number</Typography>
          <TextField
            inputProps={{
              sx: InputFieldPropsForm(),
            }}
            sx={{
              width: "80%",
              height: "55px",
              background: themeChange ? "#142840" : "#ffffff",
              ".Mui-disabled": {
                opacity: "1",
                WebkitTextFillColor: "var(--secondary-text-color) !important",
              },
              ".MuiOutlinedInput-input": {
                color: "var(--secondary-text-color) !important",
              },
              ".MuiTypography-root": {
                color: "var(--secondary-text-color) !important",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
            name="contactPersonalNumber"
            value={editedEmployeeData.contactPersonalNumber}
            disabled={!editable}
            onChange={handleInputChange}
          />
          <Typography sx={{ color: "red" }}>
            {errors.contactPersonalNumber}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>Additional Number</Typography>
          <TextField
            inputProps={{
              sx: InputFieldPropsForm(),
            }}
            sx={{
              width: "80%",
              height: "55px",
              background: themeChange ? "#142840" : "#ffffff",
              ".Mui-disabled": {
                opacity: "1",
                WebkitTextFillColor: "var(--secondary-text-color) !important",
              },
              ".MuiOutlinedInput-input": {
                color: "var(--secondary-text-color) !important",
              },
              ".MuiTypography-root": {
                color: "var(--secondary-text-color) !important",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
            name="contactAdditionalNumber"
            value={editedEmployeeData.contactAdditionalNumber}
            disabled={!editable}
            onChange={handleInputChange}
          />
          <Typography sx={{ color: "red" }}>
            {errors.contactAdditionalNumber}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>E-mail Address</Typography>
          <TextField
            inputProps={{
              sx: InputFieldPropsForm(),
            }}
            sx={{
              width: "80%",
              height: "55px",
              background: themeChange ? "#142840" : "#ffffff",
              ".Mui-disabled": {
                opacity: "1",
                WebkitTextFillColor: "var(--secondary-text-color) !important",
              },
              ".MuiOutlinedInput-input": {
                color: "var(--secondary-text-color) !important",
              },
            }}
            name="contactEmail"
            value={editedEmployeeData.contactEmail}
            disabled={!editable}
            onChange={handleInputChange}
          />
          <Typography sx={{ color: "red" }}>{errors.contactEmail}</Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>State of residence</Typography>
          <TextField
            inputProps={{
              sx: InputFieldPropsForm(),
            }}
            sx={{
              width: "80%",
              height: "55px",
              background: themeChange ? "#142840" : "#ffffff",
              ".Mui-disabled": {
                opacity: "1",
                WebkitTextFillColor: "var(--secondary-text-color) !important",
              },
              ".MuiOutlinedInput-input": {
                color: "var(--secondary-text-color) !important",
              },
            }}
            name="contactState"
            value={editedEmployeeData.contactState}
            disabled={!editable}
            onChange={handleInputChange}
          />
          <Typography sx={{ color: "red" }}>{errors.contactState}</Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>City</Typography>
          <TextField
            inputProps={{
              sx: InputFieldPropsForm(),
            }}
            sx={{
              width: "80%",
              height: "55px",
              background: themeChange ? "#142840" : "#ffffff",
              ".Mui-disabled": {
                opacity: "1",
                WebkitTextFillColor: "var(--secondary-text-color) !important",
              },
              ".MuiOutlinedInput-input": {
                color: "var(--secondary-text-color) !important",
              },
            }}
            name="contactCity"
            value={editedEmployeeData.contactCity}
            disabled={!editable}
            onChange={handleInputChange}
          />
          <Typography sx={{ color: "red" }}>{errors.contactCity}</Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "21px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>Residential Address</Typography>
          <TextField
            inputProps={{
              sx: InputFieldPropsForm(),
            }}
            sx={{
              width: "80%",
              height: "55px",
              background: themeChange ? "#142840" : "#ffffff",
              ".Mui-disabled": {
                opacity: "1",
                WebkitTextFillColor: "var(--secondary-text-color) !important",
              },
              ".MuiOutlinedInput-input": {
                color: "var(--secondary-text-color) !important",
              },
            }}
            name="contactResidental"
            value={editedEmployeeData.contactResidental}
            disabled={!editable}
            onChange={handleInputChange}
          />
          <Typography sx={{ color: "red" }}>
            {errors.contactResidental}
          </Typography>
        </Box>
      </Box>
      <Box>
        {editable && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              marginTop: "30px",
              padding: "5px",
            }}
          >
            <Button
              sx={{
                fontWeight: "bold",
                color: "gray",
              }}
              onClick={cancelEdit}
            >
              Cancel
            </Button>
            <Button
              sx={{
                fontWeight: "bold",
                color: "var(--primary-color)",
              }}
              onClick={() => {
                if (validateForm()) {
                  nextButtonCallback(editedEmployeeData);
                }
              }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              sx={{
                fontWeight: "bold",
                backgroundColor: "var(--secondary-color)",
                color: "#ffffff",
              }}
              onClick={() => {
                if (validateForm()) {
                  saveNextButtonCallback(editedEmployeeData);
                }
              }}
            >
              Save & Next
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DisplayContact;
