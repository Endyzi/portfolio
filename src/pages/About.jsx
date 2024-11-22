import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
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
    src="/assets/Picture_001.jpg"
    alt="Jonatan Nilhamn"
    sx={{
      width: { xs: '80%', md: '600px' },
      height: 'auto',
      borderRadius: '16px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    }}
    />

      <Box sc={{ maxWidth: '80%', textAlign: 'center'}}>
      <Typography variant="h4" gutterBottom>
        Om Mig
        </Typography>
        <Typography variant="body1">  
      Jag är en Systemutvecklare med över 4 år's erfarenhet inom diverse projekt. 2019 tog jag examen som webbutvecklare från Medieinstitutet i Malmö.Sedan dess har jag jobbat med både stora och små projekt.
        Som person är jag driven, målinriktad, positiv, modig och nytänkande. 
        Jag strävar efter att alltid utvecklas, tech-branschen är en ständigt växande industri som snabbt förändras samtidigt som kräver att man är nyfiken.
        Utöver mitt intresse för utveckling och tech så är mina intressen styrketräning, datorer, programmering, spel och att umgås med vänner.
        </Typography>
      </Box>
    </Box>  
  );
};

export default About;
