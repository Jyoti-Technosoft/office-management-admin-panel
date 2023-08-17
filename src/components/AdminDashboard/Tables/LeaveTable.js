import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
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

const LeaveTable = () => {
  const { employeeData } = useContext(GlobalContext);

  const [leaveData, setLeaveData] = useState([]);

  useEffect(() => {
    setLeaveData(employeeData);
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
                <b>From</b>
              </TableCell>
              <TableCell>
                <b>To</b>
              </TableCell>
              <TableCell>
                <b>Time</b>
              </TableCell>
              <TableCell>
                <b>Reason(s)</b>
              </TableCell>
              <TableCell>
                <b>Type</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveData?.map((leave, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor:
                    index % 2 === 1 ? "var(--pirmary-light-color)" : "",
                }}
              >
                <TableCell>{index}</TableCell>
                <TableCell>28/04/2022</TableCell>
                <TableCell>28/04/2022</TableCell>
                <TableCell>Full day</TableCell>
                <TableCell>Personal</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default LeaveTable;
