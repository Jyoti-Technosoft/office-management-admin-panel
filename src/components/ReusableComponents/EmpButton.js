import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { DashboardProfileButtons } from "../CustomDesignMUI/CustomMUI";
import DisplayPersonal from "../DisplayEmp/DisplayPersonal/DisplayPersonal";
import DisplayContact from "../DisplayEmp/DisplayContact/DisplayContact";
import DisplayEducation from "../DisplayEmp/DisplayEducation/DisplayEducation";
import DisplayFamily from "../DisplayEmp/DisplayFamily/DisplayFamily";
import DisplayExperience from "../DisplayEmp/DisplayExperience/DisplayExperience";
import DisplayJob from "../DisplayEmp/DisplayJob/DisplayJob";
import DisplayFinancial from "../DisplayEmp/DisplayFinancial/DisplayFinancial";
import DisplayLeave from "../DisplayEmp/DisplayLeave/DisplayLeave";
import { GlobalContext } from "../../ContextAPI/CustomContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const EmpButton = () => {
  const { userData, setEditable, editable, setUserData, employeeApiEndpoint } = useContext(GlobalContext);
  const [selectedTab, setSelectedTab] = useState("personal");
  const { employeeId } = useParams();
  const [empID, setEmpId] = useState(employeeId);
  console.log("empID", empID);
  const [employeeCall, setEmployeeCall] = useState(userData.find((user) => user.id === parseInt(empID)));
  // eslint-disable-next-line no-const-assign
  console.log("employeeCall", employeeCall);

  const addNewEmployee = () => {
    if (employeeCall?.id === undefined) {
      setEditable(true);
    }
  };
  useEffect(() => {
    setEditable(false)
    addNewEmployee()
  }, [])

  console.log("Editable: ", editable);

  const saveNewData = (data) => {
    if (empID === undefined) {
      // Add new employee
      axios
        .post(`${employeeApiEndpoint}`, data)
        .then((response) => {
          console.log("New Employee Data Added Successfully");
          
          const updatedUserData = [...userData, response.data];
          setUserData(updatedUserData);
          setEmployeeCall(response.data);
          setEmpId(response.data.id);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Update existing employee
      userData.map((user) => {
        if (user.id === parseInt(empID)) {
          console.log("USER " + user);
          console.log("DATA" + data);
          data = Object.assign(user, data);
        }
      });
      axios
        .put(`${employeeApiEndpoint}/${empID}`, data)
        .then((response) => {
          console.log("Data Edited and Saved Successfully");
          const updatedUserData = userData.map((user) =>
            user.id === parseInt(empID) ? response.data : user
          );
          setUserData(updatedUserData);
          setEmployeeCall(response.data);
          // setEditable(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  const saveNextButtonCallback = (activeTabData) => {
    console.log("NewEmployeeCallData", activeTabData);
    saveNewData(activeTabData);
    setEditable(true);
    handleNext();

  };
  const nextButtonCallback = (activeTabData) => {
    console.log("NewEmployeeCallData", activeTabData);
    saveNewData(activeTabData);
    setEditable(false);
  };

  const tabOrder = [
    "personal",
    "contact",
    "education",
    "family",
    "experience",
    "job",
    "financial",
    "leave",
  ];

  const handleNext = () => {
    let index = tabOrder.indexOf(selectedTab)
    setSelectedTab(tabOrder[index + 1]);
  };

  // const handlePrevious = () => {
  //   const previousTabIndex = tabIndex - 1;
  //   if (previousTabIndex >= 0) {
  //     setTabIndex(previousTabIndex);
  //     setSelectedTab(tabOrder[previousTabIndex]);
  //   }
  // };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);

  };
  

  const renderTabContent = () => {
    if (selectedTab === "personal") {
      return <DisplayPersonal employeeCall={employeeCall} saveNextButtonCallback={saveNextButtonCallback} nextButtonCallback={nextButtonCallback} />;
    } else if (selectedTab === "contact") {
      return <DisplayContact employeeCall={employeeCall} saveNextButtonCallback={saveNextButtonCallback} nextButtonCallback={nextButtonCallback} />;
    } else if (selectedTab === "education") {
      return <DisplayEducation employeeCall={employeeCall} saveNextButtonCallback={saveNextButtonCallback} nextButtonCallback={nextButtonCallback} />;
    } else if (selectedTab === "family") {
      return <DisplayFamily employeeCall={employeeCall} />;
    } else if (selectedTab === "experience") {
      return <DisplayExperience employeeCall={employeeCall} />;
    } else if (selectedTab === "job") {
      return <DisplayJob employeeCall={employeeCall} />;
    } else if (selectedTab === "financial") {
      return <DisplayFinancial employeeCall={employeeCall} />;
    } else if (selectedTab === "leave") {
      return <DisplayLeave employeeCall={employeeCall} />;
    }
  };
  return (
    <Box
      sx={{
        marginTop: "50px",
        marginBottom: "100px",
      }}
      >
      <Grid container spacing={3}>
        {/* LEFT BOX */}
        <Grid container xs={12} md={3.5}>
          <Box
            sx={{
              padding: "20px",
              backgroundColor: "var(--background-table-sidebar-card-color)",
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
                    : "var(--background-table-sidebar-card-color)",
                color:
                  selectedTab === "personal"
                    ? "var(--primary-color)"
                    : "var(--primary-text-color)",
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
                    : "var(--background-table-sidebar-card-color)",
                color:
                  selectedTab === "contact"
                    ? "var(--primary-color)"
                    : "var(--primary-text-color)",
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
                    : "var(--background-table-sidebar-card-color)",
                color:
                  selectedTab === "education"
                    ? "var(--primary-color)"
                    : "var(--primary-text-color)",
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
                    ? "var(--primary-highlight-color)"
                    : "var(--background-table-sidebar-card-color)",
                color:
                  selectedTab === "family"
                    ? "var(--primary-color)"
                    : "var(--primary-text-color)",
                fontWeight: selectedTab === "family" ? "bold" : "normal",
                border: "none",
              }}>
              Family Details
            </Button>
            <Button
              onClick={() => handleTabChange("experience")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor:
                  selectedTab === "experience"
                    ? "var(--primary-highlight-color)"
                    : "var(--background-table-sidebar-card-color)",
                color:
                  selectedTab === "experience"
                    ? "var(--primary-color)"
                    : "var(--primary-text-color)",
                fontWeight: selectedTab === "experience" ? "bold" : "normal",
                border: "none",
              }}>
              Experience Details
            </Button>
            <Button
              onClick={() => handleTabChange("job")}
              sx={{
                ...DashboardProfileButtons,
                backgroundColor:
                  selectedTab === "job"
                    ? "var(--primary-highlight-color)"
                    : "var(--background-table-sidebar-card-color)",
                color:
                  selectedTab === "job"
                    ? "var(--primary-color)"
                    : "var(--primary-text-color)",
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
                    : "var(--background-table-sidebar-card-color)",
                color:
                  selectedTab === "financial"
                    ? "var(--primary-color)"
                    : "var(--primary-text-color)",
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
                  selectedTab === "leave"
                    ? "var(--primary-highlight-color)"
                    : "var(--background-table-sidebar-card-color)",
                color:
                  selectedTab === "leave"
                    ? "var(--primary-color)"
                    : "var(--primary-text-color)",
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
              marginLeft: "30px",
              backgroundColor: "var(--background-table-sidebar-card-color)",
              borderRadius: "10px",
              width: "100%",
              padding: "15px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
              color: "var(--primary-text-color)",
            }}>
            {renderTabContent()}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default EmpButton;
