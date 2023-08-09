import React, { useState } from "react";
import { Box, Button, Grid, IconButton } from "@mui/material";
import { DashboardProfileButtons } from "../CustomDesignMUI/CustomMUI";
import DisplayPersonal from "../DisplayEmp/DisplayPersonal/DisplayPersonal";
import DisplayContact from "../DisplayEmp/DisplayContact/DisplayContact";
import DisplayEducation from "../DisplayEmp/DisplayEducation/DisplayEducation";
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
    } else if (selectedTab === "education") {
      return <DisplayEducation />;
    }
  };
  return (
    <Box
      sx={{
        marginTop: "50px",
      }}
    >
      <Grid container spacing={3}>
        {/* {/ LEFT BOX /} */}
        <Grid container xs={12} md={3.5}>
          <Box
            sx={{
              padding: "20px",
              backgroundColor: "var(--pirmary-light-color)",
              borderRadius: "10px",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => handleTabChange("personal")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor:
                  selectedTab === "personal"
                    ? "var(--secondary-color)"
                    : "white",
                color: selectedTab === "personal" ? "white" : "inherit",
                fontWeight: selectedTab === "personal" ? "bold" : "normal",
                marginTop: "0px",
              }}
            >
              Personal Details
            </Button>
            <Button
              onClick={() => handleTabChange("contact")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor:
                  selectedTab === "contact"
                    ? "var(--secondary-color)"
                    : "white",
                color: selectedTab === "contact" ? "white" : "inherit",
                fontWeight: selectedTab === "contact" ? "bold" : "normal",
                border: "none",
              }}
            >
              Contact Details
            </Button>
            <Button
              onClick={() => handleTabChange("education")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor:
                  selectedTab === "education"
                    ? "var(--secondary-color)"
                    : "white",
                color: selectedTab === "education" ? "white" : "inherit",
                fontWeight: selectedTab === "education" ? "bold" : "normal",
                border: "none",
              }}
            >
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
        <Grid container xs={12} md={8.5}>
          {/* {/ FOR MAIN COMPONENT DESIGN BOX /} */}
          <Box
            sx={{
              marginLeft: "20px",
              backgroundColor: "#dfeaf7",
              borderRadius: "10px",
              height: "100%",
              width: "100%",
              padding: "15px",
            }}
          >
            {renderTabContent()}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default EmpButton;
