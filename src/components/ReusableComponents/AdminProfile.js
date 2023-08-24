import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import {ReactComponent as UserIcon} from "../../assets/img/adminIcon.svg";
import ProfileImg from "./../../assets/img/adminIcon.svg";
import { Link } from "react-router-dom";
// import { ReactComponent as LogoutIcon } from "../../assets/img/icons/logoutIcon.svg";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

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

  const dummyMenuItems = [
    {
      title: "Add Item",
    },
    {
      title: "Move Item",
    },
    {
      title: "Delete Item",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const nativeOnChange = (e) => {
    const detail = {
      selectedIndex: e.target.selectedIndex,
    };
    e.target.selectedIndex = 0;

    e.target.dispatchEvent(new CustomEvent("itemClick", { detail }));
  };

  const itemClick = (e) => {
    console.log("Item Clicked " + e.detail);
  };

  // LOGOUT

  const [openDialog, setOpenDialog] = useState(false);
  const handleLogOut = () => {
    setOpenDialog(true);
  };

  // Function to handle logout confirmation
  const handleLogoutConfirmation = () => {
    localStorage.removeItem("loggedIn");
    // setShowToast({ show: true, msg: "Logout Successfully", type: "success" });
    setOpenDialog(false);
  };

  // Function to handle canceling logout
  const handleCancelLogout = () => {
    setOpenDialog(false);
  };

  return (
    <Box>
      <Box>
        {/* <Button onClick={handleSettingButtonClick}>
          <img width={"45px"} src={UserIcon} alt="Setting_Icon" />
        </Button> */}
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {/* <img width={"45px"} src={UserIcon} alt="User_Icon" /> */}
          <UserIcon width={"45px"}/>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Box
              sx={{
                color: "var(--dark-highlight-color)",
                display: "flex",
                justifyContent: "center",
                marginRight: "5px",
              }}
            >
              <PersonIcon />
            </Box>
            <Typography onClick={handleSettingButtonClick}>
              View Profile
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {/* <LogoutIcon/> */}
            <Box
              sx={{
                color: "var(--dark-highlight-color)",
                display: "flex",
                justifyContent: "center",
                marginRight: "5px",
              }}
            >
              <LogoutIcon />
            </Box>
            <Typography onClick={handleLogOut}>Logout</Typography>
          </MenuItem>
        </Menu>
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
            <Box>
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
              <Box></Box>
            </Box>
          </DialogContent>
          <DialogActions
            sx={{
              background: "var(--highlight-color)",
              height: "40px",
              boxShadow: "0px 2px 10px var(--dark-highlight-color)",
            }}
          >
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

      {/* LOGOUT   */}
      <Dialog open={openDialog} onClose={handleCancelLogout} maxWidth="md">
        <Box
          sx={{
            backgroundColor: "var(--primary-background-color)",
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
              <DialogTitle sx={{ fontWeight: "bold" }}>
                Confirm Logout
              </DialogTitle>
            </Box>
            <Box>
              <IconButton
                onClick={handleCancelLogout}
                sx={{
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  marginRight: "15px",
                  "&:hover": {
                    background: "var(--primary-highlight-color)",
                    color: "var(--primary-color)",
                  },
                }}
              >
                <Close />
              </IconButton>
            </Box>
          </Box>
          {/* <DialogTitle
              sx={{ color: "var(--secondary-color)", fontWeight: "bold" }}
            >
              Confirm Logout
            </DialogTitle> */}
          <DialogContent>
            <Typography>Are you sure you want to log out?</Typography>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleCancelLogout} color="primary">
                Cancel
              </Button> */}
            <Button
              onClick={handleLogoutConfirmation}
              sx={{
                fontWeight: "bold",
                color: "var(--secondary-text-color)",
                textTransform: "capitalize",
                "&:hover": {
                  background: "var(--primary-highlight-color)",
                  color: "var(--primary-color)",
                },
              }}
              component={Link}
              to="/"
            >
              Log Out
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};
export default AdminProfile;
