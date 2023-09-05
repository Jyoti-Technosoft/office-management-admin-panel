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


// // INITIAL VALUES
// const initialRecord = {
//   educationUniversity: "",
//   educationCourse: "",
//   educationAcademicStart: "",
//   educationAcademicEnd: "",
//   educationCertificate: "",
//   educationPlace: "",
//   educationProfessionalStart: "",
//   educationProfessionalEnd: "",
// }; 
// const initialEducationDetails = {
//   academicRecords: [initialRecord],
//   professionalRecords: [initialRecord],
// };

const DisplayEducation = (props) => {
  // DATA CALLING START
  const { employeeCall, saveNextButtonCallback, nextButtonCallback } = props;
  const { setEditable, editable, isValid } = useContext(GlobalContext);
  const [editedEmployeeData, setEditedEmployeeData] = useState({ ...employeeCall });
  const [originalEmployeeData, setOriginalEmployeeData] = useState({ ...employeeCall });
  console.log("sdlksdjlksdjlksdjlk", editedEmployeeData);

  // INITIAL VALUES
  // const initialRecord = {
  //   educationUniversity: editedEmployeeData.academicRecords[0].educationUniversity,
  //   educationCourse: editedEmployeeData?.educationCourse || '',
  //   educationAcademicStart: editedEmployeeData?.educationAcademicStart || '',
  //   educationAcademicEnd: editedEmployeeData?.educationAcademicEnd || '',
  //   educationCertificate: editedEmployeeData?.educationCertificate || '',
  //   educationPlace: editedEmployeeData?.educationPlace || '',
  //   educationProfessionalStart: editedEmployeeData?.educationProfessionalStart || '',
  //   educationProfessionalEnd: editedEmployeeData?.educationProfessionalEnd || '',
  // };
  // const initialEducationDetails = {
  //   academicRecords: [initialRecord],
  //   professionalRecords: [initialRecord],
  // };
  // const initialAcademicRecord = {
  //   educationUniversity: editedEmployeeData?.academicRecords[0].educationUniversity || '',
  //   educationCourse: editedEmployeeData?.academicRecords[0].educationCourse || '',
  //   educationAcademicStart: editedEmployeeData?.academicRecords[0].educationAcademicStart || '',
  //   educationAcademicEnd: editedEmployeeData?.academicRecords[0].educationAcademicEnd || '',
  // };

  // const initialProfessionalRecord = {
  //   educationCertificate: editedEmployeeData?.professionalRecords[0].educationCertificate || '',
  //   educationPlace: editedEmployeeData?.professionalRecords[0].educationPlace || '',
  //   educationProfessionalStart: editedEmployeeData?.professionalRecords[0].educationProfessionalStart || '',
  //   educationProfessionalEnd: editedEmployeeData?.professionalRecords[0].educationProfessionalEnd || '',
  // };

  // const initialEducationDetails = {
  //   academicRecords: [initialAcademicRecord],
  //   professionalRecords: [initialProfessionalRecord],
  // };

  const [educationDetails, setEducationDetails] = useState({ ...employeeCall});
  // console.log("Dkdkdkdk", editedEmployeeData[0].academicRecords[0].educationUniversity);

  // //ADDMING MORE FORM FIELDS
  // const addRecord = (recordType) => {
  //   setEducationDetails((prevDetails) => ({
  //     ...prevDetails,
  //     [recordType]: [...prevDetails[recordType], { }],
  //   }));
  // };
  const addRecord = (recordType) => {
    setEducationDetails((prevDetails) => {
      if (prevDetails.hasOwnProperty(recordType)) {
        return {
          ...prevDetails,
          [recordType]: [...prevDetails[recordType], {}],
        };
      } else {
        return {
          ...prevDetails,
          [recordType]: [{}],
        };
      }
    });
  };
  const removeRecord = (recordType, index) => {
    setEducationDetails((prevDetails) => {
      const updatedRecords = [...prevDetails[recordType]];
      updatedRecords.splice(index, 1);
      return {
        ...prevDetails,
        [recordType]: updatedRecords,
      };
    });
  };

  const handleRecordInputChange = (recordType, index, event) => {
    const { name, value } = event.target;
    setEducationDetails((prevDetails) => {
      const updatedRecords = [...prevDetails[recordType]];
      updatedRecords[index] = {
        ...updatedRecords[index],
        [name]: value,
      };
      return {
        ...prevDetails,
        [recordType]: updatedRecords,
      };
    });
  };

  const editEmployee = () => {
    console.log("Entering edit mode");
    setEditable(true);
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
  
  Object.assign(editedEmployeeData,educationDetails)
  console.log("EDITED EMPLOYEE DATE" , editedEmployeeData)

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
            Education Qualification
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
      <hr />

      {/* FOR ACADEMIC RECORDS */}
      <Typography sx={{ ...viewProfileTitle, marginTop: "20px" }}>Academic Records</Typography>
      {educationDetails.academicRecords?.map((record, index) => (
        <Box key={index} sx={viewEducationBox}>
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
                value={educationDetails.academicRecords[index].educationUniversity}
                disabled={!editable}
                onChange={(event) => handleRecordInputChange("academicRecords", index, event)}
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
                value={educationDetails.academicRecords[index].educationCourse}
                label="Course Name"
                disabled={!editable}
                onChange={(event) => handleRecordInputChange("academicRecords", index, event)}
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
                value={educationDetails.academicRecords[index].educationAcademicStart}
                label="Start Year"
                disabled={!editable}
                type="date"
                onChange={(event) => handleRecordInputChange("academicRecords", index, event)}
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
                value={educationDetails.academicRecords[index].educationAcademicEnd}
                label="End Year"
                disabled={!editable}
                type="date"
                onChange={(event) => handleRecordInputChange("academicRecords", index, event)}
              />
            </Box>
          </Box>

          {/* Remove button for academic record */}
          <Button
            variant="outlined"
            sx={{ color: "red", fontWeight: "bold" }}
            onClick={() => removeRecord("academicRecords", index)}
          >
            Remove
          </Button>
          {/* Add Academic Record button */}
        </Box>
      ))}
          <Button
            variant="outlined"
            sx={{ color: "var(--primary-color)", fontWeight: "bold" }}
            onClick={() => addRecord("academicRecords")}
          >
            Add
          </Button>
      {/* {
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
      } */}


      {/* FOR PROFESIONAL QUALIFICATION */}
      <Typography sx={viewProfileTitle}>Professional Records</Typography>
      {
        editable ? (
          console.log("This is edit mode Console")
        ) : null
      }
      {educationDetails.professionalRecords?.map((record, index) => (
            <Box key={index} sx={viewEducationBox}>
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
                    value={educationDetails.professionalRecords[index].educationCertificate}
                    label="Education Certificate"
                    disabled={!editable}
                    onChange={(event) => handleRecordInputChange("professionalRecords", index, event)}
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
                    value={educationDetails.professionalRecords[index].educationPlace}
                    label="Place"
                    disabled={!editable}
                    onChange={(event) => handleRecordInputChange("professionalRecords", index, event)}
    
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
                    value={educationDetails.professionalRecords[index].educationProfessionalStart}
                    label="Start Date"
                    type="date"
                    disabled={!editable}
                    onChange={(event) => handleRecordInputChange("professionalRecords", index, event)}
    
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
                    value={educationDetails.professionalRecords[index].educationProfessionalEnd}
                    label="End Date"
                    type="date"
                    disabled={!editable}
                    onChange={(event) => handleRecordInputChange("professionalRecords", index, event)}
                  />
                </Box>
              </Box>
    
              {/* Remove button for professional record */}
              <Button
                variant="outlined"
                sx={{ color: "red", fontWeight: "bold" }}
                onClick={() => removeRecord("professionalRecords", index)}
              >
                Remove
              </Button>
              {/* Add Professional Record button */}
            </Box>
          ))}
           <Button
                variant="outlined"
                sx={{ color: "var(--primary-color)", fontWeight: "bold" }}
                onClick={() => addRecord("professionalRecords")}
              >
                Add
              </Button>
      {/* {
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
      } */}


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
