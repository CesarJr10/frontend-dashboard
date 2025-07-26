import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { cardVariants } from '../../../shared/constants';
import type { ChartPosition } from '../../../shared/types/chartStats';

interface Props { data: ChartPosition[] }

export const PositionPie: React.FC<Props> = ({ data }) => (
  <motion.div variants={cardVariants} className="bg-white rounded-xl p-6 shadow-lg">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Distribución por Posiciones</h3>
    <div className="h-80">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={70}
            label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}

            dataKey="value"
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);