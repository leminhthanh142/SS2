import React, { useState } from 'react';
import { CommonLayout } from '../../components/layout/common';
import { styled, Stack, Box, Typography, FormControl, Select, MenuItem, Chip } from '@mui/material';
import { QuestionCard } from '../../components/QuestionCard';
import { StyledDifficultyTag } from '../../components/elements/StyledDifficultyTag';

const questionsData = [
  {
    title: 'Nice Array',
    description:
      'A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.',
    id: 1,
    difficultTag: '8ryu',
    difficultLevel: 8,
    relevantTags: ['array', 'fundamental']
  },
  {
    title: 'Greatest common divisor',
    description:
      'Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.',
    id: 2,
    difficultTag: '7ryu',
    difficultLevel: 7,
    relevantTags: ['algorithms', 'fundamentals', 'recursion', 'optimization']
  },
  {
    title: 'Convert a String to a Number!',
    description: '',
    id: 3,
    difficultTag: '6ryu',
    difficultLevel: 6,
    relevantTags: ['algorithms', 'fundamentals', 'parsing', 'strings']
  },
  {
    title: 'Convert a String to a Number!',
    description: '',
    id: 3,
    difficultTag: '4ryu',
    difficultLevel: 4,
    relevantTags: ['algorithms', 'fundamentals', 'parsing', 'strings']
  },
  {
    title: 'Convert a String to a Number!',
    description: '',
    id: 3,
    difficultTag: '3ryu',
    difficultLevel: 3,
    relevantTags: ['algorithms', 'fundamentals', 'parsing', 'strings']
  },
  {
    title: 'Convert a String to a Number!',
    description: '',
    id: 3,
    difficultTag: '2ryu',
    difficultLevel: 2,
    relevantTags: ['algorithms', 'fundamentals', 'parsing', 'strings']
  },
  {
    title: 'Convert a String to a Number!',
    description: '',
    id: 3,
    difficultTag: '5ryu',
    difficultLevel: 5,
    relevantTags: ['algorithms', 'fundamentals', 'parsing', 'strings']
  },
  {
    title: 'Convert a String to a Number!',
    description: '',
    id: 3,
    difficultTag: '1ryu',
    difficultLevel: 1,
    relevantTags: ['algorithms', 'fundamentals', 'parsing', 'strings']
  }
];
const difficultTags = [
  {
    label: '8ryu',
    level: 8
  },
  {
    label: '7ryu',
    level: 7
  },
  {
    label: '6ryu',
    level: 6
  },
  {
    label: '5ryu',
    level: 5
  },
  {
    label: '4ryu',
    level: 4
  },
  {
    label: '3ryu',
    level: 3
  },
  {
    label: '2ryu',
    level: 2
  },
  {
    label: '1ryu',
    level: 1
  }
];

export const PracticePage = () => {
  const [selectedDifficultLevel, setSelectedDifficultLevel] = useState([]);

  const filteredQuestions = questionsData.filter((question) => {
    if (!selectedDifficultLevel.length) {
      return questionsData;
    }
    return selectedDifficultLevel.map((item) => item.level).includes(question.difficultLevel);
  });

  const handleSelectDifficultLevel = (difficulty) => {
    const findLevel = selectedDifficultLevel.find((item) => item.level === difficulty.level);
    console.log(findLevel);
    console.log(difficulty);
    if (findLevel) {
      console.log('asdasd');
      return;
    }
    setSelectedDifficultLevel([...selectedDifficultLevel, difficulty]);
  };

  const handleDeleteSelectedDifficultLevel = (level) => {
    const newSelectedDifficultLevel = selectedDifficultLevel.filter((item) => item.level !== level);
    setSelectedDifficultLevel(newSelectedDifficultLevel);
  };

  console.log(selectedDifficultLevel);

  return (
    <CommonLayout width={'90rem'}>
      <Stack spacing={12} direction={'row'}>
        <FilterContainer>
          <Box mb={2}>
            <FormControl fullWidth>
              <Typography>Language</Typography>
              <Select defaultValue={'java'}>
                <MenuItem value={'java'}>Java</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Typography>Difficulty</Typography>
          <Stack direction={'row'} mb={1} mt={1} spacing={1.5}>
            {difficultTags.slice(0, 4).map((item) => (
              <StyledDifficultyTag
                sx={{ width: 80 }}
                key={item.level}
                label={item.label}
                level={item.level}
                onClick={() => handleSelectDifficultLevel(item)}
              />
            ))}
          </Stack>
          <Stack direction={'row'} spacing={1.5}>
            {difficultTags.slice(4, difficultTags.length).map((item) => (
              <StyledDifficultyTag
                sx={{ width: 80 }}
                key={item.level}
                label={item.label}
                level={item.level}
                onClick={() => handleSelectDifficultLevel(item)}
              />
            ))}
          </Stack>

          {!!selectedDifficultLevel.length && (
            <Box mt={2}>
              <Typography>Selected Difficulty</Typography>
              <Stack spacing={1} direction={'row'} overflow={'auto'}>
                {selectedDifficultLevel.map((difficult) => (
                  <StyledDifficultyTag
                    key={difficult.level}
                    label={difficult.label}
                    level={difficult.level}
                    onDelete={() => handleDeleteSelectedDifficultLevel(difficult.level)}
                  />
                ))}
              </Stack>
            </Box>
          )}
        </FilterContainer>
        <Stack spacing={2} width={'100%'}>
          {filteredQuestions.map((question, index) => (
            <QuestionCard
              key={`${question.title}${index}`}
              title={question.title}
              description={question.description}
              id={question.id}
              difficultTag={question.difficultTag}
              difficultLevel={question.difficultLevel}
              relevantTags={question.relevantTags}
            />
          ))}
        </Stack>
      </Stack>
    </CommonLayout>
  );
};

const FilterContainer = styled(Box)({
  position: 'sticky',
  backgroundColor: '#ffffff',
  top: 65,
  left: 0,
  transition: 'all 0.3s',
  padding: '30px',
  borderRadius: '10px',
  minWidth: 400,
  maxWidth: 400,
  height: 500,
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px'
});
