import React from 'react';
import { Box, Button, styled, Typography, Stack, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { JavaLogo } from '../../components/JavaLogo';
import { CommonLayout } from '../../components/layout/common';
import { TutorialsList } from '../../components/TutorialsList';
import { tutorials } from '../../data/tutorials';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const TutorialsPage = () => {
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
                Một ngôn ngữ mạnh mẽ lâu đời và khó bị thay thế. Code 1 lần chạy mọi nơi!
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
          <TutorialsList tutorials={tutorials} />
        </Box>
      </div>
    </CommonLayout>
  );
};

const StyledPaper = styled(Paper)(() => ({
  padding: '20px 45px',
  background: 'rgb(38, 39,41)'
}));

const StyledHeading = styled(Typography)(() => ({
  fontSize: 44,
  marginBottom: 24
}));
