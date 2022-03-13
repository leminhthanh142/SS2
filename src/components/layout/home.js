import React from 'react';
import { styled } from '@mui/styles';
import PropTypes from 'prop-types';
import { DashBoard } from '../modules/DashBoard';

export const HomeLayout = ({ children }) => {
  return (
    <>
      <DashBoard />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled('main')({
  width: '64rem',
  margin: '0 auto',
  paddingTop: '65px'
});

HomeLayout.propTypes = {
  children: PropTypes.node
};
