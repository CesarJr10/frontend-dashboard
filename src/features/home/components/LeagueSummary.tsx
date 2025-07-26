import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useMockTeamData } from '../hooks/useMockTeamData';

const LeagueSummary: React.FC = () => {
  const { teamStats, isLoading, error } = useMockTeamData();

  const itemVariants = {
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

  if (isLoading) return <p>Cargando estadísticas de liga...</p>;
  if (error || !teamStats) return <p>No se pudieron cargar las estadísticas.</p>;

  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
      variants={itemVariants as Variants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <Trophy className="mr-2 text-yellow-600" size={24} />
        Datos de Liga
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <StatBox label="Partidos" value={teamStats.matchesPlayed} />
        <StatBox label="Victorias" value={teamStats.wins} color="green" />
        <StatBox label="Empates" value={teamStats.draws} color="yellow" />
        <StatBox label="Derrotas" value={teamStats.losses} color="red" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <StatBox label="Goles a favor" value={teamStats.goalsFor} />
        <StatBox label="Goles en contra" value={teamStats.goalsAgainst} />
        <StatBox label="Goles por partido" value={teamStats.goalsPerGame} />
        <StatBox label="Faltas cometidas" value={teamStats.foulsCommitted} />
        <StatBox label="Faltas recibidas" value={teamStats.foulsReceived} />
        <StatBox label="Disparos por partido" value={teamStats.shotsPerGame} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <StatBox label="Tarjetas amarillas" value={teamStats.yellowCards} />
        <StatBox label="Tarjetas rojas" value={teamStats.redCards} />
        <StatBox label="Mas victorias consecutivas" value={teamStats.longestWinStreak} />
      </div>
    </motion.div>
  );
};

const StatBox = ({
  label,
  value,
  color
}: {
  label: string;
  value: string | number;
  color?: "green" | "yellow" | "red";
}) => {
  const bgMap: Record<string, string> = {
  green: "bg-green-50 text-green-600",
  yellow: "bg-yellow-50 text-yellow-600",
  red: "bg-red-50 text-red-600"
};

const bgColor = bgMap[color ?? ""] || "bg-gray-50 text-gray-800";


  return (
    <div className={`text-center p-4 rounded-lg ${bgColor}`}>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default LeagueSummary;
