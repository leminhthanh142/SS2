import { Stack, Typography, Box } from '@mui/material';
import { CommonLayout } from '../../../components/layout/common';
import { SolutionCard } from '../SolutionCard';
import { QuestionCardDetails } from '../../../components/QuestionCardDetails';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { customAxios } from '../../../customAxios';
import { useAuth } from '../../../context/authContext';

export const PracticeSolutionsPage = () => {
  const { id } = useParams();
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

  return (
    <CommonLayout>
      <Box mb={3}>
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
      </Box>
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
          />
        ))}
      </Stack>
    </CommonLayout>
  );
};
