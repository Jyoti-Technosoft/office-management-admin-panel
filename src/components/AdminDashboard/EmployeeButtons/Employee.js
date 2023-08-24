import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import EmployeeFormModal from "../../AddEmployee/EmployeeFormModal";
import EmpTable from "../Tables/EmpTable";
import SearchBar from "../../ReusableComponents/SearchBar";

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
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
          marginTop: "30px",
          borderRadius: "8px",
          background: "var(--background-table-sidebar-card-color)",
        }}
      >
        <Box sx={{ padding: "15px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "var(--primary-text-color)",
            }}
          >
            Employee
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <SearchBar />
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  background: "var(--primary-color)",
                  fontWeight: "bold",
                }}
                onClick={handleAddEmployee}
              >
                + add
              </Button>
            </Box>
          </Box>
        </Box>
        <EmployeeFormModal open={isModalOpen} onClose={handleCloseModal} />
        <Box
          sx={{
            marginTop: "10px",
            maxHeight: "calc(100vh - 440px)",
          }}
          overflow="auto"
        >
          <EmpTable />
        </Box>
      </Box>
    </>
  );
};
export default Employee;
