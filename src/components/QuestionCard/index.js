import React from 'react';
import { Box, Button, Card, Typography, Chip } from '@mui/material';
import { styled } from '@mui/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LocalOfferOutlined } from '@mui/icons-material';

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

const StyledDifficultyTag = styled(Chip)(({ level }) => {
  const baseCss = `
    border-radius: 4px;
    border: 1px solid;
    cursor: pointer;
  `;

  if (level === 1 || level === 2) {
    return `
      ${baseCss}
    `;
  }
  if (level === 3 || level === 4) {
    return `
      ${baseCss}
      color: #15b715;
      background: #dffad7;
    `;
  }
  if (level === 5) {
    return `
      ${baseCss}
      color: #0095ff;
      background: #00a5ff5c;
    `;
  }
  if (level === 6 || level === 7) {
    return `
      ${baseCss}
      color: #ff7700;
      background: #ff77003d;
    `;
  }
  if (level === 8) {
    return `
      ${baseCss}
      color: #ff0000;
      background: #ff00004f;
    `;
  }
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
