import React from 'react';
import { CommonLayout } from '../../components/layout/common';
import './style.css';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

export const HomePage = () => {
  return (
    <CommonLayout>
      <div>Home Page</div>
      <Box mb={15}>
        <Link to={'/tutorials'}>
          <Button variant={'contained'}>
            <Typography fontSize={'18px'}>Khám phá thêm các bài giảng thôi nào</Typography>
          </Button>
        </Link>
      </Box>
    </CommonLayout>
  );
};
