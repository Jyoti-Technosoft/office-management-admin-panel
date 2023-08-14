import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";

const Leave = () => {
  const { employeeData } = useContext(GlobalContext);

  const [leaveData, setLeaveData] = useState([]);

  useEffect(() => {
    setLeaveData(employeeData);
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
        Leave
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
              sx={{ backgroundColor: index % 2 === 1 ? 'var(--pirmary-light-color)' : '' }} // Apply alternating colors
              >
                <TableCell>{index}</TableCell>
                <TableCell>28/04/2022</TableCell>
                <TableCell>28/04/2022</TableCell>
                <TableCell>Full day</TableCell>
                <TableCell>Personal</TableCell>
                <TableCell>Paid</TableCell>
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
export default Leave;
