import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from '../../../shared/constants';

interface Props {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  progress?: number;
  color: string;
}

export const StatCard: React.FC<Props> = ({ icon, label, value, progress, color }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 rounded-full" style={{ backgroundColor: `${color}20` }}>
        {icon}
      </div>
      <div className="text-right">
        <p className="text-gray-600 text-sm">{label}</p>
        <p className="text-2xl font-bold" style={{ color }}>{value}</p>
      </div>
    </div>
    {progress !== undefined && (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-1000"
          style={{ width: `${Math.min(progress, 100)}%`, backgroundColor: color }}
        />
      </div>
    )}
  </motion.div>
);