import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProfileImg from "../../../assets/img/profile.svg";
import StarIcon from "../../../assets/img/icons/starIcon.svg";

const DisplayPersonal = () => {
  return (
    <Box>
      {/* {/ FOR PROFILE IMAGES /} */}
      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute", top: 0, left: "10px" ,marginTop:"-140px"}}>
          <img width={"120px"} src={ProfileImg} alt="profile" />
          <Box sx={{ marginTop: "-115px", marginLeft: "95px" }}>
            <img src={StarIcon} alt="icon" />
          </Box>
        </Box>
      </Box>

      {/* {/ FOR EMPLOYEE PERSNOL DETAILS /} */}
      <Box sx={{ marginTop: "110px" , marginLeft: "10px",
}}>
        <form>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "13px",
              marginLeft: "9px"
            }}
          >
            Employee ID: 101
          </Typography>
          <Box sx={{ marginTop: "12px", marginLeft: "8px" }}>
            <Grid container spacing={2}>
              {/* {/ LEFT PART /} */}
              <Grid item xs={12} md={6}>
                <Box contained="left">
                  <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                    Employee Name
                  </Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                    John Doe
                  </Typography>
                  <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                    Department
                  </Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                    Design & Marketing
                  </Typography>
                  <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                    Job Title
                  </Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                    UI/UX Designer
                  </Typography>
                  <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                    Job Category
                  </Typography>
                  <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                    Full Time
                  </Typography>
                </Box>
              </Grid>
              {/* {/ RIGHT PART /} */}
              <Grid item xs={12} md={6}>
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  Date of Joining
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  14-12-2022
                </Typography>
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  Date of Birth
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  15-05-1998
                </Typography>
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  Blood Group
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  A+
                </Typography>
                <Typography sx={{ fontSize: "11px", marginTop: "15px" }}>
                  Emergency Number
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                  +149 427 100 66
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default DisplayPersonal;
