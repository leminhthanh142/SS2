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
  Box
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

export const SignInPage = () => {
  const paperStyle = { padding: 20, height: '70vh', width: 380, margin: '20px auto' };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnStyle = { margin: '8px 0' };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Box marginBottom={2}>
          <TextField label="Username" placeholder="Enter username" fullWidth required />
        </Box>
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {' '}
          Do you have an account ?<Link href="/sign-up">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
