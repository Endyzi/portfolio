import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

const Home = () => {

  const { t } = useTranslation();
  
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
        marginTop: {xs: '-80vh', sm: '-800px', md: '-650px'} ,
        fontSize: { xs: '2rem', md: '4rem' } }}>
       {t('home.title')}
      </Typography>
      <Typography variant="h5" sx={{ fontSize: { xs: '1rem', md: '1.8rem' }, marginTop: '1rem' }}>
      {t('home.description')}
      </Typography>
    </Box>
  );
};

export default Home;
