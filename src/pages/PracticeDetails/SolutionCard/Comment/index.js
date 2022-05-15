import PropTypes from 'prop-types';
import { Box, Stack, styled, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export const Comment = ({ userName, comment }) => {
  return (
    <Box>
      <Stack direction={'row'} spacing={1} alignItems={'center'} mb={1}>
        <PersonIcon />
        <Typography>{userName}</Typography>
      </Stack>
      <StyledComment>{comment}</StyledComment>
    </Box>
  );
};

const StyledComment = styled(Typography)({
  whiteSpace: 'pre-line',
  marginLeft: 30
});

Comment.propTypes = {
  userName: PropTypes.string,
  comment: PropTypes.string
};
