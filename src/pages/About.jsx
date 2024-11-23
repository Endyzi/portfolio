import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation();

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      gap: '2rem',
    }}
    >

    <Box
    component="img"
    src="/assets/Picture_002.webp"
    alt="Jonatan Nilhamn"
    sx={{
      width: { xs: '80%', md: '600px' },
      marginTop: '5%',
      height: 'auto',
      borderRadius: '16px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    }}
    />

      <Box sc={{ maxWidth: '80%', textAlign: 'center'}}>
      <Typography variant="h4" gutterBottom>
      {t('about.title')}
       
        </Typography>
        <Typography variant="body1">
        {t('about.description')}  
     
        </Typography>
      </Box>
    </Box>  
  );
};

export default About;
