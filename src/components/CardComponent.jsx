import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const CardComponent = ({ title, description, image, link }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem' }}>
      <CardMedia
        component="img"
        height="140"
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
