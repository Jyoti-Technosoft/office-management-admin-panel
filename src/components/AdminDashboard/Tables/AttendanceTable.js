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
import { tableBodyCell, tableHeadCell } from "../../CustomDesignMUI/CustomMUI";

const AttendanceTable = () => {
  const { employeeData } = useContext(GlobalContext);

  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    setAttendanceData(employeeData);
    console.log("Dashboard: ", employeeData);
  }, [employeeData]);

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead sx={{ background: "var(--primary-highlight-color)",height:"70px" }}>
            <TableRow sx={{ textDecoration: "none" }}>
              <TableCell sx={tableHeadCell}>
                Index
              </TableCell>
              <TableCell sx={tableHeadCell}>
                Name
              </TableCell>
              <TableCell sx={tableHeadCell}>
                City
              </TableCell>
              <TableCell sx={tableHeadCell}>
                Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData?.map((attendance, index) => (
              <TableRow
                key={index}
                sx={{
                  background: "var(--background-table-sidebar-card-color)",
                }}
              >
                <TableCell sx={tableBodyCell}>{index}</TableCell>
                <TableCell sx={tableBodyCell}>John</TableCell>
                <TableCell sx={tableBodyCell}>Maxico</TableCell>
                <TableCell sx={tableBodyCell}>Full day</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default AttendanceTable;
