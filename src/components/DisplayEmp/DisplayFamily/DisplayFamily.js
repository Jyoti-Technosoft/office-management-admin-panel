import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  viewProfileSubtitle,
  viewEducationBox,
  viewProfileTitle,
  viewEducationTitle,
  InputFieldPropsForm,
} from "../../CustomDesignMUI/CustomMUI";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { Edit } from "@mui/icons-material";

const DisplayFamily = (props) => {
  // DATA CALLING START
  const { employeeCall, saveNextButtonCallback, nextButtonCallback } = props;
  console.log("Employee...", employeeCall);
  const { setEditable, editable } = useContext(GlobalContext);
  const [editedEmployeeData, setEditedEmployeeData] = useState({
    ...employeeCall,
  });
  const [originalEmployeeData, setOriginalEmployeeData] = useState({
    ...employeeCall,
  });
  console.log("Orig", originalEmployeeData);
  const [familyData, setFamilyData] = useState({ ...employeeCall });
  console.log("FamilyData", familyData);
  // DATA CALLING END

  // -------------------------------------------------VALIDATION
  const [familyDetailsErrors, setFamilyDetailsErrors] = useState([{}]);

  // Make a function for saw the error messages
  const validateFamilyDetails = (record) => {
    const errors = {};

    if (!record.familyFirstname) {
      errors.familyFirstname = "First name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(record.familyFirstname)) {
      errors.familyFirstname = "First name should not contain numeric values";
    }

    if (!record.familyLastname) {
      errors.familyLastname = "Last name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(record.familyLastname)) {
      errors.familyLastname = "Last name should not contain numeric values";
    }

    if (!record.familyRelation) {
      errors.familyRelation = "Family relation is required";
    } else if (!/^[a-zA-Z\s]*$/.test(record.familyRelation)) {
      errors.familyRelation =
        "Family relation should not contain numeric values";
    }

    if (!record.familyEmail) {
      errors.familyEmail = "Email address is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(
        record.familyEmail
      )
    ) {
      errors.familyEmail = "Invalid email format";
    }

    if (!record.familyPhoneNumber) {
      errors.familyPhoneNumber = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(record.familyPhoneNumber)) {
      errors.familyPhoneNumber = "Phone number is not valid";
    }

    if (!record.familyDob) {
      errors.familyDob = "Date of birth is required";
    }

    return errors;
  };

  const editEmployee = () => {
    setEditable(true);
  };

  const initialization = {
    familyFirstname: "",
    familyLastname: "",
    familyRelation: "",
    familyEmail: "",
    familyPhoneNumber: "",
    familyDob: "",
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

        // Validate the family details record
        let errors = validateFamilyDetails(updatedData.familyDetails[index]);
        setFamilyDetailsErrors((prevErrors) => {
          prevErrors[index] = errors;
          return [...prevErrors];
        });
      }
      return updatedData;
    });
  };

  const isSaveDisabled = familyDetailsErrors.some(
    (errors) => Object.keys(errors).length > 0
  );

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
            onChange={(event) =>
              handleInputChange("familyDetails", index, event)
            }
          />
          {familyDetailsErrors[index]?.familyFirstname && (
            <Typography color="error">
              {familyDetailsErrors[index].familyFirstname}
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
            name="familyLastname"
            value={familyData.familyDetails[index].familyLastname}
            label="Last Name"
            onChange={(event) =>
              handleInputChange("familyDetails", index, event)
            }
          />
          {familyDetailsErrors[index]?.familyLastname && (
            <Typography color="error">
              {familyDetailsErrors[index].familyLastname}
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
            name="familyRelation"
            value={familyData.familyDetails[index].familyRelation}
            label="Family Relation"
            onChange={(event) =>
              handleInputChange("familyDetails", index, event)
            }
          />
          {familyDetailsErrors[index]?.familyRelation && (
            <Typography color="error">
              {familyDetailsErrors[index].familyRelation}
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
            name="familyEmail"
            value={familyData.familyDetails[index].familyEmail}
            label="Family Email"
            onChange={(event) =>
              handleInputChange("familyDetails", index, event)
            }
          />
          {familyDetailsErrors[index]?.familyEmail && (
            <Typography color="error">
              {familyDetailsErrors[index].familyEmail}
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
              ".MuiTypography-root": {
                color: "var(--secondary-text-color) !important",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
            name="familyPhoneNumber"
            value={familyData.familyDetails[index].familyPhoneNumber}
            label="Mobile Number"
            onChange={(event) =>
              handleInputChange("familyDetails", index, event)
            }
          />
          {familyDetailsErrors[index]?.familyPhoneNumber && (
            <Typography color="error">
              {familyDetailsErrors[index].familyPhoneNumber}
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
            InputProps={{
              startAdornment: <InputAdornment position="start" />,
            }}
            name="familyDob"
            type="date"
            value={familyData.familyDetails[index].familyDob}
            label="D.O.B"
            onChange={(event) =>
              handleInputChange("familyDetails", index, event)
            }
          />
          {familyDetailsErrors[index]?.familyDob && (
            <Typography color="error">
              {familyDetailsErrors[index].familyDob}
            </Typography>
          )}
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
        {editable ? (
          <Button
            variant="outlined"
            sx={{ color: "var(--primary-color)", fontWeight: "bold" }}
            onClick={() => addRecord("familyDetails")}
          >
            + Add Record
          </Button>
        ) : null}
      </Box>
      <Box>
        {familyData.familyDetails?.map((record, index) =>
          editable ? (
            familyDetailsEditMode(record, index)
          ) : (
            <Box sx={{ marginBottom: "25px" }}>
              <Box sx={viewEducationBox}>
                <Typography sx={viewEducationTitle}>
                  {familyData.familyDetails[index].familyFirstname}{" "}
                  {familyData.familyDetails[index].familyLastname}
                </Typography>
                <Typography sx={viewProfileSubtitle}>
                  Relationship :{" "}
                  {familyData.familyDetails[index].familyRelation} | Phone No:{" "}
                  {familyData.familyDetails[index].familyPhoneNumber}
                </Typography>
                <Typography sx={viewProfileSubtitle}>
                  Email: {familyData.familyDetails[index].familyEmail} | DOB:{" "}
                  {familyData.familyDetails[index].familyDob}
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
              disabled={!editable || isSaveDisabled}
              onClick={() => {
                nextButtonCallback(editedEmployeeData);
              }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              disabled={!editable || isSaveDisabled}
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
