import React, { useContext, useState } from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewEducationBox,
  viewEducationTitle,
  viewProfileTitle,
  viewExperiencePosition,
  InputFieldPropsForm,
} from "../../CustomDesignMUI/CustomMUI";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { Edit } from "@mui/icons-material";

const DisplayExperience = (props) => {
  // DATA CALLING START
  const { employeeCall, saveNextButtonCallback, nextButtonCallback } = props;
  console.log("Employee...", employeeCall);
  const { setEditable, editable } = useContext(GlobalContext);
  const [editedEmployeeData, setEditedEmployeeData] = useState({ ...employeeCall, });
  const [originalEmployeeData, setOriginalEmployeeData] = useState({ ...employeeCall });
  console.log("Orig", originalEmployeeData);
  const [experienceData, setExperienceData] = useState({ ...employeeCall });
  console.log("FamilyData", experienceData);
  // DATA CALLING END

  const editEmployee = () => {
    setEditable(true);
  };

  const initialization = {
    experienceCompanyName: "",
    experiencePosition: "",
    experienceStartDate: "",
    experienceEndDate: "",
  };

  const handleInputChange = (recordType, index, event) => {
    const { name, value } = event.target;
    setExperienceData((prevData) => {
      const updatedData = { ...prevData };
      if (recordType === "experienceDetails" && updatedData.experienceDetails) {
        updatedData.experienceDetails[index] = {
          ...updatedData.experienceDetails[index],
          [name]: value,
        };
      }
      return updatedData;
    });
  };

  const addRecord = (recordType) => {
    setExperienceData((prevDetails) => {
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
    setExperienceData((prevDetails) => {
      const updatedRecords = [...prevDetails.experienceDetails];
      updatedRecords.splice(index, 1);
      return {
        ...prevDetails,
        [recordType]: updatedRecords,
      };
    });
  };

  const cancelEdit = () => {
    if (Object.keys(originalEmployeeData).length) {
      setExperienceData({ ...originalEmployeeData });
      setEditable(false);
    } else {
      setEditedEmployeeData({ ...initialization });
      setEditable(true);
    }
  };

  Object.assign(editedEmployeeData, experienceData);
  console.log("EDITED EMPLOYEE DATE", editedEmployeeData);

  // DATE TO MONTH FUNCTION
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // CALCULATE NUMBER OF YEARS
  const calYears = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const yearsDiff = end.getFullYear() - start.getFullYear();
    const isSameMonthAndDay =
      end.getMonth() === start.getMonth() && end.getDate() >= start.getDate();
    if (isSameMonthAndDay) {
      return yearsDiff;
    } else {
      const monthsDiff = (end.getMonth() - start.getMonth() + 12) % 12;
      const decimalYears = monthsDiff / 12;
      return yearsDiff + decimalYears;
    }
  };

  const experienceDetailsEditMode = (record, index) => {
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
            name="experienceCompanyName"
            label="Company Name"
            value={experienceData.experienceDetails[index].experienceCompanyName}
            onChange={(event) => handleInputChange("experienceDetails", index, event)}
          />
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
            name="experiencePosition"
            value={experienceData.experienceDetails[index].experiencePosition}
            label="Position"
            onChange={(event) => handleInputChange("experienceDetails", index, event)}

          />
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
            name="experienceStartDate"
            value={experienceData.experienceDetails[index].experienceStartDate}
            label="Start Date"
            type="date"
            onChange={(event) => handleInputChange("experienceDetails", index, event)}
          />
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
            name="experienceEndDate"
            value={experienceData.experienceDetails[index].experienceEndDate}
            label="End Date"
            type="date"
            onChange={(event) => handleInputChange("experienceDetails", index, event)}
          />
        </Box>
        {/* Remove button for record */}
        <Button
          variant="outlined"
          sx={{ color: "red", fontWeight: "bold" }}
          onClick={() => removeRecord("experienceDetails", index)}
        >
          Remove
        </Button>
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
            Experience Details
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
      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ ...viewProfileTitle }}>Experience Records</Typography>
        {
          editable ? (
            <Button
              variant="outlined"
              sx={{ color: "var(--primary-color)", fontWeight: "bold" }}
              onClick={() => addRecord("experienceDetails")}>
              + Add Record
            </Button>
          ) : null
        }
      </Box>
      <Box>
        {experienceData.experienceDetails?.map((record, index) =>
          editable ? (
            experienceDetailsEditMode(record, index)
          ) : (
            <Box sx={{ marginBottom: "25px" }}>
              <Box sx={viewEducationBox}>
                <Typography sx={viewEducationTitle}>
                  {experienceData.experienceDetails[index].experienceCompanyName}
                </Typography>
                <Typography sx={viewExperiencePosition}>
                  Position: {experienceData.experienceDetails[index].experiencePosition}
                </Typography>
                <Typography sx={viewProfileSubtitle}>
                  {formatDate(experienceData.experienceDetails[index].experienceStartDate)} -{" "}
                  {formatDate(experienceData.experienceDetails[index].experienceEndDate)}
                </Typography>
                <Typography sx={viewProfileSubtitle}>
                  Experience :{" "}
                  {calYears(
                    experienceData.experienceDetails[index].experienceStartDate,
                    experienceData.experienceDetails[index].experienceEndDate
                  ).toFixed(2)}{" "}
                  Years
                </Typography>
              </Box>
            </Box>
          )
        )}
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

export default DisplayExperience;
