import React from 'react';
import { styled } from '@mui/styles';
import PropTypes from 'prop-types';
import { DashBoard } from '../modules/DashBoard';
import { Header } from '../Header';

export const CommonLayout = ({ children }) => {
  return (
    <>
      <DashBoard />
      <Header />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled('main')({
  width: '64rem',
  margin: '0 auto',
  paddingTop: '65px'
});

CommonLayout.propTypes = {
  children: PropTypes.node
};
