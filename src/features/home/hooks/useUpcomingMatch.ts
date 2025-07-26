import { useState, useEffect } from 'react';
import { getMockUpcomingMatches } from '../../../core/api/footballApi';
import type { UpcomingMatch } from '../../../shared/types/upcomingMatches';

export const useUpcomingMatch = () => {
  const [match, setMatch] = useState<UpcomingMatch | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const data = await getMockUpcomingMatches();
        setMatch(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatch();
  }, []);

  return { match, isLoading, error };
};