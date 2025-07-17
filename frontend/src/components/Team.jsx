import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Team = ({ name, logo }) => (
  <Card
    sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 2, minWidth: 250 }}
  >
    <Box sx={{ width: 64, height: 64, mr: 2 }}>
      <img
        src={logo}
        alt={name + ' logo'}
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
    <CardContent sx={{ flex: 1 }}>
      <Typography variant='h6'>{name}</Typography>
    </CardContent>
  </Card>
);

export default Team;
