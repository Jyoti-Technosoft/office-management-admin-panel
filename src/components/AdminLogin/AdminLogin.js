import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//IMPORTING CONTEXT
// import { GlobalContext } from "../../ContextAPI/CustomContext";
import {
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import Login from "./../../assets/img/AdminLoginSVG.svg";
import Logo from "./../../assets/img/LogoSVG.svg";

import {
  InputField,
  InputFieldProps,
} from "../CustomDesignMUI/CustomMUI";
import "./AdminLogin.scss";
import { GlobalContext } from "../../ContextAPI/CustomContext";
import CustomToast from "../ReusableComponents/CustomToast";

const AdminLogin = () => {
  // Context Function
  // const { admin } = useContext(GlobalContext);
  // const { admin, setAdminName, setAdminPosition } = useContext(GlobalContext);
  // console.log("Login ", admin);
  const { setShowToast, showToast } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(""); // validation@
  const [passwordError, setPasswordError] = useState(""); // validation@
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const checkUserLoggedIn = () => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn || loggedIn === "undefined") {
      return navigate("/");
    }
    if (loggedIn) {
      return navigate("/dashboard")
    }
  };
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

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
        const response = await axios.get("http://localhost:8001/adminData");
        const adminData = response.data;

        const matchingUser = adminData.find(
          (user) => user.email === email && user.password === password
        );

        if (matchingUser) {
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("adminName", matchingUser.name);
          localStorage.setItem("adminPosition", matchingUser.position);
          localStorage.setItem("adminEmail", matchingUser.email);
          localStorage.setItem("adminPhonenumber", matchingUser.phonenumber);
          navigate("/dashboard");
          setShowToast({ show: true, msg: "Login Successfully", type: "success" });
        } else {
          setErrorMessage("Invalid email or password");
        }

      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    }
  };


  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center"
      }}>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          width: "1000px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }}
      >
        <Box
          sx={{
            flex: "1",
            display: "flex",
            background: "#dfeaf7",
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
                // padding: '40px',
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
                  sx={{
                    color: "red",
                    typography: "subtitle2",
                    textAlign: "left",
                  }}
                >
                  {errorMessage}
                </Typography>
                {/* <InputLabel sx={InputLable}>E-mail Address</InputLabel> */}
                <Box>
                  <TextField
                    inputProps={{
                      sx: InputFieldProps(),
                    }}
                    sx={InputField}
                    type="email"
                    label="E-mail Address"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <Typography
                      style={{
                        color: "red",
                        fontSize: "14px",
                        padding: "0",
                      }}
                    >
                      {emailError}
                    </Typography>
                  )}
                </Box>

                {/* <br /> */}
                {/* <InputLabel sx={InputLable}>Password</InputLabel> */}
                <Box sx={{ marginTop: "25px" }}>
                  <TextField
                    inputProps={{
                      sx: InputFieldProps(),
                    }}
                    sx={InputField}
                    label="Password"
                    type="password"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {passwordError && (
                    <Typography
                      sx={{
                        color: "red",
                        fontSize: "14px",
                        padding: "0px",
                      }}
                    >
                      {passwordError}
                    </Typography>
                  )}
                </Box>

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
                    Join JyotiTechnosoft today.
                  </Link>
                </Typography>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
      {
        showToast.show ?
          <CustomToast toastType={showToast.type} message={showToast.msg}/>
          : null
      }
    </Box>
  );
};

export default AdminLogin;
