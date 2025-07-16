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
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            sx={{ flexGrow: 1, cursor: 'pointer' }}
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
          >
            Teams
          </Button>
          <Button
            color='inherit'
            component={Link}
            to='/positions'
            startIcon={<SportsBasketball />}
          >
            Positions
          </Button>
          <Button
            color='inherit'
            component={Link}
            to='/players'
            startIcon={<Person />}
          >
            Players
          </Button>
          <Button color='inherit' component={Link} to='/login'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route
          path='/'
          element={
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Typography variant='h3'>Welcome to NBA Analytics Hub</Typography>
              <img
                src='/hero.jpg'
                alt='NBA Analytics Hub Hero'
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  borderRadius: '12px',
                  marginBottom: '24px',
                }}
              />
              <Typography
                variant='h6'
                style={{
                  marginTop: '16px',
                  marginBottom: '24px',
                }}
              >
                NBA Analytics Hub is your gateway to exploring comprehensive NBA
                data. Dive into detailed analytics on teams, players, and positions.
                Discover stats, trends, and insights to enhance your basketball
                knowledge. Whether you're a fan, analyst, or just curious, our
                platform offers interactive tools and visualizations to help you
                make sense of the numbers. Sign up to unlock personalized
                features, or log in to continue your journey. Get started now and
                experience the power of NBA analytics!
              </Typography>
              <Button
                variant='contained'
                color='primary'
                component={Link}
                to='/register'
                style={{ marginTop: '16px' }}
              >
                Get Started
              </Button>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '32px',
                }}
              ></div>
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
