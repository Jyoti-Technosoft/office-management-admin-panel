import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import Login from "./../../assets/img/AdminLoginSVG.svg";
import Logo from "./../../assets/img/LogoSVG.svg";

import { InputField, InputFieldProps } from "../CustomDesignMUI/CustomMUI";
import "./AdminLogin.scss";
import { GlobalContext } from "../../ContextAPI/CustomContext";
import CustomToast from "../ReusableComponents/CustomToast";

const AdminLogin = () => {
  // Context Function
  // const { admin } = useContext(GlobalContext);
  // const { admin, setAdminName, setAdminPosition } = useContext(GlobalContext);
  // console.log("Login ", admin);
  const { setShowToast, showToast, adminApiEndpoint } =
    useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const checkUserLoggedIn = () => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn || loggedIn === "undefined") {
      return navigate("/");
    }
    if (loggedIn) {
      return navigate("/dashboard");
    }
  };
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const validateInputs = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please include an '@' in the email address.");
      valid = false;
    }

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
        const response = await axios.get(adminApiEndpoint);
        const adminData = response.data;

        const matchingUser = adminData.find(
          (user) => user.email === email && user.password === password
        );

        if (matchingUser) {
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("adminFirstName", matchingUser.fname);
          localStorage.setItem("adminLastName", matchingUser.lname);
          localStorage.setItem("adminPosition", matchingUser.position);
          localStorage.setItem("adminEmail", matchingUser.email);
          localStorage.setItem("adminPhonenumber", matchingUser.phonenumber);
          navigate("/dashboard");
          setShowToast({
            show: true,
            msg: "Login Successfully",
            type: "success",
          });
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
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          width: "1000px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.14)",
        }}
      >
        <Box
          sx={{
            flex: "1",
            display: "flex",
            background: "var(--primary-highlight-color)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              src={Login}
              alt="loginImg"
              style={{
                maxWidth: "500px",
              }}
            />
          </Box>
        </Box>
        <Box
          className="admin-login"
          sx={{
            flex: "1",
            background: "var(--plain-white)",
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
                <Typography
                  sx={{
                    color: "red",
                    typography: "subtitle2",
                    textAlign: "left",
                  }}
                >
                  {errorMessage}
                </Typography>
                <Box>
                  <TextField
                    className="custom-textfield"
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
                        color: "var(--third-color)",
                        "&.Mui-checked": {
                          color: "var(--secondary-color)",
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
      {showToast.show ? (
        <CustomToast toastType={showToast.type} message={showToast.msg} />
      ) : null}
    </Box>
  );
};

export default AdminLogin;
