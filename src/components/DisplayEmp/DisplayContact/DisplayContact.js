import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { viewProfileSubtitle, viewProfileTitle } from '../../CustomDesignMUI/CustomMUI';
import { BorderBottom } from "@mui/icons-material";

const DisplayContact = () => {
  return (
    <Box sx={{
      marginTop: '30px',
      marginLeft: "9px",
      }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '30px', borderBottom: 1}}>Contact Details</Typography>
      <Grid container>
        {/* {/ LEFT PART /} */}
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

        {/* {/ RIGHT PART /} */}
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

  );
};

export default DisplayContact;
