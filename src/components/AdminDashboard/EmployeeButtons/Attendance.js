import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";


const Attendance = () => {
  const { employeeData } = useContext(GlobalContext);

  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    setAttendanceData(employeeData);
    console.log("Dashboard: ", employeeData);
  }, [employeeData]);


  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "40px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
        }}
      >
        Attandance
      </Typography>
      {/*  Add scroll to the table  */}
      <Box
        sx={{
          // height: "500px",
          marginTop: "15px",
          maxHeight: "calc(100vh - 380px)",
        }}
        overflow="auto"
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ background: "var(--pirmary-light-color)" }}>
              <TableRow sx={{ textDecoration: "none" }}>
                <TableCell>
                  <b>Index</b>
                </TableCell>
                <TableCell>
                  <b>Name</b>
                </TableCell>
                <TableCell>
                  <b>City</b>
                </TableCell>
                <TableCell>
                  <b>Time</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendanceData?.map((attendance, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor:
                      index % 2 === 1 ? "var(--pirmary-light-color)" : "",
                  }} // Apply alternating colors
                >
                  <TableCell>{index}</TableCell>
                  <TableCell>John</TableCell>
                  <TableCell>Maxico</TableCell>
                  <TableCell>Full day</TableCell>
                </TableRow>
                //   <TableRow>
                //     <TableCell>30/04/2022</TableCell>
                //     <TableCell>30/04/2022</TableCell>
                //     <TableCell>Half day</TableCell>
                //     <TableCell>Examination</TableCell>
                //     <TableCell>Sick</TableCell>
                //   </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
export default Attendance;
