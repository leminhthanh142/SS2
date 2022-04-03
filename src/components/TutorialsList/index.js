import React from 'react';
import { Box, Paper, Stack, styled, Typography } from '@mui/material';
import { Tutorial } from './Tutorial';
import { Lightbulb } from '@mui/icons-material';
import PropTypes from 'prop-types';

export const TutorialsList = ({ tutorials }) => {
  return (
    <Box>
      <Stack spacing={3}>
        <StyledPaper>
          <Stack spacing={1}>
            <Stack spacing={1} direction="row">
              <Lightbulb sx={{ color: '#ffffff' }} />
              <Typography sx={{ color: '#ffffff' }} component="span">
                Bài học
              </Typography>
            </Stack>
            {tutorials.map((tutorial) => (
              <Tutorial key={tutorial.id} tutorial={tutorial} />
            ))}
          </Stack>
        </StyledPaper>
        <StyledPaper padding={'20px 45px'}>
          <Typography sx={{ color: '#ffffff' }}>✌️ Chúc các bạn học tập hiệu quả!</Typography>
        </StyledPaper>
      </Stack>
    </Box>
  );
};

const StyledPaper = styled(Paper)(({ padding }) => ({
  padding: padding ? padding : '45px',
  background: 'rgb(55,56,58)'
}));

TutorialsList.propTypes = {
  tutorials: PropTypes.arrayOf(PropTypes.object)
};
