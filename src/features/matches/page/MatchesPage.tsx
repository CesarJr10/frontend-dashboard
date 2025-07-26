import React from 'react';
import { motion } from 'framer-motion';
import { useMatchesFilter } from '../hooks/useMatchesFilter';
import MatchCard from '../components/MatchesCard';
import { containerVariants, cardVariants } from '../../../shared/constants';

const MatchesPage: React.FC = () => {
  const {
    filteredMatches,
    isLoading,
    error
  } = useMatchesFilter();

  if (isLoading) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.div
          variants={cardVariants}
          className="text-center py-12 bg-white rounded-xl shadow-lg"
        >
          <p className="text-gray-500 text-lg">Cargando partidos...</p>
        </motion.div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.div
          variants={cardVariants}
          className="text-center py-12 bg-white rounded-xl shadow-lg"
        >
          <p className="text-red-500 text-lg">Error al cargar los partidos: {error.message}</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      
      <motion.div
        variants={cardVariants}
        className="bg-gradient-to-r from-blue-900 to-red-800 rounded-xl p-6 text-white"
      >
        <h2 className="text-3xl font-bold mb-2">Últimos Partidos</h2>
        <p className="text-yellow-300">Temporada 2024/25 - La Liga</p>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        className="space-y-4"
      >
        {filteredMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </motion.div>


    </motion.div>
  );
};

export default MatchesPage;