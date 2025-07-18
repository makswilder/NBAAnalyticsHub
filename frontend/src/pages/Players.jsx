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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import EditPlayerModal from '../components/EditPlayerModal';

function Players() {
  const [playerList, setPlayerList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [sortFilter, setSortFilter] = useState('default');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlayers = (filter = 'default') => {
    setIsLoading(true);
    let url = 'http://localhost:8080/api/v1/players';

    switch (filter) {
      case 'top':
        url = 'http://localhost:8080/api/v1/players/sort/top';
        break;
      case 'asc':
        url = 'http://localhost:8080/api/v1/players/sort/asc';
        break;
      case 'desc':
        url = 'http://localhost:8080/api/v1/players/sort/desc';
        break;
      default:
        url = 'http://localhost:8080/api/v1/players';
    }

    fetch(url)
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
  };

  useEffect(() => {
    fetchPlayers(sortFilter);
  }, [sortFilter]);

  const handleEditClick = (player) => {
    setSelectedPlayer(player);
    setModalOpen(true);
  };

  const handleAddClick = () => {
    setSelectedPlayer(null);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedPlayer(null);
  };

  const handleSave = (playerData) => {
    if (playerData.id) {
      // Update existing player
      fetch(`http://localhost:8080/api/v1/players/${playerData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(playerData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to update player');
          }
          return response.json();
        })
        .then((updatedPlayer) => {
          setPlayerList((prev) =>
            prev.map((p) => (p.id === updatedPlayer.id ? updatedPlayer : p))
          );
          handleModalClose();
        })
        .catch((error) => {
          console.error('Error updating player:', error);
          alert('Failed to update player');
        });
    } else {
      // Create new player
      fetch('http://localhost:8080/api/v1/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(playerData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to create player');
          }
          return response.json();
        })
        .then((newPlayer) => {
          setPlayerList((prev) => [...prev, newPlayer]);
          handleModalClose();
        })
        .catch((error) => {
          console.error('Error creating player:', error);
          alert('Failed to create player');
        });
    }
  };

  const handleDelete = (player) => {
    if (window.confirm(`Are you sure you want to delete ${player.name}?`)) {
      fetch(`http://localhost:8080/api/v1/players/${player.id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to delete player');
          }
          setPlayerList((prev) => prev.filter((p) => p.id !== player.id));
        })
        .catch((error) => {
          console.error('Error deleting player:', error);
          alert('Failed to delete player');
        });
    }
  };

  const filteredPlayers = playerList.filter((p) =>
    p.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

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
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextField
          label='Filter by Name'
          variant='outlined'
          size='small'
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          sx={{ width: '300px' }}
        />
        <FormControl size='small' sx={{ minWidth: 200 }}>
          <InputLabel>Sort Players</InputLabel>
          <Select
            value={sortFilter}
            onChange={(e) => setSortFilter(e.target.value)}
            label='Sort Players'
          >
            <MenuItem value='default'>Default</MenuItem>
            <MenuItem value='top'>Top Scorers</MenuItem>
            <MenuItem value='asc'>A-Z</MenuItem>
            <MenuItem value='desc'>Z-A</MenuItem>
          </Select>
        </FormControl>
        <Button variant='contained' color='primary' onClick={handleAddClick}>
          Add Player
        </Button>
      </Box>
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
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPlayers.map((p) => (
                <TableRow key={p.id} hover>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.nation}</TableCell>
                  <TableCell>{p.age}</TableCell>
                  <TableCell>{p.position}</TableCell>
                  <TableCell>{p.gamesPlayed}</TableCell>
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
                      sx={{ borderRadius: '4px', fontWeight: 600, mr: 1 }}
                      onClick={() => handleEditClick(p)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant='contained'
                      color='secondary'
                      size='small'
                      sx={{ borderRadius: '4px', fontWeight: 600 }}
                      onClick={() => handleDelete(p)}
                    >
                      Delete
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
