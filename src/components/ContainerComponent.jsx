import React from 'react';
import { Container } from '@mui/material';

const ContainerComponent = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
      {children}
    </Container>
  );
};

export default ContainerComponent;
