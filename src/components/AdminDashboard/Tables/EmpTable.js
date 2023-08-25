import React, { useContext } from "react";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import { tableBodyCell, tableHeadCell } from "../../CustomDesignMUI/CustomMUI";
import VisibilityIcon from "@mui/icons-material/Visibility";

const EmpTable = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  // Context Function
  const { userData } = useContext(GlobalContext);
  return (
    <Box>
      <TableContainer >
        <Table>
          <TableHead sx={{ background: "var(--primary-highlight-color)",height:"70px", }}>
            <TableRow sx={{ textDecoration: "none",}}>
              <TableCell sx={tableHeadCell}>Emp ID</TableCell>
              <TableCell sx={tableHeadCell}>Name</TableCell>
              <TableCell sx={tableHeadCell}>Date of Birth</TableCell>
              <TableCell sx={tableHeadCell}>Date of Join</TableCell>
              <TableCell sx={tableHeadCell}>Designation</TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "var(--primary-text-color)",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData?.map((user, index) => (
              <TableRow
                key={index}
                sx={{
                  // backgroundColor: index % 2 === 1 ? "var(--highlight-color)" : ""
                  background: "var(--background-table-sidebar-card-color)",
                }}
              >
                <TableCell sx={{...tableBodyCell, fontWeight: '500 !important',}}>
                  {"JT" + " " + (user.id + 100)}
                </TableCell>
                <TableCell
                  sx={{...tableBodyCell, fontWeight: '500 !important',}}
                >{`${user.personalFirstname} ${user.personalLastname}`}</TableCell>
                <TableCell sx={{...tableBodyCell, fontWeight: '500 !important',}}>
                  {formatDate(user.personalDob)}
                </TableCell>
                <TableCell sx={{...tableBodyCell, fontWeight: '500 !important',}}>
                  {formatDate(user.jobDoj)}
                </TableCell>
                <TableCell sx={tableBodyCell}>{user.jobDesignation}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Link to={`/viewprofile/${user.id}`}>
                    <VisibilityIcon
                      sx={{
                        fontSize: "1.5rem",
                        color: "var(--secondary-text-color)",
                      }}
                    />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default EmpTable;
