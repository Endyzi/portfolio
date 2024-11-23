import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url("/assets/background2.webp")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)',
      }}
    >
      <Typography variant="h2" sx={{ 
        marginTop: '-650px',
        fontSize: { xs: '2rem', md: '4rem' } }}>
       Jonatan Nilhamn
      </Typography>
      <Typography variant="h5" sx={{ fontSize: { xs: '1rem', md: '1.8rem' }, marginTop: '1rem' }}>
        Systemutvecklare med passion för problemlösning och teknik
      </Typography>
    </Box>
  );
};

export default Home;
