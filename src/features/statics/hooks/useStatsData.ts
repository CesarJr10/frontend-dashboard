import { useState, useEffect } from 'react';
import {
  getMockPlayers,
  getMockMatches,
  getMockTeamStats,
} from '../../../core/api/footballApi';
import type { Player } from '../../../shared/types/player';
import type { Match } from '../../../shared/types/match';
import type { TeamStats } from '../../../shared/types/teamStats'; 

export const useStatsData = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [matches,  setMatches ] = useState<Match[]>([]);
  const [teamStats,setTeamStats] = useState<TeamStats | null>(null);
  const [loading,setLoading]     = useState(true);

  useEffect(() => {
    Promise.all([getMockPlayers(), getMockMatches(), getMockTeamStats()])
      .then(([p, m, [ts]]) => {      
        setPlayers(p);
        setMatches(m);
        setTeamStats(ts);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { players, matches, teamStats, loading };
};