import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const headerAppBar = () => (
  <AppBar
    position="fixed"
    sx={{
        zIndex: 3000,
    }}
  >
    <Toolbar>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography color='text' variant="h6" component="div">
        Code @ Clemson
      </Typography>
    </Toolbar>
  </AppBar>
);

export default headerAppBar;
