import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import EmployeeFormModal from "../../AddEmployee/EmployeeFormModal";
import EmpTable from "../Tables/EmpTable";

const Employee = () => {
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
            onClick={handleAddEmployee} 
          >
            + add
          </Button>
        </Box>
      </Box>
      <EmployeeFormModal open={isModalOpen} onClose={handleCloseModal} />
      <Box
        sx={{
          // height: "500px",
          marginTop: "15px",
          maxHeight: "calc(100vh - 390px)",
        }}
        overflow="auto"
      >
        <EmpTable />
      </Box>
    </>
  );
};
export default Employee;
