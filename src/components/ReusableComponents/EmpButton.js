import React, { useState } from "react";
import { Box, Button, Grid, IconButton } from "@mui/material";
import { DashboardProfileButtons } from "../CustomDesignMUI/CustomMUI";
import DisplayPersonal from "../DisplayEmp/DisplayPersonal/DisplayPersonal";
import DisplayContact from "../DisplayEmp/DisplayContact/DisplayContact";
import { Edit, Delete } from "@mui/icons-material";

const EmpButton = () => {
  const [selectedTab, setSelectedTab] = useState("personal");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderTabContent = () => {
    if (selectedTab === "personal") {
      return <DisplayPersonal />;
    } else if (selectedTab === "contact") {
      return <DisplayContact />;
    }
  };
  return (
    <Box>
      <Grid container spacing={3}>
        {/* {/ LEFT BOX /} */}
        <Grid item xs={12} md={3.5}>
          <Box
            sx={{
              marginTop: "12px",
              backgroundColor: "#dfeaf7",
              borderRadius: "10px",
              // height: "100vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
            }}
          >
            <Button
              onClick={() => handleTabChange("personal")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor: selectedTab === "personal" ? "var(--secondary-color)" : "white",
                color: selectedTab === "personal" ? "white" : "inherit",
                fontWeight: selectedTab === "personal" ? "bold" : "normal",
              }}
            >
              Personal Details
            </Button>
            <Button
              onClick={() => handleTabChange("contact")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor: selectedTab === "contact" ? "var(--secondary-color)" : "white",
                color: selectedTab === "contact" ? "white" : "inherit",
                fontWeight: selectedTab === "contact" ? "bold" : "normal",
              }}
            >
              Contact Details
            </Button>
            <Button sx={DashboardProfileButtons}>
              Education Qualification
            </Button>
            <Button sx={DashboardProfileButtons}>Family Details</Button>
            <Button sx={DashboardProfileButtons}>Experience Details</Button>
            <Button sx={DashboardProfileButtons}>Job Details</Button>
            <Button sx={DashboardProfileButtons}>Financial Details</Button>
            <Button sx={DashboardProfileButtons}>Leaves</Button>
          </Box>
        </Grid>
        {/* {/ RIGHT BOX /} */}
        <Grid item xs={12} md={8.5}>
          {/* {/ FOR MAIN COMPONENT DESIGN BOX /} */}
          <Box
            sx={{
              marginTop: "12px",
              backgroundColor: "#dfeaf7",
              borderRadius: "10px",
              // maxHeight: 'calc(100vh - 270px)',
              width: "100%",
              padding: "15px",
            }}
          >
            {/* {/ EDIT AND DELETE BUTTONS /} */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "-2px",
              }}
            >
              <IconButton sx={{ color: "#878585" }}>
                <Edit />
              </IconButton>
              <IconButton sx={{ color: "#878585" }}>
                <Delete />
              </IconButton>
            </Box>
            {renderTabContent()}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default EmpButton;
