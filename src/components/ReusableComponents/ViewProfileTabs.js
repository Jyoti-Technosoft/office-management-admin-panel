import React, { useState } from "react";
import { Box, Button, Grid, IconButton } from "@mui/material";
import { DashboardProfileButtons } from "../CustomDesignMUI/CustomMUI";
import DisplayPersonal from "../DisplayEmp/DisplayPersonal/DisplayPersonal";
import DisplayContact from "../DisplayEmp/DisplayContact/DisplayContact";
import DisplayEducation from "../DisplayEmp/DisplayEducation/DisplayEducation";
import DisplayFamily from "../DisplayEmp/DisplayFamily/DisplayFamily";
import DisplayExperience from "../DisplayEmp/DisplayExperience/DisplayExperience";
import DisplayJob from "../DisplayEmp/DisplayJob/DisplayJob";
import DisplayFinancial from "../DisplayEmp/DisplayFinancial/DisplayFinancial";

const ViewProfileTabs = () => {
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
    } else if (selectedTab === "family") {
      return <DisplayFamily />;
    } else if (selectedTab === "experience") {
      return <DisplayExperience />;
    } else if (selectedTab === "job") {
      return <DisplayJob />;
    } else if (selectedTab === "financial") {
      return <DisplayFinancial />;
    }
  };
  return (
    <Box
      sx={{ marginTop: "50px" }}>
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
            <Button
              onClick={() => handleTabChange("family")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor:
                  selectedTab === "family"
                    ? "var(--secondary-color)"
                    : "white",
                color: selectedTab === "family" ? "white" : "inherit",
                fontWeight: selectedTab === "family" ? "bold" : "normal",
                border: "none",
              }}
            >
              Family Details
            </Button>
            <Button
              onClick={() => handleTabChange("experience")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor:
                  selectedTab === "experience"
                    ? "var(--secondary-color)"
                    : "white",
                color: selectedTab === "experience" ? "white" : "inherit",
                fontWeight: selectedTab === "experience" ? "bold" : "normal",
                border: "none",
              }}
            >
              Experience Details
            </Button>
            <Button
              onClick={() => handleTabChange("job")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor:
                  selectedTab === "job"
                    ? "var(--secondary-color)"
                    : "white",
                color: selectedTab === "job" ? "white" : "inherit",
                fontWeight: selectedTab === "job" ? "bold" : "normal",
                border: "none",
              }}
            >
              Job Details
            </Button>
            <Button
              onClick={() => handleTabChange("financial")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor:
                  selectedTab === "financial"
                    ? "var(--secondary-color)"
                    : "white",
                color: selectedTab === "financial" ? "white" : "inherit",
                fontWeight: selectedTab === "financial" ? "bold" : "normal",
                border: "none",
              }}
            >
              Financial Details
            </Button>
            <Button sx={DashboardProfileButtons}>Leaves</Button>
          </Box>
        </Grid>

        {/* {/ RIGHT BOX /} */}
        <Grid container xs={12} md={8.5}>
          <Box
            sx={{
              marginLeft: "20px",
              backgroundColor: "var(--pirmary-light-color)",
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
export default ViewProfileTabs;
