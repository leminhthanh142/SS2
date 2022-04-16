import { Box, Card, CardMedia, styled, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CommonLayout } from '../components/layout/common';

export const Course = () => {
  const navigate = useNavigate();
  return (
    <CommonLayout>
      <Typography variant={'h2'}>Các Khóa Học Cơ Bản</Typography>
      <Stack direction={'row'} spacing={4} mt={5}>
        <StyledCard onClick={() => navigate('/js-tutorials')}>
          <CardMedia
            component={'img'}
            image={'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png'}
          />
        </StyledCard>
        <StyledCard onClick={() => navigate('/react-tutorials')}>
          <CardMedia
            component={'img'}
            image={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
            }
          />
        </StyledCard>
        <StyledCard onClick={() => navigate('/java-tutorials')}>
          <CardMedia
            component={'img'}
            image={'https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png'}
          />
        </StyledCard>
      </Stack>
    </CommonLayout>
  );
};

const StyledCard = styled(Card)({
  transition: 'all 0.3s',
  padding: '30px',
  border: '1px solid',
  borderColor: '#e6dad8',
  borderRadius: '10px',
  boxShadow: 'none',
  maxWidth: 200,
  cursor: 'pointer',
  '&:hover': {
    borderColor: '#ffffff',
    boxShadow: '-5px 15px 25px 12px rgba(255,146,146,0.1)',
    transform: 'translateY(-10px)'
  }
});
