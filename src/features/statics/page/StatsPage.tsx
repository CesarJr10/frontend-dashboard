import React from 'react';
import { motion } from 'framer-motion';
import { useStatsData } from '../hooks/useStatsData';
import { StatsHeader } from '../components/StatsHeard'; 
import { StatsKeyCards } from '../components/StatsKeyCard'; 
import { StatsCharts } from '../components/StatsChart';
import { containerVariants } from '../../../shared/constants';


const StatsPage: React.FC = () => {
  const { players, matches, teamStats, loading } = useStatsData();

  if (loading) return <p className="text-center py-12">Cargando estadísticas…</p>;
  if (!teamStats) return <p className="text-center py-12">Sin datos</p>;

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <StatsHeader />
      <StatsKeyCards teamStats={teamStats} />
      <StatsCharts players={players} matches={matches} />
    </motion.div>
  );
};

export default StatsPage;