import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CardComponent = ({ title, description, image, link }) => {
  return (
    <Card
      sx={{
        maxWidth: 1200,
        margin: '1rem auto',
        padding: '1rem',
        '@media (max-width: 768px)': {
          maxWidth: '100%',
          margin: '0.5rem auto',
          padding: '0.5rem',
        },
      }}
    >
      <CardMedia
       component="img"
       height="340"
       image={image}
       alt={title}
       sx={{
         borderRadius: 2,
         '@media (max-width: 768px)': {
           height: 'auto',
           width: '100%',
          },
        }}
      />
      <CardContent
        sx={{
          textAlign: 'center',
          '@media (max-width: 768px)': {
            padding: '0.5rem',
          },
        }}
        >
      <Typography
          variant="h5"
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textAlign: 'center',
            marginBottom: '0.5rem',
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': {
              color: '#007bff',
              textDecoration: 'none',
            },
            '@media (max-width: 768px)': {
              fontSize: '1.2rem',
            },
          }}
        >
          
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            lineHeight: 1.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            '@media (max-width: 768px)': {
              fontSize: '0.9rem',
            },
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
