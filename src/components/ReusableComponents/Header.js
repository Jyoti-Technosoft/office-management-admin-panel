import { Box, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import AdminProfile from "../../components/ReusableComponents/AdminProfile";
import { ReactComponent as BrandLogo } from "../../assets/img/icons/EmployeeVueLogo.svg";
import { ReactComponent as DarkTheme } from "../../assets/img/icons/themeDarkIcon.svg";
import { ReactComponent as LightTheme } from "../../assets/img/icons/themeLightIcon.svg";
import { GlobalContext } from "../../ContextAPI/CustomContext";

const Header = () => {
  const { themeChange, setThemeChange } = useContext(GlobalContext);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 30px 20px 30px',
                marginBottom: "30px",
                boxShadow: "0px 13px 10px -20px #111",
                borderBottom: "1px solid var(--table-border-color)",
                // background: 'var(--primary-highlight-color)',
            }}>
            <Box>
                <BrandLogo width={'200px'} />
                <Typography sx={{ fontSize: '14px', paddingLeft: "1.5px", color: 'var(--secondary-color)' }}>Empower Insightful Workforce Management</Typography>
            </Box>
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                <Box>
                    <AdminProfile />
                </Box>
                <Box>
                <Box padding='8px' onClick={() => setThemeChange((value)=> !value)}>
                    {themeChange ?
                    <DarkTheme width={"70px"}/>
                    : <LightTheme width={"70px"}/>}
                </Box>
                </Box>
            </Box>
        </Box>
    );
}
export default Header;