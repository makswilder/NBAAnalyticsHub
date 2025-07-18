import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Group, SportsBasketball, Person } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
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

        {isAuthenticated && (
          <>
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
          </>
        )}

        {isAuthenticated ? (
          <Button
            variant='contained'
            color='secondary'
            onClick={handleLogout}
            sx={{ fontWeight: 600 }}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant='contained'
            color='primary'
            component={Link}
            to='/login'
            sx={{ fontWeight: 600 }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
