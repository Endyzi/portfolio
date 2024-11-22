import React, { useState } from 'react';
import Slider from 'react-slick';
import CardComponent from '../components/CardComponent';
import { Box, Typography } from '@mui/material';

const projects = [
  {
    title: 'Prodia',
    description: 'Ett företag inom hälsoteknik som fokuserar på drogtester och analyser.',
    image: '/assets/prodia.jpg',
    link: 'https://portal.prodia.se/',
    detailedDescription:
     'Mitt nyckelområde inom Prodia var att utveckla nya endpoints, refaktorering av gammal kod. Jag föreslog ett nytt sätt att hantera känslig patient data, där jag byggde en validering för personnummer. Tillsammans med den förändring av patientdata säkerhetsställde jag att man kunde dölja/visa personnummer vid behov. Jag byggde ännu mer stöd för HL7-data för fokus av olika labbsvar. och visa arbetade jag med att implementera en valideringsfunktion för personnummer och förbättrade adminfunktionaliteten för patientdata. Projektet innebar också arbete med säker datahantering inom vården. Tech-stack: PHP/Phalcon, React, SQL, Docker, Bitbucket.',
  },
  {
    title: 'Zenzr',
    description: 'Avancerade Sensorövervakning inom livsmedel & byggbranshen',
    image: '/assets/zenzr.jpg',
    link: 'https://www.zenzr.se/',
    detailedDescription:
     'Jag hade nöjet att utveckla delar av både frontend och backend för Zenzr. Det innebar bland annat data exportering av sensorerna till pdf dokument, dokumenthantering för respektive organisation så dem kunde läsa, redigera, ladda ner och radera dokument för sin organisation. För dokumenthanteringen integrerade jag AWS tjänst S3 som är en molntjänst för uppladdning av filer. Vid sidan av AWS S3 servern byggde jag en separat databas där jag spårade filnamnen och filinformation. Jag optimerade även laddtiden för flertalet endpoints genom att minska laddningstiden för den mest kritiska endpoint från 16 sekunder till 2 sekunder. Det innebar att jag identifierade och tog bort onödiga anrop till bakgrundsprocesser och implementerade caching för att förbättra svarstider. Tech-stack: PHP/Laravel, AWS, SQL, Docker, Vue.js, Quasar, Gitlab.',
  },
  {
    title: 'Larsson & Lange',
    description: 'Stylist & Frisörsalong',
    image: '/assets/larsson-lange.jpg',
    link: 'https://www.larssonlange.se/',
    detailedDescription:
     'För det här projektet var mitt fokusområde att bygga om deras API som användes för deras bokningssystem. Utöver det byggde jag PHP script där jag hanterade gammal data som blev integrerat med den nya datan. Tech-stack: PHP, SQL.',
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
    <Box sx={{ padding: { xs: '2rem', md: '8rem' } }}>
    
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
