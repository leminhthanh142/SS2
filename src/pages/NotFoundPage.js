import React from 'react';
import { Box, createStyles, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgb(247, 247, 247)',
      height: '100vh',
      width: '100vw'
    }
  })
);

export const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
      />
      <Box display={'flex'} alignItems={'center'}>
        <ArrowRightAltIcon fontSize={'large'} />
        <Link to="/" className="link-home">
          <Typography fontSize={'18px'}>Return to Home Page</Typography>
        </Link>
      </Box>
    </Box>
  );
};
