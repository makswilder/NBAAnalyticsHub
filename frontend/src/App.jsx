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
          <Button color='inherit' component={Link} to='/teams' startIcon={<Group />}>
            Teams
          </Button>
          <Button color='inherit' component={Link} to='/positions' startIcon={<SportsBasketball />}>
            Positions
          </Button>
          <Button color='inherit' component={Link} to='/players' startIcon={<Person />}>
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '32px',
                }}
              >
                <input
                  type='text'
                  placeholder='Search players, teams, nations...'
                  style={{
                    width: '400px',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    marginRight: '16px',
                  }}
                />
                <Button variant='contained' color='primary'>
                  Filter
                </Button>
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
