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
    <StyledCard>
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

const StyledCard = styled(Box)({
  height: 'calc(100% - 65px)',
  backgroundColor: '#ffffff',
  padding: '24px',
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px'
});

const Title = styled(Typography)({
  fontSize: 24
});

const StyledTag = styled(Chip)({
  borderRadius: 4,
  backgroundColor: 'rgba(55, 53, 47, 0.08)'
});

const StyledExample = styled(Typography)({
  overflowX: 'auto',
  fontSize: '.875em',
  borderRadius: '0.375rem',
  marginTop: 16,
  marginBottom: 16
});

QuestionCardDetails.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  example: PropTypes.node,
  note: PropTypes.string,
  difficultTag: PropTypes.string.isRequired,
  relevantTags: PropTypes.arrayOf(PropTypes.string).isRequired
};
