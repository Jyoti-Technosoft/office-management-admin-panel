import React, { useContext } from "react";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  Zoom,
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
  // CONTEXT FUNCTION
  const { userData, searchBarValue } = useContext(GlobalContext);
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead
            sx={{
              background: "var(--primary-highlight-color)",
              height: "70px",
              // position:"fixed",
            }}
          >
            <TableRow sx={{ textDecoration: "none" }}>
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
            {userData?.map(
              (user, index) => (
                console.log(user.personalFirstname + user.personalLastname),
                searchBarValue ? (
                  user.personalFirstname.includes(searchBarValue) ||
                  user.personalLastname.includes(searchBarValue) ||
                  (user.personalFirstname + user.personalLastname).includes(
                    searchBarValue
                  ) ||
                  user.personalFirstname.includes(
                    searchBarValue.toUpperCase()
                  ) ||
                  user.personalLastname.includes(
                    searchBarValue.toUpperCase()
                  ) ||
                  user.personalFirstname.includes(
                    searchBarValue?.charAt(0)?.toUpperCase() +
                      searchBarValue.slice(1)
                  ) ||
                  user.personalLastname.includes(
                    searchBarValue?.charAt(0)?.toUpperCase() +
                      searchBarValue.slice(1)
                  ) ||
                  user.personalFirstname.includes(
                    searchBarValue?.charAt(0)?.toUpperCase() +
                      searchBarValue.slice(1).toLowerCase()
                  ) ||
                  user.personalLastname.includes(
                    searchBarValue?.charAt(0)?.toUpperCase() +
                      searchBarValue.slice(1).toLowerCase()
                  ) ||
                  user.jobDesignation.includes(searchBarValue) ||
                  user.jobDesignation.includes(
                    searchBarValue?.charAt(0)?.toUpperCase() +
                      searchBarValue.slice(1)
                  ) ||
                  user.jobDesignation.includes(
                    searchBarValue?.charAt(0)?.toUpperCase() +
                      searchBarValue.slice(1).toLowerCase()
                  ) ? (
                    <TableRow
                      key={index}
                      sx={{
                        // backgroundColor: index % 2 === 1 ? "var(--highlight-color)" : ""
                        background:
                          "var(--background-table-sidebar-card-color)",
                      }}
                    >
                      <TableCell
                        sx={{ ...tableBodyCell, fontWeight: "500 !important" }}
                      >
                        {"JT" + " " + (user.id + 100)}
                      </TableCell>
                      <TableCell
                        sx={{ ...tableBodyCell, fontWeight: "500 !important" }}
                      >{`${user.personalFirstname} ${user.personalLastname}`}</TableCell>
                      <TableCell
                        sx={{ ...tableBodyCell, fontWeight: "500 !important" }}
                      >
                        {formatDate(user.personalDob)}
                      </TableCell>
                      <TableCell
                        sx={{ ...tableBodyCell, fontWeight: "500 !important" }}
                      >
                        {formatDate(user.jobDoj)}
                      </TableCell>
                      <TableCell sx={tableBodyCell}>
                        {user.jobDesignation}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {/* MAKE FOR SAW WHY USED FOR THIS ICON */}
                        <Tooltip
                          title="View Profile"
                          arrow
                          disableInteractive
                          TransitionComponent={Zoom}
                        >
                          <Link to={`/viewprofile/${user.id}`}>
                            <VisibilityIcon
                              sx={{
                                fontSize: "1.5rem",
                                color: "var(--secondary-text-color)",
                              }}
                            />
                          </Link>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ) : null
                ) : (
                  <TableRow
                    key={index}
                    sx={{
                      // backgroundColor: index % 2 === 1 ? "var(--highlight-color)" : ""
                      background: "var(--background-table-sidebar-card-color)",
                    }}
                  >
                    <TableCell
                      sx={{ ...tableBodyCell, fontWeight: "500 !important" }}
                    >
                      {"JT" + " " + (user.id + 100)}
                    </TableCell>
                    <TableCell
                      sx={{ ...tableBodyCell, fontWeight: "500 !important" }}
                    >{`${user.personalFirstname} ${user.personalLastname}`}</TableCell>
                    <TableCell
                      sx={{ ...tableBodyCell, fontWeight: "500 !important" }}
                    >
                      {formatDate(user.personalDob)}
                    </TableCell>
                    <TableCell
                      sx={{ ...tableBodyCell, fontWeight: "500 !important" }}
                    >
                      {formatDate(user.jobDoj)}
                    </TableCell>
                    <TableCell sx={tableBodyCell}>
                      {user.jobDesignation}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {/* MAKE FOR SAW WHY USED FOR THIS ICON */}
                      <Tooltip
                        title="View Profile"
                        arrow
                        disableInteractive
                        TransitionComponent={Zoom}
                      >
                        <Link to={`/viewprofile/${user.id}`}>
                          <VisibilityIcon
                            sx={{
                              fontSize: "1.5rem",
                              color: "var(--secondary-text-color)",
                            }}
                          />
                        </Link>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                )
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default EmpTable;
