import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import { InputFieldPropsForm, viewProfileSubtitle } from "../../CustomDesignMUI/CustomMUI";
import { Edit } from "@mui/icons-material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";

const DisplayContact = (props) => {
  const {employeeCall, saveNextButtonCallback, nextButtonCallback, exitEditMode} = props;
  console.log("lsdlksd", nextButtonCallback )
  // DATA CALLING START
  const {setEditable, editable } = useContext(GlobalContext);
  const [editedEmployeeData, setEditedEmployeeData] = useState({...employeeCall});
  
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
            }}
            name="contactPersonalNumber"
            value={editedEmployeeData.contactPersonalNumber}
            disabled={!editable}
            onChange={handleInputChange}
          />
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
            }}
            name="contactAdditionalNumber"
            value={editedEmployeeData.contactAdditionalNumber}
            disabled={!editable}
            onChange={handleInputChange}
          />
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
            }}
            name="contactEmail"
            value={editedEmployeeData.contactEmail}
            disabled={!editable}
            onChange={handleInputChange}
          />
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
            }}
            name="contactState"
            value={editedEmployeeData.contactState}
            disabled={!editable}
            onChange={handleInputChange}
          />
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
            }}
            name="contactCity"
            value={editedEmployeeData.contactCity}
            disabled={!editable}
            onChange={handleInputChange}
          />
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
            }}
            name="contactResidental"
            value={editedEmployeeData.contactResidental}
            disabled={!editable}
            onChange={handleInputChange}
          />
        </Box>
      </Box>
      {/* <Box>
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
                color: "var(--primary-color)",
              }}
              onClick={saveEmployee}
            >
              Save
            </Button>
            <Button
              sx={{
                fontWeight: "bold",
                color: "gray",
              }}
              onClick={cancelEdit}
            >
              Cancel
            </Button>
          </Box>
        )}
      </Box> */}
    </Box>
  );
};

export default DisplayContact;
