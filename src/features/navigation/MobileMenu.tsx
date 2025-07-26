import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavItem from './NavIten';
import { navItems } from './NavItens';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-blue-900 px-4 py-2 space-y-2 absolute top-16 left-0 w-full z-40"
        >
          {navItems.map((item) => (
            <NavItem key={item.id} {...item} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
