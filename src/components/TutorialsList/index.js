import React from 'react';
import { Box, Paper, Stack, styled, Typography } from '@mui/material';
import { Tutorial } from './Tutorial';
import { Lightbulb } from '@mui/icons-material';
import PropTypes from 'prop-types';

export const TutorialsList = ({ tutorials }) => {
  return (
    <Box>
      <Stack spacing={5}>
        <StyledPaper elevation={0}>
          <Stack spacing={1}>
            <Stack spacing={1} direction="row">
              <Lightbulb />
              <Typography component="span">Bài học</Typography>
            </Stack>
            {tutorials.map((tutorial) => (
              <Tutorial key={tutorial.id} tutorial={tutorial} />
            ))}
          </Stack>
        </StyledPaper>
        <StyledPaper elevation={0} padding={'20px 45px'}>
          <Typography>✌️ Chúc các bạn học tập hiệu quả!</Typography>
        </StyledPaper>
      </Stack>
    </Box>
  );
};

const StyledPaper = styled(Paper)(({ padding }) => ({
  padding: padding ? padding : '45px',
  transition: 'all 0.3s',
  borderRadius: '10px',
  background: 'rgb(255, 255, 255)',
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px',
  '&:hover': {
    boxShadow: '-5px 15px 25px 12px rgba(255,146,146,0.1)',
    transform: 'translateY(-10px)'
  }
}));

TutorialsList.propTypes = {
  tutorials: PropTypes.arrayOf(PropTypes.object)
};
