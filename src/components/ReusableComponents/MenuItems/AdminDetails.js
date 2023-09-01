import React, { useContext, useEffect } from "react";
import { Typography, Box, Grid } from "@mui/material";
import ProfileImg from "./../../../assets/img/adminIcon.svg";
import AdminSideBar from "../../ReusableComponents/AdminSideBar";
import Header from "../../ReusableComponents/Header";
import { GlobalContext } from "../../../ContextAPI/CustomContext";

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
                marginTop: "30px",
                borderRadius: "10px",
                background: "var(--background-table-sidebar-card-color)",
                // width: "300px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  background: "#2c7be51a",
                  height: "100px",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    margin: "30px 0px 0px 20px",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                    borderRadius: "60px",
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
                  padding: "30px",
                  marginTop: "40px",
                }}
              >
                <Box>
                  {/* <Typography
                    sx={{
                      fontSize: "11px",
                      marginTop: "15px",
                      color: "var(--secondary-text-color)",
                    }}
                    >
                    Name
                </Typography> */}
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "25px",
                      color: "var(--secondary-text-color)",
                    }}
                  >
                    {`${capitalizeFirstLetter(
                      adminFirstName
                    )} ${capitalizeFirstLetter(adminLastName)}`}
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
                  {/* <Typography
                    sx={{
                        //   fontWeight: "600",
                        fontSize: "15px",
                        color: "var(--secondary-text-color)",
                    }}
                    >
                    {adminEmail}
                </Typography> */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          marginTop: "15px",
                          color: "var(--secondary-text-color)",
                        }}
                      >
                        Email
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "15px",
                          color: "var(--secondary-text-color)",
                        }}
                      >
                        {adminEmail}
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "30px" }}>
                      <Typography
                        sx={{
                          fontSize: "11px",
                          marginTop: "15px",
                          color: "var(--secondary-text-color)",
                        }}
                      >
                        Phone Number
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "15px",
                          color: "var(--secondary-text-color)",
                        }}
                      >
                        {adminPhonenumber}
                      </Typography>
                    </Box>
                    {/* <Typography
                    sx={{
                      fontSize: "11px",
                      marginTop: "15px",
                      color: "var(--secondary-text-color)",
                    }}
                  >
                    Position
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "15px",
                      color: "var(--secondary-text-color)",
                    }}
                  >
                    {capitalizeFirstLetter(adminPosition)}
                  </Typography> */}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
                marginTop: "30px",
                borderRadius: "10px",
                background: "var(--background-table-sidebar-card-color)",
                // width: "300px",
                padding: "30px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    marginTop: "15px",
                    color: "var(--secondary-text-color)",
                  }}
                >
                  Intro
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "var(--secondary-text-color)",
                    marginTop: "15px",
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
