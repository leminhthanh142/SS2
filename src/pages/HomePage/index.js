import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Stack, styled, CardMedia, Card } from '@mui/material';
import { CommonLayout } from '../../components/layout/common';
import { Drawing } from '../../components/logos/Drawing';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useAuth } from '../../context/authContext';
import { LessonIcon } from '../../components/elements/LessonIcon';

export const HomePage = () => {
  const { user } = useAuth();

  return (
    <CommonLayout>
      <Box>
        <Typography>What will you learn?</Typography>
        <Typography>
          The course is complete, yet accessible for beginners. We will start by discovering what
          WebGL is and why using the Three.js library is a must. We will then discover the various
          components of Three.js and once the basics are acquired, we will move on to more advanced
          techniques to display millions of particles, add physics, add interactions, create a
          galaxy, animate a raging sea, etc.
        </Typography>
        <Typography>
          At the end of the course, you will have a deep understanding of Three.js and enough
          experience to start your own projects.
        </Typography>
        <Typography>
          As a bonus, we will also learn how to use the 3D software Blender to be able to create our
          own models.
        </Typography>
      </Box>
      <StyledCard>
        <Typography sx={{ fontWeight: 700, fontSize: 24 }}>01</Typography>
        <StyledTitle sx={{ color: '#ff6651' }}>Basic</StyledTitle>
        <Typography>You will learn all the basic things about Java</Typography>
        <img src="/images/chapter-01@2x.png" alt="" width={290} />
        <Stack direction={'row'} gap={1}>
          <LessonIcon color={'#ff6651'} />
          <Typography sx={{ color: '#ff6651' }}>14 lessons</Typography>
        </Stack>
      </StyledCard>
      <StyledCard>
        <Typography sx={{ fontWeight: 700, fontSize: 24 }}>02</Typography>
        <StyledTitle sx={{ color: '#54b3fa' }}>
          OOP <br />
          Programming
        </StyledTitle>
        <Typography>
          You will dig into OOP World where <br />
          the real things appear as a piece of code
        </Typography>
        <img src="/images/chapter-02@2x.png" alt="" width={313} />
        <LessonIcon />
      </StyledCard>
      <StyledCard>
        <Typography sx={{ fontWeight: 700, fontSize: 24 }}>03</Typography>
        <StyledTitle sx={{ color: '#ffb905' }}>
          Design <br />
          Pattern
        </StyledTitle>
        <Typography>You will learn all the basic things about Java</Typography>
        <img src="/images/chapter-04@2x.png" alt="" width={313} />
        <LessonIcon color={'#ffb905'} />
      </StyledCard>
    </CommonLayout>
  );
};

const StyledTitle = styled(Typography)(() => ({
  color: '#ff6651',
  marginBottom: '15px',
  fontSize: 42,
  fontWeight: 700
}));

const StyledCard = styled(Stack)(() => ({
  position: 'relative',
  padding: '55px 55px 40px',
  borderRadius: '10px',
  maxWidth: 540,
  cursor: 'pointer',
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px',
  '& img': {
    position: 'absolute',
    right: -30,
    top: -60
  }
}));

const StyledContent = styled(Typography)(() => ({
  fontSize: 18,
  fontStyle: 'italic',
  color: '#adadad',
  marginTop: 16
}));

const StyledHeading = styled(Typography)(() => ({
  fontSize: 46
}));
