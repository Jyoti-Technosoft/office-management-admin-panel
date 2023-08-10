import React from "react";
import { Box, Typography } from "@mui/material";
import {
  viewProfileSubtitle,
  viewEducationBox,
  viewEducationTitle,
} from "../../CustomDesignMUI/CustomMUI";

const DisplayFinancial = () => {
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
        Financial Details
      </Typography>
      <Box sx={{ marginBottom: "25px" }}>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>
            0001100101 | John Doe{" "}
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            GTBank | Savings Account{" "}
          </Typography>
        </Box>
        <Box sx={viewEducationBox}>
          <Typography sx={viewEducationTitle}>
            0001100101 | Doe Johnn{" "}
          </Typography>
          <Typography sx={viewProfileSubtitle}>
            GTBank | Savings Account{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayFinancial;
