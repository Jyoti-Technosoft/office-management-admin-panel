import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import ProfileImg from "../../../assets/img/profile.svg";
import StarIcon from "../../../assets/img/icons/starIcon.svg";
import { viewProfileTitle, viewProfileSubtitle } from '../../CustomDesignMUI/CustomMUI';
import { Delete, Edit } from "@mui/icons-material";

const DisplayPersonal = () => {
  return (
    <Box>
      {/* {/ {/ EDIT AND DELETE BUTTONS /} /} */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "-2px",
        }}>
        <IconButton sx={{ color: "var( --third-color)" }}>
          <Edit />
        </IconButton>
        <IconButton sx={{ color: "var( --third-color)" }}>
          <Delete />
        </IconButton>
      </Box>
      {/* {/ {/ FOR PROFILE IMAGES /} /} */}
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
              Employee ID: 101
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* {/ {/ FOR EMPLOYEE PERSNOL DETAILS /} /} */}
      <Box sx={{
        marginTop: '30px',
        marginLeft: "9px",
        }}>
        <Grid container>
          {/* {/ {/ LEFT PART /} /} */}
          <Grid container xs={12} md={6} rowSpacing={2}>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Employee Name
              </Typography>
              <Typography sx={viewProfileTitle}>
                John Doe
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Department
              </Typography>
              <Typography sx={viewProfileTitle}>
                Design & Marketing
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Job Title
              </Typography>
              <Typography sx={viewProfileTitle}>
                UI/UX Designer
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Job Category
              </Typography>
              <Typography sx={viewProfileTitle}>
                Full Time
              </Typography>
            </Grid>
          </Grid>

          {/* {/ {/ RIGHT PART /} /} */}
          <Grid container xs={12} md={6} rowSpacing={2}>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "11px" }}>
                Date of Joining
              </Typography>
              <Typography sx={viewProfileTitle}>
                14-12-2022
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Date of Birth
              </Typography>
              <Typography sx={viewProfileTitle}>
                15-05-1998
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Blood Group
              </Typography>
              <Typography sx={viewProfileTitle}>
                A+
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={viewProfileSubtitle}>
                Emergency Number
              </Typography>
              <Typography sx={viewProfileTitle}>
                +149 427 100 66
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default DisplayPersonal;
