import React, { useContext, useState } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import ProfileImg from "../../../assets/img/adminIcon.svg";
import { viewProfileTitle, viewProfileSubtitle } from '../../CustomDesignMUI/CustomMUI';
import { Delete, Edit } from "@mui/icons-material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { useParams } from "react-router-dom";
import CustomDialogBox from "../../ReusableComponents/CustomDialogBox";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";


const DisplayPersonal = () => {

  // DATA CALLING START 
  const { userData } = useContext(GlobalContext)
  const [openDialog, setOpenDialog] = useState(false)
  const { employeeId } = useParams();
  const employeeCall = userData.find(user => user.id === parseInt(employeeId));
  if (!employeeCall) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
      {/* EDIT AND DELETE BUTTONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "-2px",
          color: "var(--secondary-text-color)",
        }}>
        <IconButton sx={{ color: "var( --third-color)" }}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => setOpenDialog(true)} sx={{ color: "var( --third-color)" }}>
          <Delete />
        </IconButton>
      </Box>
      {/* {/ FOR PROFILE IMAGES /} */}
      <Box>
        <Box>
          <img width={"120px"} src={ProfileImg} alt="profile" />
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                marginLeft: "9px",
                marginTop: '25px',
                color: "var(--primary-text-color)",
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
        color: "var(--primary-text-color)",
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
