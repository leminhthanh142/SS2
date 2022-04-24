import React, { useCallback } from 'react';
import { AppBar, Toolbar, Button, Stack, styled, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { customAxios } from '../../customAxios';

export const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = useCallback(async () => {
    await customAxios.post('/auth/signout');
    localStorage.removeItem('user');
    navigate('/sign-in');
  }, []);

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <Link style={{ height: 64 }} to={'/'}>
          <img src="/images/logo.png" alt="logo" width={64} height={64} />
        </Link>
        <Stack direction={'row'} spacing={3}>
          <Button color="inherit">
            <Link to={'/practices/1'}>Practices</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/courses'}>Courses</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/sign-in'}>Login</Link>
          </Button>
          <Button sx={{ color: '#232323' }} onClick={handleSignOut}>
            Sign Out
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
