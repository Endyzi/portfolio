import React, { useState } from 'react';
import Slider from 'react-slick';
import CardComponent from '../components/CardComponent';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const projects = t('portfolio.projects', { returnObjects: true }); 

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
    <Box sx={{ padding: { xs: '2rem', md: '8rem' } }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: { xs: '1rem', md: '2rem' },
          fontSize: { xs: '1.5rem', md: '2.5rem' },
        }}
      >
        {t('portfolio.title')}
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
          maxWidth: { xs: '100%', md: '60%' },
          margin: '2rem auto 0',
          padding: { xs: '0 1rem', md: '0' },
        }}
      >
        <Slider {...settingsText} ref={(slider) => setSlider2(slider)}>
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                padding: '1rem',
                margin: '0 auto',
                maxWidth: '100%',
                overflow: 'hidden',
                wordWrap: 'break-word',
                lineHeight: 1.5,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.2rem' },
                  marginBottom: '0.5rem',
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.8rem', md: '1.1rem' },
                  textAlign: 'justify',
                  padding: { xs: '0 1rem', md: '0.1' },
                  overflowWrap: 'break-word',
                  whiteSpace: 'normal',
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
