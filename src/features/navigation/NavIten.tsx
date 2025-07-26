import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  label: string;
  icon: React.ElementType;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon: Icon, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={path}
        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-all duration-300 ${
          isActive ? 'bg-yellow-400 text-blue-900 shadow-lg' : 'text-white hover:bg-white/10 hover:text-yellow-300'
        }`}
      >
        <Icon size={18} />
        <span>{label}</span>
      </Link>
    </motion.div>
  );
};

export default NavItem;
