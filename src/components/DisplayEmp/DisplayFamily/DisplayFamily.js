import React, { useContext, useState } from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewEducationBox,
  viewProfileTitle,
  viewEducationTitle,
  InputFieldPropsForm,
} from "../../CustomDesignMUI/CustomMUI";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { Edit } from "@mui/icons-material";
const DisplayFamily = (props) => {
  // DATA CALLING START
  const { employeeCall, saveNextButtonCallback, nextButtonCallback } = props;
  console.log("Employee...", employeeCall);
  const { setEditable, editable } = useContext(GlobalContext);
  const [editedEmployeeData, setEditedEmployeeData] = useState({ ...employeeCall, });
  const [originalEmployeeData, setOriginalEmployeeData] = useState({ ...employeeCall });
  console.log("Orig", originalEmployeeData);
  const [familyData, setFamilyData] = useState({ ...employeeCall });
  console.log("FamilyData", familyData);
  // DATA CALLING END

  const editEmployee = () => {
    setEditable(true);
  };

  const initialization = {
    familyFirstname: "",
    familyLastname: "",
    familyRelation: "",
    familyEmail: "",
    familyPhoneNumber: "",
    familyDob: ""
  };

  const handleInputChange = (recordType, index, event) => {
    const { name, value } = event.target;
    setFamilyData((prevData) => {
      const updatedData = { ...prevData };
      if (recordType === "familyDetails" && updatedData.familyDetails) {
        updatedData.familyDetails[index] = {
          ...updatedData.familyDetails[index],
          [name]: value,
        };
      }
      return updatedData;
    });
  };

  const addRecord = (recordType) => {
    setFamilyData((prevDetails) => {
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
    setFamilyData((prevDetails) => {
      const updatedRecords = [...prevDetails.familyDetails];
      updatedRecords.splice(index, 1);
      return {
        ...prevDetails,
        [recordType]: updatedRecords,
      };
    });
  };

  const cancelEdit = () => {
    if (Object.keys(originalEmployeeData).length) {
      setFamilyData({ ...originalEmployeeData });
      setEditable(false);
    } else {
      setEditedEmployeeData({ ...initialization });
      setEditable(true);
    }
  };

  Object.assign(editedEmployeeData, familyData);
  console.log("EDITED EMPLOYEE DATE", editedEmployeeData);

  const familyDetailsEditMode = (record, index) => {
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
            name="familyFirstname"
            label="First Name"
            value={familyData.familyDetails[index].familyFirstname}
            onChange={(event) => handleInputChange("familyDetails", index, event)}
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
            name="familyLastname"
            value={familyData.familyDetails[index].familyLastname}
            label="Last Name"
            onChange={(event) => handleInputChange("familyDetails", index, event)}

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
            name="familyRelation"
            value={
              familyData.familyDetails[index].familyRelation
            }
            label="Family Relation"
            onChange={(event) => handleInputChange("familyDetails", index, event)}

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
            name="familyEmail"
            value={familyData.familyDetails[index].familyEmail}
            label="Family Email"
            onChange={(event) => handleInputChange("familyDetails", index, event)}

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
            name="familyPhoneNumber"
            value={familyData.familyDetails[index].familyPhoneNumber}
            label="Number"
            onChange={(event) => handleInputChange("familyDetails", index, event)}

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
            name="familyDob"
            type="date"
            value={familyData.familyDetails[index].familyDob}
            label="D.O.B"
            onChange={(event) => handleInputChange("familyDetails", index, event)}
          />
        </Box>

        {/* Remove button for record */}
        <Button
          variant="outlined"
          sx={{ color: "red", fontWeight: "bold" }}
          onClick={() => removeRecord("familyDetails", index)}
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
            Family Details
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
        <Typography sx={{ ...viewProfileTitle }}>Family Records</Typography>
        {
          editable ? (
            <Button
              variant="outlined"
              sx={{ color: "var(--primary-color)", fontWeight: "bold" }}
              onClick={() => addRecord("familyDetails")}>
              + Add Record
            </Button>
          ) : null
        }
      </Box>
      <Box>
        {familyData.familyDetails?.map((record, index) =>
          editable ? (
            familyDetailsEditMode(record, index)
          ) : (
            <Box sx={{ marginBottom: "25px" }}>
              <Box sx={viewEducationBox}>
                <Typography sx={viewEducationTitle}>
                  {familyData.familyDetails[index].familyFirstname} {familyData.familyDetails[index].familyLastname}
                </Typography>
                <Typography sx={viewProfileSubtitle}>
                  Relationship : {familyData.familyDetails[index].familyRelation} | Phone No:{" "}
                  {familyData.familyDetails[index].familyPhoneNumber}
                </Typography>
                <Typography sx={viewProfileSubtitle}>
                  Email: {familyData.familyDetails[index].familyEmail} | DOB: {familyData.familyDetails[index].familyDob}
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

export default DisplayFamily;
