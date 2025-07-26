import React from 'react';
import { motion, type Variants } from 'framer-motion';
import type { TeamStats } from '../../../shared/types/teamStats'; 
import { TrendingUp } from 'lucide-react';

interface RecentFormProps {
  teamStats: TeamStats;
}

const RecentForm: React.FC<RecentFormProps> = ({ teamStats }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    }
  };

  const formColors: { [key: string]: string } = {
    'W': 'bg-green-500',
    'D': 'bg-yellow-500',
    'L': 'bg-red-500'
  };

  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
      variants={itemVariants as Variants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <TrendingUp className="mr-2 text-blue-600" size={24} />
        Resultados recientes
      </h3>
      <div className="flex space-x-2 mb-4">
        {teamStats.recentForm.map((result, index) => (
          <div
            key={index}
            className={`w-10 h-10 rounded-full ${formColors[result]} flex items-center justify-center text-white font-bold`}
          >
            {result}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Máximo Goleador:</span>
          <span className="font-semibold">
            {teamStats.topScorer.name} ({teamStats.topScorer.goals})
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Máximo Asistente:</span>
          <span className="font-semibold">
            {teamStats.topAssister.name} ({teamStats.topAssister.assists})
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentForm;