import React from 'react';
import { Typography } from '@mui/material';
import Team from '../components/Team';

const teams = [
  { name: 'Atlanta Hawks', logo: '/teams/atlanta-hawks.svg' },
  { name: 'Boston Celtics', logo: '/teams/boston-celtics.svg' },
  { name: 'Brooklyn Nets', logo: '/teams/brooklyn-nets.svg' },
  { name: 'Charlotte Hornets', logo: '/teams/charlotte-hornets.svg' },
  { name: 'Chicago Bulls', logo: '/teams/chicago-bulls.svg' },
  { name: 'Cleveland Cavaliers', logo: '/teams/cleveland-cavaliers.svg' },
  { name: 'Dallas Mavericks', logo: '/teams/dallas-mavericks.svg' },
  { name: 'Denver Nuggets', logo: '/teams/denver-nuggets.svg' },
  { name: 'Detroit Pistons', logo: '/teams/detroit-pistons.svg' },
  { name: 'Golden State Warriors', logo: '/teams/golden-state-warriors.svg' },
  { name: 'Houston Rockets', logo: '/teams/houston-rockets.svg' },
  { name: 'Indiana Pacers', logo: '/teams/indiana-pacers.svg' },
  { name: 'Los Angeles Clippers', logo: '/teams/LA-clippers.svg' },
  { name: 'Los Angeles Lakers', logo: '/teams/los-angeles-lakers.svg' },
  { name: 'Memphis Grizzlies', logo: '/teams/memphis-grizzlies.svg' },
  { name: 'Miami Heat', logo: '/teams/miami-heat.svg' },
  { name: 'Milwaukee Bucks', logo: '/teams/milwaukee-bucks.svg' },
  { name: 'Minnesota Timberwolves', logo: '/teams/minnesota-timberwolves.svg' },
  { name: 'New Orleans Pelicans', logo: '/teams/new-orleans-pelicans.svg' },
  { name: 'New York Knicks', logo: '/teams/new-york-knicks.svg' },
  { name: 'Oklahoma City Thunder', logo: '/teams/oklahoma-city-thunder.svg' },
  { name: 'Orlando Magic', logo: '/teams/orlando-magic.svg' },
  { name: 'Philadelphia 76ers', logo: '/teams/philadelphia-76ers.svg' },
  { name: 'Phoenix Suns', logo: '/teams/phoenix-suns.svg' },
  { name: 'Portland Trail Blazers', logo: '/teams/portland-trail-blazers.svg' },
  { name: 'Sacramento Kings', logo: '/teams/sacramento-kings.svg' },
  { name: 'San Antonio Spurs', logo: '/teams/san-antonio-spurs.svg' },
  { name: 'Toronto Raptors', logo: '/teams/toronto-raptors.svg' },
  { name: 'Utah Jazz', logo: '/teams/utah-jazz.svg' },
  { name: 'Washington Wizards', logo: '/teams/washington-wizards.svg' },
];

function Teams() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Typography variant='h4'>Teams Page</Typography>
      <Typography variant='body1'>
        List of NBA teams will be displayed here.
      </Typography>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 32,
        }}
      >
        {teams.map((team) => (
          <Team key={team.name} name={team.name} logo={team.logo} />
        ))}
      </div>
    </div>
  );
}

export default Teams;
