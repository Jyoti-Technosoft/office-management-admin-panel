import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Zoom,
  Button,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import ProfileImg from "../../../assets/img/adminIcon.svg";
import { viewProfileSubtitle } from "../../CustomDesignMUI/CustomMUI";
import { Delete, Edit } from "@mui/icons-material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import CustomDialogBox from "../../ReusableComponents/CustomDialogBox";
import axios from "axios";
import { InputFieldPropsForm } from "../../CustomDesignMUI/CustomMUI";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const DisplayPersonal = (props) => {
  const {employeeCall, nextButtonCallback, exitEditMode} = props;
  console.log("lsdlksd", nextButtonCallback )
  // DATA CALLING START
  const {setEditable, editable } = useContext(GlobalContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [editedEmployeeData, setEditedEmployeeData] = useState({...employeeCall});
  console.log("sdsdsdsdsd", editedEmployeeData)
  const editEmployee = () => {
    console.log("Entering edit mode");
    setEditable(true);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //FOR ADDING NEW EMPLOYEE IF ANY ID IS NOT FOUND
  const addNewEmployee = () => {
    if (employeeCall?.id === undefined) {
      setEditable(true);
    }
  };
  useEffect(() => {
    addNewEmployee();
  }, []);

  return (
    <Box>
      {/* EDIT AND DELETE BUTTONS */}
      {employeeCall?.id ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "-2px",
            color: "var(--secondary-text-color)",
          }}>
          <Tooltip
            title="Edit Data"
            arrow
            disableInteractive
            TransitionComponent={Zoom}>
            <IconButton
              onClick={editEmployee}
              sx={{ color: "var( --third-color)" }}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Delete Data"
            arrow
            disableInteractive
            TransitionComponent={Zoom}>
            <IconButton
              onClick={() => setOpenDialog(true)}
              sx={{ color: "var( --third-color)" }}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      ) : null}

      {/* {/ FOR PROFILE IMAGES /} */}
      <Box>
        <Box>
          <img width={"120px"} src={ProfileImg} alt="profile" />
          <Box>
            {employeeCall?.id ? (
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginLeft: "9px",
                  marginTop: "10px",
                }}>
                Employee ID : {"JT" + " " + (employeeCall?.id + 100)}
              </Typography>
            ) : null}
          </Box>
        </Box>
      </Box>

      {/* FOR EMPLOYEE PERSNOL DETAILS */}
      <Box
        sx={{
          marginTop: "30px",
          marginLeft: "9px",
        }}>
        <form>
          <Grid container>
            {/* LEFT PART */}
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
                  onChange={handleInputChange}>
                  <MenuItem value="">Select a Department</MenuItem>
                  <MenuItem value="HR">HR</MenuItem>
                  <MenuItem value="Designer">Designer</MenuItem>
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Front-end Developer">Front-end Developer</MenuItem>
                  <MenuItem value="Back-end Developer">Back-end Developer</MenuItem>
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
                  onChange={handleInputChange}>
                  <MenuItem value="">Select a job category</MenuItem>
                  <MenuItem value="fulltime">Full time</MenuItem>
                  <MenuItem value="parttime">Part time</MenuItem>
                </Select>
              </Grid>
            </Grid>

            {/* RIGHT PART */}
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
                  inputProps={{sx: InputFieldPropsForm()}}
                  sx={{width: "80%"}}
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
                onClick={exitEditMode}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  fontWeight: "bold",
                  color: "var(--primary-color)",
                }}
                onClick={() => nextButtonCallback( editedEmployeeData)}
                >
                Save & Next
              </Button>
              
            </Box>
          )}
        </Box>
      </Box>
      <Box>
        <CustomDialogBox
          open={openDialog}
          setOpenDialog={setOpenDialog}
          dialogHeading="Confirm Delete"
          dialogDescription="Are you sure you want to delete this data?"
          dialogIcon={
            <WarningAmberIcon
              sx={{
                color: "#c70000",
                fontSize: "30px",
                borderRadius: "50px",
              }}
            />
          }
        />
      </Box>
    </Box>
  );
};
export default DisplayPersonal;
