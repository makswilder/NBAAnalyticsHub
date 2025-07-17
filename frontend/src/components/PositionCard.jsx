import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ImageBox = styled(Box)(({ image }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `url(${image}) center center / cover no-repeat`,
  zIndex: 0,
  transition: 'transform 0.3s ease-out 0s, filter 0.3s ease',
  willChange: 'transform, filter',
  transform: 'scale(1)',
  filter: 'grayscale(100%)',
  '@keyframes slowZoom': {
    '0%': { transform: 'scale(1.08)' },
    '100%': { transform: 'scale(1.15)' },
  },
  '.MuiCard-root:hover &': {
    transform: 'scale(1.08)',
    animation: 'slowZoom 2.5s linear 0.3s forwards',
    filter: 'none',
  },
}));

const OverlayBox = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.45)',
  zIndex: 1,
  transition: 'background 0.3s ease',
  '.MuiCard-root:hover &': {
    background: 'rgba(0,0,0,0.20)',
  },
}));

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
      boxShadow: 3,
      borderRadius: 0,
      overflow: 'hidden',
      cursor: 'pointer',
    }}
  >
    <ImageBox image={image} />
    <OverlayBox />
    <Box
      sx={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        p: 3,
        textAlign: 'center',
      }}
    >
      <Typography
        variant='h4'
        sx={{
          color: '#fff',
          fontWeight: 900,
          mb: 2,
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          textShadow: '0 2px 8px rgba(0,0,0,0.4)',
        }}
      >
        {name}
      </Typography>
      <Typography
        variant='body1'
        sx={{
          color: '#fff',
          fontWeight: 500,
          fontSize: '1.15rem',
          letterSpacing: 0.5,
          textShadow: '0 1px 4px rgba(0,0,0,0.3)',
        }}
      >
        {description}
      </Typography>
    </Box>
  </Card>
);

export default PositionCard;
