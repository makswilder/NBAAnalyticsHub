import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Group, SportsBasketball, Person } from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Teams from './pages/Teams.jsx';
import Positions from './pages/Positions.jsx';
import Players from './pages/Players.jsx';

function App() {
  return (
    <Router>
      <AppBar
        position='sticky'
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
          position: 'fixed',
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
      <Routes>
        <Route
          path='/'
          element={
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                fontFamily: 'Roboto, Arial, sans-serif',
              }}
            >
              <div
                style={{
                  width: '50vw',
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: '48px',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    maxWidth: '600px',
                    minWidth: '320px',
                    textAlign: 'left',
                  }}
                >
                  <Typography
                    variant='h1'
                    sx={{
                      color: 'primary.main',
                      fontWeight: 1200,
                      fontSize: { xs: '3rem', md: '5rem' },
                    }}
                  >
                    Welcome to NBA Analytics Hub
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      marginTop: '16px',
                      marginBottom: '24px',
                      color: 'secondary.main',
                      fontWeight: 400,
                      fontSize: { xs: '1.1rem', md: '1.5rem' },
                    }}
                  >
                    Explore NBA teams, players, and positions with interactive
                    analytics and visualizations. Track stats, trends, and
                    insights to boost your basketball knowledge. Sign up for
                    personalized features or log in to continue your journey.
                    Unlock the power of NBA analytics and get started now.
                  </Typography>
                  <Button
                    variant='contained'
                    color='primary'
                    component={Link}
                    to='/register'
                    sx={{ marginTop: '16px', fontWeight: 600 }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
              <div
                style={{
                  width: '50vw',
                  height: '100vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src='/hero.jpg'
                  alt='NBA Analytics Hub Hero'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '60% center',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                    filter: 'brightness(0.8)',
                  }}
                />
              </div>
            </div>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/positions' element={<Positions />} />
        <Route path='/players' element={<Players />} />
      </Routes>
    </Router>
  );
}

export default App;
