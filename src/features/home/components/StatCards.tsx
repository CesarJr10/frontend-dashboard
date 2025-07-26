import React from 'react';
import {Card} from './Card';
import { Target, TrendingUp, Trophy } from 'lucide-react';
import { useMockTeamData } from '../hooks/useMockTeamData';

const StatsCards: React.FC = () => {
  const { teamStats, isLoading, error } = useMockTeamData();

  if (isLoading) return <p>Cargando estadísticas...</p>;
  if (error) return <p>Error al cargar datos: {error.message}</p>;
  if (!teamStats) return <p>No se encontraron estadísticas.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        title="Goles a Favor"
        value={teamStats.goalsFor}
        icon={<Target className="text-green-600" size={24} />}
        iconBackground="bg-green-100"
      />
      <Card
        title="Goles en Contra"
        value={teamStats.goalsAgainst}
        icon={<Target className="text-red-600" size={24} />}
        iconBackground="bg-red-100"
      />
      <Card
        title="porcentaje de Posesión"
        value={`${teamStats.averagePossession}%`}
        icon={<TrendingUp className="text-blue-600" size={24} />}
        iconBackground="bg-blue-100"
      />
      <Card
        title="Portería a Cero"
        value={teamStats.cleanSheets}
        icon={<Trophy className="text-yellow-600" size={24} />}
        iconBackground="bg-yellow-100"
      />
    </div>
  );
};

export default StatsCards;
