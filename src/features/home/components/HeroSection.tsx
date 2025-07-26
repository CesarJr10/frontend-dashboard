import React from 'react';
import { motion } from 'framer-motion';
import { useMockTeamData } from '../hooks/useMockTeamData';

const HeroSection: React.FC = () => {
  const { teamStats, isLoading, error } = useMockTeamData();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!teamStats) return <div>No se encontraron estadísticas del equipo.</div>;

  return (
    <motion.div
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-red-800 rounded-2xl p-8 text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-400 rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute left-0 bottom-0 w-48 h-48 bg-yellow-400 rounded-full transform -translate-x-24 translate-y-24"></div>
      </div>
      <div className="relative">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">FC Barcelona</h2>
        <p className="text-xl md:text-2xl text-yellow-300 mb-6">Temporada 2024/25</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">
              {teamStats.position !== undefined ? `${teamStats.position}°` : 'N/A'}
            </div>
            <div className="text-sm">Posición Liga</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">
              {teamStats.points !== undefined ? teamStats.points : 'N/A'}
            </div>
            <div className="text-sm">Puntos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">
              {teamStats.wins !== undefined && teamStats.matchesPlayed !== undefined
                ? `${teamStats.wins}/${teamStats.matchesPlayed}`
                : 'N/A'}
            </div>
            <div className="text-sm">Victorias</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;