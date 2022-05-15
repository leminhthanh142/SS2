import PropTypes from 'prop-types';
import {
  Box,
  styled,
  Stack,
  Typography,
  Divider,
  Button,
  FormControl,
  TextareaAutosize
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { CodeEditor } from '../../../components/modules/CodeEditor';
import ForumIcon from '@mui/icons-material/Forum';
import { useState } from 'react';
import { useAuth } from '../../../context/authContext';
import { Comment } from './Comment';

export const SolutionCard = ({ userName, solution, comments, onPostComment, solutionId }) => {
  const [openCommentInput, setOpenCommentInput] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleOpenComment = () => {
    setOpenCommentInput(true);
    setOpenComment(true);
  };

  const handleCloseCommentInput = () => {
    setOpenCommentInput(false);
  };

  const handleCloseComment = () => {
    setOpenComment(false);
  };

  const handlePostComment = () => {
    onPostComment(solutionId, comment);
    setComment('');
  };

  return (
    <Container>
      <Stack direction={'row'} spacing={1} alignItems={'center'} mb={1}>
        <PersonIcon />
        <Typography>{userName}</Typography>
      </Stack>
      <CodeEditor code={solution} readOnly disableExampleTestScreen />
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1.5}>
        <Box display={'flex'} alignItems={'center'}>
          <Button onClick={handleOpenComment}>
            <ForumIcon />
            <Typography component={'span'} sx={{ ml: 0.5 }}>
              {comments.length > 0 ? comments.length : ''}
            </Typography>
          </Button>
          <Divider orientation={'vertical'} sx={{ height: 30, ml: 1, mr: 1 }} />
          <Button>
            <Typography>Fork</Typography>
          </Button>
        </Box>
        <Button onClick={handleCloseComment}>
          <Typography>Hide Comments</Typography>
        </Button>
      </Stack>
      {!!comments.length && openComment && (
        <CommentContainer spacing={2.5}>
          {comments.map((comment) => (
            <Comment key={comment} userName={comment.username} comment={comment.content} />
          ))}
        </CommentContainer>
      )}
      {openCommentInput && (
        <Box ml={2} mt={2}>
          <FormControl fullWidth>
            <StyledTextAreaAutoSize
              value={comment}
              onChange={handleCommentChange}
              minRows={5}
              placeholder={'Leave your comment here'}
            />
          </FormControl>
          <Stack direction={'row'} spacing={1} alignItems={'center'} mt={1}>
            <Button variant={'contained'} onClick={handlePostComment}>
              <Typography>Post</Typography>
            </Button>
            <Button variant={'contained'} onClick={handleCloseCommentInput}>
              <Typography>Cancel</Typography>
            </Button>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

const Container = styled(Box)({
  padding: '30px',
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px'
});

const CommentContainer = styled(Stack)({
  padding: 20
});

const StyledTextAreaAutoSize = styled(TextareaAutosize)(({ theme }) => ({
  resize: 'none',
  padding: theme.spacing(2),
  paddingBottom: 0
}));

SolutionCard.propTypes = {
  userName: PropTypes.string,
  solution: PropTypes.string,
  onPostComment: PropTypes.func,
  solutionId: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.object)
};
