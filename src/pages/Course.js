import { Card, styled, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CommonLayout } from '../components/layout/common';
import { JavaLogo } from '../components/JavaLogo';

export const Course = () => {
  const navigate = useNavigate();
  return (
    <CommonLayout>
      <Typography sx={{ mb: 5 }} variant={'h2'}>
        Các Khóa Học Cơ Bản
      </Typography>
      <StyledCard onClick={() => navigate('/java-tutorials')}>
        <StyledStack alignItems={'center'} justifyContent={'space-between'}>
          <JavaLogo />
          <StyledTypography>Java Basic</StyledTypography>
        </StyledStack>
      </StyledCard>
    </CommonLayout>
  );
};

const StyledCard = styled(Card)({
  transition: 'all 0.3s',
  padding: '30px',
  borderRadius: '10px',
  maxWidth: 240,
  cursor: 'pointer',
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px',
  '&:hover': {
    borderColor: '#ffffff',
    boxShadow: '-5px 15px 25px 12px rgba(255,146,146,0.1)',
    transform: 'translateY(-10px)'
  }
});

const StyledTypography = styled(Typography)({
  fontSize: 20,
  fontStyle: 'italic',
  letterSpacing: 1,
  marginTop: 12
});

const StyledStack = styled(Stack)({
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
  '& svg': {
    maxWidth: 180,
    maxHeight: 180
  }
});
