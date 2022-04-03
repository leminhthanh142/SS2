import React from 'react';
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

export const SignUpPage = () => {
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };

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
            <TextField fullWidth label="Name" placeholder="Enter your name" />
          </Box>
          <Box mb={2}>
            <TextField fullWidth label="Email" placeholder="Enter your email" />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="Enter your password"
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
            <Button fullWidth type="submit" variant="contained" color="primary">
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
