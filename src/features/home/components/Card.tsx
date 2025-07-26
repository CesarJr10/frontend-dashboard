import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconBackground: string; 
}

export const Card: React.FC<CardProps> = ({ title, value, icon, iconBackground }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className={`p-3 rounded-full bg-${iconBackground}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
};


