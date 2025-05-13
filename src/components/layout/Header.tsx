import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Terminal, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Screenshots', path: '/screenshots' },
    { name: 'Installation', path: '/installation' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-terminal-base/90 border-b border-terminal-lighter">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-primary-500" />
            <span className="text-xl font-semibold tracking-tight">
              Emma<span className="text-primary-500">_</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium py-1 transition-colors relative ${
                    isActive
                      ? 'text-primary-500'
                      : 'text-terminal-text hover:text-primary-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                        layoutId="underline"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-full hover:bg-terminal-lighter transition-colors"
              aria-label="Toggle dark mode"
            >
              <Moon className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-terminal-lighter transition-colors"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 bg-terminal-base border-b border-terminal-lighter"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `py-3 px-4 rounded-md transition-colors ${
                    isActive
                      ? 'bg-terminal-lighter text-primary-500'
                      : 'text-terminal-text hover:bg-terminal-lighter'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;