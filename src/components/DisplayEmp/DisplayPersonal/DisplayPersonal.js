import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Grid, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import ProfileImg from "../../../assets/img/profile.svg";
import StarIcon from "../../../assets/img/icons/starIcon.svg";
import { viewProfileTitle, viewProfileSubtitle } from '../../CustomDesignMUI/CustomMUI';
import { Delete, Edit } from "@mui/icons-material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const DisplayPersonal = () => {
  const navigate = useNavigate();

  // DATA CALLING START 
  const { userData, employeeApiEndpoint, setUserData, employeeData, setShowToast } = useContext(GlobalContext)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const { employeeId } = useParams();
  const employeeCall = userData.find(user => user.id === parseInt(employeeId));
  if (!employeeCall) {
    return <Box>Loading...</Box>;
  }
  // DATA CALLING END

  const deleteEmployee = () => {
    axios.delete(`${employeeApiEndpoint}/${employeeId}`)
      .then(response => {
        console.log(`Employee Deleted Successfully`);
        navigate('/dashboard')
        setShowToast({ show: true, msg: "Record Deleted successfully", type: "success" });
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
    <Box>
      {/* {/ EDIT AND DELETE BUTTONS /} */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "-2px",
        }}>
        <IconButton sx={{ color: "var( --third-color)" }}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => setOpenDeleteDialog(true)} sx={{ color: "var( --third-color)" }}>
          <Delete />
        </IconButton>
      </Box>
      {/* {/ FOR PROFILE IMAGES /} */}
      <Box>
        <Box>
          <img width={"120px"} src={ProfileImg} alt="profile" />
          {/* <Box>
            <img src={StarIcon} alt="icon" />
          </Box> */}
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                marginLeft: "9px",
                marginTop: '10px',
              }}>
              Employee ID : {"JT" + " " + (employeeCall.id + 100)}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* {/ FOR EMPLOYEE PERSNOL DETAILS /} */}
      <Box sx={{
        marginTop: '30px',
        marginLeft: "9px",
      }}>
        <Grid container>

          {/* {/ LEFT PART /} */}
          <Grid container xs={12} md={6} rowSpacing={2}>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Employee Name
              </Typography>
              <Typography sx={viewProfileTitle}>
                {employeeCall.personalFirstname} {employeeCall.personalLastname}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Department
              </Typography>
              <Typography sx={viewProfileTitle}>
                {employeeCall.jobDepartment}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Job Title
              </Typography>
              <Typography sx={viewProfileTitle}>
                {employeeCall.jobDesignation}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Job Category
              </Typography>
              <Typography sx={viewProfileTitle}>
                {employeeCall.jobCategory.charAt(0).toUpperCase() + employeeCall.jobCategory.slice(1)}
              </Typography>
            </Grid>
          </Grid>

          {/* {/ RIGHT PART /} */}

          <Grid container xs={12} md={6} rowSpacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "11px" }}>
                Date of Joining
              </Typography>
              <Typography sx={viewProfileTitle}>
                {employeeCall.jobDoj}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Date of Birth
              </Typography>
              <Typography sx={viewProfileTitle}>
                {employeeCall.personalDob}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Blood Group
              </Typography>
              <Typography sx={viewProfileTitle}>
                {employeeCall.personalBlood.toUpperCase()}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Emergency Number
              </Typography>
              <Typography sx={viewProfileTitle}>
                {employeeCall.contactPersonalNumber}
              </Typography>
            </Grid>
          </Grid>

        </Grid>
      </Box>
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)} maxWidth="md">
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
            color='error'
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>


  );
};
export default DisplayPersonal;
