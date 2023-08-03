import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Typography
} from "@mui/material";

// Custom imports 
import Logo from "./../../assets/img/LogoSVG.svg";
import { InputLable, InputField, InputFieldProps, errorMessageDesign } from "../CustomDesignMUI/CustomMUI";
import './AdminSignup.scss';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    position: "",
    password: "",
    confirmpassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phonenumber: "",
    position: "",
    password: "",
    confirmpassword: "",
  });

  const [formIsValid, setFormIsValid] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: "" }));

    // Perform validation checks for each field
    switch (name) {
      case "name":
        if (!value) {
          setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            name: "Name is required",
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

    // Check if any form errors exist
    for (const error in formErrors) {
      if (formErrors[error]) {
        setFormIsValid(false);
        return;
      }
    }

    setFormIsValid(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8001/adminData",
        formData
      );

      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        phonenumber: "",
        position: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <Box className="admin-signup"
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
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
              // background: 'red',
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

          <Grid item
            className="admin-signup-form"
            xs={12}
            md={6}
          >
            <Box>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  maxWidth: "200px",
                  alignItems: 'center',
                }}
              />
            </Box>
            <form>
              <Typography sx={{
                color: 'var(--primary-color)',
                typography: 'h5',
                marginTop: '50px',
                fontWeight: 'bold',
              }}>
                Signup
              </Typography>
              <InputLabel sx={InputLable}>
                Name
              </InputLabel>
              <TextField
                inputProps={{
                  sx: InputFieldProps()
                }}
                sx={InputField}
                type="text"
                name="name"
                placeholder="Enter a name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <Typography
                  sx={errorMessageDesign}
                >
                  {formErrors.name}
                </Typography>
              )}
              <InputLabel sx={InputLable}>
                E-mail
              </InputLabel>
              <TextField
                inputProps={{
                  style: InputFieldProps()
                }}
                sx={InputField}
                type="email"
                name="email"
                placeholder="Enter an email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <Typography style={errorMessageDesign}>{formErrors.email}</Typography>
              )}
              <InputLabel sx={InputLable}>
                Phone Number
              </InputLabel>

              <TextField
                inputProps={{
                  sx: InputFieldProps()
                }}
                sx={InputField}
                type="text"
                name="phonenumber"
                placeholder="Enter a phone number"
                value={formData.phonenumber}
                onChange={handleChange}
              />
              {formErrors.phonenumber && (
                <Typography sx={errorMessageDesign}>{formErrors.phonenumber}</Typography>
              )}
              <InputLabel sx={InputLable}>
                Position
              </InputLabel>
              <Select
                sx={{
                  height: '35px',
                  width: '100%',
                  fontSize: '14px',
                }}
                name="position"
                value={formData.position}
                onChange={handleChange}
              >
                <MenuItem value="">Select a Position</MenuItem>
                <MenuItem value="CEO">CEO</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Designer">Designer</MenuItem>
                <MenuItem value="Developer">Developer</MenuItem>
                <MenuItem value="Jr.Developer">Jr.Developer</MenuItem>
              </Select>
              {formErrors.position && (
                <Typography sx={errorMessageDesign}>
                  {formErrors.position}
                </Typography>
              )}
              <InputLabel sx={InputLable}>
                Password
              </InputLabel>
              <TextField
                inputProps={{
                  sx: InputFieldProps()
                }}
                sx={InputField}
                type="password"
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
              <InputLabel sx={InputLable}>
                Confirm Password
              </InputLabel>
              <TextField
                inputProps={{
                  sx: InputFieldProps()
                }}
                sx={InputField}
                type="password"
                name="confirmpassword"
                placeholder="Confirm password"
                value={formData.confirmpassword}
                onChange={handleChange}
              />
              {formErrors.confirmpassword && (
                <Typography sx={errorMessageDesign}>{formErrors.confirmpassword}</Typography>
              )}

              <Button
                onClick={handleSubmit}
                sx={{
                  width: "100%",
                  marginTop: '30px',
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
            </form>
          </Grid>

          {/* <Grid
            className="admin-signup-img"
            xs={12}
            md={6}
            >
            <img
              src={Signup}
              alt="signup"
              style={{ width: "100%", marginTop: "20px" }}
            />
          </Grid> */}

        </Grid>
      </Container>
    </Box>
  );
};

export default AdminSignup;
