import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const TeamCard = ({ name, logo }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mb: 4,
      mx: 2,
      p: 2,
      minWidth: 180,
      background: '#fff',
      boxShadow: 3,
      flex: '0 1 220px',
      transition: 'background 0.1s',
      '&:hover': {
        background: '#e0e0e0',
      },
      '&:active': {
        background: '#bdbdbd',
      },
    }}
  >
    <Box sx={{ width: 80, height: 80, mb: 2 }}>
      <img
        src={logo}
        alt={name + ' logo'}
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
    <CardContent sx={{ p: 0 }}>
      <Typography variant='h6' align='center'>
        {name}
      </Typography>
    </CardContent>
  </Card>
);

export default TeamCard;
