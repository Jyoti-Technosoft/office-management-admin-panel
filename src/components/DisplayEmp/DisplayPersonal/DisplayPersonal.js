import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import ProfileImg from "../../../assets/img/profile.svg";
import StarIcon from "../../../assets/img/icons/starIcon.svg";
import {viewProfileSubtitle} from "../../CustomDesignMUI/CustomMUI";
import { Delete, Edit } from "@mui/icons-material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { InputFieldPropsForm } from "../../CustomDesignMUI/CustomMUI";

const DisplayPersonal = () => {
  const navigate = useNavigate();

  // DATA CALLING START
  const { userData, employeeApiEndpoint, setUserData} = useContext(GlobalContext);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { employeeId } = useParams();
  const employeeCall = userData.find((user) => user.id === parseInt(employeeId));
  const [editable, setEditable] = useState(false);
  const [editedEmployeeData, setEditedEmployeeData] = useState({...employeeCall,});
  console.log("setEditedEmployeeData", editedEmployeeData);
  console.log("EmployeeID", employeeId);

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

  const addNewEmployee = () =>{
    if(employeeId === undefined ) {
      setEditable(true);
    }
  }
  useEffect(() =>{
    addNewEmployee();
  },[]);

  return (
    <Box>
      {/* {/ EDIT AND DELETE BUTTONS /} */}
      {employeeCall?.id ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "-2px",
          }}
        >
          <IconButton
            onClick={editEmployee}
            sx={{ color: "var( --third-color)" }}
          >
            <Edit />
          </IconButton>

          <IconButton
            onClick={() => setOpenDeleteDialog(true)}
            sx={{ color: "var( --third-color)" }}
          >
            <Delete />
          </IconButton>
        </Box>
      ) : null}
      {/* {/ FOR PROFILE IMAGES /} */}
      <Box>
        <Box>
          <img width={"120px"} src={ProfileImg} alt="profile" />
          {/* <Box>
            <img src={StarIcon} alt="icon" />
          </Box> */}
          <Box>
            {employeeCall?.id ? (
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginLeft: "9px",
                  marginTop: "10px",
                }}
              >
                Employee ID : {"JT" + " " + (employeeCall?.id + 100)}
              </Typography>
            ) : null}
          </Box>
        </Box>
      </Box>

      {/* {/ FOR EMPLOYEE PERSNOL DETAILS /} */}
      <Box
        sx={{
          marginTop: "30px",
          marginLeft: "9px",
        }}
      >
        <form>
          <Grid container>
            {/* {/ LEFT PART /} */}
            <Grid container xs={12} md={6} rowSpacing={2}>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Employee Name</Typography>
                <TextField
                  inputProps={{
                    sx: InputFieldPropsForm(),
                  }}
                  sx={{
                    width: "80%",
                  }}
                  name="personalFirstname"
                  value={editedEmployeeData.personalFirstname}
                  disabled={!editable}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Department</Typography>
                <Select
                  sx={{
                    width: "80%",
                    height: "45px",
                  }}
                  name="jobDepartment"
                  value={editedEmployeeData.jobDepartment}
                  disabled={!editable}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Select a Department</MenuItem>
                  <MenuItem value="HR">HR</MenuItem>
                  <MenuItem value="Designer">Designer</MenuItem>
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Front-end Developer">
                    Front-end Developer
                  </MenuItem>
                  <MenuItem value="Back-end Developer">
                    Back-end Developer
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Job Title</Typography>

                <Select
                  sx={{
                    width: "80%",
                    height: "45px",
                  }}
                  name="jobDesignation"
                  value={editedEmployeeData.jobDesignation}
                  disabled={!editable}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Select a designation</MenuItem>
                  <MenuItem value="HR">HR</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="UI & UX Designer">UI & UX Designer</MenuItem>
                  <MenuItem value="Java Developer">JAVA Developer</MenuItem>
                  <MenuItem value="Jr.Developer">Jr.Developer</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Job Category</Typography>
                <Select
                  sx={{
                    width: "80%",
                    height: "45px",
                  }}
                  name="jobCategory"
                  value={editedEmployeeData.jobCategory}
                  disabled={!editable}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Select a job category</MenuItem>
                  <MenuItem value="fulltime">Full time</MenuItem>
                  <MenuItem value="parttime">Part time</MenuItem>
                </Select>
              </Grid>
            </Grid>

            {/* {/ RIGHT PART /} */}

            <Grid container xs={12} md={6} rowSpacing={2}>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "11px" }}>
                  Date of Joining
                </Typography>
                <TextField
                  inputProps={{
                    sx: InputFieldPropsForm(),
                  }}
                  sx={{
                    width: "80%",
                  }}
                  name="jobDoj"
                  value={editedEmployeeData.jobDoj}
                  type="date"
                  disabled={!editable}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Date of Birth</Typography>
                <TextField
                  inputProps={{
                    sx: InputFieldPropsForm(),
                  }}
                  sx={{
                    width: "80%",
                  }}
                  name="personalDob"
                  value={editedEmployeeData.personalDob}
                  type="date"
                  disabled={!editable}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>Blood Group</Typography>
                <Select
                  sx={{
                    width: "80%",
                    height: "45px",
                  }}
                  name="personalBlood"
                  value={editedEmployeeData.personalBlood}
                  disabled={!editable}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">Select a blood group</MenuItem>
                  <MenuItem value="ab+">AB+</MenuItem>
                  <MenuItem value="a+">A+</MenuItem>
                  <MenuItem value="b+">B+</MenuItem>
                  <MenuItem value="o+">O+</MenuItem>
                  <MenuItem value="ab-">AB-</MenuItem>
                  <MenuItem value="a-">A-</MenuItem>
                  <MenuItem value="b-">B-</MenuItem>
                  <MenuItem value="o-">O-</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={viewProfileSubtitle}>
                  Emergency Number
                </Typography>
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
              </Grid>
            </Grid>
          </Grid>
        </form>

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
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        maxWidth="md"
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want Delete?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => deleteEmployee()}
            component={Link}
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default DisplayPersonal;
