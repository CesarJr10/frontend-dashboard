import type { Team } from "./team";

export interface Match {
  id: number;
  date: string;
  time: string;
  competition: string;
  venue: string;
  homeTeam: Team;
  awayTeam: Team;
  homeGoals: number;
  awayGoals: number;
  scorers?: string[];
  attendance?: number;
  result: string; 
  status: string; 
}