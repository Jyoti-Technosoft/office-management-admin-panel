import React from "react";
import { Box, Typography } from "@mui/material";
import AttendanceTable from "../Tables/AttendanceTable";
import SearchBar from "../../ReusableComponents/SearchBar";

const Attendance = () => {
  return (
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
  );
};
export default Attendance;
