import React, { useState, useContext } from "react";
import { Box, Button, IconButton, InputAdornment, MenuItem, Select, TextField, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewEducationBox,
  viewProfileTitle,
  InputFieldPropsForm,
} from "../../CustomDesignMUI/CustomMUI";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { Edit } from "@mui/icons-material";
import ViewDocument from "./ViewDocument";
const DisplayJob = (props) => {
  // DATA CALLING START
  const { employeeCall, saveNextButtonCallback, nextButtonCallback } = props;
  const { setEditable, editable } = useContext(GlobalContext);
  const [editedEmployeeData, setEditedEmployeeData] = useState({ ...employeeCall, });
  const [originalEmployeeData, setOriginalEmployeeData] = useState({ ...employeeCall });
  const [jobData, setJobData] = useState({ ...employeeCall });
  // DATA CALLING END

  const editEmployee = () => {
    setEditable(true);
  };

  const handleInputChange = (recordType, event) => {
    const { name, value } = event.target;
    setJobData((prevData) => {
      const updatedData = { ...prevData };
      if (recordType === "jobDetails" && updatedData.jobDetails) {
        updatedData.jobDetails= {
          ...updatedData.jobDetails,
          [name]: value,
        };
      }
      return updatedData;
    });
  };

  const cancelEdit = () => {
    if (Object.keys(originalEmployeeData).length) {
      setJobData({ ...originalEmployeeData });
      setEditable(false);
    } else {
      setJobData({
        familyFirstname: "",
        familyLastname: "",
        familyRelation: "",
        familyEmail: "",
        familyPhoneNumber: "",
        familyDob: "",
      });
      setEditable(true);
    }
  };
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showViewDocument, setShowViewDocument] = useState(false);

  const toggleViewDocument = () => {
    setShowViewDocument(!showViewDocument);
  };

  Object.assign(editedEmployeeData, jobData);
  console.log("EDITED EMPLOYEE DATE", editedEmployeeData);

  const jobDetailsEditMode = () => {
    return (
      <Box sx={viewEducationBox}>
        <Box sx={{ marginBottom: "15px" }}>
          <TextField
            inputProps={{
              sx: InputFieldPropsForm(),
            }}
            sx={{
              paddingBottom: "10px",
              width: "80%",
              marginTop: "10px",
              ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ": {
                borderColor: "var(--secondary-text-color)",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"/>
              )
            }}
            name="jobDoj"
            label="Joining Date"
            type="date"
            value={jobData.jobDetails ? jobData.jobDetails.jobDoj : undefined}
            onChange={(event) => handleInputChange("jobDetails", event)}
          />
          
          <Typography sx={viewProfileSubtitle}>Department</Typography>
            <Select
              sx={{
                width: "80%",
                height: "55px",
                // background: themeChange ? "#142840" : "#ffffff",
              }}
              name="jobDepartment"
              value={jobData.jobDetails ? jobData.jobDetails.jobDepartment : undefined}
              disabled={!editable}
              onChange={(event) => handleInputChange("jobDetails", event)}
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

            <Typography sx={viewProfileSubtitle}>Job Title</Typography>
                <Select
                  sx={{
                    width: "80%",
                    height: "55px",
                    // background: themeChange ? "#142840" : "#ffffff",
                  }}
                  name="jobDesignation"
                  value={jobData.jobDetails ? jobData.jobDetails.jobDesignation : undefined}
                  disabled={!editable}
                  onChange={(event) => handleInputChange("jobDetails", event)}
                >
                  <MenuItem value="">Select a designation</MenuItem>
                  <MenuItem value="HR">HR</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="UI & UX Designer">UI & UX Designer</MenuItem>
                  <MenuItem value="Java Developer">JAVA Developer</MenuItem>
                  <MenuItem value="Jr.Developer">Jr.Developer</MenuItem>
                </Select>

                <Typography sx={viewProfileSubtitle}>Job Category</Typography>
                <Select
                  sx={{
                    width: "80%",
                    height: "55px",
                    // background: themeChange ? "#142840" : "#ffffff",
                  }}
                  name="jobCategory"
                  value={jobData.jobDetails ? jobData.jobDetails.jobCategory : undefined}
                  disabled={!editable}
                  onChange={(event) => handleInputChange("jobDetails", event)}>
                  <MenuItem value="">Select a job category</MenuItem>
                  <MenuItem value="Full time">Full time</MenuItem>
                  <MenuItem value="Part time">Part time</MenuItem>
                </Select>

          <TextField
            inputProps={{
              sx: InputFieldPropsForm(),
            }}
            sx={{
              width: "80%",
              paddingBottom: "10px",
              marginTop: "10px",
              ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ": {
                borderColor: "var(--secondary-text-color)",
              },
            }}
            label="Job Responsibilities"
            multiline
            rows={5}
            variant="outlined"
            name="jobResponsibilities"
            value={jobData.jobDetails ? jobData.jobDetails.jobResponsibilities : undefined}
            onChange={(event) => handleInputChange("jobDetails",event)}

          />
        </Box>
      </Box>
    );
  }

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
            View Job Details
          </Typography>
        </Box>
        {/* EDIT AND DELETE BUTTONS */}
        <Box>
          {employeeCall?.id ? (
            <Box>
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
      <hr/>
      <Box
        sx={{
          marginTop: "20px"
        }}
      >
        {
        editable? (
          jobDetailsEditMode()
        ) :
          <Box>
            {showViewDocument ? (
              <ViewDocument onBackClick={toggleViewDocument} />
            ) : (
              <Box>
                <Box sx={{ marginBottom: "15px" }}>
                  <Typography sx={viewProfileSubtitle}>Job Role</Typography>
                  <Typography sx={viewProfileTitle}>
                    {jobData.jobDetails.jobDesignation}
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "25px" }}>
                  <Typography sx={viewProfileSubtitle}>Department</Typography>
                  <Typography sx={viewProfileTitle}>
                    {jobData.jobDetails.jobDepartment}
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "35px" }}>
                  <Typography sx={viewProfileTitle}>Job Description</Typography>
                  <Typography sx={viewProfileSubtitle}>
                    {jobData.jobDetails.jobResponsibilities}
                  </Typography>
                </Box>

                <Button
                  sx={{
                    background: "var(--primary-highlight-color)",
                    textTransform: "capitalize",
                    color: "var(--primary-color)",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "var(--primary-color)",
                      color: "white",
                    },
                  }}
                  variant="outlined"
                  onClick={toggleViewDocument}
                >
                  View Documents
                </Button>
              </Box>
            )}
          </Box>
      }
        {/* {jobData.jobDetails?.map((record, index) =>
          editable ? (
            jobDetailsEditMode(record, index)
          ) : (
            <Box>
              {showViewDocument ? (
                <ViewDocument onBackClick={toggleViewDocument} />
              ) : (
                <Box>
                  <Box sx={{ marginBottom: "15px" }}>
                    <Typography sx={viewProfileSubtitle}>Job Role</Typography>
                    <Typography sx={viewProfileTitle}>
                      {jobData.jobDetails[index].jobDesignation}
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "25px" }}>
                    <Typography sx={viewProfileSubtitle}>Department</Typography>
                    <Typography sx={viewProfileTitle}>
                      {jobData.jobDetails[index].jobDepartment}
                    </Typography>
                  </Box>
                  <Box sx={{ marginBottom: "35px" }}>
                    <Typography sx={viewProfileTitle}>Job Description</Typography>
                    <Typography sx={viewProfileSubtitle}>
                      {jobData.jobDetails[index].jobResponsibilities}
                    </Typography>
                  </Box>

                  <Button
                    sx={{
                      background: "var(--primary-highlight-color)",
                      textTransform: "capitalize",
                      color: "var(--primary-color)",
                      fontWeight: "bold",
                      "&:hover": {
                        background: "var(--primary-color)",
                        color: "white",
                      },
                    }}
                    variant="outlined"
                    onClick={toggleViewDocument}
                  >
                    View Documents
                  </Button>
                </Box>
              )}
            </Box>
          )
        )} */}
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
              disabled={!editable}
              onClick={() => {
                nextButtonCallback(editedEmployeeData);
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
                saveNextButtonCallback(editedEmployeeData);
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
export default DisplayJob;
