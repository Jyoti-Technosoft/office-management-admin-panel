import React from "react";
import { Box, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewEducationBox,
  viewEducationTitle,
  viewExperiencePosition,
} from "../../CustomDesignMUI/CustomMUI";

const DisplayExperience = () => {
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
        Experience Details
      </Typography>
      <Box sx={{ marginBottom: "25px" }}>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>SpaceX</Typography>
          <Typography sx={viewExperiencePosition}>Position: CEO</Typography>
          <Typography sx={viewProfileSubtitle}>
            B.Sc in Computer Science, May 2014 - May 2018
          </Typography>
        </Box>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>SpaceX</Typography>
          <Typography sx={viewExperiencePosition}>Position: Manager</Typography>
          <Typography sx={viewProfileSubtitle}>
            B.Sc in Computer Science, May 2014 - May 2018
          </Typography>
        </Box>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>Google</Typography>
          <Typography sx={viewExperiencePosition}>Position: CEO</Typography>
          <Typography sx={viewProfileSubtitle}>
            B.Sc in Computer Science, May 2014 - May 2018
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayExperience;
