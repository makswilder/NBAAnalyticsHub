import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import TeamCard from '../components/TeamCard';
import TeamPlayersTable from '../components/TeamPlayersTable';
import teamsService from '../services/teamsService';

function Teams() {
  const [filter, setFilter] = useState('');
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [playersLoading, setPlayersLoading] = useState(false);
  const [playersError, setPlayersError] = useState(null);

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

  const fetchTeamPlayers = async (teamName) => {
    try {
      setPlayersLoading(true);
      setPlayersError(null);

      const response = await fetch(
        `http://localhost:8080/api/v1/players/sort/team?team=${encodeURIComponent(
          teamName
        )}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch team players');
      }

      const playersData = await response.json();
      setTeamPlayers(playersData);
      setSelectedTeam(teamName);
    } catch (err) {
      setPlayersError('Failed to load team players');
      console.error('Error fetching team players:', err);
    } finally {
      setPlayersLoading(false);
    }
  };

  const handleTeamClick = (teamName) => {
    fetchTeamPlayers(teamName);
  };

  const handleBackToTeams = () => {
    setSelectedTeam(null);
    setTeamPlayers([]);
    setPlayersError(null);
  };

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
    <div
      style={{ textAlign: 'center', marginTop: '80px', paddingBottom: '40px' }}
    >
      {selectedTeam ? (
        <div
          style={{ textAlign: 'left', marginLeft: '20px', marginRight: '20px' }}
        >
          {playersLoading ? (
            <Typography variant='h4' style={{ textAlign: 'center' }}>
              Loading Players...
            </Typography>
          ) : playersError ? (
            <div style={{ textAlign: 'center' }}>
              <Typography variant='h4' color='error'>
                Error Loading Players
              </Typography>
              <Typography variant='body1'>{playersError}</Typography>
              <Button
                variant='outlined'
                onClick={handleBackToTeams}
                style={{ marginTop: '16px' }}
              >
                Back to Teams
              </Button>
            </div>
          ) : (
            <TeamPlayersTable
              players={teamPlayers}
              teamName={selectedTeam}
              onBack={handleBackToTeams}
            />
          )}
        </div>
      ) : (
        <>
          <Typography variant='h4'>NBA Teams</Typography>
          <Typography variant='body1'>
            Explore detailed profiles and insights for every NBA team. Click on
            a team to see their players.
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
              <TeamCard
                key={team.name}
                name={team.name}
                logo={team.logo}
                onClick={handleTeamClick}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Teams;
