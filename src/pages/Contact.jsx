import React from 'react';
import { Box, Typography } from '@mui/material';

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
        marginTop: '-750px',
        fontSize: { xs: '2rem', md: '4rem' } }}>
       Kontakt
      </Typography>
      <Typography variant="h5" sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, marginTop: '1rem' }}>
        private_nilhamn@hotmail.com
      </Typography>
    </Box>
  );
};

export default Contact;
