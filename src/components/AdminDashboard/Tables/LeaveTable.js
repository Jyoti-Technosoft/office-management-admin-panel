import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { tableBodyCell, tableHeadCell } from "../../CustomDesignMUI/CustomMUI";

const LeaveTable = () => {
  const { employeeData } = useContext(GlobalContext);

  const [leaveData, setLeaveData] = useState([]);

  useEffect(() => {
    setLeaveData(employeeData);
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
                From
              </TableCell>
              <TableCell sx={tableHeadCell}>
                To
              </TableCell>
              <TableCell sx={tableHeadCell}>
                Time
              </TableCell>
              <TableCell sx={tableHeadCell}>
                Reason(s)
              </TableCell>
              <TableCell sx={tableHeadCell}>
                Type
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveData?.map((leave, index) => (
              <TableRow
                key={index}
                sx={{
                  background: "var(--background-table-sidebar-card-color)",
                }}
              >
                <TableCell sx={tableBodyCell}>{index}</TableCell>
                <TableCell sx={tableBodyCell}>28/04/2022</TableCell>
                <TableCell sx={tableBodyCell}>28/04/2022</TableCell>
                <TableCell sx={tableBodyCell}>Full day</TableCell>
                <TableCell sx={tableBodyCell}>Personal</TableCell>
                <TableCell sx={tableBodyCell}>Paid</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default LeaveTable;
