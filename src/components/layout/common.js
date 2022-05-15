import React, { useCallback, useState, useEffect } from 'react';
import { styled } from '@mui/styles';
import PropTypes from 'prop-types';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const CommonLayout = ({ children, width }) => {
  useScrollToTop();
  const [isShowButton, setIsShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => onScroll(window.pageYOffset));
    return () => {
      window.removeEventListener('scroll', () => onScroll(window.pageYOffset));
    };
  }, []);

  const onScroll = (height) => {
    if (height >= 600) {
      return setIsShowButton(true);
    } else return setIsShowButton(false);
  };

  const handleScrollToTop = useCallback(() => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Header />
      <Container width={width}>{children}</Container>
      <Footer />
      <StyledButtonBacktoTop isShowButton={isShowButton} onClick={handleScrollToTop}>
        <ArrowUpwardIcon sx={{ color: '#ffffff' }} />
      </StyledButtonBacktoTop>
    </>
  );
};

const StyledButtonBacktoTop = styled('div')(({ isShowButton }) => ({
  transition: 'all 0.3s',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 50,
  height: 50,
  borderRadius: '50%',
  bottom: 30,
  right: 30,
  cursor: 'pointer',
  background: '#00a3e8',
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 25px 0px',
  visibility: isShowButton ? 'visible' : 'hidden',
  opacity: isShowButton ? 1 : 0,
  transform: isShowButton ? 'translateY(0)' : 'translateY(30px)',
  '&:hover': {
    boxShadow: '-5px 15px 25px 12px rgba(255,146,146,0.1)',
    transform: 'translateY(-4px)'
  }
}));

const Container = styled('main')(({ width }) => ({
  width: width ? width : '64rem',
  margin: '0 auto',
  paddingTop: '65px',
  minHeight: 'calc(100vh - 268px)'
}));

CommonLayout.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string
};
