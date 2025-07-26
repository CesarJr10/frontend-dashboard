import type { Team } from "../../shared/types/team";
import type { Match } from "../../shared/types/match";
import type { Player } from "../../shared/types/player";
import type { TeamStats } from "../../shared/types/teamStats";
import type { UpcomingMatch } from "../../shared/types/upcomingMatches";

export const getMockTeam = async (): Promise<Team> => {
  try {
    const response = await fetch('/mock/team.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching team data:', error);
    throw error;
  }
};

export const getMockMatches = async (): Promise<Match[]> => {
  try {
    const response = await fetch('/mock/matches.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.matches;
  } catch (error) {
    console.error('Error fetching matches data:', error);
    throw error;
  }
};

export const getMockPlayers = async (): Promise<Player[]> => {
  try {
    const response = await fetch('/mock/players.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.players;
  } catch (error) {
    console.error('Error fetching players data:', error);
    throw error;
  }
};

export const getMockTeamStats = async (): Promise<TeamStats[]> => {
  try {
    const response = await fetch('/mock/statics.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.statics; 
  } catch (error) {
    console.error('Error fetching statics data:', error);
    throw error;
  }
};


export const getMockUpcomingMatches = async (): Promise<UpcomingMatch> => {
  try {
    const response = await fetch('/mock/upcomingMatches.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching upcoming matches data:', error);
    throw error;
  }
};

