import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const NotFoundPage = () => {
  return (
    <Container>
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
      />
      <Box display={'flex'} alignItems={'center'}>
        <ArrowRightAltIcon fontSize={'large'} />
        <Link to="/" className="link-home">
          <Typography fontSize={'18px'}>Return to Home Page</Typography>
        </Link>
      </Box>
    </Container>
  );
};

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgb(247, 247, 247)',
  height: '100vh',
  width: '100vw'
});
