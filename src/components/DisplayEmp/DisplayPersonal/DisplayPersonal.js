import React from "react";
import { Box,IconButton,Typography,Grid, } from "@mui/material";
import { Edit,Delete } from "@mui/icons-material";
import ProfileImg from "../../../assets/img/profile.svg";
import StarIcon from "../../../assets/img/icons/starIcon.svg";

const DisplayPersonal = () => {
    return (
        <Box>
            <Box
                  sx={{
                    marginTop: "12px",
                    backgroundColor: "#dfeaf7",
                    borderRadius: "10px",
                    // height: "100vh",
                    width: "100%",
                    padding: "15px",
                  }}
                >
                  <Box sx={{ marginLeft: "15px", position: "relative" }}>
                    <Box sx={{ position: "absolute" }}>
                      <img width={"120px"} src={ProfileImg} alt="profile" />
                      <Box sx={{ marginTop: "-115px", marginLeft: "95px" }}>
                        <img src={StarIcon} alt="icon" />
                      </Box>
                    </Box>
                  </Box>
                  {/* EDIT AND DELETE BUTTONS */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "-2px",
                    }}
                  >
                    <IconButton sx={{ color: "#878585" }}>
                      <Edit />
                    </IconButton>
                    <IconButton sx={{ color: "#878585" }}>
                      <Delete />
                    </IconButton>
                  </Box>

                  <Box sx={{ marginTop: "110px" }}>
                    <form>
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "13px",
                          marginLeft: "8px",
                        }}
                      >
                        Employee ID: 101
                      </Typography>
                      <Box sx={{ marginTop: "12px", marginLeft: "8px" }}>
                        <Grid container spacing={2}>
                          {/* LEFT PART */}
                          <Grid item xs={12} md={6}>
                            <Box contained="left">
                              <Typography
                                sx={{ fontSize: "11px", marginTop: "15px" }}
                              >
                                Employee Name
                              </Typography>
                              <Typography
                                sx={{ fontWeight: "600", fontSize: "15px" }}
                              >
                                John Doe
                              </Typography>
                              <Typography
                                sx={{ fontSize: "11px", marginTop: "15px" }}
                              >
                                Department
                              </Typography>
                              <Typography
                                sx={{ fontWeight: "600", fontSize: "15px" }}
                              >
                                Design & Marketing
                              </Typography>
                              <Typography
                                sx={{ fontSize: "11px", marginTop: "15px" }}
                              >
                                Job Title
                              </Typography>
                              <Typography
                                sx={{ fontWeight: "600", fontSize: "15px" }}
                              >
                                UI/UX Designer
                              </Typography>
                              <Typography
                                sx={{ fontSize: "11px", marginTop: "15px" }}
                              >
                                Job Category
                              </Typography>
                              <Typography
                                sx={{ fontWeight: "600", fontSize: "15px" }}
                              >
                                Full Time
                              </Typography>
                            </Box>
                          </Grid>
                          {/* RIGHT PART */}
                          <Grid item xs={12} md={6}>
                            <Typography
                              sx={{ fontSize: "11px", marginTop: "15px" }}
                            >
                              Date of Joining
                            </Typography>
                            <Typography
                              sx={{ fontWeight: "600", fontSize: "15px" }}
                            >
                              14-12-2022
                            </Typography>
                            <Typography
                              sx={{ fontSize: "11px", marginTop: "15px" }}
                            >
                              Date of Birth
                            </Typography>
                            <Typography
                              sx={{ fontWeight: "600", fontSize: "15px" }}
                            >
                              15-05-1998
                            </Typography>
                            <Typography
                              sx={{ fontSize: "11px", marginTop: "15px" }}
                            >
                              Blood Group
                            </Typography>
                            <Typography
                              sx={{ fontWeight: "600", fontSize: "15px" }}
                            >
                              A+
                            </Typography>
                            <Typography
                              sx={{ fontSize: "11px", marginTop: "15px" }}
                            >
                              Emergency Number
                            </Typography>
                            <Typography
                              sx={{ fontWeight: "600", fontSize: "15px" }}
                            >
                              +149 427 100 66
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </form>
                  </Box>
                </Box>
        </Box>
    );
}
export default DisplayPersonal;