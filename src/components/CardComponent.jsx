import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CardComponent = ({ title, description, image, link }) => {
  return (
    <Card
      sx={{
        maxWidth: 1200,
        margin: '1rem auto',
        padding: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        '@media (max-width: 768px)': {
          maxWidth: '100%',
          padding: '0.5rem',
        },
      }}
    >
      <CardMedia
        component="img"
        height="240"
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
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: 'center',
            marginBottom: '0.5rem',
            '@media (max-width: 768px)': {
              fontSize: '1.2rem',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: 'center',
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
