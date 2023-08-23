import { Box, Typography } from "@mui/material";
import React from "react";
import AdminProfile from "../../components/ReusableComponents/AdminProfile";
import { ReactComponent as BrandLogo } from "../../assets/img/icons/EmployeeVueLogo.svg";

const Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 30px 20px 30px',
                marginBottom: "30px", 
                boxShadow: "0px 13px 10px -20px #111",  
                borderBottom: "1px solid #e5e7eb",
                // background: 'var(--secondary-highlight-color)',
            }}>
            <Box>
                <BrandLogo width={'200px'}/>
                {/* <Typography sx={{fontSize: '20px', fontWeight: 'bold', color: 'var(--primary-text-color)'}}>EmployeeVue,</Typography> */}
                <Typography sx={{fontSize: '14px', paddingLeft: "1.5px", color: 'var(--secondary-color)'}}>Empower Insightful Workforce Management</Typography>
            </Box>
            <Box>
                <AdminProfile />
            </Box>
        </Box>
    );
}
export default Header;