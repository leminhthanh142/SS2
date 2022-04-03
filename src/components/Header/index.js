import React from 'react';
import { AppBar, Toolbar, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="sticky" sx={{ background: 'rgb(34, 34, 34)', boxShadow: 'none' }}>
      <StyledToolbar>
        <Button color="inherit">
          <Link to={'/sign-in'}>Login</Link>
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  [theme.breakpoints.up('sm')]: {
    padding: '0 65px'
  }
}));
