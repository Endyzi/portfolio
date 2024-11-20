import React from 'react';
import Slider from 'react-slick';
import CardComponent from '../components/CardComponent';
import { Slideshow } from '@mui/icons-material';
import { Typography } from '@mui/material';


const projects = [
    {
        title: 'Prodia',
        description: 'Ett projekt inom hälsoteknik som fokuserar på läkemedel och analys.',
        image: '/assets/prodia.jpg', 
        link: 'https://portal.prodia.se/',
    },

    {
        title: 'Zenzr',
        description: 'sensorövervakning',
        image: '/assets/zenzr.jpg',
        link: 'https://www.zenzr.se/',
        
    },

    {
        title: 'Larsson & Lange',
        description: 'frisörsalong',
        image: '/assets/larsson-lange.jpg',
        link: 'https://www.larssonlange.se/',
    },
];




const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1900,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
     ],
    };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Portfolio</h1>
      <Slider {...settings}>
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
    </div>
  );
};

export default Portfolio;
