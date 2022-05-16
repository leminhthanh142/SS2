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

const code = `public class StringToNumber {
  public static void main (String[] args) {
    int result = stringToNumber("1234");
    System.out.print(result);
  }
  public static int stringToNumber(String str) {
    //TODO: Convert str into a number
  }
}
`;

const sampleTest = `import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class StringToNumberTest {   
    @Test
    public void test1(){
      assertEquals("stringToNumber(1234)", 1234 , StringToNumber.stringToNumber("1234"));
    }
}`;

export const PracticePageDetails3 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [viewMode, setViewMode] = useState('normal');
  const [output, setOutput] = useState({
    actual: '',
    error: '',
    message: '',
    expected: ''
  });

  const [forkSolution, setForkSolution] = useState('');

  useEffect(() => {
    const forkSolution = localStorage.getItem('forkSolution');
    if (!forkSolution) return;
    setForkSolution(JSON.parse(forkSolution));
  }, []);

  const handleChangeViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleSubmit = async (code) => {
    const res = await customAxios.post('/v1/solutions/check', {
      userId: user.id,
      tutorialId: 3,
      solutionDetails: code
    });
    setOutput(res.data);
  };

  const handleUnlockSolution = () => {
    navigate(`/practices/3/solutions`);
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
              difficultTag={'6ryu'}
              difficultLevel={6}
              relevantTags={['algorithms', 'fundamentals', 'recursion', 'optimization']}
              title={'Convert a String to a Number!'}
              example={
                <code style={{ width: '100%', padding: 20 }}>
                  {`
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
                  `}
                </code>
              }
              description={
                <Typography>
                  We need a function that can transform a string into a number. What ways of
                  achieving this do you know?
                  <br />
                  Note: Don't worry, all inputs will be strings, and every string is a perfectly
                  valid representation of an integral number.
                </Typography>
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
            code={forkSolution || code}
            sampleTest={sampleTest}
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
