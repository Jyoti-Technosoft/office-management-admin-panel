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
  const { userData, setEditable, editable, setUserData,employeeApiEndpoint } = useContext(GlobalContext);
  const [selectedTab, setSelectedTab] = useState("personal");
  const { employeeId } = useParams();
  const [employeeCall, setEmployeeCall] = useState(userData.find((user) => user.id === parseInt(employeeId)));
  // eslint-disable-next-line no-const-assign
  console.log("employeeCall", employeeCall);
  useEffect(() => {
    return (
      setEditable(false)
    );
  }, [])
  console.log("Editable: ", editable);


  // const [tabIndex, setTabIndex] = useState(0);
  // const [openDialog, setOpenDialog] = useState(false);
  // EMP DATA STATE IF EDIT INIT WITH DATA

  // const { employeeId } = useParams();
  // const employeeCall = userData.find((user) => user.id === parseInt(employeeId));
  // const [editedEmployeeData, setEditedEmployeeData] = useState({...employeeCall});

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setEditedEmployeeData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  //CALLBACK ALL TAB NEXT CLICK 
  // TAB Array OF OBJECT 
  // EMP DATA UPDATE/ADD

  // SAVING DATA 
  // const saveEmployee = () => {
  //   if (employeeId === undefined) {
  //     // Add new employee
  //     axios
  //       .post(`${employeeApiEndpoint}`, editedEmployeeData)  // Use POST for adding new records
  //       .then((response) => {
  //         console.log("New Employee Data Added Successfully");
  //         const updatedUserData = [...userData, response.data]; // Add the new employee to the list
  //         setUserData(updatedUserData);
  //         setEditable(false);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } else {
  //     // Update existing employee
  //     axios
  //       .put(`${employeeApiEndpoint}/${employeeId}`, editedEmployeeData)
  //       .then((response) => {
  //         console.log("Data Edited and Saved Successfully");
  //         const updatedUserData = userData.map((user) =>
  //           user.id === parseInt(employeeId) ? editedEmployeeData : user
  //         );
  //         setUserData(updatedUserData);
  //         setEditable(false);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // };

  const nextButtonCallback = (activeTabData) => {
    // setEmployeeCall(activeTabData);
    console.log("NewEmployeeCallData", activeTabData);
    axios.put(`${employeeApiEndpoint}/${employeeId}`, activeTabData)
        .then((response) => {
          console.log("Data Edited and Saved Successfully");
          const updatedUserData = userData.map((user) =>
            user.id === parseInt(employeeId) ? activeTabData : user
          );
          setUserData(updatedUserData);
        })
        .catch((error) => {
          console.error(error);
        });
      setEditable(false);
  };
  const exitEditMode = () =>{
    setEditable(false);
  }

  // const nextButtonCallback = (activeTabData) => {
  //   // Enable the Next button and update the userData
  //   setUserData((prevUserData) => {
  //     const index = prevUserData.findIndex((user) => user.id === activeTabData.id);

  //     // If the user exists in userData, update their data, otherwise add them to userData
  //     if (index !== -1) {
  //       const updatedUserData = [...prevUserData];
  //       updatedUserData[index] = activeTabData;
  //       return updatedUserData;
  //     } else {
  //       return [...prevUserData, activeTabData];
  //     }
  //   });
  // };



  // const tabOrder = [
  //   "personal",
  //   "contact",
  //   "education",
  //   "family",
  //   "experience",
  //   "job",
  //   "financial",
  //   "leave",
  // ];


  // const handleNext = () => {
  //   const nextTabIndex = tabIndex + 1;
  //   if (nextTabIndex < tabOrder.length) {
  //     setTabIndex(nextTabIndex);
  //     setSelectedTab(tabOrder[nextTabIndex]);
  //   }
  // };

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
      return <DisplayPersonal employeeCall={employeeCall} nextButtonCallback={nextButtonCallback} exitEditMode={exitEditMode} />;
    } else if (selectedTab === "contact") {
      return <DisplayContact employeeCall={employeeCall} />;
    } else if (selectedTab === "education") {
      return <DisplayEducation employeeCall={employeeCall} />;
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
