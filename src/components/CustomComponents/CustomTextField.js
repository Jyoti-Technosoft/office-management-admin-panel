// CustomTextField.js
import { TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  background: theme.palette.common.white,
  borderRadius: "5px",
  height: "4px",
  fontSize: "12px",

  
}));
export default CustomTextField;