import React from 'react';
import { Box, Button, styled, Typography, Stack, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { JavaLogo } from '../../../components/JavaLogo';
import { CommonLayout } from '../../../components/layout/common';
import { TutorialsList } from '../../../components/TutorialsList';
import { javaTutorials } from '../../../data/tutorials';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const JavaTutorialsPage = () => {
  return (
    <CommonLayout>
      <div>
        <Box mb={3}>
          <Stack direction="row" alignItems="center" spacing={6} mb={15}>
            <StyledPaper elevation={0}>
              <JavaLogo />
            </StyledPaper>
            <Box>
              <StyledHeading>Java Core</StyledHeading>
              <Typography sx={{ mb: 4 }}>
                Một ngôn ngữ mạnh mẽ lâu đời và khó bị thay thế. <br />
                Code 1 lần chạy mọi nơi!
              </Typography>
              <Button variant={'contained'}>
                <Link to={'/tutorials/1'}>
                  <Stack spacing={1} direction="row" alignItems="center">
                    <Typography component="span">Học ngay</Typography>
                    <ArrowRightAltIcon />
                  </Stack>
                </Link>
              </Button>
            </Box>
          </Stack>
          <StyledHeading>Bắt đầu nào</StyledHeading>
          <TutorialsList tutorials={javaTutorials} />
        </Box>
      </div>
    </CommonLayout>
  );
};

const StyledPaper = styled(Paper)(() => ({
  transition: 'all 0.3s',
  padding: '20px 45px',
  borderRadius: '10px',
  cursor: 'pointer',
  maxWidth: 542,
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px',
  '&:hover': {
    borderColor: '#ffffff',
    boxShadow: '-5px 15px 25px 12px rgba(255,146,146,0.1)',
    transform: 'translateY(-10px)'
  }
}));

const StyledHeading = styled(Typography)(() => ({
  fontSize: 44,
  marginBottom: 24
}));
