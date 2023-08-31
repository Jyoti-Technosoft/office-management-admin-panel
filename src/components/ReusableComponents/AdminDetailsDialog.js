import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const AdminDetailsDialog = ({ open, onClose, adminDetails }) => {
  const capitalizedAdminName =
    adminDetails.name.charAt(0).toUpperCase() +
    adminDetails.name.slice(1).toLowerCase();
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Admin Details</DialogTitle>
      <DialogContent>
        <Typography variant="body1">Name: {capitalizedAdminName}</Typography>
        <Typography variant="body1">Email: {adminDetails.email}</Typography>
        <Typography variant="body1">
          Phone Number: {adminDetails.phonenumber}
        </Typography>
        <Typography variant="body1">
          Position: {adminDetails.position}
        </Typography>
        {/* Add other admin details as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdminDetailsDialog;
