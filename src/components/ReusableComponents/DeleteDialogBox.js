import React, { useContext } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../ContextAPI/CustomContext";
import axios from "axios";
import { Close } from "@mui/icons-material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const DeleteDialog = ({ open, setOpenDeleteDialog }) => {
  const navigate = useNavigate();

  // DATA CALLING START
  const { employeeApiEndpoint, setShowToast } = useContext(GlobalContext);
  const { employeeId } = useParams();

  const deleteEmployee = () => {
    axios
      .delete(`${employeeApiEndpoint}/${employeeId}`)
      .then((response) => {
        console.log(`Employee Deleted Successfully`);
        navigate("/dashboard");
        setShowToast({
          show: true,
          msg: "Record Deleted successfully",
          type: "success",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={() => setOpenDeleteDialog(false)}
        maxWidth="md"
        >
        <Box
          sx={{
            // backgroundColor: "red",
          }}
          >
          <Box>
            <IconButton
              onClick={() => setOpenDeleteDialog(false)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "5px",
                right: "-5px",
                fontWeight: "bold",
                textTransform: "capitalize",
                marginRight: "15px",
                fontSize: "2px",
                "&:hover": {
                  background: "var(--highlight-color)",
                },
              }}
            >
              <Close />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "500px",
            }}
          >
            <Box>
              <DialogTitle sx={{ fontWeight: "bold" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: '35px 0px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: "center",
                      background: "#ff000221",
                      borderRadius: "1000px",
                      padding: '8px',
                      marginRight: '25px',
                    }}
                  >
                    <WarningAmberIcon
                      sx={{
                        color: "#c70000",
                        fontSize: "30px",
                        borderRadius: "50px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Box>Confirm Delete</Box>
                    <Typography>
                      Are you sure you want to delete this data?
                    </Typography>
                  </Box>
                </Box>
              </DialogTitle>
            </Box>
          </Box>
          <DialogActions
            sx={{
              background: "var(--highlight-color)",
              boxShadow: "0px 2px 10px var(--dark-highlight-color)"
            }}>
            <Button
              onClick={() => setOpenDeleteDialog(false)}
              sx={{
                color: "var(--secondary-text-color)",
                textTransform: "capitalize",
                fontWeight: "bold",
                marginRight: "10px",
                borderRadius: "5px",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                deleteEmployee();
                setOpenDeleteDialog(false);
              }}
              sx={{
                borderRadius: "5px",
                textTransform: "capitalize",
              }}
              component={Link}
              color="error"
            >
              Delete
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};
export default DeleteDialog;
