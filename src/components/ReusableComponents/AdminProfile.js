import React, { useContext, useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { ReactComponent as UserIcon } from "../../assets/img/adminIcon.svg";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { GlobalContext } from "../../ContextAPI/CustomContext";
import LogoutDialog from "./MenuItems/LogoutDialog";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  const { themeChange, setThemeChange } = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // LOGOUT
  const [openDialog, setOpenDialog] = useState(false);
  const handleLogOut = () => {
    setOpenDialog(true);
  };

  // Function to handle logout confirmation
  const handleLogoutConfirmation = () => {
    setThemeChange(false);
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
        <Tooltip
          title="Account settings"
          arrow
          disableInteractive
          TransitionComponent={Zoom}
        >
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {/* {/ <img width={"45px"} src={UserIcon} alt="User_Icon" /> /} */}
            <UserIcon width={"45px"} />
          </IconButton>
        </Tooltip>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/admin-profile">
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
            <Typography>
              View Profile
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleLogOut}>
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
            <Typography>Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
      {/* FOR LOG OUT */}
      <LogoutDialog
        openDialog={openDialog}
        handleCancelLogout={handleCancelLogout}
        handleLogoutConfirmation={handleLogoutConfirmation}
      />
    </Box>
  );
};

export default AdminProfile;
