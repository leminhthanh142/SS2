import React from 'react';
import { Box, Button, Card, Typography, Chip } from '@mui/material';
import { styled } from '@mui/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LocalOfferOutlined } from '@mui/icons-material';
import { StyledDifficultyTag } from '../elements/StyledDifficultyTag';

export const QuestionCard = ({
  title,
  description,
  id,
  difficultTag,
  difficultLevel,
  relevantTags
}) => {
  return (
    <StyledCard elevation={0}>
      <Box mb={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <StyledDifficultyTag sx={{ mr: 2 }} label={difficultTag} level={difficultLevel} />
          <Title>{title}</Title>
        </Box>
        <Link to={`/practices/${id}`}>
          <Button variant={'contained'} color={'primary'}>
            Start
          </Button>
        </Link>
      </Box>
      <Typography>{description}</Typography>
      <Box mt={3} display={'flex'} alignItems={'center'}>
        <LocalOfferOutlined />
        <Box ml={2}>
          {relevantTags &&
            relevantTags.map((tag) => <StyledRelevantTag key={tag} sx={{ mr: 2 }} label={tag} />)}
        </Box>
      </Box>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  width: '100%',
  padding: '24px',
  borderRadius: '10px',
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px'
});

const Title = styled(Typography)({
  fontSize: 24
});

const StyledRelevantTag = styled(Chip)({
  borderRadius: 4
});

QuestionCard.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  example: PropTypes.node,
  note: PropTypes.string,
  id: PropTypes.number.isRequired,
  difficultTag: PropTypes.string.isRequired,
  difficultLevel: PropTypes.number.isRequired,
  relevantTags: PropTypes.arrayOf(PropTypes.string).isRequired
};
