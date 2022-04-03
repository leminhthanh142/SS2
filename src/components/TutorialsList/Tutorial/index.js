import React from 'react';
import { Box, Chip, Paper, Stack, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TagsType } from '../../../data/tutorials';

const commonStyleTags = {
  borderRadius: '4px',
  '& span': {
    color: '#ffffff'
  }
};

export const Tutorial = ({ tutorial }) => {
  return (
    <Link to={tutorial.path}>
      <StyledStack direction="row">
        <StyledContent>{tutorial.title}</StyledContent>
        <Stack direction="row" spacing={1}>
          {tutorial.tags.map((tag) => (
            <StyledTag key={tag.id} label={tag.title} type={tag.type} />
          ))}
        </Stack>
      </StyledStack>
    </Link>
  );
};

const StyledStack = styled(Stack)(() => ({
  padding: '20px',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    background: 'rgb(46,47,49)'
  }
}));

const StyledTag = styled(Chip)(({ theme, type }) => {
  if (type === TagsType.Language) {
    return {
      ...commonStyleTags,
      background: 'rgb(241,53,221)'
    };
  }
  if (type === TagsType.Core) {
    return {
      ...commonStyleTags,
      background: 'rgb(250,34,34)'
    };
  }
  return {
    ...commonStyleTags,
    background: 'rgb(86,165,255)'
  };
});

const StyledContent = styled(Typography)(() => ({
  fontSize: 16,
  color: '#ffffff'
}));

Tutorial.propTypes = {
  tutorial: PropTypes.object
};
