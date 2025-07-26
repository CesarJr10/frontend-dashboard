import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from '../../../shared/constants';

export const StatsHeader: React.FC = () => (
  <motion.div variants={cardVariants} className="bg-gradient-to-r from-blue-900 to-red-800 rounded-xl p-6 text-white">
    <h2 className="text-3xl font-bold mb-2">Estadísticas Avanzadas</h2>
    <p className="text-yellow-300">Análisis completo de la temporada 2024/25</p>
  </motion.div>
);