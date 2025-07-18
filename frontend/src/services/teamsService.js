const API_BASE_URL = 'http://localhost:8080/api/v1';

const teamsService = {
  async getAllTeams() {
    try {
      // Fetch all players to extract unique team names
      const response = await fetch(`${API_BASE_URL}/players`);

      if (!response.ok) {
        throw new Error('Failed to fetch teams data');
      }

      const players = await response.json();

      // Extract unique team names from players
      const uniqueTeams = [...new Set(players.map((player) => player.team))];

      // Transform into the expected format with team name and logo
      const teams = uniqueTeams.map((teamName) => ({
        name: teamName,
        logo: `/teams/${teamName.toLowerCase().replace(/\s+/g, '-')}.svg`,
      }));

      return teams;
    } catch (error) {
      console.error('Error fetching teams:', error);
      throw error;
    }
  },
};

export default teamsService;
