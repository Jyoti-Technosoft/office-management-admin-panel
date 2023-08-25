import React from "react";
import { Box, Typography } from "@mui/material";
import AttendanceTable from "../Tables/AttendanceTable";
import SearchBar from "../../ReusableComponents/SearchBar";

const Attendance = () => {

  return (
    <Box
      sx={{
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
        marginTop: "30px",
        borderRadius: "10px",
        background: "var(--plain-white)",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ padding: "15px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "var(--primary-text-color)",
            }}
          >
            Attandance
          </Typography>
          <Box>
            <SearchBar />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            maxHeight: "calc(100vh - 455px)",
          }}
          overflow="auto"
        >
          <AttendanceTable />
        </Box>
      </Box>
    </Box>
  );
};
export default Attendance;
