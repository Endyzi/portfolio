import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Icon, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
    <Toolbar>
        <Typography variant ="h6" sx={{ flexGrow: 0, marginRight: '2rem' }}>
            JN
        </Typography>
    
    <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1, 
          }}
        >
      <Button color="inherit" component={Link} to="/" sx={{ mx: 2 }}>
            Hem
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ mx: 2 }}>
            Om Mig
          </Button>
          <Button color="inherit" component={Link} to="/portfolio" sx={{ mx: 2 }}>
            Portfolio
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ mx: 2 }}>
            Kontakt
          </Button>
      </Box>

      <Box>
        <IconButton
        color="inherit"
        href="https://www.linkedin.com/in/jonatan-nilhamn-3b816b183/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mx: 1 }}
        >
            <LinkedInIcon/>
        </IconButton>
        <IconButton
        color="inherit"
        href="https://github.com/endyzi"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mx: 1 }}
        >
            <GithubIcon />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
