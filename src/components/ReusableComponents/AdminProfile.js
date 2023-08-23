import React, { useState } from "react";
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
    const adminName = localStorage.getItem("adminName");
    const adminPosition = localStorage.getItem("adminPosition");
    const adminEmail = localStorage.getItem("adminEmail");
    const adminPhonenumber = localStorage.getItem("adminPhonenumber");
    const capitalizedAdminName =
      adminName.charAt(0).toUpperCase() + adminName.slice(1);
    setAdminDetails({
      name: capitalizedAdminName,
      position: adminPosition,
      email: adminEmail,
      phonenumber: adminPhonenumber,
    });
    setShowDialog(true);
  };
  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <Box>
      <Box>
        <Button onClick={handleSettingButtonClick}>
          <img width={"45px"} src={UserIcon} alt="Setting_Icon" />
        </Button>
      </Box>
      {/* MAKE A ADMIN DETAILS DIALOG BOX */}
      <Dialog
        open={showDialog}
        onClose={handleCloseDialog}
        maxWidth="xs"
        fullWidth
        >
        <Box
          sx={{
            backgroundColor: "var(--plain-white)",
            color: "var(--secondary-text-color)",
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
                    background: "var(--highlight-color)",
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
              </Box>
            </Box>
          </DialogContent>
          <DialogActions sx={{background:"var(--highlight-color)",height:"40px",boxShadow:"0px 2px 10px var(--dark-highlight-color)"}}>
          {/* <Button
            // variant="outlined"
                onClick={handleCloseDialog}
            sx={{
              color: "var(--secondary-text-color)",
            //   background: "var(--plain-white)",
            //   borderColor: "var(--dark-highlight-color)",
              textTransform: "capitalize",
              fontWeight: "bold",
              marginRight: "10px",
              borderRadius: "5px",
              "&:hover": {
                // borderColor: "var(--dark-highlight-color)",
                fontWeight: "bold",
              },
            }}
          >
            Cancel
          </Button> */}
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};
export default AdminProfile;
