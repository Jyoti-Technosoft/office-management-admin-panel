import React from "react";
import SettingIcon from '../../assets/img/icons/settingIcon.png'
import { Box } from "@mui/system";
import { InputAdornment, TextField, Typography, styled } from "@mui/material";
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
                {/* Use the custom TextField */}
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
              <img width={'45px'} src={SettingIcon} alt='Setting Icon' />
            </Box>
        </Box>
    );
}

export default SearchBar;
