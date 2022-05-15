import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { CodeEditor } from '../../../components/modules/CodeEditor';
import { QuestionCardDetails } from '../../../components/QuestionCardDetails';
import { customAxios } from '../../../customAxios';
import { CancelOutlined, CheckCircle } from '@mui/icons-material';
import { PracticeLayout } from '../../../components/layout/practiceLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';

export const PracticePageDetails1 = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [forkSolution, setForkSolution] = useState('');

  useEffect(() => {
    const forkSolution = localStorage.getItem('forkSolution');
    console.log(forkSolution);
    if (!forkSolution) return;
    setForkSolution(JSON.parse(forkSolution));
  }, []);

  console.log(forkSolution);

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
    const res = await customAxios.post('/v1/solutions/check', {
      userId: user.id,
      tutorialId: id,
      solutionDetails: code
    });
    setOutput(res.data);
  };

  const handleUnlockSolution = () => {
    navigate(`/practices/${id}/solutions`);
  };

  return (
    <PracticeLayout>
      <Container>
        <Box mr={4} maxWidth={930} width={'100%'}>
          <GroupButtonHeader pt={2} pb={2} pl={3}>
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
          </GroupButtonHeader>
          {viewMode === 'normal' && (
            <QuestionCardDetails
              difficultTag={'8ryu'}
              difficultLevel={8}
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
                <code style={{ width: '100%', padding: 20 }}>
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
            <StyledCard p={3}>
              {output.message === 'Correct' && (
                <Box display={'flex'} alignItems={'center'}>
                  <Typography sx={{ color: '#4bb543' }}>All tests passed!</Typography>
                  <CheckCircle sx={{ ml: 2, color: '#4bb543' }} />
                </Box>
              )}
              {output.message === 'Incorrect' && (
                <Box>
                  <Box display={'flex'} alignItems={'center'}>
                    <Typography sx={{ color: '#C73E1D' }}>Test failed!</Typography>
                    <CancelOutlined sx={{ ml: 2, color: '#C73E1D' }} />
                  </Box>
                  <Typography>
                    Expected: &quot;{output.expected}&quot; actual: &quot;{output.actual}&quot;
                  </Typography>
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
            </StyledCard>
          )}
        </Box>
        <Box width={726}>
          <CodeEditor
            code={forkSolution || ''}
            onSubmit={handleSubmit}
            onChangeViewMode={handleChangeViewMode}
            error={output.error || output.message === 'INCORRECT'}
            onUnlockSolution={handleUnlockSolution}
          />
        </Box>
      </Container>
    </PracticeLayout>
  );
};

const StyledCard = styled(Box)({
  height: 'calc(100% - 65px)',
  backgroundColor: '#ffffff',
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px'
});

const Container = styled(Box)({
  display: 'flex',
  padding: '0 24px',
  marginLeft: '64px'
});

const GroupButtonHeader = styled(Box)({
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px',
  display: 'flex',
  width: '100%',
  marginBottom: 16
});
