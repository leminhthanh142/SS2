import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper, styled } from '@mui/material';
import PropTypes from 'prop-types';

export const TutorialLink = ({ path, title }) => {
  return (
    <Link to={path}>
      <StyledPaper>{title}</StyledPaper>
    </Link>
  );
};

const StyledPaper = styled(Paper)(() => ({
  transition: 'all 0.3s',
  padding: '12px 45px',
  borderRadius: '4px',
  cursor: 'pointer',
  color: '#00a3e8',
  boxShadow: 'rgb(0 0 0 / 5%) 0px 2px 15px 0px',
  '&:hover': {
    borderColor: '#ffffff',
    boxShadow: '-5px 15px 25px 0px rgba(255,146,146,0.1)',
    transform: 'translateY(-4px)'
  }
}));

TutorialLink.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string
};
