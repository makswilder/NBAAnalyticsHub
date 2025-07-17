import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Group, SportsBasketball, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar
    position='fixed'
    sx={{
      bgcolor: 'background.paper',
      color: 'primary.main',
      boxShadow: 'none',
      borderBottom: '1px solid #adb5bd',
      zIndex: 1000,
      top: 0,
      left: 0,
      right: 0,
      width: '100vw',
    }}
  >
    <Toolbar>
      <Typography
        variant='h6'
        sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 600 }}
        component={Link}
        to='/'
        color='inherit'
        style={{ textDecoration: 'none' }}
      >
        NBA Analytics Hub
      </Typography>
      <Button
        color='inherit'
        component={Link}
        to='/teams'
        startIcon={<Group />}
        sx={{ fontWeight: 600 }}
      >
        Teams
      </Button>
      <Button
        color='inherit'
        component={Link}
        to='/positions'
        startIcon={<SportsBasketball />}
        sx={{ fontWeight: 600 }}
      >
        Positions
      </Button>
      <Button
        color='inherit'
        component={Link}
        to='/players'
        startIcon={<Person />}
        sx={{ fontWeight: 600, mr: 3 }}
      >
        Players
      </Button>
      <Button
        variant='contained'
        color='primary'
        component={Link}
        to='/login'
        sx={{ fontWeight: 600 }}
      >
        Login
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
