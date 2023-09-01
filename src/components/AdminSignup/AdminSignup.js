import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Signup from "./../../assets/img/AdminSignup.png";
import {
  Button,
  Container,
  Grid,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
} from "@mui/material";
import { GlobalContext } from "../../ContextAPI/CustomContext";

// Custom imports
import Logo from "./../../assets/img/LogoSVG.svg";
import {
  InputField,
  InputFieldProps,
  errorMessageDesign,
} from "../CustomDesignMUI/CustomMUI";
import "./AdminSignup.scss";

const AdminSignup = () => {
  const { adminApiEndpoint } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phonenumber: "",
    position: "",
    password: "",
    confirmpassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    phonenumber: "",
    position: "",
    password: "",
    confirmpassword: "",
  });

  const [formIsValid, setFormIsValid] = useState(true);

  const navigate = useNavigate();

  const checkUserLoggedIn = () => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn || loggedIn === "undefined") {
      return navigate("/signup");
    }
    if (loggedIn) {
      return navigate("/dashboard");
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: "" }));

    // Perform validation checks for each field
    switch (name) {
      case "fname":
        if (!value) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            name: "Firstname is required",
          }));
        }
        break;
      case "lname":
        if (!value) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            name: "Lastname is required",
          }));
        }
        break;
      case "email":
        if (!value) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            email: "Email is required",
          }));
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            email: "Please include an '@' in the email address.",
          }));
        }
        break;
      case "phonenumber":
        if (!value) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            phonenumber: "Phone number is required",
          }));
        } else if (!/^\d{10}$/.test(value)) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            phonenumber: "Phone number must be 10 digits",
          }));
        }
        break;
      case "position":
        if (!value) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            position: "Position is required",
          }));
        }
        break;
      case "password":
        if (!value) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            password: "Password is required",
          }));
        } else if (value.length < 6) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            password: "Password must be at least 6 characters",
          }));
        }
        break;
      case "confirmpassword":
        if (!value) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            confirmpassword: "Confirm password is required",
          }));
        } else if (value !== formData.password) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            confirmpassword: "Passwords do not match",
          }));
        }
        break;
      default:
        break;
    }

    for (const error in formErrors) {
      if (formErrors[error]) {
        setFormIsValid(false);
        return;
      }
    }

    setFormIsValid(true);
  };

  const [showDialog, setShowDialog] = useState(false);

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(adminApiEndpoint, formData);

      console.log(response.data);

      setFormData({
        fname: "",
        lname: "",
        email: "",
        phonenumber: "",
        position: "",
        password: "",
        confirmpassword: "",
      });
      setShowDialog(true);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <Box
      className="admin-signup"
      sx={{
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid
            className="admin-signup-img"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={12}
            md={6}
          >
            <img
              src={Signup}
              alt="signup"
              style={{
                width: "100%",
              }}
            />
          </Grid>

          <Grid item className="admin-signup-form" xs={12} md={6}>
            <Box>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  maxWidth: "200px",
                  alignItems: "center",
                }}
              />
            </Box>
            <form>
              <Typography
                sx={{
                  color: "var(--primary-color)",
                  typography: "h5",
                  marginTop: "50px",
                  fontWeight: "bold",
                }}
              >
                Signup
              </Typography>
              <Box sx={{ marginTop: "20px" }}>
                <TextField
                  inputProps={{
                    sx: InputFieldProps(),
                  }}
                  sx={InputField}
                  type="text"
                  label="First Name"
                  name="fname"
                  placeholder="Enter a Firstname"
                  value={formData.fname}
                  onChange={handleChange}
                />
                {formErrors.fname && (
                  <Typography sx={errorMessageDesign}>
                    {formErrors.fname}
                  </Typography>
                )}
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <TextField
                  inputProps={{
                    sx: InputFieldProps(),
                  }}
                  sx={InputField}
                  type="text"
                  label="Last Name"
                  name="lname"
                  placeholder="Enter a Lastname"
                  value={formData.lname}
                  onChange={handleChange}
                />
                {formErrors.lname && (
                  <Typography sx={errorMessageDesign}>
                    {formErrors.lname}
                  </Typography>
                )}
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <TextField
                  inputProps={{
                    style: InputFieldProps(),
                  }}
                  sx={InputField}
                  label="E-mail"
                  type="email"
                  name="email"
                  placeholder="Enter an email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <Typography style={errorMessageDesign}>
                    {formErrors.email}
                  </Typography>
                )}
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <TextField
                  inputProps={{
                    sx: InputFieldProps(),
                  }}
                  sx={InputField}
                  label="Phone Number"
                  type="text"
                  name="phonenumber"
                  placeholder="Enter a phone number"
                  value={formData.phonenumber}
                  onChange={handleChange}
                />
                {formErrors.phonenumber && (
                  <Typography sx={errorMessageDesign}>
                    {formErrors.phonenumber}
                  </Typography>
                )}
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <FormControl fullWidth>
                  <InputLabel id="position">Position</InputLabel>
                  <Select
                    inputProps={{
                      sx: InputFieldProps(),
                    }}
                    sx={InputField}
                    labelId="position"
                    id="selectposition"
                    name="position"
                    value={formData.position}
                    label="Position"
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select a Position</MenuItem>
                    <MenuItem value="CEO">CEO</MenuItem>
                    <MenuItem value="HR">HR</MenuItem>
                    <MenuItem value="Manager">Designer</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Developer">Front-end Developer</MenuItem>
                    <MenuItem value="Jr.Developer">Back-end Developer</MenuItem>
                  </Select>
                </FormControl>
                {formErrors.position && (
                  <Typography sx={errorMessageDesign}>
                    {formErrors.position}
                  </Typography>
                )}
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <TextField
                  inputProps={{
                    sx: InputFieldProps(),
                  }}
                  sx={InputField}
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {formErrors.password && (
                  <Typography sx={errorMessageDesign}>
                    {formErrors.password}
                  </Typography>
                )}
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <TextField
                  inputProps={{
                    sx: InputFieldProps(),
                  }}
                  sx={InputField}
                  type="password"
                  label="Confirm Password"
                  name="confirmpassword"
                  placeholder="Confirm password"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                />
                {formErrors.confirmpassword && (
                  <Typography sx={errorMessageDesign}>
                    {formErrors.confirmpassword}
                  </Typography>
                )}
              </Box>

              <Button
                onClick={handleSubmit}
                sx={{
                  width: "100%",
                  marginTop: "30px",
                  background: "var(--secondary-color)",
                  color: "var(--secondary-color",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "red",
                    color: "var(--secondary-color)",
                  },
                }}
                variant="contained"
              >
                Sign Up
              </Button>
              <Typography
                sx={{
                  typography: "subtitle2",
                  padding: "30px 0 0 0",
                  textAlign: "left",
                  color: "var(--third-color)",
                }}
              >
                Already have and account?
                <Link className="link" to="/">
                  {" "}
                  Login Now
                </Link>
              </Typography>
              <Dialog
                open={showDialog}
                onClose={handleCloseDialog}
                maxWidth="xs"
                fullWidth
              >
                <DialogTitle>Sign-up Successful</DialogTitle>
                <DialogContent>
                  <Typography variant="body1">
                    You have successfully signed up!
                  </Typography>
                  <Typography variant="body1">
                    You can now log in using your credentials.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog} color="primary" autoFocus>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminSignup;
