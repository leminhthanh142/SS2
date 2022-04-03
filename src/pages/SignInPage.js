import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
  Box,
  FormControl,
  FormLabel,
  styled
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const SignInPage = () => {
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnStyle = { margin: '8px 0' };
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/');
  };

  return (
    <StyledGrid>
      <StyledPaper elevation={10}>
        <Grid align="center" mb={4}>
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Box mb={2}>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>User Name</Typography>
            </FormLabel>
            <TextField />
          </FormControl>
        </Box>
        <Box mb={2}>
          <FormControl fullWidth>
            <FormLabel>
              <Typography>Password</Typography>
            </FormLabel>
            <TextField type="password" />
          </FormControl>
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
        </Box>
        <Box mb={2}>
          <Button
            onClick={handleSignIn}
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth>
            Sign in
          </Button>
        </Box>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?<Link href="/sign-up">Sign Up</Link>
        </Typography>
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
