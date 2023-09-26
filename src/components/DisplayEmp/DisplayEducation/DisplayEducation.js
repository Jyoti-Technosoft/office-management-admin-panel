import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
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
  
  // ----------------------------VALIDATION

  const [academicRecordErrors, setAcademicRecordErrors] = useState([]);
  const [professionalRecordErrors, setProfessionalRecordErrors] = useState([]);


// bug in this state-----------------------------------
  const [isDataValid, setIsDataValid] = useState(false);
  console.log("isDataValid", isDataValid);



  // Validation rules for academic record
  const validateAcademicRecord = (record) => {
    const errors = {};
    if (!record.educationUniversity) {
      errors.educationUniversity = "University name is required";
    } else {
      if (!/^[a-zA-Z\s]*$/.test(record.educationUniversity)) {
        errors.educationUniversity =
          "University name should not contain numeric values";
      }
    }
    if (!record.educationCourse) {
      errors.educationCourse = "Course name is required";
    } else {
      if (!/^[a-zA-Z\s]*$/.test(record.educationCourse)) {
        errors.educationCourse =
          "Course name should not contain numeric values";
      }
    }
    if (!record.educationAcademicStart) {
      errors.educationAcademicStart = "Acadamic Start is required";
    }
    if (!record.educationAcademicEnd) {
      errors.educationAcademicEnd = "Acadamic End is required";
    }

    return errors;
  };

  // Validation rules for professional record
  const validateProfessionalRecord = (record) => {
    const errors = {};
    if (!record.educationCertificate) {
      errors.educationCertificate = "Certificate name is required";
    } else {
      if (!/^[a-zA-Z\s]*$/.test(record.educationCertificate)) {
        errors.educationCertificate =
          "Certificate name should not contain numeric values";
      }
    }
    if (!record.educationPlace) {
      errors.educationPlace = "Place name is required";
    } else {
      if (!/^[a-zA-Z\s]*$/.test(record.educationPlace)) {
        errors.educationPlace = "Place name should not contain numeric values";
      }
    }
    if (!record.educationProfessionalStart) {
      errors.educationProfessionalStart = "Professional Start is required";
    }
    if (!record.educationProfessionalEnd) {
      errors.educationProfessionalEnd = "Professional End is required";
    }

    return errors;
  };

  // DATA CALLING START
  const { employeeCall, saveNextButtonCallback, nextButtonCallback } = props;
  const { setEditable, editable, themeChange, isValid } =
    useContext(GlobalContext);
  const [editedEmployeeData, setEditedEmployeeData] = useState({
    ...employeeCall,
  });
  const [originalEmployeeData, setOriginalEmployeeData] = useState({
    ...employeeCall,
  });

  const [educationDetails, setEducationDetails] = useState({ ...employeeCall });
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

      if (recordType === "academicRecords") {
        // Validate the academic record and update errors
        const academicRecord = updatedRecords[index];
        const errors = validateAcademicRecord(academicRecord);
        const newAcademicRecordErrors = [...academicRecordErrors];
        newAcademicRecordErrors[index] = errors;
        setAcademicRecordErrors(newAcademicRecordErrors);
      } else if (recordType === "professionalRecords") {
        // Validate the professional record and update errors
        const professionalRecord = updatedRecords[index];
        const errors = validateProfessionalRecord(professionalRecord);
        const newProfessionalRecordErrors = [...professionalRecordErrors];
        newProfessionalRecordErrors[index] = errors;
        setProfessionalRecordErrors(newProfessionalRecordErrors);
      }

      // Check if all academic and professional records are valid
      const areAllAcademicRecordsValid = academicRecordErrors.every(
        (error) => Object.keys(error).length === 0
      );

      const areAllProfessionalRecordsValid = professionalRecordErrors.every(
        (error) => Object.keys(error).length === 0
      );

      // Update the state to enable/disable the Save button
      setIsDataValid(
        areAllAcademicRecordsValid && areAllProfessionalRecordsValid
      );

      return {
        ...prevDetails,
        [recordType]: updatedRecords,
      };
    });
  };

  const editEmployee = () => {
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

  Object.assign(editedEmployeeData, educationDetails);
  console.log("EDITED EMPLOYEE DATE", editedEmployeeData);

  const academicRecordsEditMode = (record, index) => {
    return (
      <Box key={index} sx={viewEducationBox}>
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
            name="educationUniversity"
            label="University Name"
            value={educationDetails.academicRecords[index].educationUniversity}
            onChange={(event) =>
              handleRecordInputChange("academicRecords", index, event)
            }
          />
          {academicRecordErrors[index] && (
            <Typography sx={{ color: "red" }}>
              {academicRecordErrors[index].educationUniversity}
            </Typography>
          )}
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
            name="educationCourse"
            value={educationDetails.academicRecords[index].educationCourse}
            label="Course Name"
            onChange={(event) =>
              handleRecordInputChange("academicRecords", index, event)
            }
          />
          {academicRecordErrors[index] && (
            <Typography sx={{ color: "red" }}>
              {academicRecordErrors[index].educationCourse}
            </Typography>
          )}
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
            name="educationAcademicStart"
            value={
              educationDetails.academicRecords[index].educationAcademicStart
            }
            label="Start Year"
            type="date"
            onChange={(event) =>
              handleRecordInputChange("academicRecords", index, event)
            }
          />
          {academicRecordErrors[index] && (
            <Typography sx={{ color: "red" }}>
              {academicRecordErrors[index].educationAcademicStart}
            </Typography>
          )}
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
            name="educationAcademicEnd"
            value={educationDetails.academicRecords[index].educationAcademicEnd}
            label="End Year"
            type="date"
            onChange={(event) =>
              handleRecordInputChange("academicRecords", index, event)
            }
          />
          {academicRecordErrors[index] && (
            <Typography sx={{ color: "red" }}>
              {academicRecordErrors[index].educationAcademicEnd}
            </Typography>
          )}
          {/* Display validation errors */}
        </Box>

        {/* Remove button for academic record */}
        <Button
          variant="outlined"
          sx={{ color: "red", fontWeight: "bold" }}
          onClick={() => removeRecord("academicRecords", index)}
        >
          Remove
        </Button>
      </Box>
    );
  };
  const professionalRecordsEditMode = (record, index) => {
    return (
      <Box key={index} sx={viewEducationBox}>
        <Box sx={{ marginBottom: "15px" }}>
          <Box>
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
              name="educationCertificate"
              value={
                educationDetails.professionalRecords[index].educationCertificate
              }
              label="Education Certificate"
              onChange={(event) =>
                handleRecordInputChange("professionalRecords", index, event)
              }
            />
            {professionalRecordErrors[index] && (
              <Typography sx={{ color: "red" }}>
                {professionalRecordErrors[index].educationCertificate}
              </Typography>
            )}

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
              name="educationPlace"
              value={educationDetails.professionalRecords[index].educationPlace}
              label="Place"
              onChange={(event) =>
                handleRecordInputChange("professionalRecords", index, event)
              }
            />
            {professionalRecordErrors[index] && (
              <Typography sx={{ color: "red" }}>
                {professionalRecordErrors[index].educationPlace}
              </Typography>
            )}

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
              name="educationProfessionalStart"
              value={
                educationDetails.professionalRecords[index]
                  .educationProfessionalStart
              }
              label="Start Date"
              type="date"
              onChange={(event) =>
                handleRecordInputChange("professionalRecords", index, event)
              }
            />
            {professionalRecordErrors[index] && (
              <Typography sx={{ color: "red" }}>
                {professionalRecordErrors[index].educationProfessionalStart}
              </Typography>
            )}

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
              name="educationProfessionalEnd"
              value={
                educationDetails.professionalRecords[index]
                  .educationProfessionalEnd
              }
              label="End Date"
              type="date"
              onChange={(event) =>
                handleRecordInputChange("professionalRecords", index, event)
              }
            />
            {professionalRecordErrors[index] && (
              <Typography sx={{ color: "red" }}>
                {professionalRecordErrors[index].educationProfessionalEnd}
              </Typography>
            )}
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
      </Box>
    );
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
      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ ...viewProfileTitle }}>Academic Records</Typography>
        {editable ? (
          <Button
            variant="outlined"
            sx={{ color: "var(--primary-color)", fontWeight: "bold" }}
            onClick={() => addRecord("academicRecords")}
          >
            + Add Records
          </Button>
        ) : null}
      </Box>
      <Box>
        {educationDetails.academicRecords?.map((record, index) =>
          editable ? (
            academicRecordsEditMode(record, index)
          ) : (
            <Box sx={viewEducationBox}>
              <Typography sx={viewEducationTitle}>
                {educationDetails.academicRecords[index].educationUniversity}
              </Typography>
              <Typography sx={viewProfileSubtitle}>
                {educationDetails.academicRecords[index].educationCourse}
                {","}{" "}
                {formatDate(
                  educationDetails.academicRecords[index].educationAcademicStart
                )}{" "}
                -{" "}
                {formatDate(
                  educationDetails.academicRecords[index].educationAcademicEnd
                )}
              </Typography>
            </Box>
          )
        )}
      </Box>

      {/* FOR PROFESIONAL QUALIFICATION */}
      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={viewProfileTitle}>Professional Records</Typography>
        {editable ? (
          <Button
            variant="outlined"
            sx={{ color: "var(--primary-color)", fontWeight: "bold" }}
            onClick={() => addRecord("professionalRecords")}
          >
            + Add Records
          </Button>
        ) : null}
      </Box>
      {educationDetails.professionalRecords?.map((record, index) =>
        editable ? (
          professionalRecordsEditMode(record, index)
        ) : (
          <Box sx={viewEducationBox}>
            <Typography sx={viewEducationTitle}>
              {educationDetails.professionalRecords[index].educationCertificate}
            </Typography>
            <Typography sx={viewProfileSubtitle}>
              {educationDetails.professionalRecords[index].educationPlace}
              {","}{" "}
              {formatDate(
                educationDetails.professionalRecords[index]
                  .educationProfessionalStart
              )}{" "}
              -{" "}
              {formatDate(
                educationDetails.professionalRecords[index]
                  .educationProfessionalEnd
              )}
            </Typography>
          </Box>
        )
      )}

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
              disabled={!editable || !isDataValid}
              onClick={() => {
                nextButtonCallback(editedEmployeeData) && isDataValid(false);
              }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              disabled={!editable || !isDataValid}
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
export default DisplayEducation;
