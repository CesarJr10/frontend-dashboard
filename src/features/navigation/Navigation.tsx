import React, { useState } from 'react';
import NavItem from './NavIten';
import MobileMenu from './MobileMenu';
import { navItems } from './NavItens';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-900 to-red-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-xl font-bold">FC Barcelona</h1>
              <p className="text-yellow-300 text-xs">Més que un club</p>
            </div>
          </div>

          
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavItem key={item.id} {...item} />
            ))}
          </div>

          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navigation;
