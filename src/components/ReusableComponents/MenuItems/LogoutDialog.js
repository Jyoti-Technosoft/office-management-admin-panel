import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Button,
  DialogActions,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LogoutDialog = ({
  openDialog,
  handleCancelLogout,
  handleLogoutConfirmation,
}) => {
  return (
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
        <DialogContent>
          <Typography>Are you sure you want to log out?</Typography>
        </DialogContent>
        <DialogActions>
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
  );
};

export default LogoutDialog;
