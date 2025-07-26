export interface TeamStats {
  position: number;
  points: number;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  cleanSheets: number;
  recentForm: string[];
  topScorer: {
    name: string;
    goals: number;
  };
  topAssister: {
    name: string;
    assists: number;
  };
  possession: number;
  passAccuracy: number;
  shotsPerGame: number;
  yellowCards: number;
  redCards: number;
  foulsCommitted: number;
  foulsReceived: number;
  longestWinStreak: number;
  goalsPerGame: number;
  averagePossession: number;
}
