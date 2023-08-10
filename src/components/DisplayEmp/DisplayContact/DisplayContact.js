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
      {/* <Grid container> */}
         <Box sx={{ marginBottom: "25px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <Typography sx={viewProfileSubtitle}>
                  Phone Number
                </Typography>
                <Typography sx={viewProfileTitle}>
                  +210 921 254 654
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography sx={viewProfileSubtitle}>
                  Additional Number
                </Typography>
                <Typography sx={viewProfileTitle}>
                  +910 881 255 664
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Typography sx={viewProfileSubtitle}>
                  E-mail Address
                </Typography>
                <Typography sx={viewProfileTitle}>
                  john@gmail.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <Typography sx={viewProfileSubtitle}>
                  State of residence
                </Typography>
                <Typography sx={viewProfileTitle}>
                  USA
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography sx={viewProfileSubtitle}>
                  City
                </Typography>
                <Typography sx={viewProfileTitle}>
                  Nebraska
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: "21px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Typography sx={viewProfileSubtitle}>
                  Residential Address
                </Typography>
                <Typography sx={viewProfileTitle}>
                  B-23, Western Plaza, opp. ZARA mall.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      {/* </Grid> */}
    </Box>

  );
};

export default DisplayContact;
