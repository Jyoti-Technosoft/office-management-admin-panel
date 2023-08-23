import React, { useContext } from "react";
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
          }}
        >
          <Box>
            <DialogTitle sx={{ fontWeight: "bold",marginRight:"50px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    background: "#ff000221",
                    borderRadius: "50px",
                    marginRight: "15px",
                    marginTop: "15px",
                    height:"45px",
                    width:"45px",
                  }}
                >
                  <WarningAmberIcon
                    sx={{
                      color: "#c70000",
                      fontSize: "40px",
                      borderRadius: "50px",
                      padding:"5px",
                      marginLeft:"3px",
                      marginTop:"1px",
                    }}
                  />
                </Box>
                <Box>
                  <Box sx={{ marginTop: "20px" }}>Confirm Delete</Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "var(--dark-highlight-color)",
                      marginTop: "10px",
                      marginBottom: "-10px",
                    }}
                  >
                    Are you sure you want to delete this data?
                  </Typography>
                </Box>
              </Box>
            </DialogTitle>
          </Box>
        </Box>{" "}
        <DialogContent sx={{ marginTop: "-10px" }}>
          {/* <Typography
            sx={{ fontWeight: "bold", color: "var(--secondary-text-color)" }}
          >
            Are you sure you want to delete this data?
          </Typography> */}
        </DialogContent>
        <DialogActions sx={{ background: "var(--highlight-color)",boxShadow:"0px 2px 10px var(--dark-highlight-color)" }}>
          <Button
            // variant="outlined"
            onClick={() => setOpenDeleteDialog(false)}
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
              fontWeight: "bold",
              "&:hover": {
                color: "var(--plain-white)",
                fontWeight: "bold",
              },
            }}
            component={Link}
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default DeleteDialog;
