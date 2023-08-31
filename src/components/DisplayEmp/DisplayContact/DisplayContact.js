import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import {
  InputFieldPropsForm,
  viewProfileSubtitle,
  viewProfileTitle,
} from "../../CustomDesignMUI/CustomMUI";
import { Edit } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import axios from "axios";

const DisplayContact = () => {
  const navigate = useNavigate();
  // DATA CALLING START
  const { userData, setUserData, employeeApiEndpoint } =
    useContext(GlobalContext);
  const { employeeId } = useParams();
  const employeeCall = userData.find(
    (user) => user.id === parseInt(employeeId)
  );
  const [editable, setEditable] = useState(false);
  const [editedEmployeeData, setEditedEmployeeData] = useState({ ...employeeCall, });
  console.log("setEditedEmployeeData", editedEmployeeData);
  console.log("EmployeeID", employeeId);

  const editEmployee = () => {
    console.log("Entering edit mode");
    setEditable(true);
  };

  const saveEmployee = () => {
    if (employeeId === undefined) {
      // Add new employee
      axios
        .post(`${employeeApiEndpoint}`, editedEmployeeData)  // Use POST for adding new records
        .then((response) => {
          console.log("New Employee Data Added Successfully");
          const updatedUserData = [...userData, response.data]; // Add the new employee to the list
          setUserData(updatedUserData);
          setEditable(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Update existing employee
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
    }
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
  };
  useEffect(() => {
    addNewEmployee();
  }, []);
  // if (!employeeCall) {
  //   return <Box>sdsdsdsdsd...</Box>; 
  // }

  // DATA CALLING END

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
      <hr/>
      {/* <Grid container> */}
      <Box sx={{marginBottom: "25px", paddingTop: "20px"}}>
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
