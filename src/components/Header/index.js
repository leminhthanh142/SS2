import React from 'react';
import { AppBar, Toolbar, Button, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <Link style={{ height: 64 }} to={'/'}>
          <img src="/images/logo.png" alt="logo" width={64} height={64} />
        </Link>
        <Stack direction={'row'} spacing={3}>
          <Button color="inherit">
            <Link to={'/courses'}>Courses</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/sign-in'}>Login</Link>
          </Button>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  );
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    padding: '0 65px 0 0'
  }
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#f5f1f1',
  boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 2px 2px',
  '& a': {
    color: '#232323'
  }
}));
