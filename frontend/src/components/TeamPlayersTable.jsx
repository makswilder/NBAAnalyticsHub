import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
} from '@mui/material';

const TeamPlayersTable = ({ players, teamName, onBack }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Button variant='outlined' onClick={onBack} sx={{ mr: 2 }}>
          ← Back to Teams
        </Button>
        <Typography
          variant='h5'
          sx={{ color: 'primary.main', fontWeight: 600 }}
        >
          {teamName} Players
        </Typography>
      </Box>

      {players.length === 0 ? (
        <Typography>No players found for {teamName}.</Typography>
      ) : (
        <TableContainer component={Paper} sx={{ maxHeight: 600, boxShadow: 1 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Nation</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Games</TableCell>
                <TableCell>Games Started</TableCell>
                <TableCell>Minutes</TableCell>
                <TableCell>Field Goals</TableCell>
                <TableCell>3-Pointers</TableCell>
                <TableCell>2-Pointers</TableCell>
                <TableCell>Assists</TableCell>
                <TableCell>Steals</TableCell>
                <TableCell>Blocks</TableCell>
                <TableCell>Turnovers</TableCell>
                <TableCell>Points</TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default TeamPlayersTable;
