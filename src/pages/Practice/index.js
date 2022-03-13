import React, { useState } from 'react';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { DashBoard } from '../../components/modules/DashBoard';
import { styled } from '@mui/styles';
import { CodeEditor } from '../../components/modules/CodeEditor';
import { QuestionCardDetails } from '../../components/QuestionCardDetails';
import { customAxios } from '../../customAxios';
import { CheckCircle } from '@mui/icons-material';

export const PracticePage = () => {
  const [viewMode, setViewMode] = useState('normal');
  const [output, setOutput] = useState({
    actual: '',
    error: '',
    message: '',
    expected: ''
  });

  const handleChangeViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleSubmit = async (code) => {
    console.log(code);
    const res = await customAxios.post('/test', code, {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
    console.log(res.data);
    setOutput(res.data);
  };

  return (
    <>
      <DashBoard />
      <Container>
        <Box mr={4} maxWidth={776} width={'100%'}>
          <Box
            display={'flex'}
            width={'100%'}
            pt={2}
            pb={2}
            pl={3}
            sx={{ backgroundColor: 'rgb(38,39,41)' }}>
            <Button
              variant={viewMode === 'normal' ? 'contained' : 'outlined'}
              onClick={() => handleChangeViewMode('normal')}>
              <Typography fontSize={14}>Instruction</Typography>
            </Button>
            <Button
              sx={{ ml: 2 }}
              variant={viewMode === 'output' ? 'contained' : 'outlined'}
              onClick={() => handleChangeViewMode('output')}>
              <Typography fontSize={14}>Output</Typography>
            </Button>
          </Box>
          {viewMode === 'normal' && (
            <QuestionCardDetails
              difficultTag={'Easy'}
              relevantTags={['fundamental', 'array']}
              title={'Nice Array'}
              description={
                <Typography>
                  A <code>Nice array</code> is defined to be an array where for every value{' '}
                  <code>n</code> in the array, there is also an element <code>n-1</code> or{' '}
                  <code>n+1</code> in the array.
                </Typography>
              }
              example={
                <code>
                  {`
    [2,10,9,3] is Nice array because

    2=3-1
    10=9+1
    3=2+1
    9=10-1
           `}
                </code>
              }
              note={
                <p>
                  Write a function named <code>isNice</code>/<code>IsNice</code> that returns{' '}
                  <code>true</code> if its array argument is a Nice array, else <code>false</code>.
                  You should also return <code>false</code> if <code>input</code> array has{' '}
                  <code>no</code> elements.{' '}
                </p>
              }
            />
          )}
          {viewMode === 'output' && (
            <Box height={'calc(100% - 65px)'} sx={{ backgroundColor: 'rgb(23,23,25)' }} p={3}>
              {output.message === 'Correct' && (
                <Box display={'flex'} alignItems={'center'}>
                  <Typography sx={{ color: '#4bb543' }}>All tests passed</Typography>
                  <CheckCircle sx={{ ml: 2, color: '#4bb543' }} />
                </Box>
              )}
              {!output.actual && !output.error && (
                <Box display={'flex'} alignItems={'center'}>
                  <Typography>Calculating Result</Typography>
                  <CircularProgress sx={{ ml: 3 }} size={'25px'} />
                </Box>
              )}
              {/*{output.actual && <code>{output.actual}</code>}*/}
              {output.error && <code style={{ color: '#C73E1D' }}>{output.error}</code>}
            </Box>
          )}
        </Box>
        <Box>
          <CodeEditor onSubmit={handleSubmit} onChangeViewMode={handleChangeViewMode} />
        </Box>
      </Container>
    </>
  );
};

const Container = styled(Box)({
  display: 'flex',
  padding: '0 24px',
  margin: '24px 0 24px 64px'
});
