import React, { useState } from 'react';
import {
  Typography,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import PositionCard from '../components/PositionCard';

const positions = [
  {
    name: 'Point Guard',
    code: 'PG',
    description:
      'Often the team leader, responsible for directing plays and handling the ball. Usually the best passer and ball handler.',
    image: '/positions/point-guard.jpg',
  },
  {
    name: 'Shooting Guard',
    code: 'SG',
    description:
      'Primary scorer, strong shooter from long range, and often helps with ball handling.',
    image: '/positions/shooting-guard.jpg',
  },
  {
    name: 'Small Forward',
    code: 'SF',
    description:
      'Versatile player, often responsible for scoring, defending, and rebounding.',
    image: '/positions/small-forward.jpg',
  },
  {
    name: 'Power Forward',
    code: 'PF',
    description:
      'Plays close to the basket, strong rebounder, and often a good mid-range shooter.',
    image: '/positions/power-forward.jpg',
  },
  {
    name: 'Center',
    code: 'C',
    description:
      'Tallest player, plays near the basket, responsible for rebounding, shot-blocking, and inside scoring.',
    image: '/positions/center.jpg',
  },
];

function Positions() {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlayersByPosition = async (positionCode) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/players/sort/position?position=${positionCode}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch players');
      }
      const data = await response.json();
      setPlayers(data);
    } catch (err) {
      setError('Failed to load players for this position');
      console.error('Error fetching players:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePositionClick = (positionName) => {
    const position = positions.find((pos) => pos.name === positionName);
    if (position) {
      setSelectedPosition(positionName);
      fetchPlayersByPosition(position.code);
    }
  };

  const handleBackClick = () => {
    setSelectedPosition(null);
    setPlayers([]);
    setError(null);
  };

  if (selectedPosition) {
    return (
      <Box sx={{ mt: 10, px: { xs: 1, md: 6 }, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Button variant='outlined' onClick={handleBackClick} sx={{ mr: 2 }}>
            ← Back to Positions
          </Button>
          <Typography
            variant='h4'
            sx={{ color: 'primary.main', fontWeight: 700, flex: 1 }}
          >
            {selectedPosition} Players
          </Typography>
        </Box>

        {isLoading ? (
          <Typography>Loading players...</Typography>
        ) : error ? (
          <Typography color='error'>{error}</Typography>
        ) : players.length === 0 ? (
          <Typography>No players found for this position.</Typography>
        ) : (
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 600, boxShadow: 1 }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Nation</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Pos</TableCell>
                  <TableCell>G</TableCell>
                  <TableCell>GS</TableCell>
                  <TableCell>MP</TableCell>
                  <TableCell>FG</TableCell>
                  <TableCell>3P</TableCell>
                  <TableCell>2P</TableCell>
                  <TableCell>AST</TableCell>
                  <TableCell>STL</TableCell>
                  <TableCell>BLK</TableCell>
                  <TableCell>TOV</TableCell>
                  <TableCell>PTS</TableCell>
                  <TableCell>Team</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {players.map((player) => (
                  <TableRow key={player.id} hover>
                    <TableCell>{player.name}</TableCell>
                    <TableCell>{player.nation}</TableCell>
                    <TableCell>{player.age}</TableCell>
                    <TableCell>{player.position}</TableCell>
                    <TableCell>{player.gamesPlayed}</TableCell>
                    <TableCell>{player.gameStarts}</TableCell>
                    <TableCell>{player.minutesPlayed}</TableCell>
                    <TableCell>{player.fieldGoals}</TableCell>
                    <TableCell>{player.threePoints}</TableCell>
                    <TableCell>{player.twoPoints}</TableCell>
                    <TableCell>{player.assists}</TableCell>
                    <TableCell>{player.steals}</TableCell>
                    <TableCell>{player.blocks}</TableCell>
                    <TableCell>{player.turnovers}</TableCell>
                    <TableCell>{player.points}</TableCell>
                    <TableCell>{player.team}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    );
  }

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
              onClick={() => handlePositionClick(pos.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Positions;
