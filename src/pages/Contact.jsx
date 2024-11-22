import React from 'react';
import { Box, Typography, Icon, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url("/assets/background.jpeg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
      }}
    >
      <Typography variant="h2" sx={{ 
        marginTop: '-650px',
        fontSize: { xs: '2rem', md: '4rem' } }}>
       Kontakt
      </Typography>
      <Typography variant="h5" sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, marginTop: '1rem' }}>
        private_nilhamn@hotmail.com
      </Typography>

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
            <GitHubIcon/>
        </IconButton>
        </Box>
    </Box>
  );
};

export default Contact;
