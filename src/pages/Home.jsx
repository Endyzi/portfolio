import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const words = ['Python', 'PHP', 'Javascript', 
  'React', 'Vue.js', 'PostgreSQL', 'Oracle', 'MySQL'];

const Home = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTallDesktop = useMediaQuery('(min-height:1200px)'); 

  const bottomPos = isTallDesktop ? '13%' : '16.5%'; 

  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!isDesktop) return;

    const typingDelay = deleting ? 100 : 220;
    const pauseTime = 3000; 

    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];

      if (!deleting && charIndex < currentWord.length) {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (deleting && charIndex > 0) {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!deleting && charIndex === currentWord.length) {
        setTimeout(() => setDeleting(true), pauseTime);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
      }
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, isDesktop, wordIndex]);

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url("/assets/background2.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)',
        overflow: 'hidden',
      }}
    >
      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(120deg, rgba(15,23,42,0.92) 20%, rgba(11,18,32,0.7) 90%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography variant="h2" sx={{
          marginTop: { lg: '-rem', xs: '-70vh', sm: '-800px', md: '-650px' },
          fontSize: { lg: '3rem', xs: '2rem', md: '4rem' },
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
        }}>
          {t('home.title')}
        </Typography>
        <Typography variant="h5" sx={{
          fontSize: { lg: '1.2rem', xs: '1rem', md: '1.8rem' },
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
          marginTop: '1rem'
        }}>
          {t('home.description')}
        </Typography>
      </Box>

      {/* this will only appear on desktops, i wanted to give a clean design for mobile */}
      {isDesktop && (
        <Typography
          sx={{
            position: 'absolute',
            bottom: bottomPos, 
            left: '50%',
            transform: 'translateX(-50%) rotateX(55deg) skewX(-8deg)',
            fontFamily: 'Courier New, monospace',
            fontWeight: 800,
            fontSize: '1.5rem',
            color: 'rgba(230,230,230,0.85)',
            textShadow: '0 1px 1px rgba(0,0,0,0.6)',
            zIndex: 2,
            whiteSpace: 'pre',
            animation: 'fadeIn 0.5s ease forwards',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 }
            }
          }}
        >
          {displayedText}
        </Typography>
      )}
    </Box>
  );
};

export default Home;
