import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useUpcomingMatch } from '../hooks/useUpcomingMatch';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export const NextMatch: React.FC = () => {
  const { match, isLoading, error } = useUpcomingMatch();

  if (isLoading) return <div>Cargando...</div>;
  if (error || !match) return <div>No se pudo cargar el próximo partido: {error?.message}</div>;

  return (
    <motion.div
      className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-white shadow-lg"
      initial="hidden"
      animate="visible"
      variants={itemVariants}
    >
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Calendar className="mr-2" size={24} />
        Próximo Partido
      </h3>
      <div className="space-y-2">
        <div className="text-2xl font-bold">{match.homeTeam.name} vs {match.awayTeam.name}</div>
        <div className="text-lg opacity-90">{match.date}</div>
        <div className="text-sm opacity-80 capitalize">{match.venue} - {match.competition}</div>
      </div>
    </motion.div>
  );
};

export default NextMatch;