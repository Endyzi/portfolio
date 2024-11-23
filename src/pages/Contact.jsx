import React from 'react';
import { Box, Typography, Icon, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url("/assets/background.webp")', 
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
        marginTop: {xs: '-700px', sm: '-800px', md: '-950px'} ,
        marginLeft: {xs: '5px', md: '1800px'},
        fontSize: { xs: '2rem', md: '3rem' } }}>
       {t('contact.title')}
      </Typography>
      <Typography variant="h5" sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, marginTop: {xs: '1rem', md: '1rem'}, marginLeft: {xs: '5px', md: '1800px'}  }}>
      {t('contact.email')}
      </Typography>

      <Box>
      <IconButton
        color="inherit"
        href="https://www.linkedin.com/in/jonatan-nilhamn-3b816b183/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ marginLeft: { xs: '5px',  md: '1800px'}  }}
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
