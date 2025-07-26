import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { motion } from 'framer-motion';
import { cardVariants } from '../../../shared/constants';
import type { ChartGoal } from '../../../shared/types/chartStats';

interface Props { data: ChartGoal[] }

const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#8b5cf6', '#ec4899'];

export const GoalsChart: React.FC<Props> = ({ data }) => (
  <motion.div
    variants={cardVariants}
    className="bg-white rounded-xl p-6 shadow-lg overflow-hidden"
  >
    <h3 className="text-xl font-bold text-gray-800 mb-4">Máximos Goleadores</h3>

    <div className="h-80">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
          <Tooltip
            cursor={{ fill: 'rgba(0,0,0,.05)' }}
            contentStyle={{ backgroundColor: '#fff', borderRadius: 8, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,.1)' }}
            labelStyle={{ fontWeight: 'bold' }}
          />

          <Bar
            dataKey="goals"
            radius={[4, 4, 0, 0]}
            // Efecto hover: escala + sombra global del svg
            className="transition-all duration-300 ease-out"
            style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,.05))' }}
          >
            <LabelList
              dataKey="goals"
              position="top"
              style={{ fill: '#374151', fontSize: 14, fontWeight: 600 }}
            />
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);