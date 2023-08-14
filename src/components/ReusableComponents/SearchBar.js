import React, { useState } from "react";
import UserIcon from "../../assets/img/icons/userIcon.png";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Override the default MUI styles for InputBase
const CustomTextField = styled(TextField)({
  "& .MuiInput-underline:before": {
    borderBottom: "none",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "none",
  },
  "&:hover .MuiInput-underline:before": {
    borderBottom: "none",
  },
  "&:hover .MuiInput-underline:after": {
    borderBottom: "none",
  },
    "& input": {
    width: "300px", // Adjust the padding as desiredWWWW
  },
});

const SearchBar = () =>{
  const [showDialog, setShowDialog] = useState(false); // State variable for showing the dialog box
  const [adminDetails, setAdminDetails] = useState({}); // State variable for admin details

  const handleSettingButtonClick = () => {
    // Retrieve admin name and position from local storage
    const adminName = localStorage.getItem("adminName");
    const adminPosition = localStorage.getItem("adminPosition");
    const adminEmail = localStorage.getItem("adminEmail");
    const adminPhonenumber = localStorage.getItem("adminPhonenumber");

    // Set the admin details in the state
    setAdminDetails({
      name: adminName,
      position: adminPosition,
      email: adminEmail,
      phonenumber: adminPhonenumber,
    });

    setShowDialog(true); // Show the dialog box
  };

  const handleCloseDialog = () => {
    setShowDialog(false); // Close the dialog box
  };
    return(
        <Box sx={{
            margin: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                borderRadius: '5px',
                background: 'var(--white-color)',
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
            >
              <Typography
                sx={{
                  background: 'var(--primary-color)',
                  padding: '13px',
                  borderRadius: '5px 0 0 5px',
                  color: 'var(--white-color)',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}>
                Search Employee
              </Typography>

              <Box>
                <CustomTextField
                  variant="standard"
                  inputProps={{
                    sx: {
                      fontSize: "12px",
                      paddingLeft: "20px",
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon
                          sx={{
                            color: 'var(--third-color)',
                          }}
                        />
                      </InputAdornment>
                    ),
                    sx: {
                      paddingRight: "10px",
                    },
                  }}
                  placeholder="Search..."
                />
              </Box>
            </Box>
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
          // sx={{ backgroundColor: "#dfeaf7" }}
        >
          <DialogTitle>Admin Details</DialogTitle>
          <DialogContent>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
    );
}

export default SearchBar;
