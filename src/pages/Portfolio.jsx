import React, { useState } from 'react';
import Slider from 'react-slick';
import CardComponent from '../components/CardComponent';
import { Box, Typography } from '@mui/material';

const projects = [
  {
    title: 'Prodia',
    description: 'Ett projekt inom hälsoteknik som fokuserar på läkemedel och analys.',
    image: '/assets/prodia.jpg',
    link: 'https://portal.prodia.se/',
    detailedDescription: 'I Prodia arbetade jag med att implementera en valideringsfunktion för personnummer och förbättrade adminfunktionaliteten för patientdata. Projektet innebar också arbete med säker datahantering inom vården.',
  },
  {
    title: 'Zenzr',
    description: 'sensorövervakning',
    image: '/assets/zenzr.jpg',
    link: 'https://www.zenzr.se/',
    detailedDescription: 'På Zenzr optimerade jag ett API genom att minska laddningstiden från 16 sekunder till 2 sekunder. Jag identifierade och tog bort onödiga anrop till bakgrundsprocesser och implementerade caching för att förbättra svarstider.',
  },
  {
    title: 'Larsson & Lange',
    description: 'frisörsalong',
    image: '/assets/larsson-lange.jpg',
    link: 'https://www.larssonlange.se/',
    detailedDescription: 'Jag byggde en modern webbplattform med fokus på bokningsfunktionalitet och integration av kundrecensioner. Plattformen anpassades för att möta Larsson & Langes specifika behov.',
  },
];

const Portfolio = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const settingsMain = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: slider2,
  };

  const settingsText = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: slider1,
    arrows: false,
  };

  return (
    <Box sx={{ padding: { xs: '1rem', md: '8rem' } }}>
    
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: { xs: '1rem', md: '2rem' },
          fontSize: { xs: '1.5rem', md: '2.5rem' },
        }}
      >
        Portfolio
      </Typography>

      
      <Box sx={{ maxWidth: '100%', margin: '0 auto' }}>
        <Slider {...settingsMain} ref={(slider) => setSlider1(slider)}>
          {projects.map((project, index) => (
            <CardComponent
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </Slider>
      </Box>

    
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '70%' },
          margin: '2rem auto',
          padding: '1rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
        }}
      >
        <Slider {...settingsText} ref={(slider) => setSlider2(slider)}>
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                padding: '1rem',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1rem', md: '1.5rem' },
                  marginBottom: '0.5rem',
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  textAlign: 'justify',
                }}
              >
                {project.detailedDescription}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Portfolio;
