import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const DisplayContact = () => {
  return (
    <Box>
      <Box sx={{ padding: "8px",margin:"15px 15px" }}>
        <Box sx={{ marginBottom: "25px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  Phone Number
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  +210 921 254 654
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  Additional Number
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
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
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  E-mail Address
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
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
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  State of residence
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  USA
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  City
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
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
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  Residential Address
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  B-23, Western Plaza, opp. ZARA mall.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayContact;
