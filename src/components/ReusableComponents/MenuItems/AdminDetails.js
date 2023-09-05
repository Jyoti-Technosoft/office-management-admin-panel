import React, { useContext, useEffect } from "react";
import { Typography, Box, Grid, IconButton } from "@mui/material";
import ProfileImg from "./../../../assets/img/adminIcon.svg";
import AdminSideBar from "../../ReusableComponents/AdminSideBar";
import Header from "../../ReusableComponents/Header";
import { GlobalContext } from "../../../ContextAPI/CustomContext";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";

const AdminDetails = () => {
  const {
    setAdminFirstName,
    setAdminLastName,
    setAdminPosition,
    setAdminEmail,
    setAdminPhonenumber,
    adminFirstName,
    adminLastName,
    adminPosition,
    adminEmail,
    adminPhonenumber,
    themeChange,
    setThemeChange,
  } = useContext(GlobalContext);
  useEffect(() => {
    const adminFirstNameFromStorage = localStorage.getItem("adminFirstName");
    const adminLastNameFromStorage = localStorage.getItem("adminLastName");
    const adminPositionFromStorage = localStorage.getItem("adminPosition");
    const adminEmailFromStorage = localStorage.getItem("adminEmail");
    const adminPhonenumberFromStorage =
      localStorage.getItem("adminPhonenumber");

    if (
      adminFirstNameFromStorage &&
      adminLastNameFromStorage &&
      adminPositionFromStorage &&
      adminEmailFromStorage &&
      adminPhonenumberFromStorage
    ) {
      setAdminFirstName(adminFirstNameFromStorage);
      setAdminLastName(adminLastNameFromStorage);
      setAdminPosition(adminPositionFromStorage);
      setAdminEmail(adminEmailFromStorage);
      setAdminPhonenumber(adminPhonenumberFromStorage);
    }
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Box>
      {/* <Container> */}
      <Grid container sx={{ height: "100vh" }}>
        {/* Left admin dashboard */}
        <AdminSideBar />
        <Grid item xs={12} md={9.4}>
          {/* Header */}
          <Header />
          <Box
            sx={{
              margin: "0px 30px",
            }}
          >
            <Box
              sx={{
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                borderRadius: "10px",
                background: "var(--background-table-sidebar-card-color)",
                width: "500px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    padding: "20px 20px 10px",
                    borderBottom: "1px solid var(--table-border-color)",
                    boxShadow: "0px 13px 10px -20px #111",
                    // alignItems:"center",
                    // display:"flex",
                    // justifyContent:"center",
                  }}
                >
                  <img width={"120px"} src={ProfileImg} alt="profile" />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 20px 20px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "25px",
                      color: "var(--secondary-text-color)",
                    }}
                  >
                    {`${capitalizeFirstLetter(
                      adminFirstName
                    )} ${capitalizeFirstLetter(adminLastName)}`}{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "15px",
                      color: "var(--secondary-text-color)",
                    }}
                  >
                    {adminPosition}
                  </Typography>
                </Box>
                <Box>
                  <Box sx={{ marginRight: "50px" }}>
                    <Typography
                      sx={{
                        // fontWeight: "600",
                        fontSize: "15px",
                        color: "var(--secondary-text-color)",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <EmailIcon sx={{ marginRight: "10px" }} />
                      {adminEmail}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        // fontWeight: "600",
                        fontSize: "15px",
                        color: "var(--secondary-text-color)",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CallIcon sx={{ marginRight: "10px" }} />
                      {adminPhonenumber}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* For Intro about admin */}
            <Box
              sx={{
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                marginTop: "30px",
                borderRadius: "10px",
                background: "var(--background-table-sidebar-card-color)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  padding: "30px",
                  boxShadow: "0px 13px 10px -20px #111",
                  borderBottom: "1px solid var(--table-border-color)",
                  background: "var(--primary-highlight-color)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    color: "var(--secondary-text-color)",
                  }}
                >
                  Intro
                </Typography>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    marginTop: "-10px",
                    color: "var(--secondary-text-color)",
                  }}
                >
                  <IconButton sx={{ color: "var(--third-color)" }}>
                    <EditIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{ padding: "30px" }}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "var(--secondary-text-color)",
                  }}
                >
                  Dedicated, passionate, and accomplished Full Stack Developer
                  with 9+ years of progressive experience working as an
                  Independent Contractor for Google and developing and growing
                  my educational social network that helps others learn
                  programming, web design, game development, networking.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "var(--secondary-text-color)",
                    marginTop: "15px",
                  }}
                >
                  I've acquired a wide depth of knowledge and expertise in using
                  my technical skills in programming, computer science, software
                  development, and mobile app development to developing
                  solutions to help organizations increase productivity, and
                  accelerate business performance.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "var(--secondary-text-color)",
                    marginTop: "15px",
                  }}
                >
                  I's great that we live in an age where we can share so much
                  with technology but I'm but I'm ready for the next phase of my
                  career, with a healthy balance between the virtual world and a
                  workplace where I help others face-to-face.{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDetails;
