import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
} from "@mui/material";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import EmployeeFormModal from "../../AddEmployee/EmployeeFormModal";
import EmpTable from "../Tables/EmpTable";

const Employee = () => {
  // Context Function
  const { userData } = useContext(GlobalContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddEmployee = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            Employee
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              background: "var(--secondary-color)",
              color: "var(--white-color)",
              fontWeight: "bold",
            }}
            onClick={handleAddEmployee} // Open the modal when button is clicked
          >
            + add
          </Button>
        </Box>
      </Box>
      <EmployeeFormModal open={isModalOpen} onClose={handleCloseModal} />

      {/* Add scroll to the table */}
      <Box
        sx={{
          // height: "500px",
          marginTop: "15px",
          maxHeight: "calc(100vh - 390px)",
        }}
        overflow="auto"
      >
              <EmpTable/>

      </Box>
    </>
  );

}
export default Employee;