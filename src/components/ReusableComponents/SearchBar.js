import React from "react";
import {
  Box,
  InputAdornment,
  TextField,
  styled,

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
  "&:hover .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottom: "none",
  },
  "& input": {
    width: "500px",
  },
});

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "15px",
        marginBottom: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.14)",
          background: "var(--search-bar-color)",
          height: "40px",
        }}
      >
        <Box>
          <CustomTextField
            variant="standard"
            inputProps={{
              sx: {
                fontSize: "14px",
                paddingLeft: "20px",
                color: 'var(--secondary-text-color)',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      color: "var(--secondary-text-color)",
                    }}
                  />
                </InputAdornment>
              ),
              sx: {
                paddingLeft: "10px",
              },
            }}
            placeholder="Search..."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
