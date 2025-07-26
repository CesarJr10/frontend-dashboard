import React from 'react';
import { GoalsChart } from './GoalsChart';
import { PositionPie } from './PositionPie';
import { FormLineChart } from './FormLineChart';
import { buildGoalsChart, buildPositionChart, buildFormChart } from '../utils';
import type { Player } from '../../../shared/types/player';
import type { Match } from '../../../shared/types/match';

interface Props {
  players: Player[];
  matches: Match[];
}

export const StatsCharts: React.FC<Props> = ({ players, matches }) => {
  const goalsData    = buildGoalsChart(players);
  const positionData = buildPositionChart(players);
  const formData     = buildFormChart(matches);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <GoalsChart data={goalsData} />
      <PositionPie data={positionData} />
      <FormLineChart data={formData} />
    </div>
  );
};