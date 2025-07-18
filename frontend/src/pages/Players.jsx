import React, { useState, useEffect } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  TextField,
} from '@mui/material';
import EditPlayerModal from '../components/EditPlayerModal';

function Players() {
  const [playerList, setPlayerList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:8080/api/v1/players')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPlayerList(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching players:', error);
        setError('Failed to load players.');
        setIsLoading(false);
      });
  }, []);

  const handleEditClick = (player) => {
    setSelectedPlayer(player);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedPlayer(null);
  };

  const handleSave = (updatedPlayer) => {
    setPlayerList((prev) =>
      prev.map((p) =>
        p.name === selectedPlayer.name && p.team === selectedPlayer.team
          ? updatedPlayer
          : p
      )
    );
    handleModalClose();
  };

  const filteredPlayers = playerList.filter((p) =>
    p.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const uniquePlayers = [];
  const seen = new Set();
  for (const p of filteredPlayers) {
    const key = p.name + p.team;
    if (!seen.has(key)) {
      uniquePlayers.push(p);
      seen.add(key);
    }
  }

  return (
    <Box sx={{ mt: 10, px: { xs: 1, md: 6 }, textAlign: 'center' }}>
      <Typography
        variant='h4'
        sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}
      >
        NBA Players
      </Typography>
      <Typography variant='body1' sx={{ mb: 3, color: 'secondary.main' }}>
        Explore player stats, teams, and positions. Scroll horizontally for more
        columns.
      </Typography>
      <TextField
        label='Filter by Name'
        variant='outlined'
        size='small'
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        sx={{ mb: 2, width: '300px' }}
      />
      {isLoading ? (
        <Typography>Loading players...</Typography>
      ) : error ? (
        <Typography color='error'>{error}</Typography>
      ) : (
        <TableContainer component={Paper} sx={{ maxHeight: 700, boxShadow: 1 }}>
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
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uniquePlayers.map((p) => (
                <TableRow key={p.name + p.team} hover>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.nation}</TableCell>
                  <TableCell>{p.age}</TableCell>
                  <TableCell>{p.position}</TableCell>
                  <TableCell>{p.gamesPlayer}</TableCell>
                  <TableCell>{p.gameStarts}</TableCell>
                  <TableCell>{p.minutesPlayed}</TableCell>
                  <TableCell>{p.fieldGoals}</TableCell>
                  <TableCell>{p.threePoints}</TableCell>
                  <TableCell>{p.twoPoints}</TableCell>
                  <TableCell>{p.assists}</TableCell>
                  <TableCell>{p.steals}</TableCell>
                  <TableCell>{p.blocks}</TableCell>
                  <TableCell>{p.turnovers}</TableCell>
                  <TableCell>{p.points}</TableCell>
                  <TableCell>{p.team}</TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      color='primary'
                      size='small'
                      sx={{ borderRadius: '4px', fontWeight: 600 }}
                      onClick={() => handleEditClick(p)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <EditPlayerModal
        open={modalOpen}
        onClose={handleModalClose}
        player={selectedPlayer}
        onSave={handleSave}
      />
    </Box>
  );
}

export default Players;
