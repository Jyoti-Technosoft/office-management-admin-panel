import React from "react";
import { Box, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewEducationBox,
  viewEducationTitle,
} from "../../CustomDesignMUI/CustomMUI";

const DisplayFamily = () => {
  return (
    <Box
      sx={{
        marginTop: "30px",
        marginLeft: "9px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "30px", borderBottom: 1 }}
      >
        Family Details
      </Typography>
      <Box sx={{ marginBottom: "25px" }}>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>
            Mr Johnnie Walker Deep
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            Relationship : Brother | Phone No : 090 300 540 9888
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            Address: 333 Adeniyi Street Victoria Island, Lagos
          </Typography>
        </Box>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>
            Mr Johnnie Walker Deep
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            Relationship : Brother | Phone No : 090 300 540 9888
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            Address: 333 Adeniyi Street Victoria Island, Lagos
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayFamily;
