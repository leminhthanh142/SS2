import React from 'react';
import { Box, Card, Typography, Chip } from '@mui/material';
import { styled } from '@mui/styles';
import PropTypes from 'prop-types';
import { LocalOfferOutlined } from '@mui/icons-material';

export const QuestionCardDetails = ({
  title,
  description,
  example,
  note,
  difficultTag,
  relevantTags
}) => {
  return (
    <StyledCard elevation={0}>
      <Box mb={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <StyledTag sx={{ mr: 2 }} label={difficultTag} />
          <Title>{title}</Title>
        </Box>
      </Box>
      <Typography>{description}</Typography>
      <StyledExample component={'pre'}>{example}</StyledExample>
      {note && <Typography>{note}</Typography>}
      <Box mt={3} display={'flex'} alignItems={'center'}>
        <LocalOfferOutlined />
        <Box ml={2}>
          {relevantTags &&
            relevantTags.map((tag) => <StyledTag key={tag} sx={{ mr: 2 }} label={tag} />)}
        </Box>
      </Box>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  height: 'calc(100% - 65px)',
  backgroundColor: 'rgb(38, 39, 41)',
  padding: '24px',
  color: '#d9d9d9',
  borderRadius: 0
});

const Title = styled(Typography)({
  fontSize: 24
});

const StyledTag = styled(Chip)({
  borderRadius: 4,
  color: '#d9d9d9',
  backgroundColor: 'rgba(255,255,255,0.1)'
});

const StyledExample = styled(Typography)({
  color: '#ffffff',
  backgroundColor: 'rgb(23,23,25)',
  overflowX: 'auto',
  fontSize: '.875em',
  lineHeight: '1.7142857',
  marginTop: '1.7142857em',
  marginBottom: '1.7142857em',
  borderRadius: '0.375rem',
  padding: '0.8571429em 1.1428571em'
});

QuestionCardDetails.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  example: PropTypes.node,
  note: PropTypes.string,
  difficultTag: PropTypes.string.isRequired,
  relevantTags: PropTypes.arrayOf(PropTypes.string).isRequired
};
