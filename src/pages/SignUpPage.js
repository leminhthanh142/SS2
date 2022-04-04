import React, { useCallback, useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Link,
  styled
} from '@mui/material';
import { AddCircleOutlineOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { customAxios } from '../customAxios';
import { useFlash } from '../context/flashContext';
const headerStyle = { margin: 0 };
const avatarStyle = { backgroundColor: '#1bbd7e' };

export const SignUpPage = () => {
  const { setFlash } = useFlash();
  const [formValues, setFormValues] = useState({
    email: '',
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChangeFormValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = useCallback(async () => {
    try {
      await customAxios.post('/auth/signup', {
        ...formValues
      });
      setFlash({ type: 'success', message: 'Sign up successfully!' });
      navigate('/sign-in');
    } catch (err) {
      setFlash({ type: 'error', message: 'Can not register right now, please try again later!' });
    }
  }, [formValues]);

  return (
    <StyledGrid>
      <StyledPaper elevation={10}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Box mb={4}>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Box>
        </Grid>
        <form>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Name"
              name={'username'}
              onChange={handleChangeFormValues}
              placeholder="Enter your name"
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              name={'email'}
              onChange={handleChangeFormValues}
              placeholder="Enter your email"
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              name={'password'}
              placeholder="Enter your password"
              onChange={handleChangeFormValues}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
            />
          </Box>
          <Box mb={2}>
            <Typography>By creating an account, you agree to our Privacy Policy</Typography>
          </Box>
          <Box mb={2}>
            <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
              Sign up
            </Button>
          </Box>
          <Typography>
            Already have an account ?<Link href="/sign-in">Sign In</Link>
          </Typography>
        </form>
      </StyledPaper>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'
}));

const StyledPaper = styled(Paper)(() => ({
  padding: 20,
  height: '70vh',
  width: 380,
  margin: '20px auto'
}));
