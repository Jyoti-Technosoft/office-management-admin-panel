import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Login from "./../../assets/img/AdminLoginSVG.svg";
import Logo from "./../../assets/img/LogoSVG.svg";

// Custom imports 
import {InputLable, InputField, InputFieldProps, errorMessageDesign} from "../CustomDesignMUI/CustomMUI";
import "./AdminLogin.scss";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(""); // validation@
  const [passwordError, setPasswordError] = useState(""); // validation@
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // validation@
  const validateInputs = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    // Email validation
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please include an '@' in the email address.");
      valid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      try {
        const response = await fetch("http://localhost:8001/adminData");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response to get the data
        const data = await response.json();

        // Check if the entered email and password match any user from the fetched data
        const matchingUser = data.find(
          (user) => user.email === email && user.password === password
        );

        if (matchingUser) {
          localStorage.setItem("loggedIn", "true");
          alert("Login successful");
          navigate("/dashboard");
        } else {
          setErrorMessage("Invalid email or password");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        width: "1000px",
        boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        // background: 'yellow',
      }}
    >
      <Box
        sx={{
          flex: "1",
          display: "flex",
          background: "#F9F9F9",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px 0 30px 30px",
        }}
        >
        <img
          src={Login}
          alt="loginImg"
          style={{
            maxWidth: "500px",
            padding: "20px",
          }}
        />
      </Box>

      <Box
        className="admin-login"
        sx={{
          flex: "1",
        }}
      >
        <Box className="admin-box">
          <Box
            className="admin-form"
            sx={{
              padding: "80px 60px 80px 40px",
            }}
          >
            <img
              src={Logo}
              alt="LogoImg"
              style={{
                textAlign: "center",
                maxWidth: "200px",
                padding: "0 0 40px 0",
              }}
            />
            <form onSubmit={handleSubmit}>
              {/* <Typography sx={{ color: 'var(--primary-color)', typography: "h4", fontWeight: "bold" }}>Login</Typography>
              <Typography sx={{ typography: "subtitle1", color: 'var(--primary-color)' }}>Login to your account.</Typography> */}
              <Typography
                sx={errorMessageDesign}
              >
                {errorMessage}
              </Typography>
              <InputLabel sx={InputLable}>E-mail Address</InputLabel>

              <TextField
                inputProps={{
                  sx: InputFieldProps(),
                }}
                sx={InputField}
                type="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <Typography
                  style={errorMessageDesign}>
                  {emailError}
                </Typography>
              )}

              <br />
              <InputLabel sx={InputLable}>Password</InputLabel>

              <TextField
                inputProps={{
                  sx: InputFieldProps(),
                }}
                sx={InputField}
                type="password"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {passwordError && (
                <Typography
                  sx={errorMessageDesign}
                >
                  {passwordError}
                </Typography>
              )}

              <Box
                sx={{
                  color: "var(--third-color)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 0 30px 0",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    sx={{
                      padding: "0 4px 0 0",
                      // eslint-disable-next-line no-dupe-keys
                      color: "var(--third-color)", // Unchecked color
                      "&.Mui-checked": {
                        color: "var(--secondary-color)", // Checked color
                      },
                    }}
                    id="exampleCheck1"
                  />
                  <Typography variant="subtitle2">Remember me</Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      typography: "subtitle2",
                      fontWeight: "bold",
                      color: "var(--primary-color)",
                    }}
                  >
                    Reset Password?
                  </Typography>
                </Box>
              </Box>
              <Button
                onClick={handleSubmit}
                sx={{
                  width: "100%",
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
                Log In
              </Button>
              <Typography
                sx={{
                  typography: "subtitle2",
                  padding: "30px 0 0 0",
                  textAlign: "center",
                  color: "var(--third-color)",
                }}
              >
                Don't have an account yet?
                <Link className="link" to="/signup">
                  {" "}
                  Join JyotiTechnosoft today.
                </Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLogin;
