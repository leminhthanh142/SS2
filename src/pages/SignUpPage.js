import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormLabel,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  Box
} from '@mui/material';
import { AddCircleOutlineOutlined } from '@mui/icons-material';

export const SignUpPage = () => {
  const paperStyle = { padding: '30px 20px', width: 400, margin: '20px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Box marginBottom={2}>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Box>
        </Grid>
        <form>
          <Box marginBottom={2}>
            <TextField fullWidth label="Name" placeholder="Enter your name" />
          </Box>
          <Box marginBottom={2}>
            <TextField fullWidth label="Email" placeholder="Enter your email" />
          </Box>
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <Box marginBottom={2}>
            <TextField fullWidth label="Phone Number" placeholder="Enter your phone number" />
          </Box>
          <Box marginBottom={2}>
            <TextField fullWidth label="Password" placeholder="Enter your password" />
          </Box>
          <Box marginBottom={2}>
            <TextField fullWidth label="Confirm Password" placeholder="Confirm your password" />
          </Box>
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
