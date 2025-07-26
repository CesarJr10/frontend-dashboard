import React from 'react';
import { TrendingUp, Target, Shield, Users } from 'lucide-react';
import { StatCard } from './StatCard';
import type { TeamStats } from '../../../shared/types/teamStats';

interface Props { teamStats: TeamStats }

export const StatsKeyCards: React.FC<Props> = ({ teamStats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <StatCard icon={<TrendingUp className="text-blue-600" size={24} />} label="Precisión de Pase" value={`${teamStats.passAccuracy}%`} progress={teamStats.passAccuracy} color="#3b82f6" />
    <StatCard icon={<Target className="text-green-600" size={24} />} label="Disparos/partido" value={teamStats.shotsPerGame} progress={(teamStats.shotsPerGame / 25) * 100} color="#22c55e" />
    <StatCard icon={<Shield className="text-yellow-600" size={24} />} label="Posesión media" value={`${teamStats.possession}%`} progress={teamStats.possession} color="#eab308" />
    <StatCard icon={<Users className="text-purple-600" size={24} />} label="Dif. goles" value={`+${teamStats.goalDifference}`} progress={Math.min((teamStats.goalDifference / 40) * 100, 100)} color="#a855f7" />
  </div>
);