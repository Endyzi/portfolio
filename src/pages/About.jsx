import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="about"
      sx={{
        bgcolor: '#0F172A',
        minHeight: '100vh',                
        py: { xs: 10, md: 14 },           
        scrollMarginTop: { xs: 8, md: 10 } 
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          justifyContent="center"
        >
          {/* Image */}
          <Grid item xs={12} md="auto">
            <Box
              component="img"
              src="/assets/Picture_002.webp"
              alt="Porträtt av Jonatan Nilhamn"
              sx={{
                display: 'block',
                mx: { xs: 'auto', md: 0 },
                width: { xs: '64%', sm: '48%', md: 360 },
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0 16px 40px rgba(0,0,0,0.45)'
              }}
            />
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: 640, mx: { xs: 'auto', md: 0 } }}>
              <Typography
                variant="h4"
                sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#F9FAFB', letterSpacing: 1, mb: 1 }}
              >
                {t('about.title')}
              </Typography>

              <Divider
                sx={{
                  width: { xs: '50%', md: 140 },
                  height: 3,
                  bgcolor: '#06B6D4',
                  borderRadius: 1,
                  mb: 3,
                  mx: { xs: 'auto', md: 0 }
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#E5E7EB',
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                  mb: 0
                }}
              >
                {t('about.description')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
