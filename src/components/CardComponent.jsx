import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const CardComponent = ({ title, description, image, link }) => {
  return (
    <Card sx={{ maxWidth: 1200, margin: '1rem auto' }}>
      <CardMedia
        component="img"
        height="340"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank" rel="noopener noreferrer">
          Läs mer
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
