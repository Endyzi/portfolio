import React from 'react';
import { Box, Typography, IconButton, Link as MuiLink } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: 'url("/assets/background.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: { xs: 'flex-start', md: 'flex-start' },
        justifyContent: { xs: 'center', md: 'flex-end' },
        pt: { xs: '10rem', sm: '11rem', md: 0 },
        color: 'white',
        overflow: 'hidden',
      }}
    >
      
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(2,6,23,0.25) 0%, rgba(2,6,23,0.6) 70%)',
          zIndex: 1,
        }}
      />

      {/* content wrapper */}
      <Box 
        sx={{ 
          position: 'relative', 
          zIndex: 2, 
          width: '100%',
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' },
          alignItems: { xs: 'flex-start', md: 'flex-start' },
          px: { xs: 3, sm: 4, md: 8 },
          pt: { md: '12rem', lg: '10rem' }
        }}
      >
        {/* contact card */}
        <Box
          sx={{
            maxWidth: { xs: '90%', sm: 560, md: 520 },
            width: '100%',
            textAlign: { xs: 'center', md: 'right' },
            mr: { md: '4vw', lg: '6vw', xl: '8vw' }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '4.5rem' },
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              color: '#F9FAFB',
              mb: 2,
              lineHeight: 1.1,
            }}
          >
            {t('contact.title')}
          </Typography>

          <MuiLink
            href={`mailto:${t('contact.email')}`}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              fontSize: { xs: '1rem', md: '1.25rem', lg: '1.4rem' },
              color: '#E6EEF6',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#06B6D4',
              },
            }}
          >
            <EmailIcon fontSize="medium" sx={{ color: '#06B6D4' }} />
            {t('contact.email')}
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;