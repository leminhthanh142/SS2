import React from 'react';
import { Box, styled, Typography } from '@mui/material';
export const Footer = () => {
  return (
    <Container>
      <Typography
        textAlign={'center'}
        variant={'body1'}
        fontStyle={'italic'}
        sx={{ color: '#a5a5a5' }}>
        &copy; 2022 CodeCamp. No copy right
      </Typography>
    </Container>
  );
};

const Container = styled(Box)({
  width: '100%',
  marginTop: 120,
  padding: '30px 65px',
  background: '#150c21',
  borderTop: '1px solid #eeeeee'
});
