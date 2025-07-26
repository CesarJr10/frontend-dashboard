import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../../features/home/page/HomePage'));
const PlayersPage = lazy(() => import('../../features/players/page/PlayersPage'));
const MatchesPage = lazy(() => import('../../features/matches/page/MatchesPage'));
const StatsPage = lazy(() => import('../../features/statics/page/StatsPage'));

const AppRoutes = () => (
  <Suspense fallback={<div className="text-center py-10 text-white">Cargando...</div>}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/players" element={<PlayersPage />} />
      <Route path="/matches" element={<MatchesPage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
