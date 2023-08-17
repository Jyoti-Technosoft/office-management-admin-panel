import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";

const AttendanceTable = () => {
  const { employeeData } = useContext(GlobalContext);

  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    setAttendanceData(employeeData);
    console.log("Dashboard: ", employeeData);
  }, [employeeData]);

  return (
    <Box>
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
                }}
              >
                <TableCell>{index}</TableCell>
                <TableCell>John</TableCell>
                <TableCell>Maxico</TableCell>
                <TableCell>Full day</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default AttendanceTable;
