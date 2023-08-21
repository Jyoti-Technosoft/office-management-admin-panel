import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import UserIcon from "../../assets/img/adminIcon.svg";
import ProfileImg from "./../../assets/img/adminIcon.svg";

const AdminProfile = () => {
  const [showDialog, setShowDialog] = useState(false); // State variable for showing the dialog box
  const [adminDetails, setAdminDetails] = useState({}); // State variable for admin details

  const handleSettingButtonClick = () => {
    // Retrieve admin name and position from local storage
    const adminName = localStorage.getItem("adminName");
    const adminPosition = localStorage.getItem("adminPosition");
    const adminEmail = localStorage.getItem("adminEmail");
    const adminPhonenumber = localStorage.getItem("adminPhonenumber");
    // Convert the first letter of the admin name to uppercase
    const capitalizedAdminName =
      adminName.charAt(0).toUpperCase() + adminName.slice(1);

    // Set the admin details in the state
    setAdminDetails({
      name: capitalizedAdminName,
      position: adminPosition,
      email: adminEmail,
      phonenumber: adminPhonenumber,
    });

    setShowDialog(true); // Show the dialog box
  };

  const handleCloseDialog = () => {
    setShowDialog(false); // Close the dialog box
  };

  return (
    <Box>
      <Box>
        <Button onClick={handleSettingButtonClick}>
          <img width={"45px"} src={UserIcon} alt="Setting_Icon" />
        </Button>
      </Box>
      <Dialog
        open={showDialog}
        onClose={handleCloseDialog}
        maxWidth="xs"
        fullWidth
      >
        <Box
          sx={{
            backgroundColor: "var(--secondary-highlight-color)",
            color: "var(--secondary-text-color)",
            // boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14) inset",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <DialogTitle>Admin Details</DialogTitle>
            </Box>
            <Box>
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  marginRight: "15px",
                  "&:hover": {
                    background: "var(--primary-highlight-color)",
                    color: "var(--secondary-text-color)",
                  },
                }}
              >
                <Close />
              </IconButton>
            </Box>
          </Box>
          <DialogContent>
            <Box sx={{ marginTop: "-10px" }}>
              <img width={"90px"} src={ProfileImg} alt="profile" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  Name
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  {adminDetails.name}
                </Typography>
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  Email
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  {adminDetails.email}
                </Typography>
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  Phone Number
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  {adminDetails.phonenumber}
                </Typography>
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  Position
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  {adminDetails.position}
                </Typography>
              </Box>
              <Box>
                {/* <img src={AdminDetail} width={200} alt="admin"/> */}
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            {/* <Button
              onClick={handleCloseDialog}
              sx={{
                backgroundColor: "var(--secondary-color)",
                color: "var(--white-color)",
                fontWeight: "bold",
                textTransform: "capitalize",
                "&:hover": {
                  background: "darkgreen",
                  color: "white",
                },
              }}
            >
              Close
            </Button> */}
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};
export default AdminProfile;
