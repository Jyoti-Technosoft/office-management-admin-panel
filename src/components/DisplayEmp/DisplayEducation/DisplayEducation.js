import React, { useContext, useState } from "react";
import { Box, Button, IconButton, TextField, Tooltip, Typography, Zoom } from "@mui/material";
import {
  viewProfileSubtitle,
  viewProfileTitle,
  viewEducationBox,
  viewEducationTitle,
  InputFieldPropsForm,
} from "../../CustomDesignMUI/CustomMUI";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { useParams } from "react-router-dom";
import { Edit } from "@mui/icons-material";

const DisplayEducation = (props) => {
  // DATA CALLING START
  const { employeeCall, saveNextButtonCallback, nextButtonCallback } = props;
  const { setEditable, editable, isValid } = useContext(GlobalContext);
  const [editedEmployeeData, setEditedEmployeeData] = useState({ ...employeeCall });
  const [originalEmployeeData, setOriginalEmployeeData] = useState({ ...employeeCall });

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

  // DATE TO MONTH FUNCTION
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
            <Box>
              <IconButton
                disabled={editable}
                onClick={editEmployee}
                sx={{color: "var( --third-color)"}}
              >
                <Edit />
              </IconButton>
            </Box>
          ) : null}
        </Box>
      </Box>
      <hr/>
      {/* FOR ACADEMIC RECORDS */}
      <Typography sx={{...viewProfileTitle, marginTop: "20px"}}>Academic Records</Typography>
      {
        editable ? (
          <Box sx={{ marginBottom: "25px" }}>
            <Box sx={viewEducationBox}>
              <TextField
                inputProps={{
                  sx: InputFieldPropsForm()
                }}
                sx={{
                  paddingBottom: "10px",
                  width: "80%",
                  marginTop: "10px",
                }}
                name="educationUniversity"
                label="University Name"
                value={editedEmployeeData.educationUniversity}
                disabled={!editable}
                onChange={handleInputChange}
              />

              <TextField
                inputProps={{
                  sx: InputFieldPropsForm(),
                }}
                sx={{
                  paddingBottom: "10px",
                  width: "80%",
                  marginTop: "10px",
                }}
                name="educationCourse"
                value={editedEmployeeData.educationCourse}
                label="Course Name"
                disabled={!editable}
                onChange={handleInputChange}
              />
              <TextField
                inputProps={{
                  sx: InputFieldPropsForm(),
                }}
                sx={{
                  width: "80%",
                  paddingBottom: "10px",
                  marginTop: "10px",
                }}
                name="educationAcademicStart"
                value={editedEmployeeData.educationAcademicStart}
                label="Start Year"
                disabled={!editable}
                type="date"
                onChange={handleInputChange}
              />
              <TextField
                inputProps={{
                  sx: InputFieldPropsForm(),
                }}
                sx={{
                  width: "80%",
                  paddingBottom: "10px",
                  marginTop: "10px",
                }}
                name="educationAcademicEnd"
                value={editedEmployeeData.educationAcademicEnd}
                label="End Year"
                disabled={!editable}
                type="date"
                onChange={handleInputChange}
              />
            </Box>
          </Box>
        ) :
          <Box sx={viewEducationBox}>
            <Typography sx={viewEducationTitle}>
              {employeeCall.educationUniversity}
            </Typography>
            <Typography sx={viewProfileSubtitle}>
              {employeeCall.educationCourse}
              {","} {formatDate(employeeCall.educationAcademicStart)} -{" "}
              {formatDate(employeeCall.educationAcademicEnd)}
            </Typography>
          </Box>
      }


      {/* FOR PROFESIONAL QUALIFICATION */}
      <Typography sx={viewProfileTitle}>Profession Records</Typography>
      {
        editable ? (
          <Box sx={{ marginBottom: "25px" }}>
            <Box sx={viewEducationBox}>
              <TextField
                inputProps={{
                  sx: InputFieldPropsForm(),
                }}
                sx={{
                  width: "80%",
                  paddingBottom: "10px",
                  marginTop: "10px",
                }}
                name="educationCertificate"
                value={editedEmployeeData.educationCertificate}
                label="Education Certificate"
                disabled={!editable}
                onChange={handleInputChange}
              />
              <TextField
                inputProps={{
                  sx: InputFieldPropsForm(),
                }}
                sx={{
                  width: "80%",
                  paddingBottom: "10px",
                  marginTop: "10px",
                }}
                name="educationPlace"
                value={editedEmployeeData.educationPlace}
                label="Place"
                disabled={!editable}
                onChange={handleInputChange}
              />
              <TextField
                inputProps={{
                  sx: InputFieldPropsForm(),
                }}
                sx={{
                  width: "80%",
                  paddingBottom: "10px",
                  marginTop: "10px",
                }}
                name="educationProfessionalStart"
                value={editedEmployeeData.educationProfessionalStart}
                label="Start Date"
                disabled={!editable}
                onChange={handleInputChange}
              />
              <TextField
                inputProps={{
                  sx: InputFieldPropsForm(),
                }}
                sx={{
                  width: "80%",
                  paddingBottom: "10px",
                  marginTop: "10px",
                }}
                name="educationProfessionalEnd"
                value={editedEmployeeData.educationProfessionalEnd}
                label="End Date"
                disabled={!editable}
                onChange={handleInputChange}
              />
            </Box>
          </Box>
        ) :
          <Box sx={{ marginBottom: "25px" }}>
            <Box sx={viewEducationBox}>
              <Typography sx={viewEducationTitle}>
                {employeeCall.educationCertificate}
              </Typography>
              <Typography sx={viewProfileSubtitle}>
                {employeeCall.educationPlace}
                {","} {formatDate(employeeCall.educationProfessionalStart)} -{" "}
                {formatDate(employeeCall.educationProfessionalEnd)}
              </Typography>
            </Box>
          </Box>
      }


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
                nextButtonCallback(editedEmployeeData)
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
                saveNextButtonCallback(editedEmployeeData)
              }}
            >
              Save & Next
            </Button>
          </Box>
        )}
      </Box>
    </Box >
  );
};

export default DisplayEducation;
