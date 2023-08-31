import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import EducationDetails from "./EducationDetails/EducationDetails";
import FamilyDetails from "./FamilyDetails/FamilyDetails";
import ExperienceDetails from "./ExperienceDetails/ExperienceDetails";
import JobDetails from "./JobDetails/JobDetails";
import FinancialDetails from "./FinancialDetails/FinancialDetails";
import { GlobalContext } from "../../ContextAPI/CustomContext";

const WizardForm = ({ open, onClose, addEmployee }) => {
  const { employeeData, employeeApiEndpoint } = useContext(GlobalContext);

  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({});
  const [formHistory, setFormHistory] = useState([]);

  const isLastForm = activeTab === 6;

  useEffect(() => {
    if (formHistory.length === 0) {
      setFormHistory([formData]);
    } else if (activeTab === formHistory.length) {
      setFormHistory([...formHistory, formData]);
    }
  }, [formData, activeTab, formHistory]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleNext = () => {
    if (activeTab < 6) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleSubmit = () => {
    const existingData = employeeData;
    const dataCount = existingData.length;
    const dataWithId = {
      ...formData,
      id: dataCount + 1,
    };
    axios
      .post(employeeApiEndpoint, dataWithId)
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
        addEmployee(response.data);
        onClose();
        setFormHistory([]);
        setFormData({});
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  const handleChange = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  };

  const handleReset = () => {
    setFormData({});
    setFormHistory([]);
    setActiveTab(0);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl">
      <DialogContent>
        <Typography variant="h6">Add Employee</Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Personal Details" />
            <Tab label="Contact Details" />
            <Tab label="Education Details" />
            <Tab label="Family Details" />
            <Tab label="Experience Details" />
            <Tab label="Job Details" />
            <Tab label="Financial Details" />
          </Tabs>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          {activeTab === 0 && (
            <PersonalDetails onChange={handleChange} formData={formData} />
          )}
          {activeTab === 1 && (
            <ContactDetails onChange={handleChange} formData={formData} />
          )}
          {activeTab === 2 && (
            <EducationDetails onChange={handleChange} formData={formData} />
          )}
          {activeTab === 3 && (
            <FamilyDetails onChange={handleChange} formData={formData} />
          )}
          {activeTab === 4 && (
            <ExperienceDetails onChange={handleChange} formData={formData} />
          )}
          {activeTab === 5 && (
            <JobDetails onChange={handleChange} formData={formData} />
          )}
          {activeTab === 6 && (
            <FinancialDetails onChange={handleChange} formData={formData} />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        {activeTab > 0 && (
          <Button onClick={handlePrevious} color="primary">
            Previous
          </Button>
        )}
        {isLastForm ? (
          <>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
            <Button onClick={handleReset} color="primary">
              Reset
            </Button>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
          </>
        ) : (
          <Button onClick={handleNext} color="primary">
            Next
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default WizardForm;
