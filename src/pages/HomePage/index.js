import React from 'react';
import { DashBoard } from '../../components/modules/DashBoard';
import { styled } from '@mui/styles';
import { HomeLayout } from '../../components/layout/home';
import { Box, Typography } from '@mui/material';
import { QuestionCard } from '../../components/QuestionCard';

export const HomePage = () => {
  return (
    <HomeLayout>
      <QuestionCard
        difficultTag={'Easy'}
        relevantTags={['fundamental', 'array']}
        title={'Substring fun'}
        description={
          <Typography>
            Complete the function that takes an array of words. <br /> <br /> You must concatenate
            the <code>n</code>th letter from each word to construct a new word which should be
            returned as a string, where <code>n</code> is the position of the word in the list.{' '}
            <br />
            <br />
            For example:
          </Typography>
        }
        example={
          <code>
            {`
              ["yoda", "best", "has"]  -->  "yes"
                 ^       ^       ^
                n=0     n=1     n=2
           `}
          </code>
        }
        note={
          'Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.\n' +
          '\n'
        }
        type={'practice'}
        id={1}
      />
    </HomeLayout>
  );
};
