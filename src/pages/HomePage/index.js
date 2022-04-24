import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Stack, styled, CardMedia, Card } from '@mui/material';
import { CommonLayout } from '../../components/layout/common';
import { Drawing } from '../../components/logos/Drawing';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useAuth } from '../../context/authContext';

export const HomePage = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <CommonLayout>
      <Box mb={15}>
        <Wrapper>
          <Stack spacing={5} direction="row" alignItems="center">
            <Box>
              <Drawing />
            </Box>
            <Box>
              <StyledHeading variant={'h1'}>
                Chào mừng mọi người quay lại với Code Camp
              </StyledHeading>
              <StyledContent variant={'body1'}>Blog đào tạo Java hảo hảo.</StyledContent>
              <StyledCard direction="row" alignItems="center" spacing={2}>
                <CheckCircleIcon />
                <Typography>Version 1.0</Typography>
              </StyledCard>
            </Box>
          </Stack>
        </Wrapper>
        <Wrapper>
          <Link to={'/tutorials'}>
            <Button variant={'contained'}>
              <Typography fontSize={'18px'}>Khám phá thêm các bài giảng thôi nào</Typography>
            </Button>
          </Link>
        </Wrapper>
      </Box>
    </CommonLayout>
  );
};

const Wrapper = styled(Box)(() => ({
  paddingBottom: 120
}));

const StyledCard = styled(Stack)(() => ({
  borderRadius: '10px',
  marginTop: 24,
  padding: '25px',
  color: '#ffffff',
  background: 'rgb(106,106,107)'
}));

const StyledContent = styled(Typography)(() => ({
  fontSize: 18,
  fontStyle: 'italic',
  color: '#adadad',
  marginTop: 16
}));

const StyledHeading = styled(Typography)(() => ({
  fontSize: 46
}));
