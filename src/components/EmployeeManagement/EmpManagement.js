import React from "react";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import AdminSideBar from '../../components/ReusableComponents/AdminSideBar';
import SearchBar from '../ReusableComponents/SearchBar';
import EmpTable from "../AdminDashboard/Tables/EmpTable";


const EmpManagement = () => {

  return (
    <Box>
      {/*  <Container>  */}
      <Grid container sx={{ height: '100vh' }}>
        {/*  Left admin dashboard  */}
        <AdminSideBar />
        <Grid item xs={12} md={9.4}>
          {/*  SEARCH BAR   */}
          <SearchBar />
          <Box
            sx={{
              margin: '30px',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '50px', }}>Employee Management</Typography>
            {/*  Add scroll to the table  */}
            <Box
              sx={{
                marginTop: '15px',
                maxHeight: 'calc(100vh - 220px)',
              }}
              overflow="auto"
            >
              <EmpTable/>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmpManagement;




