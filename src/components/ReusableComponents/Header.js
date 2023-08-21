import { Box } from "@mui/material";
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
            }}>
            <Box>
                <SearchBar />
            </Box>
            <Box>
                <AdminProfile />
            </Box>
        </Box>
    );
}
export default Header;