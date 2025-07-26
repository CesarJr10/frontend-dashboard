import { useState, useEffect } from 'react';
import { getMockTeamStats } from '../../../core/api/footballApi';
import type { TeamStats } from '../../../shared/types/teamStats';

export const useMockTeamData = () => {
  const [teamStats, setTeamStats] = useState<TeamStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTeamStats = async () => {
      try {
        const data = await getMockTeamStats();
        if (data && data.length > 0) {
          setTeamStats(data[0]);
        } else {
          setTeamStats(null);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamStats();
  }, []);

  return { teamStats, isLoading, error };
};