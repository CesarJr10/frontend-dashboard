import type { Player } from "../../shared/types/player"; 
import type { Match } from "../../shared/types/match";

export const buildGoalsChart = (players: Player[]) =>
  players
    .filter(p => p.goals > 0)
    .sort((a, b) => b.goals - a.goals)
    .slice(0, 8)
    .map(p => ({
      name: p.name.split(' ').pop() || p.name,
      goals: p.goals,
      assists: p.assists,
    }));

export const buildPositionChart = (players: Player[]) => {
  const counts = players.reduce(
    (acc, p) => ({ ...acc, [p.position]: (acc[p.position] || 0) + 1 }),
    {} as Record<string, number>
  );
  const colors = ['#ef4444', '#22c55e', '#3b82f6', '#a855f7', '#eab308'];
  return Object.entries(counts).map(([name, value], i) => ({
    name,
    value,
    color: colors[i % colors.length],
  }));
};

export const buildFormChart = (matches: Match[]) =>
  matches
    .slice(-10)            
    .map((m, i) => ({
      match: `J${i + 1}`,
      result: m.result === 'W' ? 3 : m.result === 'D' ? 1 : 0,
      goalsFor: m.homeTeam.name === 'FC Barcelona' ? m.homeGoals : m.awayGoals,
      goalsAgainst: m.homeTeam.name === 'FC Barcelona' ? m.awayGoals : m.homeGoals,
    }));