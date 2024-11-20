// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Box>
          <Button color="inherit" href="#home">
            Hem
          </Button>
          <Button color="inherit" href="#about">
            Om Mig
          </Button>
          <Button color="inherit" href="#portfolio">
            Portfolio
          </Button>
          <Button color="inherit" href="#contact">
            Kontakt
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
