import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import StatsCards from '../components/StatCards';
import RecentForm from '../components/RecentForm';
import { NextMatch } from '../components/NextMatch';
import LeagueSummary from '../components/LeagueSummary';
import { containerVariants } from '../../../shared/constants';
import { useMockTeamData } from '../hooks/useMockTeamData'; 

const HomePage: React.FC = () => {
  const { teamStats, isLoading, error } = useMockTeamData();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!teamStats) return <div>No se encontraron datos de la temporada.</div>;

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroSection />
      <StatsCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentForm teamStats={teamStats} />
        <NextMatch />
      </div>
      <LeagueSummary />
    </motion.div>
  );
};

export default HomePage;