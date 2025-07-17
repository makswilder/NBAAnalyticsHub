import React from 'react';
import { Typography } from '@mui/material';
import PositionCard from '../components/PositionCard';

const positions = [
  {
    name: 'Point Guard (PG)',
    description:
      'Often the team leader, responsible for directing plays and handling the ball. Usually the best passer and ball handler.',
    image: '/positions/point-guard.jpg',
  },

  {
    name: 'Small Forward (SF)',
    description:
      'Versatile player, often responsible for scoring, defending, and rebounding.',
    image: '/positions/small-forward.jpg',
  },
  {
    name: 'Shooting Guard (SG)',
    description:
      'Primary scorer, strong shooter from long range, and often helps with ball handling.',
    image: '/positions/shooting-guard.jpg',
  },
  {
    name: 'Power Forward (PF)',
    description:
      'Plays close to the basket, strong rebounder, and often a good mid-range shooter.',
    image: '/positions/power-forward.jpg',
  },
  {
    name: 'Center (C)',
    description:
      'Tallest player, plays near the basket, responsible for rebounding, shot-blocking, and inside scoring.',
    image: '/positions/center.jpg',
  },
];

function Positions() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '80px',
        height: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant='h4' sx={{ color: 'primary.main', mb: 2 }}>
        Positions
      </Typography>
      <Typography variant='body1' gutterBottom sx={{ color: 'secondary.main' }}>
        Search players by their positions. Click on a position to see players
        who play that role.
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100vw',
          flex: 1,
          height: '100%',
          marginTop: 32,
        }}
      >
        {positions.map((pos) => (
          <div key={pos.name} style={{ flex: 1, minWidth: 0, height: '100%' }}>
            <PositionCard
              name={pos.name}
              description={pos.description}
              image={pos.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Positions;
