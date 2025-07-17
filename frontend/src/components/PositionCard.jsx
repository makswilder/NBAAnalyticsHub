import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const PositionCard = ({ name, description, image }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      minWidth: 0,
      minHeight: '100%',
      width: '100%',
      height: '100%',
      position: 'relative',
      background: `url(${image}) center center / cover no-repeat`,
      boxShadow: 3,
      borderRadius: 0,
      overflow: 'hidden',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.45)',
        zIndex: 1,
      }}
    />
    <Box
      sx={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        p: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant='h6' sx={{ color: '#fff', fontWeight: 700, mb: 2 }}>
        {name}
      </Typography>
      <Typography variant='body2' sx={{ color: '#fff', fontWeight: 400 }}>
        {description}
      </Typography>
    </Box>
  </Card>
);

export default PositionCard;
