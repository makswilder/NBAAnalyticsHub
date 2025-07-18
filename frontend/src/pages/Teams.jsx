import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import TeamCard from '../components/TeamCard';
import teamsService from '../services/teamsService';

function Teams() {
  const [filter, setFilter] = useState('');
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        setError(null);
        const teamsData = await teamsService.getAllTeams();
        setTeams(teamsData);
      } catch (err) {
        setError('Failed to load teams data');
        console.error('Error fetching teams:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <Typography variant='h4'>Loading Teams...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <Typography variant='h4' color='error'>
          Error Loading Teams
        </Typography>
        <Typography variant='body1'>{error}</Typography>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <Typography variant='h4'>NBA Teams</Typography>
      <Typography variant='body1'>
        Explore detailed profiles and insights for every NBA team.
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 24,
        }}
      >
        <TextField
          label='Search for teams...'
          variant='outlined'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          size='small'
          style={{ marginRight: 8 }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 32,
        }}
      >
        {filteredTeams.map((team) => (
          <TeamCard key={team.name} name={team.name} logo={team.logo} />
        ))}
      </div>
    </div>
  );
}

export default Teams;
