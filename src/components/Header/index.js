import React, { useCallback } from 'react';
import { Stack, styled, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { customAxios } from '../../customAxios';
import { useAuth } from '../../context/authContext';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LogoutIcon from '@mui/icons-material/Logout';
import SchoolIcon from '@mui/icons-material/School';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';

export const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSignOut = useCallback(async () => {
    await customAxios.post('/auth/signout');
    localStorage.removeItem('user');
    navigate('/sign-in');
  }, []);

  return (
    <Wrapper spacing={4}>
      <Link href={'/'}>
        <IconContainer>
          <HomeIcon sx={{ color: '#ffffff' }} />
          <span>Home</span>
        </IconContainer>
      </Link>
      <Link href={'/practices'}>
        <IconContainer>
          <AssignmentTurnedInIcon sx={{ color: '#ffffff' }} />
          <span>Practices</span>
        </IconContainer>
      </Link>
      <Link href={'/courses'}>
        <IconContainer>
          <SchoolIcon sx={{ color: '#ffffff' }} />
          <span>Course</span>
        </IconContainer>
      </Link>
      {!user && (
        <Link href={'/sign-in'}>
          <IconContainer>
            <LoginIcon sx={{ color: '#ffffff' }} />
            <span>Login</span>
          </IconContainer>
        </Link>
      )}
      <IconContainer onClick={handleSignOut}>
        <LogoutIcon sx={{ color: '#ffffff' }} />
        <span>Logout</span>
      </IconContainer>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)(() => ({
  zIndex: 999,
  float: 'right',
  position: 'sticky',
  right: 40,
  top: 80,
  maxWidth: 100,
  '& a': {
    textDecoration: 'none'
  }
}));

const IconContainer = styled(Box)(() => ({
  '& span': {
    position: 'absolute',
    visibility: 'hidden',
    opacity: 0,
    transition: '0.3s',
    fontWeight: 500,
    color: 'rgb(0, 163, 232)',
    zIndex: -1
  },
  transition: '0.3s',
  cursor: 'pointer',
  position: 'relative',
  width: 50,
  height: 50,
  borderRadius: '50%',
  backgroundColor: 'rgb(0, 163, 232)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  '&:hover': {
    transform: 'translateX(-12px)',
    '& span': {
      visibility: 'visible',
      opacity: 1,
      transform: 'translateX(-70px)'
    }
  }
}));
