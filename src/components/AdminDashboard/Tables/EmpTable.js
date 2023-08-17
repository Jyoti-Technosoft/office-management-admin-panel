import React, { useContext } from "react";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../ContextAPI/CustomContext";


const EmpTable = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
      // Context Function
  const { userData, searchBarValue } = useContext(GlobalContext);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ background: "var(--pirmary-light-color)" }}>
            <TableRow sx={{ textDecoration: "none" }}>
              <TableCell>
                <b>Emp ID</b>
              </TableCell>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Date of Birth</b>
              </TableCell>
              <TableCell>
                <b>Date of Join</b>
              </TableCell>
              <TableCell>
                <b>Designation</b>
              </TableCell>
              <TableCell>
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {userData?.map((user, index) => (
                console.log(user.personalFirstname + user.personalLastname),
                searchBarValue ?
                  user.personalFirstname.includes(searchBarValue) ||
                    user.personalLastname.includes(searchBarValue) ||
                    (user.personalFirstname+user.personalLastname).includes(searchBarValue) ||
                    user.personalFirstname.includes(searchBarValue.toUpperCase()) ||
                    user.personalLastname.includes(searchBarValue.toUpperCase()) ||
                    user.personalFirstname.includes(
                      searchBarValue?.charAt(0)?.toUpperCase() + searchBarValue.slice(1)
                    ) ||
                    user.personalLastname.includes(
                      searchBarValue?.charAt(0)?.toUpperCase() + searchBarValue.slice(1)
                    ) ||
                    user.personalFirstname.includes(
                      searchBarValue?.charAt(0)?.toUpperCase() + searchBarValue.slice(1).toLowerCase()
                    ) ||
                    user.personalLastname.includes(
                      searchBarValue?.charAt(0)?.toUpperCase() + searchBarValue.slice(1).toLowerCase()
                    ) ||
                    user.jobDesignation.includes(searchBarValue) ||
                    user.jobDesignation.includes(searchBarValue?.charAt(0)?.toUpperCase() + searchBarValue.slice(1)) ||
                    user.jobDesignation.includes(searchBarValue?.charAt(0)?.toUpperCase() + searchBarValue.slice(1).toLowerCase())
                    ?
                    <TableRow
                      key={index}
                      sx={{
                        backgroundColor:
                          index % 2 === 1 ? "var(--pirmary-light-color)" : "",
                      }}
                    >

                      <TableCell>{"JT" + " " + (user.id + 100)}</TableCell>
                      <TableCell>{`${user.personalFirstname} ${user.personalLastname}`}</TableCell>
                      <TableCell>{user.personalDob}</TableCell>
                      <TableCell>{user.jobDoj}</TableCell>
                      <TableCell>{user.jobDesignation}</TableCell>
                      <TableCell>
                        <Button
                          component={Link}
                          to={`/viewprofile/${user.id}`}
                          variant="outlined"
                          color="primary"
                        >
                          View Profile
                        </Button>
                      </TableCell>
                    </TableRow> 
                    : null :
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor:
                        index % 2 === 1 ? "var(--pirmary-light-color)" : "",
                    }}
                  >

                    <TableCell>{"JT" + " " + (user.id + 100)}</TableCell>
                    <TableCell>{`${user.personalFirstname} ${user.personalLastname}`}</TableCell>
                    <TableCell>{user.personalDob}</TableCell>
                    <TableCell>{user.jobDoj}</TableCell>
                    <TableCell>{user.jobDesignation}</TableCell>
                    <TableCell>
                      <Button
                        component={Link}
                        to={`/viewprofile/${user.id}`}
                        variant="outlined"
                        color="primary"
                      >
                        View Profile
                      </Button>
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
