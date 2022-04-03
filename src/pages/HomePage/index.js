import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Stack, styled } from '@mui/material';
import { CommonLayout } from '../../components/layout/common';

export const HomePage = () => {
  return (
    <CommonLayout>
      <Box mb={15}>
        <Stack spacing={5} direction="row">
          <Box>Logo</Box>
          <Box>
            <StyledHeading variant={'h1'}>Chào mừng mọi người quay lại với Code Camp</StyledHeading>
          </Box>
        </Stack>
        <Link to={'/tutorials'}>
          <Button variant={'contained'}>
            <Typography fontSize={'18px'}>Khám phá thêm các bài giảng thôi nào</Typography>
          </Button>
        </Link>
      </Box>
    </CommonLayout>
  );
};

const StyledHeading = styled(Typography)(() => ({
  fontSize: 56
}));
