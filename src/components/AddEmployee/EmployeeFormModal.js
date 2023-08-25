import React, { useContext } from "react";
import { Dialog } from "@mui/material";
import WizardForm from "../AddEmployee/WizardForm";
import { GlobalContext } from "../../ContextAPI/CustomContext";

const EmployeeFormModal = ({ open, onClose }) => {
  const { addEmployee } = useContext(GlobalContext);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl">
      <WizardForm open={open} onClose={onClose} addEmployee={addEmployee} />
    </Dialog>
  );
};

export default EmployeeFormModal;
