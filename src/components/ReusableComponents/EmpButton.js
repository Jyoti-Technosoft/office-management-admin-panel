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
import DisplayLeave from "../DisplayEmp/DisplayLeave/DisplayLeave";

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
    } else if (selectedTab === "family") {
      return <DisplayFamily />;
    } else if (selectedTab === "experience") {
      return <DisplayExperience />;
    } else if (selectedTab === "job") {
      return <DisplayJob />;
    } else if (selectedTab === "financial") {
      return <DisplayFinancial />;
    } else if (selectedTab === "leave") {
      return <DisplayLeave />;
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
              backgroundColor: "var(--plain-white)",
              borderRadius: "10px",
              width: "100%",
              alignItems: "center",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
            }}
          >
            <Button
              onClick={() => handleTabChange("personal")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor:
                  selectedTab === "personal"
                    ? "var(--primary-highlight-color)"
                    : "white",
                color: selectedTab === "personal" ? "var(--primary-color)" : "var(--primary-text-color)",
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
                    ? "var(--primary-highlight-color)"
                    : "white",
                color: selectedTab === "contact" ? "var(--primary-color)" : "var(--primary-text-color)",
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
                    ? "var(--primary-highlight-color)"
                    : "white",
                color: selectedTab === "education" ? "var(--primary-color)" : "var(--primary-text-color)",
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
                  selectedTab === "family" ? "var(--primary-highlight-color)" : "white",
                color: selectedTab === "family" ? "var(--primary-color)" : "var(--primary-text-color)",
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
                    ? "var(--primary-highlight-color)"
                    : "white",
                color: selectedTab === "experience" ? "var(--primary-color)" : "var(--primary-text-color)",
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
                  selectedTab === "job" ? "var(--primary-highlight-color)" : "white",
                color: selectedTab === "job" ? "var(--primary-color)" : "var(--primary-text-color)",
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
                    ? "var(--primary-highlight-color)"
                    : "white",
                color: selectedTab === "financial" ? "var(--primary-color)" : "var(--primary-text-color)",
                fontWeight: selectedTab === "financial" ? "bold" : "normal",
                border: "none",
              }}
            >
              Financial Details
            </Button>
            <Button
              onClick={() => handleTabChange("leave")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor:
                  selectedTab === "leave" ? "var(--primary-highlight-color)" : "white",
                color: selectedTab === "leave" ? "var(--primary-color)" : "var(--primary-text-color)",
                fontWeight: selectedTab === "leave" ? "bold" : "normal",
                border: "none",
              }}
            >
              Leaves
            </Button>
          </Box>
        </Grid>
        {/* {/ RIGHT BOX /} */}
        <Grid container xs={12} md={8.5}>
          {/* {/ FOR MAIN COMPONENT DESIGN BOX /} */}
          <Box
            sx={{
              marginLeft: "20px",
              backgroundColor: "var(--plain-white)",
              borderRadius: "10px",
              height: "100%",
              width: "100%",
              padding: "15px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
              color:"var(--primary-text-color)",
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
