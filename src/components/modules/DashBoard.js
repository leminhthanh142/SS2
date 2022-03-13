import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { ListAltOutlined, EmojiPeopleOutlined, CreateOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const drawerWidth = 255;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  })
);

const StyledListItemButton = styled(ListItemButton)(({ open }) => ({
  minHeight: 48,
  justifyContent: open ? 'initial' : 'center',
  px: 2.5,
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)'
  }
}));

const StyledListItemIcon = styled(ListItemIcon)(({ open }) => ({
  minWidth: 0,
  marginRight: open ? 18 : 'auto',
  justifyContent: 'center',
  color: '#c1c1c1'
}));

export const DashBoard = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box onMouseMove={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: 'rgb(34, 34, 34)',
            color: '#ffffff'
          }
        }}>
        <DrawerHeader>
          <Link to={'/'}>
            <Box display={'flex'} alignItems={'center'}>
              <img src="/images/logo.png" alt="logo" width={64} height={64} />
              <Typography sx={{ ml: 3 }}>Home</Typography>
            </Box>
          </Link>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to={'/practice'}>
            <StyledListItemButton open={open}>
              <StyledListItemIcon open={open}>
                <EmojiPeopleOutlined />
              </StyledListItemIcon>
              {open && <ListItemText primary={'Practice'} />}
            </StyledListItemButton>
          </Link>
          <Link to={'/short-answer'}>
            <StyledListItemButton open={open}>
              <StyledListItemIcon open={open}>
                <CreateOutlined />
              </StyledListItemIcon>
              {open && <ListItemText primary={'Short Answer'} />}
            </StyledListItemButton>
          </Link>
          <Link to={'/multiple-choices'}>
            <StyledListItemButton open={open}>
              <StyledListItemIcon open={open}>
                <ListAltOutlined />
              </StyledListItemIcon>
              {open && <ListItemText primary={'Multiple Choices'} />}
            </StyledListItemButton>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
};
