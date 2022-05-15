import { CommonLayout } from '../../components/layout/common';
import { styled, Stack, Box, Typography, Chip } from '@mui/material';
import { QuestionCard } from '../../components/QuestionCard';
import React from 'react';

export const PracticePage = () => {
  return (
    <CommonLayout width={'90rem'}>
      <Stack spacing={12} direction={'row'}>
        <FilterContainer>
          <Typography>Difficulty</Typography>
          <Stack direction={'row'} mb={1} mt={1} spacing={1}>
            <StyledDifficultyTag label={'8ryu'} level={1} />
            <StyledDifficultyTag label={'7ryu'} level={2} />
            <StyledDifficultyTag label={'6ryu'} level={3} />
            <StyledDifficultyTag label={'5ryu'} level={4} />
          </Stack>
          <Stack direction={'row'} spacing={1}>
            <StyledDifficultyTag label={'4ryu'} level={5} />
            <StyledDifficultyTag label={'3ryu'} level={6} />
            <StyledDifficultyTag label={'2ryu'} level={7} />
            <StyledDifficultyTag label={'1ryu'} level={8} />
          </Stack>
        </FilterContainer>
        <Stack spacing={2} width={'100%'}>
          <QuestionCard
            title={'Nice Array'}
            description={
              'A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.'
            }
            id={1}
            difficultTag={'8ryu'}
            difficultLevel={1}
            relevantTags={['Basic', 'Array', 'Fundamental']}
          />
        </Stack>
      </Stack>
    </CommonLayout>
  );
};

const FilterContainer = styled(Box)({
  position: 'sticky',
  backgroundColor: '#ffffff',
  top: 105,
  left: 0,
  transition: 'all 0.3s',
  padding: '30px',
  borderRadius: '10px',
  minWidth: 340,
  maxHeight: 500,
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px'
});

const StyledDifficultyTag = styled(Chip)(({ level }) => {
  const baseCss = `
    border-radius: 4px;
    border: 1px solid;
    cursor: pointer;
  `;

  if (level === 1 || level === 2) {
    return `
      ${baseCss}
    `;
  }
  if (level === 3 || level === 4) {
    return `
      ${baseCss}
      color: #15b715;
      background: #dffad7;
    `;
  }
  if (level === 5) {
    return `
      ${baseCss}
      color: #0095ff;
      background: #00a5ff5c;
    `;
  }
  if (level === 6 || level === 7) {
    return `
      ${baseCss}
      color: #ff7700;
      background: #ff77003d;
    `;
  }
  if (level === 8) {
    return `
      ${baseCss}
      color: #ff0000;
      background: #ff00004f;
    `;
  }
});
