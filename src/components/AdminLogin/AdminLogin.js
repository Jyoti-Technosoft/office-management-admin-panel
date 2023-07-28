import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Checkbox, InputLabel, TextField, Typography } from "@mui/material";

import InputLable from './CustomMUI'
import './AdminLogin.scss'

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "Admin@123") {
      console.log(email === "admin@gmail.com" && password === "Admin@123");
      localStorage.setItem("loggedIn", "true");
      alert("Login successful");
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <Box className="admin-login" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Box className="admin-box">
        <Box className="admin-form" sx={{ alignItems: "center", padding: '40px'}}>
          <form>
            <Typography sx={{textAlign:'center', color: 'var(--white-color)', typography: "h4", fontWeight: "bold" }}>Login</Typography>
            <Typography sx={{textAlign:'center', typography: "subtitle1", color: 'var(--white-color)' }}>Login to your account.</Typography>
             <Typography
              sx={{
                color: 'black',
                textAlign:'center',
              }}>
              {errorMessage}
              </Typography>
            <InputLabel sx={InputLable}>E-mail Address</InputLabel>
            <TextField
            inputProps={{
              sx: {
                height: "4px",
                fontSize: '12px',
              },
            }}
            sx={{
              width: '100%',
              background: 'var(--white-color)',
              borderRadius: '5px'
            }}
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <InputLabel sx={InputLable}>Password</InputLabel>
            <TextField 
            inputProps={{
              sx: {
                height: "4px",
                fontSize: '12px',
              },
            }}
            sx={{
              width: '100%',
              background: 'var(--white-color)',
              borderRadius: '5px',
            }}
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Box sx={{color: "var(--white-color)", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0 30px 0'}}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox sx={{
                  color: 'var(--white-color)',
                  padding: '0',
                  // eslint-disable-next-line no-dupe-keys
                  color: 'var(--white-color)', // Unchecked color
                    "&.Mui-checked": {
                      color: 'var(--secondary-color)', // Checked color
                    },
                }} id="exampleCheck1" />
                <Typography variant="subtitle2" >Remember me</Typography>
              </Box>
              <Box>
                <Typography sx={{ typography: 'subtitle2', fontWeight: 'bold', color: 'var(--white-color)' }}>Reset Password?</Typography>
              </Box>
            </Box>
            <Button onClick={handleSubmit} sx={{width:'100%', background:'var(--secondary-color)' ,color: 'var(--secondary-color',fontWeight: 'bold' }} variant="contained">Log In</Button>
            <Typography sx={{ typography: 'subtitle2', padding: '30px 0 0 0', textAlign: 'center', color: 'var(--white-color)' }}>
              Don't have an account yet?
              <Link className="link" to="/signup"> Join JyotiTechnosoft today.</Link>
            </Typography>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLogin;
