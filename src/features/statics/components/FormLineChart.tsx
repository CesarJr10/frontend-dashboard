import React from 'react';
import { useChartFormData } from '../hooks/useChartFormData';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';
import { cardVariants } from '../../../shared/constants';

const resultMap = {
  0: { color: '#ef4444', emoji: '❌' },
  1: { color: '#f97316', emoji: '⚖️' },
  3: { color: '#22c55e', emoji: '✅' },
};

export const FormLineChart: React.FC = () => {
  const { formData, isLoading } = useChartFormData();

  const lastResult = formData[formData.length - 1]?.result ?? 3;
  const resultColor = resultMap[lastResult]?.color ?? '#22c55e';

  if (isLoading) return <p>Cargando gráfico de forma...</p>;
  if (formData.length === 0) return <p>No hay datos disponibles.</p>;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-4">Tendencia de Puntos</h3>

      <div className="h-80">
        <ResponsiveContainer>
          <LineChart
            data={formData}
            margin={{ top: 30, right: 20, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="match" tick={{ fontSize: 12 }} />
            <YAxis
              allowDecimals={false}
              domain={[0, 3]}
              ticks={[0, 1, 3]}
              tick={{ fontSize: 12 }}
              label={{ value: 'Puntos', angle: -90, position: 'insideLeft' }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                borderRadius: 8,
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,.1)',
              }}
              formatter={(value, name, props) => {
                const { goalsFor, goalsAgainst } = props.payload;
                return [
                  `${resultMap[value as 0 | 1 | 3]?.emoji} ${value} pts (${goalsFor}-${goalsAgainst})`,
                  'Resultado',
                ];
              }}
            />

            <Line
              type="monotone"
              dataKey="result"
              stroke={resultColor}
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              name="Puntos"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
