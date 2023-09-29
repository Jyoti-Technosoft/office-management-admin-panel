import React, { useContext, useState } from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewEducationBox,
  viewEducationTitle,
  viewProfileTitle,
  InputFieldPropsForm,
} from "../../CustomDesignMUI/CustomMUI";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { Edit } from "@mui/icons-material";

const DisplayFinancial = (props) => {
  // DATA CALLING START
  const { employeeCall, saveNextButtonCallback, nextButtonCallback } = props;
  console.log("Employee...", employeeCall);
  const { setEditable, editable } = useContext(GlobalContext);
  const [editedEmployeeData, setEditedEmployeeData] = useState({ ...employeeCall, });
  const [originalEmployeeData, setOriginalEmployeeData] = useState({ ...employeeCall });
  console.log("Orig", originalEmployeeData);
  const [financialData, setFinancialData] = useState({ ...employeeCall });
  console.log("FamilyData", financialData);
  // DATA CALLING END

  const editEmployee = () => {
    setEditable(true);
  };

  const initialization = {
    financialBankName: "",
    financialAccountNo: "",
    financialHolderName: "",
    financialIfsc: "",
    financialBranchName: "",
  };

  const handleInputChange = (recordType, index, event) => {
    const { name, value } = event.target;
    setFinancialData((prevData) => {
      const updatedData = { ...prevData };
      if (recordType === "financialDetails" && updatedData.financialDetails) {
        updatedData.financialDetails[index] = {
          ...updatedData.financialDetails[index],
          [name]: value,
        };
      }
      return updatedData;
    });
  };

  const addRecord = (recordType) => {
    setFinancialData((prevDetails) => {
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
    setFinancialData((prevDetails) => {
      const updatedRecords = [...prevDetails.financialDetails];
      updatedRecords.splice(index, 1);
      return {
        ...prevDetails,
        [recordType]: updatedRecords,
      };
    });
  };

  // const cancelEdit = () => {
  //   if (Object.keys(originalEmployeeData).length) {
  //     setFinancialData({ ...originalEmployeeData });
  //     setEditable(false);
  //   } else {
  //     setEditedEmployeeData({ ...initialization });
  //     setEditable(true);
  //   }
  // };
  const cancelEdit = () => {
      setEditedEmployeeData({ ...initialization });
      setEditable(true);
  };

  Object.assign(editedEmployeeData, setFinancialData);
  console.log("EDITED EMPLOYEE DATE", editedEmployeeData);

  const financialDetailsEditMode = (record, index) => {
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
            name="financialBankName"
            label="Bank Name"
            value={financialData.financialDetails[index].financialBankName}
            onChange={(event) => handleInputChange("financialDetails", index, event)}
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
            name="financialAccountNo"
            value={financialData.financialDetails[index].financialAccountNo}
            label="Account Number"
            onChange={(event) => handleInputChange("financialDetails", index, event)}

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
            name="financialHolderName"
            value={financialData.financialDetails[index].financialHolderName}
            label="Holders Name"
            onChange={(event) => handleInputChange("financialDetails", index, event)}
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
            name="financialIfsc"
            value={financialData.financialDetails[index].financialIfsc}
            label="IFSC code"
            onChange={(event) => handleInputChange("financialDetails", index, event)}
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
            name="financialBranchName"
            value={financialData.financialDetails[index].financialBranchName}
            label="Branch Name"
            onChange={(event) => handleInputChange("financialDetails", index, event)}
          />
        </Box>
        {/* Remove button for record */}
        <Button
          variant="outlined"
          sx={{ color: "red", fontWeight: "bold" }}
          onClick={() => removeRecord("financialDetails", index)}
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
            Financial Details
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
        <Typography sx={{ ...viewProfileTitle }}>Financial Records</Typography>
        {
          editable ? (
            <Button
              variant="outlined"
              sx={{ color: "var(--primary-color)", fontWeight: "bold" }}
              onClick={() => addRecord("financialDetails")}>
              + Add Record
            </Button>
          ) : null
        }
      </Box>
      <Box>
        {financialData.financialDetails?.map((record, index) =>
          editable ? (
            financialDetailsEditMode(record, index)
          ) : (
            <Box sx={{ marginBottom: "25px" }}>
              <Box sx={viewEducationBox}>
                <Typography sx={viewEducationTitle}>
                  {financialData.financialDetails[index].financialHolderName} |{" "}
                  {employeeCall.financialAccountNo}
                </Typography>
                <Typography sx={viewProfileSubtitle}>
                  Bank Name: {financialData.financialDetails[index].financialBankName}
                </Typography>
                <Typography sx={viewProfileSubtitle}>
                  IFSC Code: {financialData.financialDetails[index].financialIfsc}
                </Typography>
                <Typography sx={viewProfileSubtitle}>
                  Branch Name: {financialData.financialDetails[index].financialBranchName}
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
              onClick={() => {cancelEdit()}}
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

export default DisplayFinancial;
