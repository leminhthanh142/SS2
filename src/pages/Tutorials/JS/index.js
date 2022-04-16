import React from 'react';
import { Box, Button, styled, Typography, Stack, Paper, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { CommonLayout } from '../../../components/layout/common';
import { TutorialsList } from '../../../components/TutorialsList';
import { jsTutorials } from '../../../data/tutorials';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const JsTutorialsPage = () => {
  return (
    <CommonLayout>
      <div>
        <Box mb={3}>
          <Stack direction="row" alignItems="center" spacing={6} mb={15}>
            <StyledPaper elevation={0}>
              <CardMedia
                component={'img'}
                image={
                  'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png'
                }
              />
            </StyledPaper>
            <Box>
              <StyledHeading>JS Base</StyledHeading>
              <Typography sx={{ mb: 4 }}>JS be4 hoes</Typography>
              <Button variant={'contained'}>
                <Link to={'/js-tutorials/1'}>
                  <Stack spacing={1} direction="row" alignItems="center">
                    <Typography component="span">Học ngay</Typography>
                    <ArrowRightAltIcon />
                  </Stack>
                </Link>
              </Button>
            </Box>
          </Stack>
          <StyledHeading>Bắt đầu nào</StyledHeading>
          <TutorialsList tutorials={jsTutorials} />
        </Box>
      </div>
    </CommonLayout>
  );
};

const StyledPaper = styled(Paper)(() => ({
  transition: 'all 0.3s',
  padding: '20px 45px',
  border: '1px solid',
  borderColor: '#e6dad8',
  borderRadius: '10px',
  boxShadow: 'none',
  cursor: 'pointer',
  maxWidth: 542,
  '&:hover': {
    borderColor: '#ffffff',
    boxShadow: '-5px 15px 25px 12px rgba(255,146,146,0.1)',
    transform: 'translateY(-10px)'
  }
}));

const StyledHeading = styled(Typography)(() => ({
  fontSize: 44,
  marginBottom: 24
}));
