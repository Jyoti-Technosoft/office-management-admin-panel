import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import loginImage from '../assets/img/LogoSVG.svg'; // Replace with your image path

const TestMaterial = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here, e.g., API call to authenticate user
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <Container maxWidth="xs">
      <Grid container spacing={2}>
        {/* Left Column - Image */}
        <Grid item xs={12} md={6}>
          <img
            src={loginImage}
            alt="Login"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>

        {/* Right Column - Login Form */}
        <Grid item xs={12} md={6}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography className='testingChangeColor'  variant="h5" component="h1" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Log In
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TestMaterial;
