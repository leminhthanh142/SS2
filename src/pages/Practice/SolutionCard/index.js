import PropTypes from 'prop-types';
import { Box, styled, Stack, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export const SolutionCard = ({ userName, solution }) => {
  return (
    <Container>
      <Stack direction={'row'} spacing={1} alignItems={'center'} mb={1}>
        <PersonIcon />
        <Typography>{userName}</Typography>
      </Stack>
      <StyledSolution>{solution}</StyledSolution>
    </Container>
  );
};

const Container = styled(Box)({
  padding: '30px',
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px'
});

const StyledSolution = styled('code')({
  padding: 20,
  width: '100%'
});

SolutionCard.propTypes = {
  userName: PropTypes.string,
  solution: PropTypes.string
};
