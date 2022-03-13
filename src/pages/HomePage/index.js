import React from 'react';
import { HomeLayout } from '../../components/layout/home';
import { Typography } from '@mui/material';
import { QuestionCard } from '../../components/QuestionCard';

export const HomePage = () => {
  return (
    <HomeLayout>
      <QuestionCard
        difficultTag={'Easy'}
        relevantTags={['fundamental', 'array']}
        title={'Nice Array'}
        description={
          <Typography>
            A <code>Nice array</code> is defined to be an array where for every value <code>n</code>{' '}
            in the array, there is also an element <code>n-1</code> or <code>n+1</code> in the
            array.
          </Typography>
        }
        type={'practice'}
        id={1}
      />
    </HomeLayout>
  );
};
