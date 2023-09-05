import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Zoom,
  Button,
  TextField,
  MenuItem,
  Select,
  InputAdornment,
} from "@mui/material";
import ProfileImg from "../../../assets/img/adminIcon.svg";
import { viewProfileSubtitle } from "../../CustomDesignMUI/CustomMUI";
import { Delete, Edit } from "@mui/icons-material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import CustomDialogBox from "../../ReusableComponents/CustomDialogBox";
import { InputFieldPropsForm } from "../../CustomDesignMUI/CustomMUI";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
// import styled from "@emotion/styled";

// const CustomTextField = styled(TextField)({
//   /* Remove border from all TextField components */
//   ".MuiOutlinedInput-root": {
//     border: "none !important",
//   },

//   /* Remove border for all TextField components */
//   ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ": {
//     border: "none !important",
//   },

//   /* Remove border when focused for all TextField components */
//   ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
//     border: "none !important",
//   },
// });

const DisplayPersonal = (props) => {
  const { employeeCall, saveNextButtonCallback, nextButtonCallback } = props;
  // DATA CALLING START
  const { setEditable, editable, isValid } = useContext(GlobalContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [editedEmployeeData, setEditedEmployeeData] = useState({
    ...employeeCall,
  });
  const [originalEmployeeData, setOriginalEmployeeData] = useState({
    ...employeeCall,
  });

  const editEmployee = () => {
    console.log("Entering edit mode");
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
    personalFirstname: "",
    jobDepartment: "",
    jobDesignation: "",
    jobCategory: "",
    jobDoj: "",
    personalDob: "",
    personalBlood: "",
    contactPersonalNumber: "",
  });

  const validateForm = () => {
    const newErrors = {};
    // FOR NAME
    if (!editedEmployeeData.personalFirstname) {
      newErrors.personalFirstname = "Name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(editedEmployeeData.personalFirstname)) {
      newErrors.personalFirstname =
        "Name should contain only alphabetic characters";
    }
    // FOR DEPARTMENT
    if (!editedEmployeeData.jobDepartment) {
      newErrors.jobDepartment = "Department is required";
    }
    // FOR DESIGNATION
    if (!editedEmployeeData.jobDesignation) {
      newErrors.jobDesignation = "Designation is required";
    }
    // FOR JOB CATEGORY
    if (!editedEmployeeData.jobCategory) {
      newErrors.jobCategory = "Job category is required";
    }
    // FOR DATE OF JOIN
    if (!editedEmployeeData.jobDoj) {
      newErrors.jobDoj = "Date of join is required";
    }
    // FOR DATE OF BIRTH
    if (!editedEmployeeData.personalDob) {
      newErrors.personalDob = "Date of birth is required";
    } else if (editedEmployeeData.personalDob > editedEmployeeData.jobDoj) {
      newErrors.personalDob = "Date of Birth cannot be after Date of Joining";
    }
    // FOR BLOOD GROUP
    if (!editedEmployeeData.personalBlood) {
      newErrors.personalBlood = "Blood group is required";
    }
    // FOR PHONE NUMBER
    if (!editedEmployeeData.contactPersonalNumber) {
      newErrors.contactPersonalNumber = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(editedEmployeeData.contactPersonalNumber)) {
      newErrors.contactPersonalNumber = "Phone number is not valid";
    }

    setErrors(newErrors);

    // Check if there are any errors
    return Object.keys(newErrors).length === 0;
  };

  // END --

  return (
    <Box>
      {/* EDIT AND DELETE BUTTONS */}
      {employeeCall?.id && !editable ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "-2px",
            color: "var(--secondary-text-color)",
          }}
        >
          <Tooltip
            title="Edit Data"
            arrow
            disableInteractive
            TransitionComponent={Zoom}
          >
            <IconButton
              onClick={editEmployee}
              sx={{ color: "var( --third-color)" }}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Delete Data"
            arrow
            disableInteractive
            TransitionComponent={Zoom}
          >
            <IconButton
              onClick={() => setOpenDialog(true)}
              sx={{ color: "var( --third-color)" }}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      ) : null}

      {/* {/ FOR PROFILE IMAGES /} */}
      <Box>
        <Box>
          <img width={"120px"} src={ProfileImg} alt="profile" />
          <Box>
            {employeeCall?.id ? (
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginLeft: "9px",
                  marginTop: "10px",
                }}
              >
                Employee ID : {"JT" + " " + (employeeCall?.id + 100)}
              </Typography>
            ) : null}
          </Box>
        </Box>
      </Box>

      {/* FOR EMPLOYEE PERSNOL DETAILS */}
      <Box
        sx={{
          marginTop: "30px",
          marginLeft: "9px",
        }}
      >
        <form>
          <Grid container>
            {/* LEFT PART */}
            <Box sx={{ color: "" }}></Box>
            <Grid container xs={12} md={6} rowSpacing={2}>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Employee Name</Typography>
                <TextField
                  inputProps={{
                    sx: InputFieldPropsForm(),
                  }}
                  sx={{
                    width: "80%",
                    background: "var(--primary-highlight-color)",
                    borderRadius: "10px",
                    ".Mui-disabled": {
                      opacity: "1",
                      WebkitTextFillColor:
                        "var(--secondary-text-color) !important",
                    },
                    ".MuiOutlinedInput-input": {
                      color: "var(--secondary-text-color) !important",
                    },
                  }}
                  name="personalFirstname"
                  value={editedEmployeeData.personalFirstname}
                  disabled={!editable}
                  onChange={handleInputChange}
                />
                <Typography sx={{ color: "red" }}>
                  {errors.personalFirstname}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Department</Typography>
                <Select
                  sx={{
                    width: "80%",
                    height: "45px",
                    background: "var(--primary-highlight-color)",
                    borderRadius: "10px",
                    ".Mui-disabled": {
                      opacity: "1",
                      WebkitTextFillColor:
                        "var(--secondary-text-color) !important",
                    },
                    ".MuiOutlinedInput-input": {
                      color: "var(--secondary-text-color) !important",
                    },
                  }}
                  name="jobDepartment"
                  value={editedEmployeeData.jobDepartment}
                  disabled={!editable}
                  onChange={handleInputChange}
                  select
                >
                  <MenuItem value="">Select a Department</MenuItem>
                  <MenuItem value="HR">HR</MenuItem>
                  <MenuItem value="Designer">Designer</MenuItem>
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Front-end Developer">
                    Front-end Developer
                  </MenuItem>
                  <MenuItem value="Back-end Developer">
                    Back-end Developer
                  </MenuItem>
                </Select>
                <Typography sx={{ color: "red" }}>
                  {errors.jobDepartment}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Job Title</Typography>
                <Select
                  sx={{
                    width: "80%",
                    height: "45px",
                    background: "var(--primary-highlight-color)",
                    borderRadius: "10px",
                    ".Mui-disabled": {
                      opacity: "1",
                      WebkitTextFillColor:
                        "var(--secondary-text-color) !important",
                    },
                    ".MuiOutlinedInput-input": {
                      color: "var(--secondary-text-color) !important",
                    },
                  }}
                  name="jobDesignation"
                  value={editedEmployeeData.jobDesignation}
                  disabled={!editable}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Select a designation</MenuItem>
                  <MenuItem value="HR">HR</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="UI & UX Designer">UI & UX Designer</MenuItem>
                  <MenuItem value="Java Developer">JAVA Developer</MenuItem>
                  <MenuItem value="Jr.Developer">Jr.Developer</MenuItem>
                </Select>
                <Typography sx={{ color: "red" }}>
                  {errors.jobDesignation}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Job Category</Typography>
                <Select
                  sx={{
                    width: "80%",
                    height: "45px",
                    background: "var(--primary-highlight-color)",
                    borderRadius: "10px",
                    ".Mui-disabled": {
                      opacity: "1",
                      WebkitTextFillColor:
                        "var(--secondary-text-color) !important",
                    },
                    ".MuiOutlinedInput-input": {
                      color: "var(--secondary-text-color) !important",
                    },
                  }}
                  name="jobCategory"
                  value={editedEmployeeData.jobCategory}
                  disabled={!editable}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Select a job category</MenuItem>
                  <MenuItem value="Full time">Full time</MenuItem>
                  <MenuItem value="Part time">Part time</MenuItem>
                </Select>
                <Typography sx={{ color: "red" }}>
                  {errors.jobCategory}
                </Typography>
              </Grid>
            </Grid>

            {/* RIGHT PART */}
            <Grid container xs={12} md={6} rowSpacing={2}>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "11px" }}>
                  Date of Joining
                </Typography>
                <TextField
                  inputProps={{
                    sx: InputFieldPropsForm(),
                  }}
                  sx={{
                    width: "80%",
                    background: "var(--primary-highlight-color)",
                    borderRadius: "10px",
                    ".Mui-disabled": {
                      opacity: "1",
                      WebkitTextFillColor:
                        "var(--secondary-text-color) !important",
                    },
                    ".MuiOutlinedInput-input": {
                      color: "var(--secondary-text-color) !important",
                    },
                  }}
                  name="jobDoj"
                  value={editedEmployeeData.jobDoj}
                  type="date"
                  disabled={!editable}
                  onChange={handleInputChange}
                />
                <Typography sx={{ color: "red" }}>{errors.jobDoj}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Date of Birth</Typography>
                <TextField
                  inputProps={{ sx: InputFieldPropsForm() }}
                  sx={{
                    width: "80%",
                    color: "white",
                    background: "var(--primary-highlight-color)",
                    borderRadius: "10px",
                    ".Mui-disabled": {
                      opacity: "1",
                      WebkitTextFillColor:
                        "var(--secondary-text-color) !important",
                    },
                    ".MuiOutlinedInput-input": {
                      color: "var(--secondary-text-color) !important",
                    },
                  }}
                  name="personalDob"
                  value={editedEmployeeData.personalDob}
                  type="date"
                  disabled={!editable}
                  onChange={handleInputChange}
                />
                <Typography sx={{ color: "red" }}>
                  {errors.personalDob}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Blood Group</Typography>
                <Select
                  sx={{
                    width: "80%",
                    height: "45px",
                    background: "var(--primary-highlight-color)",
                    borderRadius: "10px",
                    ".Mui-disabled": {
                      opacity: "1",
                      WebkitTextFillColor:
                        "var(--secondary-text-color) !important",
                    },
                    ".MuiOutlinedInput-input": {
                      color: "var(--secondary-text-color) !important",
                    },
                  }}
                  name="personalBlood"
                  value={editedEmployeeData.personalBlood}
                  disabled={!editable}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Select a blood group</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                </Select>
                <Typography sx={{ color: "red" }}>
                  {errors.personalBlood}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>
                  Emergency Number
                </Typography>
                <TextField
                  inputProps={{
                    sx: InputFieldPropsForm(),
                  }}
                  sx={{
                    width: "80%",
                    background: "var(--primary-highlight-color)",
                    borderRadius: "10px",
                    ".Mui-disabled": {
                      opacity: "1",
                      WebkitTextFillColor:
                        "var(--secondary-text-color) !important",
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
              </Grid>
            </Grid>
          </Grid>
        </form>
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
                  // textTransform:"capitalize",
                  // fontSize:"18px",
                }}
                onClick={cancelEdit}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  fontWeight: "bold",
                  color: "var(--primary-color)",
                  // textTransform:"capitalize",
                  // fontSize:"18px",
                }}
                disabled={!editable}
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
                disabled={!editable}
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
      <Box>
        <CustomDialogBox
          open={openDialog}
          setOpenDialog={setOpenDialog}
          dialogHeading="Confirm Delete"
          dialogDescription="Are you sure you want to delete this data?"
          dialogIcon={
            <WarningAmberIcon
              sx={{
                color: "#c70000",
                fontSize: "30px",
                borderRadius: "50px",
              }}
            />
          }
        />
      </Box>
    </Box>
  );
};
export default DisplayPersonal;
