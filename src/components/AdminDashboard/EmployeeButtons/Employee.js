import React, { useState } from "react";
import { Box, Button, Tooltip, Typography, Zoom } from "@mui/material";
import EmpTable from "../Tables/EmpTable";
import SearchBar from "../../ReusableComponents/SearchBar";

import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const navigation = useNavigate();
    const handleAddEmployee = () =>{
    navigation('/viewprofile/addemployee')
  }
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
              <Tooltip
                title="Add New Details"
                arrow
                disableInteractive
                TransitionComponent={Zoom}
              >
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
              </Tooltip>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            maxHeight: "calc(100vh - 455px)",
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
