import React, { useState } from 'react';
import Slider from 'react-slick';
import CardComponent from '../components/CardComponent';



const projects = [
    {
        title: 'Prodia',
        description: 'Ett projekt inom hälsoteknik som fokuserar på läkemedel och analys.',
        image: '/assets/prodia.jpg', 
        link: 'https://portal.prodia.se/',
        detailedDescription: 'I Prodia arbetade jag med att implementera en valideringsfunktion för personnummer och förbättrade adminfunktionaliteten för patientdata. Projektet innebar också arbete med säker datahantering inom vården., I Prodia arbetade jag med att implementera en valideringsfunktion för personnummer och förbättrade adminfunktionaliteten för patientdata. Projektet innebar också arbete med säker datahantering inom vården.,I Prodia arbetade jag med att implementera en valideringsfunktion för personnummer och förbättrade adminfunktionaliteten för patientdata. Projektet innebar också arbete med säker datahantering inom vården.lorem ipsum test data än så länge, lorem ipsum test data än så länge,lorem ipsum test data än så länge ,lorem ipsum test data än så länge ,lorem ipsum test data än så länge ,lorem ipsum test data än så länge', 
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
        speed: 1900,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: slider2,
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

    const settingsText = {
        dots: false,
        infinite: true,
        speed: 1900,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: slider1,
        arrows: false,

    };

  return (
    <div style={{ padding: '8rem' }}>
     <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Portfolio</h1>

      
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

       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Slider {...settingsText} ref={(slider) => setSlider2(slider)} style={{ maxWidth: '80%' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h2>{project.title}</h2>
              <p>{project.detailedDescription}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
