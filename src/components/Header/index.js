import React from 'react';
import { AppBar, Toolbar, Button, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="sticky" sx={{ background: 'rgb(34, 34, 34)', boxShadow: 'none' }}>
      <StyledToolbar>
        <Stack direction={'row'} spacing={3}>
          <Button color="inherit">
            <Link to={'/courses'}>Courses</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/sign-in'}>Login</Link>
          </Button>
        </Stack>
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
