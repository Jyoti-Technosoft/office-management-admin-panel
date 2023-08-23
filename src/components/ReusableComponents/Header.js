import { Box, Typography } from "@mui/material";
import React from "react";
import AdminProfile from "../../components/ReusableComponents/AdminProfile";
import SearchBar from "../../components/ReusableComponents/SearchBar";

const Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 0px 10px 0px',
                marginBottom: "30px", 
                borderBottom: "1px solid #e5e7eb",
            }}>
            <Box>
                {/* <SearchBar /> */}
                <Typography sx={{fontSize: '20px', fontWeight: 'bold', color: 'var(--primary-text-color)'}}>EmployeeVue,</Typography>
                <Typography sx={{fontSize: '12px', color: 'var(--primary-text-color)'}}>Lorem ipsum dolor sit amet, consectetur</Typography>
            </Box>
            <Box>
                <AdminProfile />
            </Box>
        </Box>
    );
}
export default Header;