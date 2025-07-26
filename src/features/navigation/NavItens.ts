import { Home, Users, Calendar, BarChart3 } from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Inicio', icon: Home, path: '/' },
  { id: 'players', label: 'Jugadores', icon: Users, path: '/players' },
  { id: 'matches', label: 'Partidos', icon: Calendar, path: '/matches' },
  { id: 'stats', label: 'Estadísticas', icon: BarChart3, path: '/stats' }
];
