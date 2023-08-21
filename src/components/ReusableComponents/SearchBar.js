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
  "& input": {
    width: "300px",
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
          background: "var(--plain-white)",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          height: "40px",
        }}
      >
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
                      color: "var(--third-color)",
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
    </Box>
  );
};

export default SearchBar;
