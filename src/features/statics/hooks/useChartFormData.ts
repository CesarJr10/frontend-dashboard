import { useMemo } from 'react';
import { useStatsData } from './useStatsData';
import type { ChartForm } from '../../../shared/types/chatForm'; 

export const useChartFormData = () => {
  const { matches, loading } = useStatsData();

  const formData: ChartForm[] = useMemo(() => {
    return matches
      .filter((m) => m.status === 'FINISHED')
      .map((m, index) => {
        const isHome = m.homeTeam.name === 'FC Barcelona';
        const goalsFor = isHome ? m.homeGoals : m.awayGoals;
        const goalsAgainst = isHome ? m.awayGoals : m.homeGoals;

        let result = 0;
        if (goalsFor > goalsAgainst) result = 3;
        else if (goalsFor === goalsAgainst) result = 1;

        return {
          match: `J${index + 1}`,
          result,
          goalsFor,
          goalsAgainst,
        };
      });
  }, [matches]);

  return { formData, isLoading: loading };
};
