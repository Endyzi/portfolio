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
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)',
        overflow: 'hidden',
      }}
    >
      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(120deg, rgba(15,23,42,0.92) 20%, rgba(11,18,32,0.7) 90%)',
          zIndex: 1,
        }}
      />
      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 2, minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h2" sx={{
          marginTop: { lg: '-rem', xs: '-70vh', sm: '-800px', md: '-650px' },
          fontSize: { lg: '3rem', xs: '2rem', md: '4rem', fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800, }
        }}>
          {t('home.title')}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: { lg: '1.2rem', xs: '1rem', md: '1.8rem', fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800, }, marginTop: '1rem' }}>
          {t('home.description')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
