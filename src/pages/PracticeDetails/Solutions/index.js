import { Stack, Typography, Box } from '@mui/material';
import { CommonLayout } from '../../../components/layout/common';
import { SolutionCard } from '../SolutionCard';
import { QuestionCardDetails } from '../../../components/QuestionCardDetails';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { customAxios } from '../../../customAxios';
import { useAuth } from '../../../context/authContext';

export const PracticeSolutionsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    fetchAllSolutions();
  }, []);

  const handlePostComment = async (solutionId, comment) => {
    await customAxios.post('/v1/comments', {
      solutionId,
      content: comment,
      tutorialId: id,
      userId: user.id
    });
    fetchAllSolutions();
  };

  const fetchAllSolutions = useCallback(async () => {
    const res = await customAxios(`/v1/solutions/tutorials/${id}`);
    setSolutions(res.data);
  }, []);

  const question = useMemo(() => {
    if (Number(id) === 1) {
      return (
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
              {`[2,10,9,3] is Nice array because
                
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
              <code>true</code> if its array argument is a Nice array, else <code>false</code>. You
              should also return <code>false</code> if <code>input</code> array has <code>no</code>{' '}
              elements.{' '}
            </p>
          }
        />
      );
    }
    if (Number(id) === 2) {
      return (
        <QuestionCardDetails
          difficultTag={'7ryu'}
          difficultLevel={2}
          relevantTags={['algorithms', 'fundamentals', 'recursion', 'optimization']}
          title={'Greatest common divisor'}
          description={
            <Typography>
              Find the greatest common divisor of two positive integers. The integers can be large,
              so you need to find a clever solution. <br />
              The inputs <code>x</code> and <code>y</code> are always greater or equal to 1, so the
              greatest common divisor will always be an integer that is also greater or equal to 1.
            </Typography>
          }
        />
      );
    }
    if (Number(id) === 3) {
      return (
        <QuestionCardDetails
          difficultTag={'6ryu'}
          difficultLevel={3}
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
              We need a function that can transform a string into a number. What ways of achieving
              this do you know?
              <br />
              Note: Don't worry, all inputs will be strings, and every string is a perfectly valid
              representation of an integral number.
            </Typography>
          }
        />
      );
    }
  }, [id]);

  const handleForkSolution = (solution) => {
    localStorage.setItem('forkSolution', JSON.stringify(solution));
    navigate(`/practices/${id}`);
  };

  return (
    <CommonLayout>
      <Box mb={3}>{question}</Box>
      <Typography sx={{ mb: 3 }} variant={'h3'}>
        More Solutions
      </Typography>
      <Stack spacing={3}>
        {solutions.map((item) => (
          <SolutionCard
            key={item.id}
            solutionId={item.id}
            solution={item.details}
            userName={item.username}
            comments={item.comments}
            onPostComment={handlePostComment}
            onForkSolution={handleForkSolution}
          />
        ))}
      </Stack>
    </CommonLayout>
  );
};
