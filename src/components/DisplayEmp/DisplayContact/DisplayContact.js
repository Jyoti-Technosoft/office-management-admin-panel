import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Grid, IconButton, TextField, Button } from "@mui/material";
import {
  InputFieldPropsForm,
  viewProfileSubtitle,
  viewProfileTitle,
} from "../../CustomDesignMUI/CustomMUI";
import { BorderBottom, Delete, Edit } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import axios from "axios";

const DisplayContact = () => {

  const navigate = useNavigate();

  // DATA CALLING START
  const { userData, setUserData, employeeApiEndpoint } = useContext(GlobalContext);
  const { employeeId } = useParams();
  const employeeCall = userData.find((user) => user.id === parseInt(employeeId));
  const [editable, setEditable] = useState(false);
  const [editedEmployeeData, setEditedEmployeeData] = useState({ ...employeeCall, });

  const deleteEmployee = () => {
    axios
      .delete(`${employeeApiEndpoint}/${employeeId}`)
      .then((response) => {
        console.log(`Employee Deleted Successfully`);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editEmployee = () => {
    console.log("Entering edit mode");
    setEditable(true);
  };

  const saveEmployee = () => {
    axios
      .put(`${employeeApiEndpoint}/${employeeId}`, editedEmployeeData)
      .then((response) => {
        console.log("Data Edited and Saved Successfully");
        const updatedUserData = userData.map((user) =>
          user.id === parseInt(employeeId) ? editedEmployeeData : user
        );
        setUserData(updatedUserData);
        setEditable(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const cancelEdit = () => {
    setEditedEmployeeData({ ...employeeCall });
    setEditable(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addNewEmployee = () => {
    if (employeeId === undefined) {
      setEditable(true);
    }
  }
  useEffect(() => {
    addNewEmployee();
  }, []);

  if (!employeeCall) {
    return <Box>Loading...</Box>; // Or handle the case when the employee is not found
  }
  // DATA CALLING END

  return (
    <Box
      sx={{
        marginTop: "10px",
        marginLeft: "9px",
      }}>
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
            sx={{
              // display: "flex",
              // justifyContent: "flex-end",
              // marginTop: "-2px",
            }}>
            <IconButton
              onClick={editEmployee}
              sx={{ color: "var( --third-color)" }}>
              <Edit />
            </IconButton>
          </Box>
        ) : null}
        </Box>
      </Box>
      <hr />
      {/* <Grid container> */}
      <Box sx={{ marginBottom: "25px" }}>
        {/* <Grid container spacing={2}>
          <Grid item xs={6}> */}
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
          {/* <Typography sx={viewProfileTitle}>
            {employeeCall.contactPersonalNumber}
          </Typography> */}
        </Box>
      </Box>
      {/* </Grid> */}
      {/* <Grid item xs={6}> */}
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
          {/* <Typography sx={viewProfileTitle}>
            {employeeCall.contactAdditionalNumber}
          </Typography> */}
        </Box>
      </Box>
      {/* </Grid> */}
      {/* </Grid> */}
      <Box sx={{ marginBottom: "25px" }}>
        {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={12}> */}
        <Box>
          <Typography sx={viewProfileSubtitle}>E-mail Address</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactEmail}
          </Typography>
        </Box>
        {/* </Grid> */}
        {/* </Grid> */}
      </Box>
      <Box sx={{ marginBottom: "25px" }}>
        {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={6}> */}
        <Box>
          <Typography sx={viewProfileSubtitle}>State of residence</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactState}
          </Typography>
        </Box>
      </Box>
      {/* </Grid> */}
      {/* <Grid item xs={6}> */}
      <Box sx={{ marginBottom: "25px" }}>
        <Box>
          <Typography sx={viewProfileSubtitle}>City</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactCity}
          </Typography>
        </Box>
      </Box>
      {/* </Grid> */}
      {/* </Grid> */}
      <Box sx={{ marginBottom: "21px" }}>
        {/* <Grid container spacing={2}> */}
        {/* <Grid item xs={12}> */}
        <Box>
          <Typography sx={viewProfileSubtitle}>Residential Address</Typography>
          <Typography sx={viewProfileTitle}>
            {employeeCall.contactResidental}
          </Typography>
        </Box>
        {/* </Grid> */}
        {/* </Grid> */}
      </Box>
      {/* </Grid> */}
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
      </Box>
    </Box>
  );
};

export default DisplayContact;
