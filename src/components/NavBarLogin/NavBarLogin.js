import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Logo from "../../assets/img/LogoSVG.svg"; 

const NavBarLogin = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "blue" }}>
      <Toolbar>
        {/* Logo on the left side */}
        <img src={Logo} alt="Logo" style={{ marginRight: "20px" }} />

        {/* Two links on the right side */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
        <Button color="inherit">Link 1</Button>
        <Button color="inherit">Link 2</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarLogin;
